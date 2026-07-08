import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const teasers = [
  {
    href: "/about",
    label: "The Master",
    description: "Meet Gandharva Natesh",
    image: "/hero/bali-gate-circle.webp",
  },
  {
    href: "/classes",
    label: "Classes",
    description: "Hatha, Vinyasa, Prenatal & more",
    image: "/decor/monstera.webp",
  },
  {
    href: "/certificates",
    label: "Credentials",
    description: "Degrees, awards & recognitions",
    image: "/decor/marigold.webp",
  },
  {
    href: "/gallery",
    label: "Gallery",
    description: "The practice & the community",
    image: "/decor/lotus-pink.webp",
  },
];

export function PageTeasers() {
  return (
    <section className="py-20">
      <ScrollReveal
        className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:grid-cols-4"
        y={40}
        stagger={0.1}
      >
        {teasers.map((teaser) => (
          <Link
            key={teaser.href}
            href={teaser.href}
            className="group flex flex-col items-center gap-4 rounded-2xl border border-ink-soft/60 bg-ink-light/20 px-6 py-10 text-center transition-all duration-300 hover:-translate-y-2 hover:border-accent-gold/60 hover:bg-ink-light/40 hover:shadow-[0_20px_45px_-15px_rgba(216,185,120,0.35)]"
          >
            <div className="relative h-16 w-16 overflow-hidden rounded-full border border-accent-gold/40 transition-transform duration-300 group-hover:scale-110">
              <Image
                src={teaser.image}
                alt=""
                fill
                sizes="64px"
                className="object-cover transition-transform duration-500 group-hover:scale-125"
              />
            </div>
            <div>
              <h3 className="font-display text-lg text-cream transition-colors group-hover:text-accent-gold">
                {teaser.label}
              </h3>
              <p className="mt-1 text-xs text-cream-dim">{teaser.description}</p>
            </div>
          </Link>
        ))}
      </ScrollReveal>
    </section>
  );
}
