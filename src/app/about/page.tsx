import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero/PageHero";
import { OpeningStory } from "@/components/about/OpeningStory/OpeningStory";
import { Journey } from "@/components/about/Journey/Journey";
import { Teaching } from "@/components/about/Teaching/Teaching";
import { GuruTeaser } from "@/components/about/GuruTeaser/GuruTeaser";
import { LearningJourney } from "@/components/about/LearningJourney/LearningJourney";
import { TeachingPhilosophy } from "@/components/about/TeachingPhilosophy/TeachingPhilosophy";
import { Community } from "@/components/about/Community/Community";
import { Statistics } from "@/components/about/Statistics/Statistics";
import { ClosingCTA } from "@/components/ui/ClosingCTA/ClosingCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Swastha Yoga — founded by Dr. Sumitra M Patil, shaped by Gandharva's own journey into yoga therapy under her guidance, and a decade of practice that led here.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="A Practice Built on Presence"
        eyebrow="About Us"
        description="Swastha Yoga began with a simple belief — that healing is personal, and yoga therapy should meet each body exactly where it is."
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      <OpeningStory />
      <Journey />
      <Teaching />
      <GuruTeaser />
      <LearningJourney />
      <TeachingPhilosophy />
      <Community />
      <Statistics />
      <ClosingCTA
        heading="Every Journey Begins With a Single Breath"
        text="Whether you're recovering, expecting, or simply looking for a calmer way to move through your day, there's a place to start."
        primary={{ label: "Book Consultation", href: "/contact" }}
        secondary={{ label: "Explore Therapies", href: "/therapies" }}
      />
    </main>
  );
}
