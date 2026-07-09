import type { ElementType, ReactNode } from "react";
import clsx from "clsx";
import styles from "./Typography.module.css";

export interface TextProps {
  children: ReactNode;
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** @default "p" */
  as?: ElementType;
  color?: "ink" | "paper" | "muted";
  className?: string;
}

/** The shared body-copy component — sans-serif, the site's one text
 *  scale (sm/md/lg), used for every paragraph across every page. */
export function Text({ children, size = "md", as, color = "ink", className }: TextProps) {
  const Tag = (as ?? "p") as ElementType;

  return (
    <Tag className={clsx(styles.text, styles[`text-${size}`], styles[`color-${color}`], className)}>
      {children}
    </Tag>
  );
}
