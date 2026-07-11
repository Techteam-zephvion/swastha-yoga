import { Section } from "@/components/ui/Section/Section";
import { Eyebrow } from "@/components/ui/Typography/Eyebrow";
import { Heading } from "@/components/ui/Typography/Heading";
import { Text } from "@/components/ui/Typography/Text";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./ClassTimings.module.css";

const SCHEDULE = [
  {
    batch: "Morning",
    slots: ["5:00 – 6:00 AM", "6:00 – 7:00 AM", "7:00 – 8:00 AM", "8:15 – 9:15 AM"],
  },
  {
    batch: "Ladies Batch",
    slots: ["10:00 – 11:00 AM", "11:15 AM – 12:15 PM"],
  },
  {
    batch: "Evening",
    slots: ["4:00 – 5:00 PM", "5:00 – 6:00 PM", "6:00 – 7:00 PM", "7:00 – 8:00 PM"],
  },
] as const;

/** The studio's weekly class schedule, as a plain editorial table —
 *  batch on the left, individual slots on the right. */
export function ClassTimings() {
  return (
    <Section width="narrow" spacing="lg" tone="ivory">
      <Reveal className={styles.header}>
        <Eyebrow>Class Timings</Eyebrow>
        <Heading level={2}>Find a Slot That Fits Your Day</Heading>
        <Text size="sm" color="muted">
          Call{" "}
          <a href="tel:+917204888573" className={styles.phone}>
            72048 88573
          </a>{" "}
          to confirm a batch before your first visit.
        </Text>
      </Reveal>

      <div className={styles.table}>
        {SCHEDULE.map(({ batch, slots }, i) => (
          <Reveal key={batch} delay={i * 0.06} className={styles.row}>
            <Text as="span" size="sm" className={styles.batch}>
              {batch}
            </Text>
            <ul className={styles.slots}>
              {slots.map((slot) => (
                <li key={slot} className={styles.slot}>
                  {slot}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
