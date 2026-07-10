import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero/PageHero";
import { GalleryIntro } from "@/components/gallery/GalleryIntro/GalleryIntro";
import { GalleryExhibit } from "@/components/gallery/GalleryExhibit/GalleryExhibit";
import { RecognitionHighlight } from "@/components/gallery/RecognitionHighlight/RecognitionHighlight";
import { ClosingCTA } from "@/components/ui/ClosingCTA/ClosingCTA";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual journal of practice, teaching, community, and recognition at Swastha Yoga — the people and moments behind a decade of practice.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <main>
      <PageHero
        title="Gallery"
        eyebrow="Swastha Yoga"
        description="A visual journal of practice, teaching, community, and lifelong learning."
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />
      <GalleryIntro />
      <GalleryExhibit />
      <RecognitionHighlight />
      <ClosingCTA
        heading="Begin Your Journey"
        text="Whatever brought you here, there's a place to start."
        primary={{ label: "Book Consultation", href: "/contact" }}
        secondary={{ label: "Contact Us", href: "/contact" }}
      />
    </main>
  );
}
