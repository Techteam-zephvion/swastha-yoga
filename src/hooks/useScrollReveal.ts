"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, ensureGsapRegistered } from "@/lib/gsap";
import { useSceneStore } from "@/lib/store";

export type RevealVariant = "fade-up" | "fade-in" | "scale-in";

export interface UseScrollRevealOptions {
  variant?: RevealVariant;
  /** Seconds to wait before the reveal starts once triggered. */
  delay?: number;
  /** How far into the viewport (from the bottom) the element must
   *  scroll before revealing. Passed straight to ScrollTrigger's
   *  `start`. */
  startOffset?: string;
}

const VARIANT_FROM: Record<RevealVariant, gsap.TweenVars> = {
  "fade-up": { y: 32, opacity: 0 },
  "fade-in": { opacity: 0 },
  "scale-in": { scale: 0.96, opacity: 0 },
};

/**
 * The single shared "reveal on scroll" primitive every page uses instead
 * of one-off ScrollTrigger calls scattered through page components.
 * Attach the returned ref to the element that should animate in; it
 * plays once, the first time the element crosses `startOffset` from the
 * bottom of the viewport, and does nothing at all under reduced motion
 * (the element is simply visible in its resting state from the start).
 */
export function useScrollReveal<T extends HTMLElement>(
  options: UseScrollRevealOptions = {},
): React.RefObject<T | null> {
  const { variant = "fade-up", delay = 0, startOffset = "top 85%" } = options;
  const ref = useRef<T | null>(null);
  const reducedMotion = useSceneStore((s) => s.reducedMotion);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    ensureGsapRegistered();

    if (reducedMotion) {
      gsap.set(el, { opacity: 1, y: 0, scale: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(el, VARIANT_FROM[variant], {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.1,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: startOffset,
          toggleActions: "play none none none",
          once: true,
        },
      });
    }, el);

    return () => {
      ctx.revert();
    };
  }, [variant, delay, startOffset, reducedMotion]);

  return ref;
}

export { ScrollTrigger };
