"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export function ScrollReveal({
  children,
  className = "",
  y = 28,
  delay = 0,
  stagger,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  stagger?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !ref.current) return;
    const el = ref.current;

    const targets = stagger ? gsap.utils.toArray(":scope > *", el) : el;
    gsap.set(targets, { opacity: 0, y });

    const play = () => {
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay,
        stagger,
        ease: "power3.out",
      });
    };
    const reset = () => {
      gsap.set(targets, { opacity: 0, y });
    };

    // IntersectionObserver instead of ScrollTrigger's viewport-percentage
    // math — that math becomes unreachable for a section sitting close to
    // the end of the page (not enough scroll room below it for its top to
    // ever reach a fixed "85% down the viewport" point), which is exactly
    // what happened with PageTeasers sitting right before the footer.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          play();
          if (once) observer.disconnect();
        } else if (!once) {
          reset();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, [y, delay, stagger, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
