import { gsap } from "@/lib/gsap";
import type { TimelineBuilder } from "./timeline";

/** Brief hold before anything moves — the visitor arrives to a still
 *  frame for a beat before the scene starts breathing. */
const ENTRANCE_HOLD = 0.4;

const LOGO_RISE_DELAY = ENTRANCE_HOLD;
const LOGO_RISE_DURATION = 2;
const LOGO_RISE_DISTANCE = 120;
/** Approximates tokens.css's --ease-luxury (cubic-bezier(0.19, 1, 0.22,
 *  1)) — a long, gentle deceleration with no snap or overshoot. GSAP
 *  core doesn't accept arbitrary cubic-bezier strings without the
 *  CustomEase plugin, so this is the closest built-in equivalent. */
const LUXURY_EASE = "power4.out";

const SUBTITLE_FADE_DELAY = LOGO_RISE_DELAY + LOGO_RISE_DURATION * 0.65;
const SUBTITLE_FADE_DURATION = 1.6;

/** CTAs fade up once the subtitle has mostly settled. */
const CTA_FADE_DELAY = SUBTITLE_FADE_DELAY + SUBTITLE_FADE_DURATION * 0.7;
const CTA_FADE_DURATION = 1.2;
const CTA_RISE_DISTANCE = 24;

/** The scroll cue is the last thing to appear, once the CTAs have
 *  landed. */
const SCROLL_INDICATOR_DELAY = CTA_FADE_DELAY + CTA_FADE_DURATION * 0.75;
const SCROLL_INDICATOR_DURATION = 1;

/** The nav only starts sliding down once the logo reveal has finished
 *  — never competing with it for attention. */
const NAV_SLIDE_DELAY = LOGO_RISE_DELAY + LOGO_RISE_DURATION + 0.2;
const NAV_SLIDE_DURATION = 1.4;
const NAV_SLIDE_DISTANCE = -60;

const SUNLIGHT_BREATHE_DURATION = 14;
const PARTICLE_MIN_DELAY = 0.6;

/**
 * Master entrance + ambient sequence for the sunrise hero: the logo
 * rises from below the horizon first (never a fade), the subtitle
 * fades in as it settles, the two CTAs fade up after that, the scroll
 * cue fades in last, and only once the logo has landed does the
 * transparent nav bar slide down from above. Once things are moving,
 * sunlight/particles settle into slow, seamless ambient loops. Clouds,
 * fog, and mountains are driven separately by cloudTimeline; birds by
 * birdTimeline; the nav's post-entrance scrolled state by scrollTimeline.
 * The background photo itself is never touched here — it stays static;
 * only the overlay layers animate.
 */
export const heroTimeline: TimelineBuilder = ({ refs, reducedMotion }) => {
  if (refs.logo) {
    if (reducedMotion) {
      gsap.set(refs.logo, { y: 0, opacity: 1 });
    } else {
      gsap.fromTo(
        refs.logo,
        { y: LOGO_RISE_DISTANCE, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: LOGO_RISE_DURATION,
          delay: LOGO_RISE_DELAY,
          ease: LUXURY_EASE,
        },
      );
    }
  }

  if (refs.subtitle) {
    if (reducedMotion) {
      gsap.set(refs.subtitle, { y: 0, opacity: 1 });
    } else {
      gsap.fromTo(
        refs.subtitle,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: SUBTITLE_FADE_DURATION,
          delay: SUBTITLE_FADE_DELAY,
          ease: "power2.out",
        },
      );
    }
  }

  if (refs.cta) {
    if (reducedMotion) {
      gsap.set(refs.cta, { y: 0, opacity: 1 });
    } else {
      gsap.fromTo(
        refs.cta,
        { y: CTA_RISE_DISTANCE, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: CTA_FADE_DURATION,
          delay: CTA_FADE_DELAY,
          ease: "power2.out",
        },
      );
    }
  }

  if (refs.scrollIndicator) {
    if (reducedMotion) {
      gsap.set(refs.scrollIndicator, { y: 0, opacity: 1 });
    } else {
      gsap.fromTo(
        refs.scrollIndicator,
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: SCROLL_INDICATOR_DURATION,
          delay: SCROLL_INDICATOR_DELAY,
          ease: "power2.out",
        },
      );
    }
  }

  if (refs.nav) {
    if (reducedMotion) {
      gsap.set(refs.nav, { y: 0, opacity: 1 });
    } else {
      gsap.fromTo(
        refs.nav,
        { y: NAV_SLIDE_DISTANCE, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: NAV_SLIDE_DURATION,
          delay: NAV_SLIDE_DELAY,
          ease: LUXURY_EASE,
        },
      );
    }
  }

  if (refs.sunlight) {
    if (reducedMotion) {
      gsap.set(refs.sunlight, { opacity: 0.7 });
    } else {
      gsap.fromTo(
        refs.sunlight,
        { opacity: 0.4 },
        {
          opacity: 0.75,
          duration: SUNLIGHT_BREATHE_DURATION,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        },
      );
    }
  }

  if (refs.particles && !reducedMotion) {
    const motes = Array.from(refs.particles.querySelectorAll<HTMLElement>("[data-mote]"));
    motes.forEach((mote, i) => {
      gsap.set(mote, { opacity: 0 });
      gsap.to(mote, {
        opacity: gsap.utils.random(0.2, 0.55),
        y: `-=${gsap.utils.random(60, 140)}`,
        x: `+=${gsap.utils.random(-30, 30)}`,
        duration: gsap.utils.random(9, 16),
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: PARTICLE_MIN_DELAY + i * 0.6,
      });
    });
  }
};
