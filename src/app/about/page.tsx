import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero/PageHero";
import { FounderStory } from "@/components/about/FounderStory/FounderStory";
import { Philosophy } from "@/components/about/Philosophy/Philosophy";
import { Credentials } from "@/components/about/Credentials/Credentials";
import { WhySwastha } from "@/components/about/WhySwastha/WhySwastha";
import { ClosingCTA } from "@/components/ui/ClosingCTA/ClosingCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Swastha Yoga — founder Gandharva Natesh's journey into yoga therapy, our philosophy, and the credentials behind the practice.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="A Practice Built on Presence"
        eyebrow="About Us"
        description="Swastha Yoga began with a simple belief — that healing is personal, and yoga therapy should meet each body exactly where it is. Since 2022, we've guided over a thousand students through therapy, prenatal care, and a calmer way of moving through life."
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      <FounderStory />
      <Philosophy />
      <Credentials />
      <WhySwastha />
      <ClosingCTA
        heading="Begin Where You Are"
        text="Whether you’re recovering, expecting, or simply looking for a calmer way to move through your day, there’s a place to start."
        primary={{ label: "Book Consultation", href: "/contact" }}
        secondary={{ label: "Explore Therapies", href: "/therapies" }}
      />
    </main>
  );
}
