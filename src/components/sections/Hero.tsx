"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { site } from "@/lib/content";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftGateRef = useRef<HTMLDivElement>(null);
  const rightGateRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      const leftGate = leftGateRef.current;
      const rightGate = rightGateRef.current;
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Gates start pulled toward center (as if closed) and part outward
      // to their flanking rest position — a literal "gates opening" reveal.
      if (leftGate && rightGate && window.innerWidth >= 640) {
        const leftRect = leftGate.getBoundingClientRect();
        const rightRect = rightGate.getBoundingClientRect();
        const centerShiftLeft =
          window.innerWidth / 2 - leftRect.width / 2 - leftRect.left;
        const centerShiftRight =
          window.innerWidth / 2 + rightRect.width / 2 - rightRect.right;

        tl.from(leftGate, { x: centerShiftLeft, duration: 1.5, ease: "power3.inOut" }, 0)
          .from(rightGate, { x: centerShiftRight, duration: 1.5, ease: "power3.inOut" }, 0);
      }

      tl.from(eyebrowRef.current, { opacity: 0, y: 16, duration: 0.6 }, 0.7)
        .from(
          line1Ref.current,
          { yPercent: 110, duration: 0.9, ease: "power4.out" },
          0.85,
        )
        .from(
          line2Ref.current,
          { yPercent: 110, duration: 0.9, ease: "power4.out" },
          0.97,
        )
        .from(quoteRef.current, { opacity: 0, y: 12, duration: 0.7 }, 1.3)
        .from(
          gsap.utils.toArray(".hero-cta-item", ctaRef.current ?? undefined),
          { opacity: 0, y: 12, duration: 0.6, stagger: 0.1, clearProps: "all" },
          1.5,
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink"
    >
      {/* depth-0: far background wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 40%, var(--color-ink-soft) 0%, var(--color-ink) 70%)",
        }}
      />

      {/* depth-1: glow atmosphere */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 opacity-40 mix-blend-screen animate-[breathe_10s_ease-in-out_infinite]"
      >
        <Image src="/brand/gold-texture.webp" alt="" fill className="object-cover blur-2xl" />
      </div>

      {/* depth-3: gate pillars — hidden on small screens to keep mobile text readable */}
      <div
        ref={leftGateRef}
        aria-hidden="true"
        className="absolute left-0 top-0 hidden h-full w-[clamp(120px,16vw,260px)] sm:block"
      >
        <Image
          src="/hero/bali-gate-door-left.webp"
          alt=""
          fill
          preload
          sizes="260px"
          className="object-cover object-top drop-shadow-[0_25px_50px_rgba(0,0,0,0.45)]"
        />
      </div>
      <div
        ref={rightGateRef}
        aria-hidden="true"
        className="absolute right-0 top-0 hidden h-full w-[clamp(120px,16vw,260px)] sm:block"
      >
        <Image
          src="/hero/bali-gate-door-right.webp"
          alt=""
          fill
          preload
          sizes="260px"
          className="object-cover object-top drop-shadow-[0_25px_50px_rgba(0,0,0,0.45)]"
        />
      </div>

      {/* depth-4: text content */}
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 text-center">
        <span
          ref={eyebrowRef}
          className="text-xs tracking-[0.35em] text-accent-gold uppercase"
        >
          {site.tagline}
        </span>
        <h1 className="font-display text-5xl leading-tight text-cream md:text-7xl">
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
        <p ref={quoteRef} className="max-w-xl text-cream-dim">
          &ldquo;{site.quote}&rdquo;
          <span className="mt-1 block text-sm text-cream-dim/70">
            — {site.quoteSource}
          </span>
        </p>
        <div ref={ctaRef} className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <WhatsAppButton className="hero-cta-item" />
          <Link
            href="/classes"
            className="hero-cta-item inline-flex items-center justify-center rounded-full bg-accent-pink px-6 py-3 text-sm tracking-wide text-ink transition-opacity hover:opacity-90"
          >
            Explore Classes
          </Link>
        </div>
      </div>

      {/* depth-5: foreground particles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30 mix-blend-screen"
      >
        <Image src="/brand/dust-particles.webp" alt="" fill className="object-cover" />
      </div>
    </section>
  );
}
