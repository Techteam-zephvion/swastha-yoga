import { Eyebrow } from "@/components/ui/Typography/Eyebrow";
import { Text } from "@/components/ui/Typography/Text";
import { Button } from "@/components/ui/Button/Button";
import { Section } from "@/components/ui/Section/Section";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./GuruTeaser.module.css";

/** A quiet threshold moment highlighting the teaching lineage leading
 *  into the full /guru page. */
export function GuruTeaser() {
  return (
    <Section width="narrow" spacing="lg" tone="paper" className={styles.section}>
      <Reveal delay={0.1} className={styles.copy}>
        <Eyebrow>Teaching Lineage</Eyebrow>
        <Text as="p" size="lg" className={styles.quote}>
          &ldquo;A teacher doesn&rsquo;t hand you the practice — they walk
          beside you until it becomes your own.&rdquo;
        </Text>
        <Text size="md" color="muted" className={styles.text}>
          Gandharva&rsquo;s own practice was shaped under the guidance of Dr.
          Sumitra M Patil, founder of Swastha Yoga, long before there was a
          studio to teach in. That same guru–shishya relationship guides how
          every student is met today: patient, personal, and passed down with
          care.
        </Text>
        <Button href="/guru" variant="ghost" className={styles.link}>
          Meet the Guru
        </Button>
      </Reveal>
    </Section>
  );
}

