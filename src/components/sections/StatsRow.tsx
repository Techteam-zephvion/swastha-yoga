"use client";

import { useLayoutEffect, useRef } from "react";
import { stats } from "@/lib/content";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export function StatsRow() {
  const rowRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion() || !rowRef.current) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".stat-item", rowRef.current ?? undefined);

      gsap.from(items, {
        opacity: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: rowRef.current, start: "top 85%" },
      });

      items.forEach((item) => {
        const valueEl = item.querySelector<HTMLElement>(".stat-value");
        const raw = valueEl?.dataset.value;
        const match = raw?.match(/\d+/);
        if (!valueEl || !raw || !match) return;

        const target = parseInt(match[0], 10);
        const suffix = raw.slice(match.index! + match[0].length);
        const counter = { value: 0 };

        gsap.to(counter, {
          value: target,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: { trigger: rowRef.current, start: "top 85%" },
          onUpdate: () => {
            valueEl.textContent = `${Math.round(counter.value)}${suffix}`;
          },
        });
      });
    }, rowRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-hidden border-y border-ink-soft/60 bg-ink-light/30">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[40vh] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-gold/10 blur-3xl"
      />
      <div
        ref={rowRef}
        className="relative mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 py-12 text-center md:grid-cols-4"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="stat-item flex flex-col gap-1">
            <span
              className="stat-value font-display text-3xl text-accent-gold md:text-4xl"
              data-value={stat.value}
            >
              {stat.value}
            </span>
            <span className="text-xs tracking-wide text-cream-dim uppercase">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
