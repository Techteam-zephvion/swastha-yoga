import { Baby, Zap, Moon, Music, Flame, Sparkles } from "lucide-react";
import { Section } from "@/components/ui/Section/Section";
import { Eyebrow } from "@/components/ui/Typography/Eyebrow";
import { Heading } from "@/components/ui/Typography/Heading";
import { Text } from "@/components/ui/Typography/Text";
import { Button } from "@/components/ui/Button/Button";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./TherapiesPreview.module.css";

/** A six-item highlight, not the full roster — the complete list of
 *  styles and specialty programs lives on /therapies (see
 *  TherapyCategories); this is a taste of the range, spanning both the
 *  core rotation and the specialty programs, ending in a single link
 *  through to the full page. */
const HIGHLIGHTS = [
  { icon: Baby, name: "Pregnancy Yoga", description: "Trimester-appropriate movement, breath, and rest." },
  { icon: Flame, name: "Ashtanga Yoga", description: "A fixed, physically demanding sequence." },
  { icon: Zap, name: "Power Yoga", description: "A faster-paced, strength-building practice." },
  { icon: Moon, name: "Restorative Yoga", description: "Slow, supported practice for rejuvenation." },
  { icon: Music, name: "Sound & Music Meditation", description: "Guided meditation set to sound." },
  { icon: Sparkles, name: "Chakra Dhyana", description: "Meditation activating the seven chakras." },
] as const;

export function TherapiesPreview() {
  return (
    <Section width="default" spacing="lg" tone="ivory">
      <Reveal className={styles.header}>
        <Eyebrow>What We Teach</Eyebrow>
        <Heading level={2}>A Practice for Every Stage of Life</Heading>
        <Text size="md" color="muted" className={styles.intro}>
          Ten core styles, six specialty programs — from prenatal care to
          chakra meditation, taught with the same attention either way.
        </Text>
      </Reveal>

      <div className={styles.grid}>
        {HIGHLIGHTS.map(({ icon: Icon, name, description }, i) => (
          <Reveal key={name} delay={i * 0.05} className={styles.card}>
            <Icon size={22} strokeWidth={1.25} className={styles.icon} aria-hidden="true" />
            <Heading level={3} size={4} className={styles.cardTitle}>
              {name}
            </Heading>
            <Text size="sm" color="muted">
              {description}
            </Text>
          </Reveal>
        ))}
      </div>

      <Reveal className={styles.footer}>
        <Button href="/therapies" variant="secondary">
          Explore All Therapies
        </Button>
      </Reveal>
    </Section>
  );
}
