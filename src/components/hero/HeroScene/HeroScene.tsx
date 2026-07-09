"use client";

import { useEffect, useRef } from "react";
import {
  runSceneTimelines,
  heroTimeline,
  cloudTimeline,
  birdTimeline,
  scrollTimeline,
} from "@/animations";
import type { LayerRefs } from "@/lib/layers";
import { useSceneStore } from "@/lib/store";
import { Background } from "@/components/hero/Background/Background";
import { CloudLayer } from "@/components/hero/Clouds/CloudLayer";
import { Sunlight } from "@/components/hero/Sunlight/Sunlight";
import { MountainLayer } from "@/components/hero/Mountains/MountainLayer";
import { Logo } from "@/components/hero/Logo/Logo";
import { Subtitle } from "@/components/hero/Subtitle/Subtitle";
import { FogLayer } from "@/components/hero/Fog/FogLayer";
import { Particles } from "@/components/hero/Particles/Particles";
import { CTA } from "@/components/hero/CTA/CTA";
import { Birds } from "@/components/hero/Birds/Birds";
import { ScrollIndicator } from "@/components/hero/ScrollIndicator/ScrollIndicator";
import { Nav } from "@/components/hero/Nav/Nav";
import styles from "./HeroScene.module.css";

export interface HeroSceneAssets {
  background: string;
  sunlightOverlay: string;
  wordmark: string;
}

export interface HeroSceneProps {
  assets: HeroSceneAssets;
}

/**
 * Composes every hero layer and hands their refs to the animation
 * manager. This component renders layer components and wires refs —
 * it does not itself call gsap; all tweening happens inside
 * src/animations via `runSceneTimelines`. Paint order (back to front):
 * sky → clouds → sunlight → far mountains → wordmark → subtitle → near
 * mountains → fog → particles → CTAs → birds → scroll cue → nav.
 */
export function HeroScene({ assets }: HeroSceneProps) {
  const sceneRef = useRef<HTMLDivElement | null>(null);

  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const cloudFarRef = useRef<HTMLDivElement | null>(null);
  const cloudMidRef = useRef<HTMLDivElement | null>(null);
  const cloudNearRef = useRef<HTMLDivElement | null>(null);
  const sunlightRef = useRef<HTMLDivElement | null>(null);
  const mountainsFarRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const subtitleRef = useRef<HTMLDivElement | null>(null);
  const mountainsNearRef = useRef<HTMLDivElement | null>(null);
  const fogRef = useRef<HTMLDivElement | null>(null);
  const particlesRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const birdsRef = useRef<HTMLDivElement | null>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  const reducedMotion = useSceneStore((s) => s.reducedMotion);

  useEffect(() => {
    const scope = sceneRef.current;
    if (!scope) return;

    const refs: LayerRefs = {
      sky: backgroundRef.current,
      cloudFar: cloudFarRef.current,
      cloudMid: cloudMidRef.current,
      cloudNear: cloudNearRef.current,
      sunlight: sunlightRef.current,
      mountainsFar: mountainsFarRef.current,
      logo: logoRef.current,
      subtitle: subtitleRef.current,
      mountainsNear: mountainsNearRef.current,
      fog: fogRef.current,
      particles: particlesRef.current,
      cta: ctaRef.current,
      birds: birdsRef.current,
      scrollIndicator: scrollIndicatorRef.current,
      nav: navRef.current,
    };

    const cleanup = runSceneTimelines(
      scope,
      [heroTimeline, cloudTimeline, birdTimeline, scrollTimeline],
      { reducedMotion, refs },
    );

    return cleanup;
  }, [reducedMotion]);

  return (
    <section ref={sceneRef} className={styles.scene} aria-label="Swastha Yoga">
      {/* The wordmark below is an image and the subtitle is a plain <p>,
          so this is the page's only real heading — visually hidden,
          present for SEO and screen readers. */}
      <h1 className="sr-only">
        Swastha Yoga — Holistic Yoga Therapy, Prenatal Care &amp; Personalized Healing
      </h1>
      <Background ref={backgroundRef} src={assets.background} />
      <CloudLayer ref={cloudFarRef} depth="cloudFar" />
      <CloudLayer ref={cloudMidRef} depth="cloudMid" />
      <CloudLayer ref={cloudNearRef} depth="cloudNear" />
      <Sunlight ref={sunlightRef} overlaySrc={assets.sunlightOverlay} />
      <MountainLayer ref={mountainsFarRef} depth="mountainsFar" />
      <Logo ref={logoRef} src={assets.wordmark} />
      <Subtitle ref={subtitleRef} />
      <MountainLayer ref={mountainsNearRef} depth="mountainsNear" />
      <FogLayer ref={fogRef} />
      <Particles ref={particlesRef} />
      <CTA ref={ctaRef} />
      <Birds ref={birdsRef} />
      <ScrollIndicator ref={scrollIndicatorRef} />
      <Nav ref={navRef} />
      <div className={styles.vignette} aria-hidden="true" />
    </section>
  );
}
