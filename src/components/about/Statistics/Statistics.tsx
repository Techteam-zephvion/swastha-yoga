import { Heading } from "@/components/ui/Typography/Heading";
import { Text } from "@/components/ui/Typography/Text";
import { Section } from "@/components/ui/Section/Section";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./Statistics.module.css";

const STATS = [
  { value: "12", label: "Years" },
  { value: "1,000+", label: "Students" },
  { value: "5", label: "Countries" },
];

/** No cards, no icons — just the numbers themselves, given the same
 *  amount of room a pull-quote would get. */
export function Statistics() {
  return (
    <Section width="default" spacing="lg" tone="transparent" className={styles.section}>
      <div className={styles.row}>
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} variant="scale-in" delay={i * 0.1} className={styles.stat}>
            <Heading level={2} size={1} className={styles.value}>
              {stat.value}
            </Heading>
            <Text as="span" size="sm" color="muted" className={styles.label}>
              {stat.label}
            </Text>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
