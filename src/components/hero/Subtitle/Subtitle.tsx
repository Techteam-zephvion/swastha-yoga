"use client";

import { forwardRef } from "react";
import { getLayerStyle } from "@/lib/layers";
import styles from "./Subtitle.module.css";

/** The subtitle line beneath the wordmark, kept invisible until
 *  heroTimeline fades it in — after the logo has risen, per the brief's
 *  animation sequence. No animation logic lives in this file. */
export const Subtitle = forwardRef<HTMLDivElement, object>(function Subtitle(_props, ref) {
  return (
    <div ref={ref} style={getLayerStyle("subtitle")} className={styles.root}>
      <p className={styles.text}>
        Holistic Yoga Therapy, Prenatal Care &amp; Personalized Healing
      </p>
    </div>
  );
});
