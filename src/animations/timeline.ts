"use client";

import { gsap, ensureGsapRegistered } from "@/lib/gsap";
import type { LayerRefs } from "@/lib/layers";

/**
 * A timeline builder owns one slice of the scene's motion (e.g. the logo
 * rising, or ambient cloud drift). It receives the DOM scope, the
 * current reduced-motion preference, and the layer ref map collected by
 * the scene component — never a live DOM query — and is expected to
 * create its GSAP tweens/ScrollTriggers synchronously so they're captured
 * by the enclosing gsap.context and reverted automatically on cleanup.
 *
 * Builders must not run animation logic themselves at import time — they
 * only register work when invoked by `runSceneTimelines`.
 */
export type TimelineBuilder = (params: {
  scope: HTMLElement;
  reducedMotion: boolean;
  refs: LayerRefs;
}) => void;

/**
 * Composes every registered timeline builder inside a single GSAP context
 * scoped to the hero root. Centralizing context creation here (instead of
 * per-component) guarantees one consistent teardown path — call the
 * returned function on unmount / route change to revert all tweens and
 * ScrollTriggers created by the builders.
 */
export function runSceneTimelines(
  scope: HTMLElement,
  builders: TimelineBuilder[],
  options: { reducedMotion: boolean; refs: LayerRefs },
): () => void {
  ensureGsapRegistered();

  const ctx = gsap.context(() => {
    for (const build of builders) {
      build({ scope, reducedMotion: options.reducedMotion, refs: options.refs });
    }
  }, scope);

  return () => ctx.revert();
}
