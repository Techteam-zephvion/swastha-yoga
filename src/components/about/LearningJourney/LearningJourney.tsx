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
  /** Matches the certificate's real orientation so the grid tile shows
   *  the document intact rather than an arbitrary crop. */
  ratio: "portrait" | "landscape";
}

interface Chapter {
  label: string;
  certificates: Certificate[];
}

/** The same seven certificates as before (VELS M.Sc., NITHYA Teacher
 *  Training, Skill India, KSD merit certificate, NITHYA Award of
 *  Excellence, Vishwa Samskruti Utsava Dubai, Global Yoga Praveena
 *  Award), shown as a legible grid — full, readable documents rather
 *  than tilted, cropped thumbnails — with a click-to-enlarge lightbox
 *  for a closer look. */
const CHAPTERS: Chapter[] = [
  {
    label: "Education",
    certificates: [
      {
        title: "M.Sc. Yoga — First Class with Distinction",
        issuer: "VELS Institute",
        year: "2023",
        src: "/certificates/vels-msc-yoga-degree.webp",
        ratio: "portrait",
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
        ratio: "landscape",
      },
      {
        title: "Certified Yoga Trainer",
        issuer: "Ministry of AYUSH, Skill India",
        year: "Ongoing",
        src: "/certificates/skill-india-yoga-trainer-certificate.webp",
        ratio: "landscape",
      },
      {
        title: "Yoga Merit Certificate — Advance II, 97%",
        issuer: "Karnataka Social Development Society",
        year: "2019",
        src: "/certificates/ksd-society-merit-certificate.webp",
        ratio: "landscape",
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
        ratio: "portrait",
      },
      {
        title: "Certificate of Appreciation",
        issuer: "Vishwa Samskruti Utsava, Dubai",
        year: "2019",
        src: "/certificates/vishwa-samskruti-utsava-dubai-certificate.webp",
        ratio: "landscape",
      },
      {
        title: "Award of Excellence",
        issuer: "NITHYA Association",
        year: "Ongoing",
        src: "/certificates/nithya-award-of-excellence.webp",
        ratio: "landscape",
      },
    ],
  },
];

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

  return (
    <Section width="default" spacing="lg" tone="ivory">
      <Reveal className={styles.header}>
        <Eyebrow>Learning Journey</Eyebrow>
        <Heading level={2}>A Decade, Collected</Heading>
        <Text size="lg" color="muted" className={styles.intro}>
          Gandharva&rsquo;s own credentials, not a résumé — a collection.
          Every certificate here was earned over years, not printed for a
          website.
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

            <div className={styles.grid}>
              {chapter.certificates.map((cert, i) => (
                <Reveal
                  key={cert.title}
                  variant="fade-up"
                  delay={chapterIndex * 0.1 + i * 0.06}
                  className={styles.card}
                >
                  <button
                    type="button"
                    className={styles.tile}
                    data-ratio={cert.ratio}
                    onClick={() => setOpen(cert)}
                    aria-label={`View certificate: ${cert.title}, ${cert.issuer}`}
                  >
                    <Image
                      src={cert.src}
                      alt={`${cert.title} — ${cert.issuer}`}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 280px"
                      className={styles.tileImage}
                    />
                  </button>
                  <Text as="p" size="sm" className={styles.cardTitle}>
                    {cert.title}
                  </Text>
                  <Text as="span" size="sm" color="muted" className={styles.cardMeta}>
                    {cert.issuer} · {cert.year}
                  </Text>
                </Reveal>
              ))}
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
