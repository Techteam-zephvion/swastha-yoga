import { Heading } from "@/components/ui/Typography/Heading";
import { Text } from "@/components/ui/Typography/Text";
import { Button } from "@/components/ui/Button/Button";
import { Section } from "@/components/ui/Section/Section";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./WelcomeIntro.module.css";

/** The homepage's opening beat after the hero — pure typography, no
 *  image, mirroring the same quiet held-breath treatment About opens
 *  with (see OpeningStory), but scoped to a single studio-level
 *  introduction rather than a life story. */
export function WelcomeIntro() {
  return (
    <Section width="narrow" spacing="lg" tone="paper" className={styles.section}>
      <Reveal variant="fade-in" className={styles.wrap}>
        <Text as="p" size="lg" color="muted" className={styles.kicker}>
          A yoga therapy and prenatal studio in Girinagar, Bengaluru.
        </Text>
        <Heading level={2} size={1} className={styles.line}>
          Practice That Meets You Where You Are
        </Heading>
        <Text size="md" color="muted" className={styles.paragraph}>
          Every session starts with the body in front of us, not a fixed
          sequence taught to every room. Twelve years of teaching, one
          question at the center of it: what does this person need today?
        </Text>
        <Button href="/about" variant="ghost" className={styles.link}>
          Read Our Story
        </Button>
      </Reveal>
    </Section>
  );
}
