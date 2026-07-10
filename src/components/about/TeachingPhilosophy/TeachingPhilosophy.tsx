import { Eyebrow } from "@/components/ui/Typography/Eyebrow";
import { Heading } from "@/components/ui/Typography/Heading";
import { Section } from "@/components/ui/Section/Section";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./TeachingPhilosophy.module.css";

const WORDS = ["Practice", "Presence", "Healing", "Discipline", "Compassion"];

/** Five words instead of an icon grid — no icons, no cards, just the
 *  same heading scale the rest of the site already uses, given room to
 *  breathe one at a time rather than laid out as a feature list. */
export function TeachingPhilosophy() {
  return (
    <Section width="narrow" spacing="lg" tone="transparent" className={styles.section}>
      <Reveal className={styles.eyebrow}>
        <Eyebrow>What Guides Every Session</Eyebrow>
      </Reveal>

      <div className={styles.words}>
        {WORDS.map((word, i) => (
          <Reveal key={word} delay={i * 0.08} className={styles.wordRow}>
            <Heading level={2} size={1} className={styles.word}>
              {word}
            </Heading>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
