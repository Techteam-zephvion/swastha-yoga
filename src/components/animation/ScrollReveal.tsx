"use client";

import { useLayoutEffect, useRef, ReactNode } from "react";
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

  useLayoutEffect(() => {
    if (prefersReducedMotion() || !ref.current) return;

    const targets = stagger
      ? gsap.utils.toArray(":scope > *", ref.current)
      : ref.current;

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        opacity: 0,
        y,
        duration: 0.8,
        delay,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: once ? "play none none none" : "play none none reverse",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [y, delay, stagger, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
