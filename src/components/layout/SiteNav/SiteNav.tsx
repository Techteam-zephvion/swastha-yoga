"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { NAV_ROUTES } from "@/lib/routes";
import styles from "./SiteNav.module.css";

const SCROLL_THRESHOLD = 40;

/**
 * The global site navigation used on every page except the homepage
 * (which renders its own hero-embedded nav with a bespoke entrance
 * sequence — see `components/hero/Nav`). Same transparent-to-glass
 * scroll treatment, generalized with route-aware active states and a
 * mobile slide-out drawer.
 *
 * Uses a plain scroll listener rather than GSAP/ScrollTrigger — this is
 * presentational site chrome outside the hero's scene-timeline system,
 * not part of any GSAP-driven sequence, so introducing ScrollTrigger
 * here would be unnecessary indirection for a single class toggle.
 */
export function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  return (
    <>
      <nav className={styles.root} data-scrolled={scrolled || undefined} aria-label="Primary">
        <Link href="/" className={styles.mark}>
          <Image
            src="/brand/icon.webp"
            alt=""
            width={37}
            height={45}
            priority
            className={styles.markIcon}
          />
          <span>Swastha Yoga</span>
        </Link>

        <ul className={styles.links}>
          {NAV_ROUTES.map((route) => {
            const active = pathname === route.href;
            return (
              <li key={route.href}>
                <Link
                  href={route.href}
                  className={clsx(styles.link, active && styles.active)}
                  aria-current={active ? "page" : undefined}
                >
                  {route.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setDrawerOpen(true)}
          aria-label="Open menu"
          aria-expanded={drawerOpen}
        >
          <Menu size={22} strokeWidth={1.5} />
        </button>
      </nav>

      {drawerOpen && (
        <button
          type="button"
          className={styles.backdrop}
          onClick={() => setDrawerOpen(false)}
          aria-label="Close menu"
        />
      )}

      <div
        id="mobile-drawer"
        className={clsx(styles.drawer, drawerOpen && styles.drawerOpen)}
        aria-hidden={!drawerOpen}
      >
        <div className={styles.drawerHeader}>
          <span className={styles.mark}>
            <Image src="/brand/icon.webp" alt="" width={37} height={45} className={styles.markIcon} />
            <span>Swastha Yoga</span>
          </span>
          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>
        <ul className={styles.drawerLinks}>
          {NAV_ROUTES.map((route) => {
            const active = pathname === route.href;
            return (
              <li key={route.href}>
                <Link
                  href={route.href}
                  className={clsx(styles.drawerLink, active && styles.active)}
                  aria-current={active ? "page" : undefined}
                  tabIndex={drawerOpen ? 0 : -1}
                >
                  {route.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
