"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { Section } from "@/components/ui/Section/Section";
import { Eyebrow } from "@/components/ui/Typography/Eyebrow";
import { Heading } from "@/components/ui/Typography/Heading";
import { Text } from "@/components/ui/Typography/Text";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./LearningJourney.module.css";

interface Certificate {
  title: string;
  issuer: string;
  year: string;
  src: string;
  /** The one certificate that gets a slightly larger, spotlighted
   *  thumbnail rather than sitting flush with its siblings. */
  spotlight?: boolean;
}

interface Chapter {
  label: string;
  certificates: Certificate[];
}

/** The same seven certificates as before (VELS M.Sc., NITHYA Teacher
 *  Training, Skill India, KSD merit certificate, NITHYA Award of
 *  Excellence, Vishwa Samskruti Utsava Dubai, Global Yoga Praveena
 *  Award), now shown as the documents themselves rather than described
 *  in a text row — a collected archive, not a résumé line. */
const CHAPTERS: Chapter[] = [
  {
    label: "Education",
    certificates: [
      {
        title: "M.Sc. Yoga — First Class with Distinction",
        issuer: "VELS Institute",
        year: "2023",
        src: "/certificates/vels-msc-yoga-degree.webp",
      },
    ],
  },
  {
    label: "Professional Certifications",
    certificates: [
      {
        title: "Teacher Training Certification",
        issuer: "NITHYA Association",
        year: "Ongoing",
        src: "/certificates/nithya-teacher-training-certificate.webp",
      },
      {
        title: "Certified Yoga Trainer",
        issuer: "Ministry of AYUSH, Skill India",
        year: "Ongoing",
        src: "/certificates/skill-india-yoga-trainer-certificate.webp",
      },
      {
        title: "Yoga Merit Certificate — Advance II, 97%",
        issuer: "Karnataka Social Development Society",
        year: "2019",
        src: "/certificates/ksd-society-merit-certificate.webp",
      },
    ],
  },
  {
    label: "Recognition",
    certificates: [
      {
        title: "Global Yoga Praveena Award",
        issuer: "Amrutha Yoga Kendra",
        year: "2017–18",
        src: "/certificates/global-yoga-praveena-award-2017-18.webp",
        spotlight: true,
      },
      {
        title: "Certificate of Appreciation",
        issuer: "Vishwa Samskruti Utsava, Dubai",
        year: "2019",
        src: "/certificates/vishwa-samskruti-utsava-dubai-certificate.webp",
      },
      {
        title: "Award of Excellence",
        issuer: "NITHYA Association",
        year: "Ongoing",
        src: "/certificates/nithya-award-of-excellence.webp",
      },
    ],
  },
];

/** Fixed, hand-picked rotation/offset values per position — deterministic
 *  (not Math.random()) so server and client render identically, but
 *  varied enough that the wall doesn't look grid-aligned. */
const TILT = [-3, 2, -2, 3, -1.5, 2.5, 1.5];
const LIFT = [0, 14, -8, 6, -12, 4, -6];

export function LearningJourney() {
  const [open, setOpen] = useState<Certificate | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  let tileIndex = 0;

  return (
    <Section width="default" spacing="lg" tone="ivory">
      <Reveal className={styles.header}>
        <Eyebrow>Learning Journey</Eyebrow>
        <Heading level={2}>A Decade, Collected</Heading>
        <Text size="lg" color="muted" className={styles.intro}>
          Not a résumé — a wall. Every certificate here was earned over
          years, not printed for a website.
        </Text>
      </Reveal>

      <div className={styles.chapters}>
        {CHAPTERS.map((chapter, chapterIndex) => (
          <div key={chapter.label} className={styles.chapter}>
            <Reveal delay={chapterIndex * 0.1} className={styles.chapterLabel}>
              <Text as="span" size="sm" className={styles.chapterLabelText}>
                {chapter.label}
              </Text>
            </Reveal>

            <div className={styles.wall}>
              {chapter.certificates.map((cert) => {
                const i = tileIndex++;
                const tilt = TILT[i % TILT.length];
                const lift = LIFT[i % LIFT.length];
                return (
                  <div
                    key={cert.title}
                    className={cert.spotlight ? styles.tileSpotlightWrap : styles.tileWrap}
                    style={{ transform: `rotate(${tilt}deg) translateY(${lift}px)` }}
                  >
                    <Reveal variant="scale-in" delay={chapterIndex * 0.1 + (i % 3) * 0.06}>
                      <button
                        type="button"
                        className={styles.tile}
                        onClick={() => setOpen(cert)}
                        aria-label={`View certificate: ${cert.title}, ${cert.issuer}`}
                      >
                        <Image
                          src={cert.src}
                          alt={`${cert.title} — ${cert.issuer}`}
                          fill
                          sizes={
                            cert.spotlight
                              ? "(max-width: 640px) 60vw, 260px"
                              : "(max-width: 640px) 42vw, 180px"
                          }
                          className={styles.tileImage}
                        />
                      </button>
                      <Text as="span" size="sm" color="muted" className={styles.tileCaption}>
                        {cert.year}
                      </Text>
                    </Reveal>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {open && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={open.title}
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            className={styles.lightboxClose}
            onClick={() => setOpen(null)}
            aria-label="Close"
          >
            <X size={28} strokeWidth={1.5} />
          </button>
          <div className={styles.lightboxFrame} onClick={(e) => e.stopPropagation()}>
            <Image
              src={open.src}
              alt={`${open.title} — ${open.issuer}`}
              fill
              sizes="90vw"
              className={styles.lightboxImage}
            />
          </div>
          <div className={styles.lightboxCaption}>
            <Text as="p" size="md" color="paper" className={styles.lightboxTitle}>
              {open.title}
            </Text>
            <Text as="p" size="sm" color="paper" className={styles.lightboxIssuer}>
              {open.issuer} · {open.year}
            </Text>
          </div>
        </div>
      )}
    </Section>
  );
}
