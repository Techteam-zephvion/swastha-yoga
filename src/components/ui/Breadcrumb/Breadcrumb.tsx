import clsx from "clsx";
import Link from "next/link";
import styles from "./Breadcrumb.module.css";

export interface BreadcrumbItem {
  label: string;
  /** Omit on the final (current-page) item — it renders as plain text. */
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  /** @default "ink" — use "paper" over dark backdrops like PageHero. */
  tone?: "ink" | "paper";
  className?: string;
}

/** The small, uppercase, wide-tracked trail used at the top of every
 *  internal page — same nav-adjacent typographic treatment as the rest
 *  of the site's chrome. */
export function Breadcrumb({ items, tone = "ink", className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className={clsx(styles.list, styles[`tone-${tone}`])}>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.label} className={styles.item}>
              {item.href && !isLast ? (
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              ) : (
                <span className={styles.current} aria-current={isLast ? "page" : undefined}>
                  {item.label}
                </span>
              )}
              {!isLast && (
                <span className={styles.separator} aria-hidden="true">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
