import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "secondary" | "ghost";

interface SharedProps {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

export type ButtonProps =
  | (SharedProps & { href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">)
  | (SharedProps & { href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>);

/**
 * The one shared button/CTA component every page uses. Same visual
 * language as the homepage hero's CTAs (ivory pill primary, bordered
 * transparent secondary with a warm hover glow) — a `ghost` variant is
 * added for lower-emphasis actions (e.g. inline text-adjacent links)
 * that the hero didn't need. Renders a Next.js `Link` when `href` is
 * given, otherwise a real `<button>`.
 */
export function Button({ children, variant = "primary", className, ...props }: ButtonProps) {
  const classes = clsx(styles.button, styles[variant], className);

  if ("href" in props && props.href !== undefined) {
    const { href, ...anchorProps } = props as SharedProps & {
      href: string;
    } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type="button" className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
