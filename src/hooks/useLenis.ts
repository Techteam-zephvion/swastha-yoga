"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, ensureGsapRegistered } from "@/lib/gsap";

/** Module-level handle to the active Lenis instance (there's only ever
 *  one, mounted once in `Providers`), so code outside the React tree that
 *  owns it — like `PageTransition`'s route-change scroll reset — can
 *  reach it without prop-drilling or a store subscription. Null when
 *  reduced motion is on and Lenis was never constructed. */
let activeLenis: Lenis | null = null;

/**
 * Resets scroll to the top of the page on route change. Goes through
 * Lenis (when it's running) rather than a bare `window.scrollTo` — Lenis
 * tracks its own animated/target scroll position independently of the
 * browser's, so calling `window.scrollTo` directly leaves Lenis's
 * internal state stale and the next wheel/touch input snaps the page
 * back to the old position.
 */
export function scrollToTop(): void {
  if (activeLenis) {
    activeLenis.scrollTo(0, { immediate: true });
  } else if (typeof window !== "undefined") {
    window.scrollTo(0, 0);
  }
}

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
    activeLenis = lenis;

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
      if (activeLenis === lenis) activeLenis = null;
    };
  }, [reducedMotion]);
}
