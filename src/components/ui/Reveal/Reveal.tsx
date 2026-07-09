"use client";

import type { ElementType, ReactNode } from "react";
import { useScrollReveal, type RevealVariant } from "@/hooks/useScrollReveal";

export interface RevealProps {
  children: ReactNode;
  /** @default "fade-up" */
  variant?: RevealVariant;
  /** Seconds to wait before the reveal starts once triggered. */
  delay?: number;
  /** Element/component to render as. @default "div" */
  as?: ElementType;
  className?: string;
}

/**
 * Declarative wrapper around `useScrollReveal` — the default way page
 * content opts into the shared reveal-on-scroll treatment. Wrap any
 * section, heading, card, or image with this instead of writing a new
 * ScrollTrigger by hand.
 */
export function Reveal({ children, variant = "fade-up", delay = 0, as, className }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useScrollReveal<HTMLElement>({ variant, delay });

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
