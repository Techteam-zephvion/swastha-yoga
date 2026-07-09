import Link from "next/link";
import { NAV_ROUTES } from "@/lib/routes";
import { Section } from "@/components/ui/Section/Section";
import styles from "./Footer.module.css";

/** The one footer shared across every page — brand mark, the same route
 *  list the nav uses, and a quiet copyright line. Deliberately minimal:
 *  no page-specific content lives here. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.root}>
      <Section width="default" spacing="md" tone="transparent" as="div">
        <div className={styles.top}>
          <Link href="/" className={styles.mark}>
            Swastha Yoga
          </Link>

          <ul className={styles.links}>
            {NAV_ROUTES.map((route) => (
              <li key={route.href}>
                <Link href={route.href} className={styles.link}>
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.bottom}>
          <p className={styles.meta}>Therapy &amp; Prenatal Care</p>
          <p className={styles.meta}>© {year} Swastha Yoga. All rights reserved.</p>
        </div>
      </Section>
    </footer>
  );
}
