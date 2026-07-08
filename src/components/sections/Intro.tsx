import Image from "next/image";
import { master } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Intro() {
  return (
    <section className="relative overflow-hidden py-24">
      <Image
        src="/decor/lotus-white.webp"
        alt=""
        width={220}
        height={220}
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-8 opacity-20 md:opacity-30"
      />
      <div className="relative mx-auto flex max-w-2xl flex-col gap-6 px-6">
        <SectionHeading eyebrow="Philosophy" title="A Path Back to Health" />
        <p className="text-center text-cream-dim">{master.bio}</p>
      </div>
    </section>
  );
}
