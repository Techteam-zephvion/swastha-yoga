import Image from "next/image";
import type { Metadata } from "next";
import { classGroups, timings, site } from "@/lib/content";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export const metadata: Metadata = {
  title: `Classes & Programs — ${site.name}`,
  description: "Yoga classes, therapy programs, and batch timings at Swastha Yoga.",
};

const accents = ["accent-gold", "accent-pink", "accent-gold", "accent-pink"] as const;

export default function ClassesPage() {
  return (
    <>
      <section className="relative overflow-hidden py-24">
        <div
          aria-hidden="true"
          className="absolute -left-24 top-0 h-[45vh] w-[45vh] opacity-25 mix-blend-screen animate-[breathe_12s_ease-in-out_infinite]"
        >
          <Image src="/brand/gold-texture.webp" alt="" fill sizes="45vh" className="object-cover blur-2xl" />
        </div>

        <div className="relative mx-auto max-w-5xl px-6">
          <ScrollReveal className="flex flex-col items-center gap-3 text-center">
            <span className="text-xs tracking-[0.3em] text-accent-gold uppercase">
              Programs
            </span>
            <h1 className="font-display text-4xl text-cream md:text-5xl">
              Classes &amp; Therapies
            </h1>
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2">
            {classGroups.map((group, i) => (
              <ScrollReveal
                key={group.title}
                delay={i % 2 === 1 ? 0.15 : 0}
                className={i % 2 === 1 ? "md:mt-16" : ""}
              >
                <div
                  className="border-l-2 pl-6"
                  style={{
                    borderColor: `var(--color-${accents[i % accents.length]})`,
                  }}
                >
                  <h2 className="font-display text-2xl text-cream">{group.title}</h2>
                  <p className="mt-1 text-sm text-cream-dim">{group.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.classes.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-ink-soft/70 bg-ink-light/20 px-3 py-1.5 text-xs text-cream-dim"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink-soft/60 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal className="flex flex-col items-center gap-3">
            <span className="text-xs tracking-[0.3em] text-accent-gold uppercase">
              Schedule
            </span>
            <h2 className="font-display text-3xl text-cream md:text-4xl">
              Batch Timings
            </h2>
          </ScrollReveal>

          <ScrollReveal
            stagger={0.12}
            className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3"
          >
            {timings.map((batch) => (
              <div key={batch.label}>
                <h3 className="font-display text-lg text-accent-gold">
                  {batch.label}
                </h3>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {batch.times.map((t) => (
                    <li key={t} className="text-sm text-cream-dim">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="mt-14 flex flex-col items-center gap-4">
            <p className="text-sm text-cream-dim">
              For current pricing and to reserve your spot, reach out directly.
            </p>
            <WhatsAppButton message="Hi Swastha Yoga, I'd like to know the pricing and book a class." />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
