"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { site } from "@/lib/content";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

// A solid, filled gull silhouette — reads clearly against the sky rather
// than the faint open-stroke mark used previously.
const BIRD_PATH =
  "M0,8 Q5,-3 10,5 Q15,-3 20,8 Q15,3 10,7.5 Q5,3 0,8 Z";

const birds = [
  { flightPath: "M -60,140 C 300,40 700,220 1660,90", duration: 22, delay: 0, size: 30 },
  { flightPath: "M -60,260 C 350,160 650,320 1660,200", duration: 26, delay: 3, size: 22 },
  { flightPath: "M -60,90 C 250,190 800,20 1660,150", duration: 30, delay: 7, size: 26 },
  { flightPath: "M -60,320 C 400,240 750,380 1660,280", duration: 24, delay: 11, size: 18 },
];

const clouds = [
  { top: "10%", left: "10%", width: 280, height: 90, duration: 46 },
  { top: "20%", left: "56%", width: 340, height: 100, duration: 55 },
  { top: "6%", left: "74%", width: 220, height: 70, duration: 40 },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const figureRef = useRef<HTMLDivElement>(null);
  const birdsRef = useRef<SVGSVGElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(eyebrowRef.current, { opacity: 0, y: 16, duration: 0.6 }, 0.3)
        .from(
          line1Ref.current,
          { yPercent: 110, duration: 0.9, ease: "power4.out" },
          0.45,
        )
        .from(
          line2Ref.current,
          { yPercent: 110, duration: 0.9, ease: "power4.out" },
          0.57,
        )
        .from(quoteRef.current, { opacity: 0, y: 12, duration: 0.7 }, 0.9)
        .from(
          gsap.utils.toArray(".hero-cta-item", ctaRef.current ?? undefined),
          { opacity: 0, y: 12, duration: 0.6, stagger: 0.1, clearProps: "all" },
          1.1,
        )
        .from(
          figureRef.current,
          { y: -120, opacity: 0, scale: 0.85, duration: 1.1, ease: "elastic.out(1, 0.6)" },
          1.0,
        );

      // Perpetual gentle float, starts once the elastic entrance has settled.
      gsap.to(figureRef.current, {
        y: -14,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 2.4,
      });

      // Two-layer scroll parallax — background drifts slower than the
      // floating figure, reinforcing depth as the hero scrolls past.
      gsap.to(bgRef.current, {
        yPercent: -15 * 0.18,
        ease: "none",
        scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(figureRef.current, {
        yPercent: -15 * 0.3,
        ease: "none",
        scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "bottom top", scrub: true },
      });

      // Birds drift continuously along their own curved flight paths.
      gsap.utils.toArray<SVGGElement>(".hero-bird", birdsRef.current ?? undefined).forEach((bird, i) => {
        const guide = birdsRef.current?.querySelector<SVGPathElement>(`#bird-path-${i}`);
        if (!guide) return;
        gsap.to(bird, {
          motionPath: { path: guide, autoRotate: true, alignOrigin: [0.5, 0.5] },
          duration: birds[i].duration,
          delay: birds[i].delay,
          repeat: -1,
          ease: "none",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink"
    >
      {/* depth-0: full-bleed duotone temple-gate photo, scaled up slightly to
          give the scroll parallax overscan room without revealing an edge */}
      <div ref={bgRef} aria-hidden="true" className="absolute inset-0 scale-110">
        <Image
          src="/hero/hero-bg-duotone.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20"
      />

      {/* depth-1: warm sun glow in the gap between the gate spires */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[14%] h-[36vh] w-[36vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-gold/40 opacity-70 blur-3xl animate-[breathe_9s_ease-in-out_infinite]"
      />

      {/* depth-1: soft drifting clouds across the sky */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        {clouds.map((cloud, i) => (
          <div
            key={i}
            className="absolute rounded-[50%] bg-cream/80 blur-xl"
            style={{
              top: cloud.top,
              left: cloud.left,
              width: cloud.width,
              height: cloud.height,
              boxShadow: "0 0 60px 20px rgba(246,242,234,0.35)",
              animation: `cloud-drift ${cloud.duration}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* depth-2: silhouette birds drifting across the scene on curved flight paths */}
      <svg
        ref={birdsRef}
        aria-hidden="true"
        viewBox="0 0 1600 600"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full text-ink-light"
      >
        {birds.map((bird, i) => (
          <path key={`guide-${i}`} id={`bird-path-${i}`} d={bird.flightPath} opacity={0} fill="none" />
        ))}
        {birds.map((bird, i) => (
          <g key={`bird-${i}`} className="hero-bird">
            <path d={BIRD_PATH} transform={`scale(${bird.size / 20})`} fill="currentColor" />
          </g>
        ))}
      </svg>

      {/* depth-3: the master, mid-handstand, floating in front of the gate —
          sized by height (not width) so it can never overflow the section
          on narrow, tall mobile viewports */}
      <div
        ref={figureRef}
        aria-hidden="true"
        className="absolute bottom-0 right-[4%] h-[clamp(200px,42vh,480px)] drop-shadow-[0_30px_40px_rgba(0,0,0,0.5)] md:right-[8%]"
      >
        <Image
          src="/hero/hero-figure-cutout.webp"
          alt=""
          width={322}
          height={756}
          sizes="480px"
          className="h-full w-auto"
        />
      </div>

      {/* depth-4: text content */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-6 text-left md:px-12">
        <span
          ref={eyebrowRef}
          className="text-xs tracking-[0.35em] text-accent-gold uppercase"
        >
          {site.tagline}
        </span>
        <h1 className="font-display text-5xl italic leading-[0.95] text-cream md:text-8xl">
          <span className="block overflow-hidden">
            <span ref={line1Ref} className="block">
              Swastha
            </span>
          </span>
          <span className="block overflow-hidden">
            <span ref={line2Ref} className="block">
              Yoga
            </span>
          </span>
        </h1>
        <p ref={quoteRef} className="max-w-md text-cream-dim">
          <span className="text-shimmer">&ldquo;{site.quote}&rdquo;</span>
          <span className="mt-1 block text-sm text-cream-dim/70">
            — {site.quoteSource}
          </span>
        </p>
        <div ref={ctaRef} className="mt-4 flex flex-wrap items-center gap-4">
          <WhatsAppButton className="hero-cta-item" />
          <Link
            href="/classes"
            className="hero-cta-item inline-flex items-center justify-center rounded-full bg-accent-pink px-6 py-3 text-sm tracking-wide text-ink transition-opacity hover:opacity-90"
          >
            Explore Classes
          </Link>
        </div>
      </div>
    </section>
  );
}
