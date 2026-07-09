"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

export interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  /** Stop observing after the first time the target becomes visible. */
  once?: boolean;
}

/**
 * Generic visibility hook for lazy-mounting/animating layers only once
 * they're near the viewport (e.g. deferring particle/mist layers below
 * the fold). Returns a ref to attach and the current intersection state.
 */
export function useIntersectionObserver<T extends Element>(
  options: UseIntersectionObserverOptions = {},
): [RefObject<T | null>, boolean] {
  const { once = false, root = null, rootMargin = "0px", threshold = 0 } = options;
  const targetRef = useRef<T | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const node = targetRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && once) {
          observer.disconnect();
        }
      },
      { root, rootMargin, threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [root, rootMargin, threshold, once]);

  return [targetRef, isIntersecting];
}
