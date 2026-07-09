"use client";

import { forwardRef } from "react";
import { getLayerStyle } from "@/lib/layers";
import styles from "./Birds.module.css";

const BIRD_COUNT = 3;

/** A per-bird flap-cycle offset so the birds airborne at once don't all
 *  flap in unison — purely decorative, not scene animation. */
const FLAP_DELAYS = [0, -0.15, -0.3];

/** Independent birds — each one flies its own heading, height, speed,
 *  and timing (`birdTimeline`), so all 3 are typically airborne at
 *  once, on different paths, rather than one rigid group. Every bird
 *  is a single 10-frame flap-cycle sprite
 *  (illustrated, traced from the client's own reference artwork),
 *  stepped by a self-contained CSS animation; this component only
 *  renders the static marks and forwards its ref. */
export const Birds = forwardRef<HTMLDivElement, object>(function Birds(_props, ref) {
  return (
    <div ref={ref} style={getLayerStyle("birds")} className={styles.root} aria-hidden="true">
      {Array.from({ length: BIRD_COUNT }).map((_, i) => (
        <span
          key={i}
          data-bird=""
          className={styles.bird}
          style={{ animationDelay: `${FLAP_DELAYS[i % FLAP_DELAYS.length]}s` }}
        />
      ))}
    </div>
  );
});
