import { Section } from "@/components/ui/Section/Section";
import { Eyebrow } from "@/components/ui/Typography/Eyebrow";
import { Heading } from "@/components/ui/Typography/Heading";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./ConditionsGrid.module.css";

const CONDITIONS = [
  "Back Pain",
  "Neck Pain",
  "Knee Pain",
  "Sciatica",
  "Pregnancy Wellness",
  "Stress & Anxiety",
  "Postural Issues",
] as const;

/** A plain, editorial index of conditions — text only, no icons or
 *  cards, so it reads as a reference list rather than a services grid. */
export function ConditionsGrid() {
  return (
    <Section width="default" spacing="lg" tone="transparent">
      <Reveal className={styles.header}>
        <Eyebrow>Frequently Treated</Eyebrow>
        <Heading level={2}>Conditions We See Every Week</Heading>
      </Reveal>

      <div className={styles.grid}>
        {CONDITIONS.map((condition, i) => (
          <Reveal key={condition} delay={i * 0.04} className={styles.item}>
            {condition}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
