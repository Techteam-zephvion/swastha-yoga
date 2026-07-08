import Image from "next/image";
import type { Metadata } from "next";
import { master, stats, site } from "@/lib/content";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export const metadata: Metadata = {
  title: `The Master — ${site.name}`,
  description: master.designation,
};

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate flex min-h-[85vh] items-center overflow-hidden">
        {/* depth-0: background wash */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(55% 60% at 80% 30%, var(--color-ink-soft) 0%, var(--color-ink) 70%)",
          }}
        />
        {/* depth-1: glow atmosphere */}
        <div
          aria-hidden="true"
          className="absolute right-0 top-1/4 h-[55vh] w-[55vh] opacity-30 mix-blend-screen animate-[breathe_11s_ease-in-out_infinite]"
        >
          <Image
            src="/brand/gold-texture.webp"
            alt=""
            fill
            sizes="55vh"
            className="object-cover blur-2xl"
          />
        </div>

        {/* depth-3: bleeding portrait, right-aligned, masked edge */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 hidden w-[42%] animate-[float-y_9s_ease-in-out_infinite] md:block"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 20%)",
            maskImage: "linear-gradient(to right, transparent, black 20%)",
          }}
        >
          <Image
            src="/hero/bali-gate-portrait-hero.webp"
            alt="Gandharva Natesh in a yoga pose at the Lempuyang temple, Bali"
            fill
            sizes="42vw"
            className="object-cover object-top"
          />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-6 py-24 md:grid-cols-2">
          <div className="flex flex-col gap-5 text-center md:text-left">
            <ScrollReveal>
              <span className="text-xs tracking-[0.3em] text-accent-gold uppercase">
                The Master
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="font-display text-5xl leading-tight text-cream md:text-6xl">
                {master.name}
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="flex flex-col gap-4">
              <p className="text-cream-dim">{master.designation}</p>
              <p className="text-cream-dim">{master.specialization}</p>
              <p className="text-cream-dim">{master.bio}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.3} className="mt-2 flex justify-center md:justify-start">
              <WhatsAppButton label="Ask a Question" />
            </ScrollReveal>
          </div>
          {/* mobile portrait: full-width, shown only on small screens */}
          <div className="relative -mx-6 h-72 md:hidden">
            <Image
              src="/hero/bali-gate-portrait-hero.webp"
              alt="Gandharva Natesh in a yoga pose at the Lempuyang temple, Bali"
              fill
              sizes="100vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-ink-soft/60 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal className="flex flex-col items-center gap-3 text-center">
            <span className="text-xs tracking-[0.3em] text-accent-gold uppercase">
              At a Glance
            </span>
            <h2 className="font-display text-3xl text-cream md:text-4xl">
              Credentials in Numbers
            </h2>
          </ScrollReveal>
          <ScrollReveal
            stagger={0.12}
            className="mt-12 grid grid-cols-2 gap-y-10 text-center md:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1 px-4">
                <span className="font-display text-3xl text-accent-gold md:text-4xl">
                  {stat.value}
                </span>
                <span className="text-xs tracking-wide text-cream-dim uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
