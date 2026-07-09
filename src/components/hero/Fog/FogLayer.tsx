"use client";

import { forwardRef } from "react";
import { getLayerStyle } from "@/lib/layers";
import styles from "./FogLayer.module.css";

/** A soft, irregular fog-bank silhouette (a real SVG shape with a wavy
 *  top edge, not a plain gradient rectangle) pinned to the bottom of the
 *  scene. cloudTimeline drifts it horizontally very slowly and
 *  continuously; this component only renders the static shape and
 *  forwards its ref. */
export const FogLayer = forwardRef<HTMLDivElement, object>(function FogLayer(_props, ref) {
  return (
    <div ref={ref} style={getLayerStyle("fog")} className={styles.root} aria-hidden="true">
      <svg viewBox="0 0 400 100" preserveAspectRatio="none" className={styles.svg}>
        <defs>
          <linearGradient id="fogFade" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="var(--color-mist)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--color-mist)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 40 C 40 20, 80 55, 130 35 C 180 15, 220 50, 270 32 C 320 14, 360 45, 400 30 L 400 100 L 0 100 Z"
          fill="url(#fogFade)"
        />
      </svg>
    </div>
  );
});
