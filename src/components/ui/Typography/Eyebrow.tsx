import type { ReactNode } from "react";
import clsx from "clsx";
import styles from "./Typography.module.css";

export interface EyebrowProps {
  children: ReactNode;
  color?: "ink" | "paper";
  className?: string;
}

/**
 * The small, uppercase, wide-tracked label used above headings
 * ("THERAPY & PRENATAL CENTER"-style) — the same treatment as the hero
 * subtitle and nav links, generalized for use in regular page content.
 */
export function Eyebrow({ children, color = "ink", className }: EyebrowProps) {
  return <p className={clsx(styles.eyebrow, styles[`color-${color}`], className)}>{children}</p>;
}
