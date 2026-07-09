"use client";

import { forwardRef } from "react";
import { getLayerStyle } from "@/lib/layers";
import styles from "./Particles.module.css";

/** Static, hand-placed dust-mote positions — purely layout, not
 *  animation, so it's fine to hardcode here. */
const MOTES = [
  { top: "34%", left: "18%", scale: 0.8 },
  { top: "48%", left: "28%", scale: 1.1 },
  { top: "62%", left: "12%", scale: 0.7 },
  { top: "40%", left: "72%", scale: 0.9 },
  { top: "55%", left: "84%", scale: 1.2 },
  { top: "70%", left: "64%", scale: 0.8 },
  { top: "30%", left: "50%", scale: 0.6 },
  { top: "66%", left: "38%", scale: 1 },
];

/** Slow-drifting floating dust, lit by the sunlight bloom — adds
 *  foreground depth. heroTimeline animates each mote's opacity/position;
 *  this component only renders the static marks and forwards its ref. */
export const Particles = forwardRef<HTMLDivElement, object>(function Particles(_props, ref) {
  return (
    <div ref={ref} style={getLayerStyle("particles")} className={styles.root} aria-hidden="true">
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <radialGradient id="moteGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--color-sun-core)" />
            <stop offset="100%" stopColor="var(--color-sun-core)" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
      {MOTES.map((mote, i) => (
        <svg
          key={i}
          data-mote=""
          viewBox="0 0 10 10"
          className={styles.mote}
          style={{ top: mote.top, left: mote.left, transform: `scale(${mote.scale})` }}
        >
          <circle cx="5" cy="5" r="5" fill="url(#moteGlow)" />
        </svg>
      ))}
    </div>
  );
});
