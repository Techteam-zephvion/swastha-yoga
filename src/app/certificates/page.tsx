import Image from "next/image";
import type { Metadata } from "next";
import { certificates, site } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: `Credentials — ${site.name}`,
  description: "Degrees, awards, and certifications earned by Gandharva Natesh.",
};

export default function CertificatesPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Credibility Wall"
          title="Degrees, Awards & Recognitions"
        />
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <figure
              key={cert.file}
              className="flex flex-col overflow-hidden rounded-2xl border border-ink-soft/60 bg-ink-light/20"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={`/certificates/${cert.file}.webp`}
                  alt={`${cert.title} — ${cert.issuer}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="flex flex-col gap-1 p-5">
                <h3 className="font-display text-lg text-cream">{cert.title}</h3>
                <p className="text-sm text-accent-gold">{cert.issuer}</p>
                <p className="text-xs text-cream-dim">{cert.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
