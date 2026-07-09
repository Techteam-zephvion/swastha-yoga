import { create } from "zustand";

export interface SceneState {
  /** True once the hero's critical assets have loaded and it's safe to
   *  start the entrance timeline. */
  sceneReady: boolean;
  /** Mirrors `prefers-reduced-motion`; every animation module must check
   *  this before creating scroll/time-based motion. */
  reducedMotion: boolean;
  /** 0-1 scroll progress through the hero section, updated by
   *  scrollTimeline's ScrollTrigger for any component that needs it
   *  outside of GSAP (e.g. for accessibility announcements). */
  scrollProgress: number;

  setSceneReady: (ready: boolean) => void;
  setReducedMotion: (reduced: boolean) => void;
  setScrollProgress: (progress: number) => void;
}

export const useSceneStore = create<SceneState>((set) => ({
  sceneReady: false,
  reducedMotion: false,
  scrollProgress: 0,

  setSceneReady: (ready) => set({ sceneReady: ready }),
  setReducedMotion: (reduced) => set({ reducedMotion: reduced }),
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
}));
