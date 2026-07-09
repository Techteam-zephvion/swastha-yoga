"use client";

import { forwardRef } from "react";
import Image from "next/image";
import { getLayerStyle } from "@/lib/layers";
import styles from "./Logo.module.css";

export interface LogoProps {
  src: string;
}

/** The real brand wordmark (a trimmed PNG cutout, alpha-transparent
 *  everywhere but the ink), not HTML text or a generated typeface
 *  approximation. Positioned so `mountainsNear` — painted after this
 *  layer — rises up in front of its lower half: as heroTimeline lifts
 *  it from below the horizon, it reads as emerging up out of the
 *  mountains rather than simply appearing. No animation logic lives in
 *  this file. */
export const Logo = forwardRef<HTMLDivElement, LogoProps>(function Logo({ src }, ref) {
  return (
    <div ref={ref} style={getLayerStyle("logo")} className={styles.root}>
      <Image
        src={src}
        alt="Swastha Yoga"
        width={863}
        height={365}
        priority
        className={styles.mark}
      />
    </div>
  );
});
