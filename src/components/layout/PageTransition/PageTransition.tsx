"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "@/lib/gsap";
import { useSceneStore } from "@/lib/store";
import { scrollToTop } from "@/hooks/useLenis";

/**
 * Wraps every route's content in the root layout. The App Router keeps
 * layouts mounted across navigations and only swaps the page segment,
 * so there's no unmount/remount to hook an exit animation into — this
 * plays a single, consistent fade + rise every time the pathname
 * changes, which reads as a page transition without needing the
 * experimental View Transitions API or any extra library. Skips the
 * very first render (the initial page load already has its own
 * entrance — the hero's on `/`, nothing extra needed elsewhere) and
 * does nothing under reduced motion.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isFirstRender = useRef(true);
  const reducedMotion = useSceneStore((s) => s.reducedMotion);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    scrollToTop();

    const el = containerRef.current;
    if (!el || reducedMotion) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
    );
  }, [pathname, reducedMotion]);

  return (
    <div ref={containerRef} id="main-content" tabIndex={-1}>
      {children}
    </div>
  );
}
