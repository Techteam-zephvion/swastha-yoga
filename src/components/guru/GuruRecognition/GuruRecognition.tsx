import { Section } from "@/components/ui/Section/Section";
import { Eyebrow } from "@/components/ui/Typography/Eyebrow";
import { Heading } from "@/components/ui/Typography/Heading";
import { Text } from "@/components/ui/Typography/Text";
import { Media } from "@/components/ui/Image/Media";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./GuruRecognition.module.css";

/** A recognition moment from the guru's own record — the 15th South
 *  Indian Yogasana Championship, Dec 2017 — presented as a plain
 *  editorial image pairing rather than a certificate wall. */
export function GuruRecognition() {
  return (
    <Section width="default" spacing="lg" tone="ivory">
      <Reveal className={styles.header}>
        <Eyebrow>Recognition</Eyebrow>
        <Heading level={2}>Honored for a Lifetime of Practice</Heading>
        <Text size="lg" color="muted" className={styles.intro}>
          At the 15th South Indian Yogasana Championship, hosted by the Yoga
          Academy of Karnataka in December 2017, that same discipline was
          recognized on stage — a small marker of a much longer practice.
        </Text>
      </Reveal>

      <div className={styles.grid}>
        <Reveal variant="fade-in" delay={0.1} className={styles.imageWrap}>
          <Media
            src="/guru/guru-trophy-presentation.webp"
            alt="The guru receiving a trophy at the 15th South Indian Yogasana Championship, December 2017"
            fill
            ratio="landscape"
            radius="lg"
            reveal={false}
            sizes="(max-width: 860px) 90vw, 55vw"
            wrapperClassName={styles.trophyFrame}
          />
        </Reveal>
        <Reveal variant="fade-in" delay={0.2} className={styles.imageWrap}>
          <Media
            src="/guru/guru-certificate-portrait.webp"
            alt="The guru holding her championship certificate and trophy"
            fill
            ratio="portrait"
            radius="lg"
            reveal={false}
            sizes="(max-width: 860px) 90vw, 35vw"
            wrapperClassName={styles.certificateFrame}
          />
        </Reveal>
      </div>
    </Section>
  );
}
