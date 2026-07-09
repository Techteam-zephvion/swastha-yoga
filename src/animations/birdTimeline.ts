import { gsap } from "@/lib/gsap";
import type { TimelineBuilder } from "./timeline";

const MIN_PAUSE = 3;
const MAX_PAUSE = 7;
const MIN_DURATION = 18;
const MAX_DURATION = 26;
/** Opacity ramps up/down over a short, fixed window at each end of the
 *  flight rather than across the whole duration, so a bird reads as
 *  fully "in flight" for most of its crossing instead of spending half
 *  the flight barely visible under a slow sine ease. */
const FADE_DURATION = 1.6;

function randomBetween(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

/** Sends one bird on a single, slow left-to-right (or right-to-left)
 *  crossing at a random height, then — after a calm pause — sends it
 *  on another. Every bird runs this loop entirely independently of the
 *  others, on its own heading, height, and timing. */
function scheduleFlight(bird: Element): void {
  const fromLeft = Math.random() > 0.5;
  const startX = fromLeft ? "-10vw" : "110vw";
  const endX = fromLeft ? "110vw" : "-10vw";
  const flightY = randomBetween(6, 30);
  const duration = randomBetween(MIN_DURATION, MAX_DURATION);

  gsap.set(bird, {
    // The sprite artwork faces right (beak/head on the right, tail
    // trailing left) — confirmed with an isolated static-HTML test,
    // no app/dev-server involved. Flip it only when flying
    // right-to-left so it faces the direction it's actually heading.
    scaleX: fromLeft ? 1 : -1,
    x: startX,
    y: `${flightY}vh`,
    opacity: 0,
  });

  const tl = gsap.timeline({
    onComplete: () => {
      gsap.set(bird, { opacity: 0 });
      gsap.delayedCall(randomBetween(MIN_PAUSE, MAX_PAUSE), () => scheduleFlight(bird));
    },
  });
  // Position travels the full duration on one smooth, slow ease.
  tl.to(bird, { x: endX, duration, ease: "sine.inOut" }, 0);
  // Opacity fades in fast, holds, then fades out fast — independent of
  // how long the crossing itself takes.
  tl.to(bird, { opacity: 1, duration: FADE_DURATION, ease: "sine.out" }, 0);
  tl.to(bird, { opacity: 0, duration: FADE_DURATION, ease: "sine.in" }, duration - FADE_DURATION);
}

/**
 * Schedules continuous, independent, slow flight loops for the (three)
 * bird elements inside the `birds` container — each on its own
 * heading/height/timing. Purely ambient — never tied to the entrance
 * sequence.
 */
export const birdTimeline: TimelineBuilder = ({ refs, reducedMotion }) => {
  const container = refs.birds;
  if (!container || reducedMotion) return;

  const birds = Array.from(container.querySelectorAll("[data-bird]"));
  birds.forEach((bird, index) => {
    gsap.set(bird, { opacity: 0 });
    gsap.delayedCall(index * 1.2, () => scheduleFlight(bird));
  });
};
