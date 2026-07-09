"use client";

import { forwardRef } from "react";
import { getLayerStyle } from "@/lib/layers";
import styles from "./Sunlight.module.css";

export interface SunlightProps {
  overlaySrc: string;
}

/** Volumetric sunlight — the real SVG sun-glow overlay (screen-blended,
 *  so only its bright highlights contribute, never a hard silhouette
 *  edge) plus a radial-gradient glow that extends its warmth softly
 *  across the frame. No hard rays anywhere. heroTimeline pulses this
 *  layer's opacity very slowly ("breathing"); no animation logic lives
 *  in this file. Rendered as a plain `<img>` (not `next/image`) since
 *  it's a vector asset, not a raster photo. */
export const Sunlight = forwardRef<HTMLDivElement, SunlightProps>(function Sunlight(
  { overlaySrc },
  ref,
) {
  return (
    <div ref={ref} style={getLayerStyle("sunlight")} className={styles.root} aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={overlaySrc} alt="" className={styles.overlayImage} />
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={styles.glow}>
        <defs>
          <radialGradient id="sunGlowWide" cx="50%" cy="46%" r="45%">
            <stop offset="0%" stopColor="var(--color-sun-glow)" stopOpacity="0.28" />
            <stop offset="100%" stopColor="var(--color-sun-glow)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="sunGlowCore" cx="50%" cy="48%" r="16%">
            <stop offset="0%" stopColor="var(--color-sun-core)" stopOpacity="0.7" />
            <stop offset="60%" stopColor="var(--color-sun-glow)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--color-sun-glow)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="100" height="100" fill="url(#sunGlowWide)" />
        <rect x="0" y="0" width="100" height="100" fill="url(#sunGlowCore)" />
      </svg>
    </div>
  );
});
