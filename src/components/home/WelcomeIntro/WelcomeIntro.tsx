import { Heading } from "@/components/ui/Typography/Heading";
import { Text } from "@/components/ui/Typography/Text";
import { Button } from "@/components/ui/Button/Button";
import { Section } from "@/components/ui/Section/Section";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { Media } from "@/components/ui/Image/Media";
import styles from "./WelcomeIntro.module.css";

/** The homepage's opening beat after the hero — featuring Gandharva Natesh's
 *  solo portrait and an introduction to the studio's personalized therapy
 *  practice. */
export function WelcomeIntro() {
  return (
    <Section width="default" spacing="lg" tone="paper" className={styles.section}>
      <div className={styles.grid}>
        <Reveal variant="fade-in" className={styles.portraitColumn}>
          <Media
            src="/guru/gandharva-forest-pose.webp"
            alt="Master Gandharva Natesh performing an advanced yoga asana in nature, Lead Yoga Therapist at Swastha Yoga"
            fill
            ratio="portrait"
            radius="lg"
            reveal={false}
            sizes="(max-width: 768px) 70vw, 320px"
            wrapperClassName={styles.portraitFrame}
          />
          <Text size="sm" color="muted" className={styles.portraitCaption}>
            Master Gandharva Natesh · Lead Yoga Therapist
          </Text>
        </Reveal>

        <Reveal delay={0.1} className={styles.contentColumn}>
          <Text as="p" size="lg" color="muted" className={styles.kicker}>
            A yoga therapy and prenatal studio in Girinagar, Bengaluru.
          </Text>
          <Heading level={2} size={1} className={styles.line}>
            Practice That Meets You Where You Are
          </Heading>
          <Text size="md" color="muted" className={styles.paragraph}>
            Every session starts with the body in front of us, not a fixed
            sequence taught to every room. Twelve years of teaching, one
            question at the center of it: what does this person need today?
          </Text>
          <Text size="md" color="muted" className={styles.subparagraph}>
            Led by Master Gandharva Natesh — PhD Scholar, MSc Yoga, Certified
            Yoga Therapist, and Energy Healer — our practice blends classical
            Hatha yoga, prenatal care, and therapeutic healing tailored
            specifically to your journey.
          </Text>
          <div className={styles.actions}>
            <Button href="/about" variant="ghost" className={styles.link}>
              Read Our Story
            </Button>
            <Button href="/contact" variant="primary" className={styles.link}>
              Book Consultation
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

