import { Section } from "@/components/ui/Section/Section";
import { Eyebrow } from "@/components/ui/Typography/Eyebrow";
import { Heading } from "@/components/ui/Typography/Heading";
import { Text } from "@/components/ui/Typography/Text";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./Philosophy.module.css";

/** The studio's approach, stated plainly — a single, generously-spaced
 *  column rather than a marketing grid, so it reads like a statement of
 *  intent rather than a features list. */
export function Philosophy() {
  return (
    <Section width="narrow" spacing="lg" tone="transparent">
      <Reveal className={styles.wrap}>
        <Eyebrow>Our Philosophy</Eyebrow>
        <Heading level={2} className={styles.heading}>
          Calm. Considered. Personal.
        </Heading>
        <Text size="lg" className={styles.paragraph}>
          Swastha Yoga isn&rsquo;t built around a fixed sequence taught the
          same way to every room. Each session is shaped around the person
          in front of us — their body, their stage of life, and what they
          actually need that day, whether that&rsquo;s therapeutic recovery,
          prenatal care, or simply a quieter mind.
        </Text>
        <Text size="lg" className={styles.paragraph}>
          That personalization is grounded in structured training, not
          instinct alone — an MSc in Yoga, certified therapeutic and prenatal
          practice, and specializations in sound and energy work sit
          alongside classical Hatha yoga. The result is a practice that
          stays gentle without being vague, and precise without losing its
          warmth.
        </Text>
      </Reveal>
    </Section>
  );
}
