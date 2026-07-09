import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero/PageHero";
import { TherapyCategories } from "@/components/therapies/TherapyCategories/TherapyCategories";
import { TreatmentProcess } from "@/components/therapies/TreatmentProcess/TreatmentProcess";
import { ConditionsGrid } from "@/components/therapies/ConditionsGrid/ConditionsGrid";
import { ClosingCTA } from "@/components/therapies/ClosingCTA/ClosingCTA";

export const metadata: Metadata = {
  title: "Therapies — Swastha Yoga",
  description:
    "Therapies at Swastha Yoga, organized around the problems they solve — pain relief, prenatal care, stress management, mobility, and mindfulness.",
};

export default function TherapiesPage() {
  return (
    <main>
      <PageHero
        title="What Brought You Here Today?"
        eyebrow="Therapies"
        description="Not every body needs the same practice. Whether you're managing pain, expecting, rebuilding strength, or simply looking to breathe easier, we start with the problem — and shape the therapy around it."
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Therapies" }]}
      />
      <TherapyCategories />
      <TreatmentProcess />
      <ConditionsGrid />
      <ClosingCTA />
    </main>
  );
}
