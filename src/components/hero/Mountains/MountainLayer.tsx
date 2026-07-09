"use client";

import { forwardRef } from "react";
import { getLayerStyle, type LayerName } from "@/lib/layers";
import styles from "./MountainLayer.module.css";

export type MountainDepth = Extract<LayerName, "mountainsFar" | "mountainsNear">;

export interface MountainLayerProps {
  depth: MountainDepth;
}

/**
 * Every ridge silhouette here is a real alpha-mask cutout traced from
 * the client's own sunrise photograph (`assets/Sunrise_overlay.svg`) —
 * not a generated polygon. Each mask is applied via CSS `mask-image`
 * with a flat token color behind it, so the organic photographic
 * silhouette stays intact while the color/opacity/blur/position (and
 * therefore which depth it reads as) is fully driven by design tokens.
 */
const RIDGE_LEFT = "/mountains/ridge-left-mask.webp";
const RIDGE_RIGHT = "/mountains/ridge-right-mask.webp";
const RIDGE_PEAK = "/mountains/ridge-peak-mask.webp";

/** Far range: two soft, low-amplitude ridge segments sitting around the
 *  photo's own horizon line, behind the wordmark — atmospheric depth,
 *  never competing for attention. */
const FAR_RIDGES = [RIDGE_LEFT, RIDGE_RIGHT];

/** Near range: two short foothill segments that ground the bottom of
 *  the frame, plus the dramatic Fuji-cone segment (index 1) that rises
 *  up through the wordmark's lower half — the "emerging from the
 *  mountains" moment. Order matters: it paints in the middle so the
 *  frontmost ground ridge still occludes its base. */
const NEAR_RIDGES = [RIDGE_LEFT, RIDGE_PEAK, RIDGE_RIGHT];

const RIDGES_BY_DEPTH: Record<MountainDepth, readonly string[]> = {
  mountainsFar: FAR_RIDGES,
  mountainsNear: NEAR_RIDGES,
};

/** Two to three ranges per depth (far/near), each its own masked ridge
 *  segment with a distinct color/opacity/vertical placement, giving
 *  obvious parallax depth. cloudTimeline drifts each `[data-ridge]`
 *  independently, very slowly; no animation logic lives in this file. */
export const MountainLayer = forwardRef<HTMLDivElement, MountainLayerProps>(
  function MountainLayer({ depth }, ref) {
    return (
      <div
        ref={ref}
        style={getLayerStyle(depth)}
        className={styles.root}
        data-depth={depth}
        aria-hidden="true"
      >
        {RIDGES_BY_DEPTH[depth].map((src, i) => (
          <div
            key={i}
            data-ridge=""
            data-index={i}
            className={styles.ridge}
            style={{
              maskImage: `url(${src})`,
              WebkitMaskImage: `url(${src})`,
            }}
          />
        ))}
      </div>
    );
  },
);
