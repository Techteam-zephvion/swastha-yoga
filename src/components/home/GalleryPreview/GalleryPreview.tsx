import { Eyebrow } from "@/components/ui/Typography/Eyebrow";
import { Heading } from "@/components/ui/Typography/Heading";
import { Text } from "@/components/ui/Typography/Text";
import { Media } from "@/components/ui/Image/Media";
import { Button } from "@/components/ui/Button/Button";
import { Section } from "@/components/ui/Section/Section";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./GalleryPreview.module.css";

/** Four real studio photographs at varied sizes, offset against each
 *  other rather than aligned to a uniform row — same editorial-collage
 *  approach as About's Community section, scoped down to a teaser with
 *  a single link through to the full /gallery archive. */
export function GalleryPreview() {
  return (
    <Section width="wide" spacing="lg" tone="transparent">
      <Reveal className={styles.header}>
        <Eyebrow>Gallery</Eyebrow>
        <Heading level={2}>A Decade, in Pictures</Heading>
        <Text size="md" color="muted" className={styles.intro}>
          Ordinary sessions, over years, with people who kept coming back.
        </Text>
      </Reveal>

      <div className={styles.collage}>
        <Reveal variant="fade-in" className={styles.tileLarge}>
          <Media
            src="/gallery/class-downdog-om.webp"
            alt="A class holding downward dog together during an om chant"
            fill
            ratio="landscape"
            radius="lg"
            reveal={false}
            sizes="(max-width: 860px) 90vw, 55vw"
            wrapperClassName={styles.frame}
          />
        </Reveal>

        <Reveal variant="fade-in" delay={0.1} className={styles.tileMedium}>
          <Media
            src="/gallery/practice-backbend-closeup.webp"
            alt="Close-up of a student in a deep backbend stretch"
            fill
            ratio="portrait"
            radius="lg"
            reveal={false}
            sizes="(max-width: 860px) 70vw, 32vw"
            wrapperClassName={styles.frame}
          />
        </Reveal>

        <Reveal variant="fade-in" delay={0.2} className={styles.tileSmall}>
          <Media
            src="/gallery/community-group-meditation.webp"
            alt="Students seated together in group meditation"
            fill
            ratio="landscape"
            radius="lg"
            reveal={false}
            sizes="(max-width: 860px) 50vw, 24vw"
            wrapperClassName={styles.frame}
          />
        </Reveal>
      </div>

      <Reveal className={styles.footer}>
        <Button href="/gallery" variant="secondary">
          View Full Gallery
        </Button>
      </Reveal>
    </Section>
  );
}
