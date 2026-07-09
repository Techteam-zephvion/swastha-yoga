import { Section } from "@/components/ui/Section/Section";
import { Eyebrow } from "@/components/ui/Typography/Eyebrow";
import { Heading } from "@/components/ui/Typography/Heading";
import { Text } from "@/components/ui/Typography/Text";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./Credentials.module.css";

const STATS = [
  { value: "12", label: "Years of Practice" },
  { value: "1,000+", label: "Students Trained" },
  { value: "5", label: "Countries Taught In" },
];

interface TimelineEntry {
  year: string;
  title: string;
  issuer: string;
}

const TIMELINE: TimelineEntry[] = [
  { year: "2017–18", title: "Global Yoga Praveena Award", issuer: "Amrutha Yoga Kendra" },
  {
    year: "2019",
    title: "Yoga Merit Certificate — Advance II, 97%",
    issuer: "Karnataka Social Development Society",
  },
  {
    year: "2019",
    title: "Certificate of Appreciation",
    issuer: "Vishwa Samskruti Utsava, Dubai",
  },
  {
    year: "2022",
    title: "Founded Swastha Yoga Therapy & Prenatal Centre",
    issuer: "Bengaluru",
  },
  {
    year: "2023",
    title: "M.Sc. Yoga — First Class with Distinction",
    issuer: "VELS Institute",
  },
  {
    year: "Ongoing",
    title: "Certified Yoga Trainer",
    issuer: "Ministry of AYUSH, Skill India",
  },
  {
    year: "Ongoing",
    title: "Award of Excellence & Teacher Training Certification",
    issuer: "NITHYA Association",
  },
];

/** Credentials presented as a chronological timeline rather than a wall
 *  of certificate scans — the same restraint as the rest of the page. */
export function Credentials() {
  return (
    <Section width="default" spacing="lg" tone="ivory">
      <Reveal className={styles.header}>
        <Eyebrow>Credentials &amp; Recognition</Eyebrow>
        <Heading level={2}>A Decade of Dedicated Practice</Heading>
      </Reveal>

      <Reveal delay={0.1} className={styles.stats}>
        {STATS.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </Reveal>

      <ol className={styles.timeline}>
        {TIMELINE.map((entry, i) => (
          <Reveal key={entry.title} as="li" delay={i * 0.05} className={styles.entry}>
            <span className={styles.year}>{entry.year}</span>
            <span className={styles.entryBody}>
              <Text as="span" size="md" className={styles.entryTitle}>
                {entry.title}
              </Text>
              <Text as="span" size="sm" color="muted" className={styles.entryIssuer}>
                {entry.issuer}
              </Text>
            </span>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
