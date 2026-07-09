import type { Metadata } from "next";
import { loadAssetManifest } from "@/lib/assetManifest";
import { HeroScene } from "@/components/hero/HeroScene";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/**
 * Home — currently only the cinematic hero. The rest of the site is
 * built in a later step; this page intentionally renders nothing past
 * the hero for now.
 */
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
    </main>
  );
}
