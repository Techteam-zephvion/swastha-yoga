import Image from "next/image";
import { master } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export function Intro() {
  return (
    <section className="relative overflow-hidden py-24">
      <Image
        src="/decor/lotus-white.webp"
        alt=""
        width={220}
        height={220}
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-8 opacity-40 animate-[float-y_9s_ease-in-out_infinite] blur-[2px] md:opacity-50"
        style={{
          maskImage: "radial-gradient(circle, black 0%, transparent 68%)",
          WebkitMaskImage: "radial-gradient(circle, black 0%, transparent 68%)",
        }}
      />
      <Image
        src="/decor/marigold.webp"
        alt=""
        width={140}
        height={140}
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 bottom-8 opacity-30 animate-[float-y_11s_ease-in-out_infinite_1.5s] blur-[2px] md:opacity-40"
        style={{
          maskImage: "radial-gradient(circle, black 0%, transparent 68%)",
          WebkitMaskImage: "radial-gradient(circle, black 0%, transparent 68%)",
        }}
      />
      <ScrollReveal className="relative mx-auto flex max-w-2xl flex-col gap-6 px-6" stagger={0.15}>
        <SectionHeading eyebrow="Philosophy" title="A Path Back to Health" />
        <p className="text-center text-cream-dim">{master.bio}</p>
      </ScrollReveal>
    </section>
  );
}
