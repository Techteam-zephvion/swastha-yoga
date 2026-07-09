"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { getLayerStyle } from "@/lib/layers";
import { NAV_ROUTES } from "@/lib/routes";
import styles from "./Nav.module.css";

/** The top navigation bar — kept off-screen above the viewport until
 *  heroTimeline slides it down, once the hero title has finished
 *  rising. scrollTimeline additionally toggles this element's
 *  `data-scrolled` attribute once the page has scrolled past 40px, for
 *  the frosted/translucent treatment defined in the CSS module. No
 *  animation logic lives in this file. Shares its route list with
 *  `SiteNav` via `NAV_ROUTES` so the two never drift out of sync. */
export const Nav = forwardRef<HTMLElement, object>(function Nav(_props, ref) {
  return (
    <nav ref={ref} style={getLayerStyle("nav")} className={styles.root} aria-label="Primary">
      <span className={styles.mark}>Swastha Yoga</span>
      <ul className={styles.links}>
        {NAV_ROUTES.map((route) => (
          <li key={route.href}>
            <Link href={route.href} className={styles.link}>
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
});
