import type { ElementType, ReactNode } from "react";
import clsx from "clsx";
import styles from "./Section.module.css";

export type SectionWidth = "narrow" | "default" | "wide" | "full";
export type SectionSpacing = "none" | "sm" | "md" | "lg";
export type SectionTone = "paper" | "ivory" | "transparent";

export interface SectionProps {
  children: ReactNode;
  /** @default "default" */
  width?: SectionWidth;
  /** Vertical padding-block. @default "lg" */
  spacing?: SectionSpacing;
  /** Background tone. @default "transparent" */
  tone?: SectionTone;
  as?: ElementType;
  className?: string;
  id?: string;
}

/**
 * The one shared page-section wrapper every page composes with instead
 * of hand-rolling max-width/padding per page. Controls horizontal
 * measure (`width`), vertical rhythm (`spacing`), and background tone
 * (`tone`) — the three things that would otherwise drift out of sync
 * between pages built independently.
 */
export function Section({
  children,
  width = "default",
  spacing = "lg",
  tone = "transparent",
  as,
  className,
  id,
}: SectionProps) {
  const Tag = (as ?? "section") as ElementType;

  return (
    <Tag
      id={id}
      className={clsx(styles.section, styles[`spacing-${spacing}`], styles[`tone-${tone}`], className)}
    >
      <div className={clsx(styles.container, styles[`width-${width}`])}>{children}</div>
    </Tag>
  );
}
