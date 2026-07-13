"use client";

import NextImage, { type ImageProps as NextImageProps } from "next/image";
import clsx from "clsx";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./Media.module.css";

export type MediaRadius = "none" | "sm" | "md" | "lg";
export type MediaRatio = "square" | "portrait" | "landscape" | "wide" | "auto";

export interface MediaProps extends Omit<NextImageProps, "className"> {
  radius?: MediaRadius;
  ratio?: MediaRatio;
  /** Fades/rises in the first time it scrolls into view. @default true */
  reveal?: boolean;
  className?: string;
  wrapperClassName?: string;
}

/**
 * The one shared image treatment for every page: consistent corner
 * radius, a fixed set of aspect ratios (so a gallery/card grid never
 * has ad hoc per-image cropping), and an opt-out scroll reveal — all on
 * top of `next/image`, never a raw `<img>`.
 */
export function Media({
  radius = "md",
  ratio = "auto",
  reveal = true,
  className,
  wrapperClassName,
  alt,
  ...imageProps
}: MediaProps) {
  const revealRef = useScrollReveal<HTMLDivElement>({ variant: "fade-in" });

  return (
    <div
      ref={reveal ? revealRef : undefined}
      className={clsx(
        styles.wrapper,
        styles[`radius-${radius}`],
        styles[`ratio-${ratio}`],
        wrapperClassName,
      )}
      style={reveal ? { willChange: "opacity" } : undefined}
    >
      <NextImage alt={alt} className={clsx(styles.image, className)} {...imageProps} />
    </div>
  );
}
