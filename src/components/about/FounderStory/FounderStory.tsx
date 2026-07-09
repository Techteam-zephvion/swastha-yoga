import { Section } from "@/components/ui/Section/Section";
import { Eyebrow } from "@/components/ui/Typography/Eyebrow";
import { Heading } from "@/components/ui/Typography/Heading";
import { Text } from "@/components/ui/Typography/Text";
import { Media } from "@/components/ui/Image/Media";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./FounderStory.module.css";

/** The founder's story, told as a two-column editorial spread rather
 *  than a bio-box — a portrait on one side, the journey on the other. */
export function FounderStory() {
  return (
    <Section width="default" spacing="lg" tone="paper">
      <div className={styles.grid}>
        <Reveal variant="fade-in" className={styles.portraitWrap}>
          <Media
            src="/about/founder-portrait.webp"
            alt="Gandharva Natesh in a yoga pose at the Lempuyang gates, Bali"
            fill
            ratio="auto"
            radius="lg"
            reveal={false}
            sizes="(max-width: 860px) 90vw, 40vw"
            wrapperClassName={styles.portraitFrame}
            className={styles.portrait}
          />
        </Reveal>

        <div className={styles.copy}>
          <Reveal delay={0.05}>
            <Eyebrow>The Founder</Eyebrow>
            <Heading level={2} className={styles.heading}>
              Gandharva Natesh
            </Heading>
          </Reveal>

          <Reveal delay={0.15}>
            <Text size="lg" className={styles.paragraph}>
              Twelve years ago, Gandharva began a personal practice that would
              eventually become Swastha Yoga. What started as an individual
              pursuit of Hatha yoga deepened over time into a structured
              study of the body, the breath, and the subtler systems that
              govern how we heal — culminating in a PhD scholarship and an
              MSc in Yoga.
            </Text>
          </Reveal>

          <Reveal delay={0.25}>
            <Text size="lg" className={styles.paragraph}>
              Along the way, he trained formally as a Prenatal Yoga Trainer,
              a certified Yoga Therapist, and a certified Energy Healer —
              completing 500 hours of Yoga Instructor Certification and 300
              hours of Teacher Training, and going on to specialize in Sound
              Meditation, Music Meditation, and Chakra Dhyana alongside
              classical Hatha practice.
            </Text>
          </Reveal>

          <Reveal delay={0.35}>
            <Text size="lg" className={styles.paragraph}>
              In 2022, that practice became Swastha Yoga Therapy &amp;
              Prenatal Centre. Since then, he has guided more than 1,000
              students through it, teaching across five countries — always
              returning to the same starting point: meet the person in front
              of you, not a routine.
            </Text>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
