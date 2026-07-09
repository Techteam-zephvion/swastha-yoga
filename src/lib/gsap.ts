"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

/**
 * Registers GSAP plugins exactly once, client-side only. Every animation
 * module should import `gsap` from here (not directly from "gsap") so
 * plugin registration is guaranteed before any timeline is built.
 */
export function ensureGsapRegistered(): void {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export { gsap, ScrollTrigger };
