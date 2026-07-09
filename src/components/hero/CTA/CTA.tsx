"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { getLayerStyle } from "@/lib/layers";
import styles from "./CTA.module.css";

/** The two entrance actions beneath the subtitle — kept invisible until
 *  heroTimeline fades them up, after the subtitle has settled. No
 *  animation logic lives in this file. */
export const CTA = forwardRef<HTMLDivElement, object>(function CTA(_props, ref) {
  return (
    <div ref={ref} style={getLayerStyle("cta")} className={styles.root}>
      <Link href="/contact" className={styles.primary}>
        Book Consultation
      </Link>
      <Link href="/therapies" className={styles.secondary}>
        Explore Therapies
      </Link>
    </div>
  );
});
