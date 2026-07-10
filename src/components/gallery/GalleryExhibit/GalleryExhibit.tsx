"use client";

import { Fragment, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import Image from "next/image";
import { Section } from "@/components/ui/Section/Section";
import { Text } from "@/components/ui/Typography/Text";
import { Eyebrow } from "@/components/ui/Typography/Eyebrow";
import { Media } from "@/components/ui/Image/Media";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { ScrollTrigger } from "@/lib/gsap";
import { CATEGORIES, PHOTOS, STORY_MOMENTS, type GalleryCategory } from "./galleryData";
import styles from "./GalleryExhibit.module.css";

type ActiveCategory = GalleryCategory | "All";

/** The exhibition itself — category filter with a sliding underline,
 *  a CSS-columns masonry (varied ratios, no cards/borders/shadows),
 *  full-width story moments spliced in via column-span (unfiltered view
 *  only), and a fullscreen lightbox with keyboard + swipe navigation. */
export function GalleryExhibit() {
  const [active, setActive] = useState<ActiveCategory>("All");
  const [lightboxId, setLightboxId] = useState<string | null>(null);
  const [indicator, setIndicator] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  });
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const touchStartX = useRef<number | null>(null);

  const filtered = active === "All" ? PHOTOS : PHOTOS.filter((p) => p.category === active);
  const lightboxIndex = filtered.findIndex((p) => p.id === lightboxId);
  const current = lightboxIndex >= 0 ? filtered[lightboxIndex] : null;

  useLayoutEffect(() => {
    const el = buttonRefs.current[active];
    if (el) {
      setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
    }
  }, [active]);

  useEffect(() => {
    // Filtering changes this section's height, which shifts every
    // ScrollTrigger position below it (RecognitionHighlight, ClosingCTA) —
    // without this, their reveal triggers stay pinned to stale
    // coordinates and can silently never fire.
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [active]);

  function showAt(index: number) {
    const next = filtered[(index + filtered.length) % filtered.length];
    setLightboxId(next.id);
  }

  useEffect(() => {
    if (!current) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxId(null);
      if (e.key === "ArrowRight") showAt(lightboxIndex + 1);
      if (e.key === "ArrowLeft") showAt(lightboxIndex - 1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, lightboxIndex]);

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      showAt(lightboxIndex + (delta < 0 ? 1 : -1));
    }
    touchStartX.current = null;
  }

  return (
    <Section width="wide" spacing="lg" tone="transparent">
      <nav className={styles.nav} aria-label="Filter gallery by category">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            ref={(el) => {
              buttonRefs.current[category] = el;
            }}
            type="button"
            className={styles.navButton}
            data-active={active === category}
            onClick={() => setActive(category)}
          >
            {category}
          </button>
        ))}
        <span
          className={styles.indicator}
          style={{ left: indicator.left, width: indicator.width }}
          aria-hidden="true"
        />
      </nav>

      <div className={styles.masonry}>
        {filtered.map((photo, i) => {
          const story =
            active === "All" ? STORY_MOMENTS.find((s) => s.afterId === photo.id) : undefined;

          return (
            <Fragment key={photo.id}>
              <Reveal variant="scale-in" delay={(i % 6) * 0.06} className={styles.tileWrap}>
                <button
                  type="button"
                  className={styles.tile}
                  onClick={() => setLightboxId(photo.id)}
                  aria-label={`Open photo: ${photo.caption}`}
                >
                  <Media
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    ratio={photo.ratio}
                    radius="none"
                    reveal={false}
                    sizes="(max-width: 640px) 90vw, (max-width: 960px) 45vw, 30vw"
                    className={styles.tileImage}
                  />
                  <span className={styles.overlay}>
                    <Maximize2 size={18} strokeWidth={1.5} className={styles.expandIcon} />
                    <span className={styles.overlayCategory}>{photo.category}</span>
                    <span className={styles.overlayCaption}>{photo.caption}</span>
                  </span>
                </button>
              </Reveal>

              {story && (
                <Reveal variant="fade-in" className={styles.storyMoment}>
                  {story.kind === "quote" && (
                    <Text as="p" size="lg" className={styles.storyQuote}>
                      &ldquo;{story.text}&rdquo;
                    </Text>
                  )}
                  {story.kind === "reflection" && (
                    <div className={styles.storyReflection}>
                      <Eyebrow>{story.eyebrow}</Eyebrow>
                      <Text size="lg" color="muted" className={styles.storyReflectionText}>
                        {story.text}
                      </Text>
                    </div>
                  )}
                  {story.kind === "photo" && (
                    <div className={styles.storyPhoto}>
                      <Media
                        src={story.src}
                        alt={story.alt}
                        fill
                        ratio="wide"
                        radius="none"
                        reveal={false}
                        sizes="90vw"
                        wrapperClassName={styles.storyPhotoFrame}
                      />
                      <Text size="sm" color="muted" className={styles.storyPhotoCaption}>
                        {story.caption}
                      </Text>
                    </div>
                  )}
                </Reveal>
              )}
            </Fragment>
          );
        })}
      </div>

      {current && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          onClick={() => setLightboxId(null)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            type="button"
            className={styles.lightboxClose}
            onClick={() => setLightboxId(null)}
            aria-label="Close"
          >
            <X size={28} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            className={styles.lightboxPrev}
            onClick={(e) => {
              e.stopPropagation();
              showAt(lightboxIndex - 1);
            }}
            aria-label="Previous photo"
          >
            <ChevronLeft size={32} strokeWidth={1.5} />
          </button>

          <div className={styles.lightboxFrame} onClick={(e) => e.stopPropagation()}>
            <Image
              src={current.src}
              alt={current.alt}
              fill
              sizes="90vw"
              className={styles.lightboxImage}
            />
          </div>

          <button
            type="button"
            className={styles.lightboxNext}
            onClick={(e) => {
              e.stopPropagation();
              showAt(lightboxIndex + 1);
            }}
            aria-label="Next photo"
          >
            <ChevronRight size={32} strokeWidth={1.5} />
          </button>

          <div className={styles.lightboxCaption} onClick={(e) => e.stopPropagation()}>
            <Text as="p" size="md" color="paper">
              {current.caption}
            </Text>
            <Text as="p" size="sm" color="paper" className={styles.lightboxCounter}>
              {lightboxIndex + 1} / {filtered.length}
            </Text>
          </div>

          <div className={styles.thumbStrip} onClick={(e) => e.stopPropagation()}>
            {filtered.map((photo, i) => (
              <button
                key={photo.id}
                type="button"
                className={styles.thumb}
                data-active={i === lightboxIndex}
                onClick={() => setLightboxId(photo.id)}
                aria-label={`View photo ${i + 1}: ${photo.caption}`}
              >
                <Image src={photo.src} alt="" fill sizes="64px" className={styles.thumbImage} />
              </button>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
