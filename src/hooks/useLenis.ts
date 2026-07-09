"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, ensureGsapRegistered } from "@/lib/gsap";

/**
 * Sets up Lenis smooth scrolling and syncs it to GSAP's ticker so
 * ScrollTrigger-based animations (scrollTimeline) stay in lockstep with
 * the smoothed scroll position instead of the raw browser scroll event.
 *
 * Skips initialization entirely when `reducedMotion` is true — motion-
 * sensitive visitors get native, instant scrolling.
 */
export function useLenis(reducedMotion: boolean): void {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (reducedMotion || typeof window === "undefined") return;

    ensureGsapRegistered();

    const lenis = new Lenis({
      autoRaf: false,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [reducedMotion]);
}
