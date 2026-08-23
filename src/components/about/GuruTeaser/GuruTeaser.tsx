import { Eyebrow } from "@/components/ui/Typography/Eyebrow";
import { Text } from "@/components/ui/Typography/Text";
import { Media } from "@/components/ui/Image/Media";
import { Button } from "@/components/ui/Button/Button";
import { Section } from "@/components/ui/Section/Section";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./GuruTeaser.module.css";

/** A quiet threshold moment, not another content block — one image, one
 *  quote, one short line, and a single quiet way through to the full
 *  /guru page. Nothing competes for attention here. */
export function GuruTeaser() {
  return (
    <Section width="narrow" spacing="lg" tone="paper" className={styles.section}>
      <Reveal variant="fade-in" className={styles.portraitWrap}>
        <Media
          src="/guru/guru-portrait.webp"
          alt="Dr. Sumitra M Patil, founder of Swastha Yoga"
          fill
          ratio="portrait"
          radius="lg"
          reveal={false}
          sizes="(max-width: 640px) 55vw, 260px"
          wrapperClassName={styles.portraitFrame}
        />
      </Reveal>

      <Reveal delay={0.15} className={styles.copy}>
        <Eyebrow>Teaching Lineage</Eyebrow>
        <Text as="p" size="lg" className={styles.quote}>
          &ldquo;A teacher doesn&rsquo;t hand you the practice — they walk
          beside you until it becomes your own.&rdquo;
        </Text>
        <Text size="md" color="muted" className={styles.text}>
          Gandharva&rsquo;s own practice was shaped under the guidance of Dr.
          Sumitra M Patil, founder of Swastha Yoga, long before there was a
          studio to teach in.
        </Text>
        <Button href="/guru" variant="ghost" className={styles.link}>
          Meet the Guru
        </Button>
      </Reveal>
    </Section>
  );
}
