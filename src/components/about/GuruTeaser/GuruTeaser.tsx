import { Eyebrow } from "@/components/ui/Typography/Eyebrow";
import { Text } from "@/components/ui/Typography/Text";
import { Media } from "@/components/ui/Image/Media";
import { Button } from "@/components/ui/Button/Button";
import { Section } from "@/components/ui/Section/Section";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./GuruTeaser.module.css";

/** A quiet threshold moment highlighting the teaching lineage — Gandharva
 *  with his Guru Dr. Sumitra M Patil, and Dr. Sumitra's portrait, leading
 *  into the full /guru page. */
export function GuruTeaser() {
  return (
    <Section width="default" spacing="lg" tone="paper" className={styles.section}>
      <div className={styles.portraitsGrid}>
        <Reveal variant="fade-in" className={styles.portraitItem}>
          <Media
            src="/guru/gandharva-and-guru.webp"
            alt="Gandharva Natesh with his Guru, Dr. Sumitra M Patil, at Swastha Yoga"
            fill
            ratio="portrait"
            radius="lg"
            reveal={false}
            sizes="(max-width: 640px) 45vw, 220px"
            wrapperClassName={styles.portraitFrame}
          />
          <Text size="sm" color="muted" className={styles.caption}>
            Gandharva with Guru Dr. Sumitra
          </Text>
        </Reveal>

        <Reveal variant="fade-in" delay={0.1} className={styles.portraitItem}>
          <Media
            src="/guru/guru-portrait.webp"
            alt="Dr. Sumitra M Patil, founder of Swastha Yoga"
            fill
            ratio="portrait"
            radius="lg"
            reveal={false}
            sizes="(max-width: 640px) 45vw, 220px"
            wrapperClassName={styles.portraitFrame}
          />
          <Text size="sm" color="muted" className={styles.caption}>
            Dr. Sumitra M Patil · Founder
          </Text>
        </Reveal>
      </div>

      <Reveal delay={0.2} className={styles.copy}>
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

