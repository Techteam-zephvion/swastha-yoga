import { Section } from "@/components/ui/Section/Section";
import { Heading } from "@/components/ui/Typography/Heading";
import { Text } from "@/components/ui/Typography/Text";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./OpeningStory.module.css";

/** The page's opening beat — pure typography, no image, no card. Lets
 *  the story start on a single held breath rather than a hero photo
 *  and a paragraph. PageHero already carried the photographic entrance;
 *  this is the quiet line that follows it. */
export function OpeningStory() {
  return (
    <Section width="narrow" spacing="lg" tone="paper" className={styles.section}>
      <Reveal variant="fade-in" className={styles.wrap}>
        <Text as="p" size="lg" color="muted" className={styles.kicker}>
          Twelve years ago, this was one person, one mat, one question.
        </Text>
        <Heading level={2} size={1} className={styles.line}>
          This is the story of how a practice
          <br />
          became a place to heal.
        </Heading>
      </Reveal>
    </Section>
  );
}
