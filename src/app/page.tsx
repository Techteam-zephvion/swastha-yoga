import type { Metadata } from "next";
import { loadAssetManifest } from "@/lib/assetManifest";
import { HeroScene } from "@/components/hero/HeroScene";
import { WelcomeIntro } from "@/components/home/WelcomeIntro/WelcomeIntro";
import { Statistics } from "@/components/about/Statistics/Statistics";
import { TherapiesPreview } from "@/components/home/TherapiesPreview/TherapiesPreview";
import { GuruTeaser } from "@/components/about/GuruTeaser/GuruTeaser";
import { GalleryPreview } from "@/components/home/GalleryPreview/GalleryPreview";
import { ClosingCTA } from "@/components/ui/ClosingCTA/ClosingCTA";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default async function Home() {
  const manifest = await loadAssetManifest();

  if (!manifest.background || !manifest.sunlightOverlay || !manifest.wordmark) {
    throw new Error(
      "asset-manifest.json is missing required hero assets (background/sunlightOverlay/wordmark)",
    );
  }

  return (
    <main>
      <HeroScene
        assets={{
          background: manifest.background,
          sunlightOverlay: manifest.sunlightOverlay,
          wordmark: manifest.wordmark,
        }}
      />
      <WelcomeIntro />
      <Statistics />
      <TherapiesPreview />
      <GuruTeaser />
      <GalleryPreview />
      <ClosingCTA
        heading="Every Journey Begins With a Single Breath"
        text="Whether you're recovering, expecting, or simply looking for a calmer way to move through your day, there's a place to start."
        primary={{ label: "Book Consultation", href: "/contact" }}
        secondary={{ label: "Explore Therapies", href: "/therapies" }}
      />
    </main>
  );
}
