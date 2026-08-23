import { Section } from "@/components/ui/Section/Section";
import { Eyebrow } from "@/components/ui/Typography/Eyebrow";
import { Heading } from "@/components/ui/Typography/Heading";
import { Text } from "@/components/ui/Typography/Text";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./ClinicInfo.module.css";

const DETAILS = [
  {
    label: "Address",
    value: "Swastha Yoga Therapy and Prenatal Center, Girinagar, Bengaluru",
  },
  {
    label: "Opening Hours",
    value: "Monday–Saturday, 6:00 AM–8:00 PM. Closed Sundays.",
  },
  {
    label: "Consultation Availability",
    value: "By appointment — morning and evening slots fill first, book a few days ahead where possible.",
  },
  {
    label: "Getting Here",
    value: "Street parking available nearby; a short walk from Girinagar bus stands.",
  },
] as const;

/** Practical clinic details, presented the same way the Credentials
 *  timeline handles fact-heavy content — plain rows, no icon clutter. */
export function ClinicInfo() {
  return (
    <Section width="default" spacing="lg" tone="ivory">
      <Reveal className={styles.header}>
        <Eyebrow>Clinic Information</Eyebrow>
        <Heading level={2}>Visiting in Person</Heading>
      </Reveal>

      <dl className={styles.list}>
        {DETAILS.map((detail, i) => (
          <Reveal key={detail.label} as="div" delay={i * 0.05} className={styles.entry}>
            <dt className={styles.term}>{detail.label}</dt>
            <dd className={styles.description}>
              <Text as="span" size="md" color="muted">
                {detail.value}
              </Text>
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
