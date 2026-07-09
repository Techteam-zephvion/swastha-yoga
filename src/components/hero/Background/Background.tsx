"use client";

import { forwardRef } from "react";
import Image from "next/image";
import { getLayerStyle } from "@/lib/layers";
import styles from "./Background.module.css";

export interface BackgroundProps {
  src: string;
}

/**
 * The base sky plate — panoramic sunrise over water and mountains.
 * Deliberately static: every other hero layer animates in front of it,
 * but this photo itself never moves. Purely presentational; exposes its
 * ref for consistency with the other hero layers.
 */
export const Background = forwardRef<HTMLDivElement, BackgroundProps>(function Background(
  { src },
  ref,
) {
  return (
    <div ref={ref} style={getLayerStyle("sky")} className={styles.root} aria-hidden="true">
      <Image src={src} alt="" fill priority sizes="100vw" className={styles.image} />
      <div className={styles.grade} />
      <div className={styles.haze} />
    </div>
  );
});
