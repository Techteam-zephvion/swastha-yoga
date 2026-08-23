import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero/PageHero";
import { GuruIntro } from "@/components/guru/GuruIntro/GuruIntro";
import { GuruRecognition } from "@/components/guru/GuruRecognition/GuruRecognition";
import { GuruCredentials } from "@/components/guru/GuruCredentials/GuruCredentials";
import { ClosingCTA } from "@/components/ui/ClosingCTA/ClosingCTA";

export const metadata: Metadata = {
  title: "Guru",
  description:
    "Meet Dr. Sumitra M Patil — founder and guru of Swastha Yoga, whose guru–shishya tradition shaped the studio and continues to guide how it teaches today under Gandharva's leadership.",
  alternates: { canonical: "/guru" },
};

export default function GuruPage() {
  return (
    <main>
      <PageHero
        title="A Lineage of Direct Teaching"
        eyebrow="Guru"
        description="Before Swastha Yoga was a studio, it was a student and a teacher — a relationship that still shapes how every session is taught today."
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Guru" }]}
      />
      <GuruIntro />
      <GuruRecognition />
      <GuruCredentials />
      <ClosingCTA
        heading="Rooted in Tradition, Taught With Care"
        text="That same lineage — patient, personal, hands-on — is what every student meets at Swastha Yoga today."
        primary={{ label: "Book Consultation", href: "/contact" }}
        secondary={{ label: "Meet the Founder", href: "/about" }}
      />
    </main>
  );
}
