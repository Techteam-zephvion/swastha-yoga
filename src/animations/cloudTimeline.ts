import { gsap } from "@/lib/gsap";
import type { TimelineBuilder } from "./timeline";

/** Depth → [drift distance in vw, loop duration in seconds]. Farther
 *  layers move less and slower, nearer layers move more and faster —
 *  the classic parallax depth cue. */
const CLOUD_DRIFT: Record<"cloudFar" | "cloudMid" | "cloudNear", [number, number]> = {
  cloudFar: [4, 60],
  cloudMid: [7, 42],
  cloudNear: [11, 28],
};

/** Fog drifts more slowly and more subtly than any cloud layer — it
 *  reads as ground-hugging haze, not sky motion. */
const FOG_DRIFT_VW = 6;
const FOG_DRIFT_DURATION = 34;

/** Mountain ranges barely move — just enough to read as depth, never
 *  enough to look like they're sliding. Each of the three ridges within
 *  a range drifts at its own slightly different speed so the range
 *  doesn't move as one rigid block. Far moves less than near. */
const MOUNTAIN_DRIFT: Record<"mountainsFar" | "mountainsNear", [number, number]> = {
  mountainsFar: [1.5, 100],
  mountainsNear: [2.5, 80],
};

/**
 * Slow, continuous ambient drift for the three cloud depth layers, the
 * fog band, and the two mountain ranges. Loops indefinitely and is
 * independent of the entrance sequence — it keeps running for as long
 * as the hero is mounted.
 */
export const cloudTimeline: TimelineBuilder = ({ refs, reducedMotion }) => {
  if (reducedMotion) return;

  (Object.keys(CLOUD_DRIFT) as Array<keyof typeof CLOUD_DRIFT>).forEach((layer) => {
    const el = refs[layer];
    if (!el) return;
    const [distance, duration] = CLOUD_DRIFT[layer];
    gsap.to(el, {
      xPercent: distance,
      duration,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  });

  if (refs.fog) {
    gsap.to(refs.fog, {
      xPercent: FOG_DRIFT_VW,
      duration: FOG_DRIFT_DURATION,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  }

  (Object.keys(MOUNTAIN_DRIFT) as Array<keyof typeof MOUNTAIN_DRIFT>).forEach((layer) => {
    const container = refs[layer];
    if (!container) return;
    const [distance, duration] = MOUNTAIN_DRIFT[layer];
    const ridges = Array.from(container.querySelectorAll<HTMLElement>("[data-ridge]"));
    ridges.forEach((ridge, i) => {
      gsap.to(ridge, {
        xPercent: distance * (1 + i * 0.3),
        duration: duration + i * 15,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    });
  });
};
