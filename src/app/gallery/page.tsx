import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero/PageHero";
import { Section } from "@/components/ui/Section/Section";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { Text } from "@/components/ui/Typography/Text";

export const metadata: Metadata = {
  title: "Gallery",
  alternates: { canonical: "/gallery" },
};

/** Placeholder page proving out the shared framework (PageHero,
 *  Section, Reveal, Typography) — real content comes in a later pass. */
export default function GalleryPage() {
  return (
    <main>
      <PageHero
        title="Gallery"
        eyebrow="Swastha Yoga"
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />
      <Section spacing="lg" tone="paper">
        <Reveal>
          <Text color="muted">Page content coming soon.</Text>
        </Reveal>
      </Section>
    </main>
  );
}
