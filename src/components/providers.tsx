"use client";

import type { ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useLenis } from "@/hooks/useLenis";

/**
 * Root-level client wiring: keeps `useSceneStore`'s reduced-motion flag
 * in sync with the OS preference and initializes Lenis smooth scrolling
 * (skipped automatically when reduced motion is on). Deliberately does
 * not render any hero scene — that's composed inside `app/page.tsx` once
 * it exists.
 */
export function Providers({ children }: { children: ReactNode }) {
  const reducedMotion = useReducedMotion();
  useLenis(reducedMotion);

  return <>{children}</>;
}
