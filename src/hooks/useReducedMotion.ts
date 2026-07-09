"use client";

import { useEffect, useSyncExternalStore } from "react";
import { useSceneStore } from "@/lib/store";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot(): boolean {
  return false;
}

/**
 * Reads the live `prefers-reduced-motion` value and keeps `useSceneStore`
 * in sync so animation modules (which read from the store, not this hook
 * directly) always see the current preference.
 */
export function useReducedMotion(): boolean {
  const reducedMotion = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const setReducedMotion = useSceneStore((s) => s.setReducedMotion);

  useEffect(() => {
    setReducedMotion(reducedMotion);
  }, [reducedMotion, setReducedMotion]);

  return reducedMotion;
}
