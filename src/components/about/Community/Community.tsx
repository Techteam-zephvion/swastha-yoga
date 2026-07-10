import { Eyebrow } from "@/components/ui/Typography/Eyebrow";
import { Heading } from "@/components/ui/Typography/Heading";
import { Media } from "@/components/ui/Image/Media";
import { Section } from "@/components/ui/Section/Section";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./Community.module.css";

/** An editorial collage rather than a gallery grid — three real studio
 *  photographs at three different sizes, offset against each other
 *  instead of aligned to a uniform row. */
export function Community() {
  return (
    <Section width="wide" spacing="lg" tone="paper">
      <Reveal className={styles.header}>
        <Eyebrow>Community</Eyebrow>
        <Heading level={2}>The Room, Full</Heading>
      </Reveal>

      <div className={styles.collage}>
        <Reveal variant="fade-in" className={styles.tileLarge}>
          <Media
            src="/about/community/class-group.webp"
            alt="A full class of students together at the Swastha Yoga studio"
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
            src="/about/community/team-portrait.webp"
            alt="Gandharva with three fellow instructors at the studio"
            fill
            ratio="landscape"
            radius="lg"
            reveal={false}
            sizes="(max-width: 860px) 70vw, 32vw"
            wrapperClassName={styles.frame}
          />
        </Reveal>

        <Reveal variant="fade-in" delay={0.2} className={styles.tileSmall}>
          <Media
            src="/about/journey/today-class.webp"
            alt="Students practicing together at the studio"
            fill
            ratio="square"
            radius="lg"
            reveal={false}
            sizes="(max-width: 860px) 50vw, 24vw"
            wrapperClassName={styles.frame}
          />
        </Reveal>
      </div>
    </Section>
  );
}
