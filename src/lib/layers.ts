import type { CSSProperties } from "react";

/**
 * Canonical list of every visual layer in the hero scene, back to front.
 * The order here is documentation of paint order; actual stacking is
 * controlled by the z-index token each layer maps to in tokens.css.
 */
export const LAYER_NAMES = [
  "sky",
  "cloudFar",
  "cloudMid",
  "cloudNear",
  "sunlight",
  "mountainsFar",
  "logo",
  "subtitle",
  "mountainsNear",
  "fog",
  "particles",
  "cta",
  "birds",
  "scrollIndicator",
  "nav",
] as const;

export type LayerName = (typeof LAYER_NAMES)[number];

/**
 * Map of layer name -> the DOM node a hero layer component forwarded its
 * ref to. Animation modules receive this instead of querying the DOM
 * themselves, so components stay pure ref-forwarders and every element an
 * animation touches is declared once, centrally, by name.
 */
export type LayerRefs = Partial<Record<LayerName, HTMLElement | null>>;

/**
 * Name of the animation-manager module (see src/animations) responsible
 * for driving a layer's motion. `null` means the layer is static or only
 * reacts to scene state (e.g. reduced-motion) rather than a GSAP timeline.
 */
export type AnimationHook = "heroTimeline" | "scrollTimeline" | "birdTimeline" | "cloudTimeline" | null;

export interface LayerDefinition {
  /** CSS variable (defined in tokens.css) controlling stacking order. */
  zIndexVar: `--z-${string}`;
  /** Whether the layer should intercept pointer events. Almost every
   *  atmospheric layer is decorative and must stay click-through so the
   *  page beneath (and any real UI) remains interactive. */
  pointerEvents: CSSProperties["pointerEvents"];
  /** Which animation-manager module drives this layer, if any. */
  animationHook: AnimationHook;
}

export const LAYER_REGISTRY: Record<LayerName, LayerDefinition> = {
  sky: {
    zIndexVar: "--z-sky",
    pointerEvents: "none",
    animationHook: null,
  },
  cloudFar: {
    zIndexVar: "--z-cloud-far",
    pointerEvents: "none",
    animationHook: "cloudTimeline",
  },
  cloudMid: {
    zIndexVar: "--z-cloud-mid",
    pointerEvents: "none",
    animationHook: "cloudTimeline",
  },
  cloudNear: {
    zIndexVar: "--z-cloud-near",
    pointerEvents: "none",
    animationHook: "cloudTimeline",
  },
  sunlight: {
    zIndexVar: "--z-sunlight",
    pointerEvents: "none",
    animationHook: "heroTimeline",
  },
  mountainsFar: {
    zIndexVar: "--z-mountains-far",
    pointerEvents: "none",
    animationHook: "cloudTimeline",
  },
  logo: {
    zIndexVar: "--z-logo",
    pointerEvents: "none",
    animationHook: "heroTimeline",
  },
  subtitle: {
    zIndexVar: "--z-subtitle",
    pointerEvents: "none",
    animationHook: "heroTimeline",
  },
  mountainsNear: {
    zIndexVar: "--z-mountains-near",
    pointerEvents: "none",
    animationHook: "cloudTimeline",
  },
  fog: {
    zIndexVar: "--z-fog",
    pointerEvents: "none",
    animationHook: "cloudTimeline",
  },
  particles: {
    zIndexVar: "--z-particles",
    pointerEvents: "none",
    animationHook: "heroTimeline",
  },
  cta: {
    zIndexVar: "--z-cta",
    pointerEvents: "auto",
    animationHook: "heroTimeline",
  },
  birds: {
    zIndexVar: "--z-birds",
    pointerEvents: "none",
    animationHook: "birdTimeline",
  },
  scrollIndicator: {
    zIndexVar: "--z-scroll-indicator",
    pointerEvents: "none",
    animationHook: "heroTimeline",
  },
  nav: {
    zIndexVar: "--z-nav",
    pointerEvents: "auto",
    // heroTimeline drives its one-time entrance slide-down; scrollTimeline
    // additionally toggles its scrolled/transparent state afterward.
    animationHook: "heroTimeline",
  },
};

/**
 * Returns the stacking-order style for a given layer, ready to spread onto
 * the layer's root element. Deliberately omits `position`/`inset` —
 * full-bleed layers declare `position: absolute; inset: 0` in their own
 * CSS module, while layers with custom geometry (the logo, the nav bar,
 * the birds container) position themselves freely. This keeps
 * z-index/pointer-events declared in exactly one place without an inline
 * `inset: 0` clobbering a component's own positioning.
 */
export function getLayerStyle(name: LayerName): CSSProperties {
  const def = LAYER_REGISTRY[name];
  return {
    zIndex: `var(${def.zIndexVar})` as unknown as number,
    pointerEvents: def.pointerEvents,
  };
}
