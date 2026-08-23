import { Eyebrow } from "@/components/ui/Typography/Eyebrow";
import { Heading } from "@/components/ui/Typography/Heading";
import { Text } from "@/components/ui/Typography/Text";
import { Media } from "@/components/ui/Image/Media";
import { Section } from "@/components/ui/Section/Section";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./RecognitionHighlight.module.css";

/** One photograph, one certificate, one caption — a single showcase
 *  moment rather than a wall of scans (the full certificate archive
 *  already lives on the About page's Learning Journey). */
export function RecognitionHighlight() {
  return (
    <Section width="default" spacing="lg" tone="ivory">
      <Reveal className={styles.header}>
        <Eyebrow>Recognition</Eyebrow>
        <Heading level={2}>A Decade, Acknowledged</Heading>
      </Reveal>

      <Reveal variant="fade-in" delay={0.1} className={styles.photoWrap}>
        <Media
          src="/guru/guru-trophy-presentation.webp"
          alt="An award presentation at the 15th South Indian Yogasana Championship, December 2017"
          fill
          ratio="landscape"
          radius="none"
          reveal={false}
          sizes="(max-width: 860px) 92vw, 900px"
          wrapperClassName={styles.photoFrame}
        />
      </Reveal>

      <div className={styles.certificateRow}>
        <Reveal variant="scale-in" delay={0.2} className={styles.certificateWrap}>
          <Media
            src="/guru/guru-certificate-portrait.webp"
            alt="Dr. Sumitra M Patil holding her certificate from the 15th South Indian Yogasana Championship, December 2017"
            fill
            ratio="portrait"
            radius="none"
            reveal={false}
            sizes="(max-width: 640px) 70vw, 320px"
            wrapperClassName={styles.certificateFrame}
          />
        </Reveal>
        <Reveal delay={0.3} className={styles.caption}>
          <Text as="p" size="md" color="muted">
            Dr. Sumitra M Patil&rsquo;s certificate from the 15th South Indian
            Yogasana Championship, December 2017 — one recognition among
            several, kept here not as proof, but as a marker of how long this
            practice has been taken seriously.
          </Text>
        </Reveal>
      </div>
    </Section>
  );
}
