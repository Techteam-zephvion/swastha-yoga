import type { ReactNode } from "react";
import clsx from "clsx";
import styles from "./Typography.module.css";

export type HeadingLevel = 1 | 2 | 3 | 4;

export interface HeadingProps {
  children: ReactNode;
  /** Which heading tag to render. @default 2 */
  level?: HeadingLevel;
  /** Visual size — defaults to matching `level`, but can be set
   *  independently (e.g. an `<h2>` that should read visually like an
   *  h3 within a denser layout). */
  size?: HeadingLevel;
  color?: "ink" | "paper";
  className?: string;
}

/**
 * The shared serif display heading every page uses. Keeps the same
 * `--font-display` family/weight/letter-spacing the hero wordmark and
 * nav mark already use, at a moderate scale appropriate for page
 * content rather than the full-bleed hero treatment.
 */
export function Heading({ children, level = 2, size, color = "ink", className }: HeadingProps) {
  const Tag = `h${level}` as const;
  const visualSize = size ?? level;

  return (
    <Tag className={clsx(styles.heading, styles[`h${visualSize}`], styles[`color-${color}`], className)}>
      {children}
    </Tag>
  );
}
