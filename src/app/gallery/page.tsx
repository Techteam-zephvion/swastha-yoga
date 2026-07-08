import Image from "next/image";
import type { Metadata } from "next";
import { galleryImages, site } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: `Gallery — ${site.name}`,
  description: "The practice and the community at Swastha Yoga.",
};

const allImages = [
  ...galleryImages.travelPoses.map((img) => ({ ...img, tag: "The Practice" })),
  ...galleryImages.groupPhotos.map((img) => ({ ...img, tag: "The Community" })),
];

export default function GalleryPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="Gallery" title="The Practice & The Community" />
        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {allImages.map((img) => (
            <figure
              key={img.file}
              className="break-inside-avoid overflow-hidden rounded-2xl border border-ink-soft/60"
            >
              <Image
                src={`/gallery/${img.file}.webp`}
                alt={img.alt}
                width={800}
                height={800}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="h-auto w-full object-cover"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
