import { Section } from "@/components/ui/Section/Section";
import { Eyebrow } from "@/components/ui/Typography/Eyebrow";
import { Heading } from "@/components/ui/Typography/Heading";
import { Text } from "@/components/ui/Typography/Text";
import { Media } from "@/components/ui/Image/Media";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./GuruIntro.module.css";

/** The lineage behind the practice, told as a two-column editorial
 *  spread — portrait on one side, the guru–shishya story on the
 *  other. */
export function GuruIntro() {
  return (
    <Section width="default" spacing="lg" tone="paper">
      <div className={styles.grid}>
        <Reveal variant="fade-in" className={styles.portraitWrap}>
          <Media
            src="/guru/guru-portrait.webp"
            alt="Gandharva's guru at a Vidyashilp School yoga event"
            fill
            ratio="portrait"
            radius="lg"
            reveal={false}
            sizes="(max-width: 860px) 90vw, 40vw"
            wrapperClassName={styles.portraitFrame}
            className={styles.portrait}
          />
        </Reveal>

        <div className={styles.copy}>
          <Reveal delay={0.05}>
            <Eyebrow>Teaching Lineage</Eyebrow>
            <Heading level={2} className={styles.heading}>
              Meet the Guru
            </Heading>
          </Reveal>

          <Reveal delay={0.15}>
            <Text size="lg" className={styles.paragraph}>
              Gandharva&rsquo;s own practice was shaped under the guidance of
              his guru — a teacher who introduced him not just to postures,
              but to yoga as a complete discipline of body, breath, and
              attention, passed down through direct, personal instruction
              rather than a fixed curriculum.
            </Text>
          </Reveal>

          <Reveal delay={0.25}>
            <Text size="lg" className={styles.paragraph}>
              In the guru–shishya tradition, teaching isn&rsquo;t transferred
              through a manual — it&rsquo;s built over years of closeness
              between teacher and student, refined through correction,
              patience, and trust. It&rsquo;s a lineage carried forward in
              presence, not paperwork.
            </Text>
          </Reveal>

          <Reveal delay={0.35}>
            <Text size="lg" className={styles.paragraph}>
              That same relationship shapes how Swastha Yoga teaches today —
              every student met individually, every correction given by
              hand and by eye, not by template. The lineage continues in
              the room, one session at a time.
            </Text>
          </Reveal>

          <Reveal delay={0.45} className={styles.quoteBlock}>
            <Text as="p" size="lg" className={styles.quote}>
              &ldquo;A teacher doesn&rsquo;t hand you the practice — they walk
              beside you until it becomes your own.&rdquo;
            </Text>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
