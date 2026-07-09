"use client";

import { forwardRef } from "react";
import { getLayerStyle } from "@/lib/layers";
import styles from "./ScrollIndicator.module.css";

/** The "scroll" cue pinned to the bottom center — kept invisible until
 *  heroTimeline fades it in, after the CTAs have settled. Its slow
 *  floating motion is intrinsic to the mark itself (like the birds'
 *  flap cycle), so it loops via a self-contained CSS animation rather
 *  than a GSAP scene timeline. No animation logic lives in this file. */
export const ScrollIndicator = forwardRef<HTMLDivElement, object>(function ScrollIndicator(
  _props,
  ref,
) {
  return (
    <div
      ref={ref}
      style={getLayerStyle("scrollIndicator")}
      className={styles.root}
      aria-hidden="true"
    >
      {/* GSAP (heroTimeline) owns this outer element's one-time reveal
          (opacity + translateY); the inner element owns the continuous
          float via CSS so the two transforms never fight over the same
          node. */}
      <div className={styles.float}>
        <span className={styles.label}>Scroll</span>
        <span className={styles.line} />
      </div>
    </div>
  );
});
