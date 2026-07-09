import { ScrollTrigger } from "@/lib/gsap";
import type { TimelineBuilder } from "./timeline";

const SCROLL_THRESHOLD = 40;

/**
 * ScrollTrigger-driven behavior for the hero. Currently: toggles the
 * nav's `data-scrolled` attribute once the page has scrolled past
 * SCROLL_THRESHOLD, switching it from fully transparent to the frosted/
 * translucent treatment defined in Nav.module.css. This runs regardless
 * of `reducedMotion` — it's a short color/blur transition tied to a
 * legibility need (the nav must stay readable over arbitrary content
 * once scrolled), not decorative motion.
 *
 * Logo/subtitle drift, cloud parallax, and fog thinning as the visitor
 * scrolls past the first viewport are still unimplemented — there's no
 * content below the hero yet to scroll into. See ARCHITECTURE.md.
 */
export const scrollTimeline: TimelineBuilder = ({ refs }) => {
  const nav = refs.nav;
  if (!nav) return;

  const applyScrolledState = () => {
    if (window.scrollY > SCROLL_THRESHOLD) {
      nav.setAttribute("data-scrolled", "true");
    } else {
      nav.removeAttribute("data-scrolled");
    }
  };

  applyScrolledState();

  ScrollTrigger.create({
    start: 0,
    // A large fixed pixel value rather than "max": "max" resolves to
    // the page's scrollable distance *at creation time*, which is 0
    // while the hero is the only section on the page — that would
    // make ScrollTrigger treat this as a zero-length, permanently
    // "complete" trigger and never fire onUpdate again once real
    // content is added below. A fixed end has no such dependency.
    end: 100000,
    onUpdate: applyScrolledState,
  });
};
