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
            alt="Dr. Sumitra M Patil at a Vidyashilp School yoga event"
            fill
            ratio="portrait"
            radius="lg"
            reveal={false}
            sizes="(max-width: 860px) 90vw, 40vw"
            wrapperClassName={styles.portraitFrame}
          />
        </Reveal>

        <div className={styles.copy}>
          <Reveal delay={0.05}>
            <Eyebrow>Teaching Lineage</Eyebrow>
            <Heading level={2} className={styles.heading}>
              Meet Dr. Sumitra M Patil
            </Heading>
          </Reveal>

          <Reveal delay={0.15}>
            <Text size="lg" className={styles.paragraph}>
              Dr. Sumitra M Patil founded Swastha Yoga and, for years, led it
              in person — the guru whose guidance shaped Gandharva&rsquo;s own
              practice, introducing him not just to postures, but to yoga as
              a complete discipline of body, breath, and attention, passed
              down through direct, personal instruction rather than a fixed
              curriculum.
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
              Dr. Sumitra has since stepped back from day-to-day teaching, and
              Gandharva — once her student — now leads Swastha Yoga. But that
              same relationship still shapes how the studio teaches today:
              every student met individually, every correction given by hand
              and by eye, not by template. The lineage continues in the room,
              one session at a time.
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
