"use client";

import { forwardRef } from "react";
import { getLayerStyle, type LayerName } from "@/lib/layers";
import { CloudPuff } from "./CloudPuff";
import styles from "./CloudLayer.module.css";

export type CloudDepth = Extract<LayerName, "cloudFar" | "cloudMid" | "cloudNear">;

interface BlobConfig {
  top: string;
  left: string;
  width: string;
  height: string;
}

/** Static, hand-placed cloud positions per depth — purely layout, not
 *  animation, so it's fine to hardcode here. */
const BLOBS: Record<CloudDepth, BlobConfig[]> = {
  cloudFar: [
    { top: "6%", left: "-10%", width: "44vw", height: "17vw" },
    { top: "2%", left: "46%", width: "40vw", height: "15vw" },
    { top: "12%", left: "78%", width: "32vw", height: "13vw" },
  ],
  cloudMid: [
    { top: "18%", left: "4%", width: "36vw", height: "14vw" },
    { top: "14%", left: "58%", width: "32vw", height: "12vw" },
  ],
  cloudNear: [
    { top: "27%", left: "-6%", width: "28vw", height: "10vw" },
    { top: "31%", left: "68%", width: "26vw", height: "9vw" },
  ],
};

export interface CloudLayerProps {
  depth: CloudDepth;
}

/** One depth plane of the sky — a handful of real SVG cloud silhouettes
 *  (not blurred blobs) that cloudTimeline drifts horizontally, each
 *  depth at its own independent speed. No animation logic lives here. */
export const CloudLayer = forwardRef<HTMLDivElement, CloudLayerProps>(function CloudLayer(
  { depth },
  ref,
) {
  return (
    <div
      ref={ref}
      style={getLayerStyle(depth)}
      className={styles.root}
      data-depth={depth}
      aria-hidden="true"
    >
      {BLOBS[depth].map((blob, i) => (
        <span key={i} className={styles.puffWrap} style={blob}>
          <CloudPuff className={styles.puff} />
        </span>
      ))}
    </div>
  );
});
