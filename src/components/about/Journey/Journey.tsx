import { Section } from "@/components/ui/Section/Section";
import { Eyebrow } from "@/components/ui/Typography/Eyebrow";
import { Heading } from "@/components/ui/Typography/Heading";
import { Text } from "@/components/ui/Typography/Text";
import { Media } from "@/components/ui/Image/Media";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./Journey.module.css";

type Beat =
  | { kind: "marker"; year: string; title: string; description: string }
  | { kind: "photo"; src: string; alt: string; caption: string; ratio: "portrait" | "landscape" };

/** A documentary retelling rather than a résumé timeline — markers and
 *  full-width photographs alternate down a single connecting line, so
 *  the page reads like following a story rather than scanning a list.
 *  Only real, dated moments from the founder's own practice — no
 *  invented milestones. */
const BEATS: Beat[] = [
  {
    kind: "marker",
    year: "2012",
    title: "First Practice",
    description:
      "One person, one mat — a personal Hatha yoga practice with no plan to teach anyone else.",
  },
  {
    kind: "photo",
    src: "/about/journey/practice-adiyogi.webp",
    alt: "Gandharva in a yoga pose before the Adiyogi Shiva statue",
    caption: "A practice that stayed personal for years before it became a studio.",
    ratio: "portrait",
  },
  {
    kind: "marker",
    year: "2017–18",
    title: "Competition & Recognition",
    description:
      "The personal practice met the wider yoga community for the first time — the Global Yoga Praveena Award, among the first outside recognition of a decade of discipline.",
  },
  {
    kind: "marker",
    year: "2022",
    title: "Founded Swastha Yoga",
    description:
      "The practice became a place — Swastha Yoga Therapy & Prenatal Centre opened its doors in Bengaluru.",
  },
  {
    kind: "photo",
    src: "/about/community/team-portrait.webp",
    alt: "Gandharva with three fellow instructors at the studio",
    caption: "A one-person practice became a team.",
    ratio: "landscape",
  },
  {
    kind: "marker",
    year: "Today",
    title: "A Practice for Others",
    description:
      "More than 1,000 students across five countries later, the question hasn't changed: what does this body need, right now.",
  },
  {
    kind: "photo",
    src: "/about/journey/today-class.webp",
    alt: "A full class of students at Swastha Yoga's studio today",
    caption: "Still one relationship at a time.",
    ratio: "landscape",
  },
  {
    kind: "photo",
    src: "/about/journey/founder-armbalance-fold.webp",
    alt: "Gandharva holding an advanced arm-balance forward fold against a brick wall",
    caption: "Teaching a room full of people didn't retire the personal practice.",
    ratio: "portrait",
  },
  {
    kind: "photo",
    src: "/about/journey/founder-toehold-fold.webp",
    alt: "Gandharva in a wide-legged toe-hold forward fold against a brick wall",
    caption: "The mat changes size. The discipline doesn't.",
    ratio: "portrait",
  },
  {
    kind: "photo",
    src: "/about/journey/founder-triangle-profile.webp",
    alt: "Gandharva in profile holding a side-angle triangle pose against a brick wall",
    caption: "Still practicing the shapes no one is watching him practice.",
    ratio: "portrait",
  },
];

export function Journey() {
  return (
    <Section width="narrow" spacing="lg" tone="transparent">
      <Reveal className={styles.header}>
        <Eyebrow>The Journey</Eyebrow>
        <Heading level={2}>A Decade, Told as It Happened</Heading>
      </Reveal>

      <div className={styles.timeline}>
        {BEATS.map((beat, i) =>
          beat.kind === "marker" ? (
            <Reveal key={beat.title} delay={i * 0.04} className={styles.marker}>
              <span className={styles.year}>{beat.year}</span>
              <span className={styles.markerBody}>
                <Heading level={3} className={styles.markerTitle}>
                  {beat.title}
                </Heading>
                <Text size="md" color="muted" className={styles.markerText}>
                  {beat.description}
                </Text>
              </span>
            </Reveal>
          ) : (
            <Reveal
              key={beat.src}
              variant="fade-in"
              delay={i * 0.04}
              className={styles.photoBeat}
            >
              <Media
                src={beat.src}
                alt={beat.alt}
                fill
                ratio={beat.ratio}
                radius="lg"
                reveal={false}
                sizes="(max-width: 780px) 90vw, 720px"
                wrapperClassName={styles.photoFrame}
              />
              <Text size="sm" color="muted" className={styles.caption}>
                {beat.caption}
              </Text>
            </Reveal>
          ),
        )}
      </div>
    </Section>
  );
}
