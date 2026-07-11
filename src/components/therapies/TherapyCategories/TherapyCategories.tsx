import {
  Wind,
  Flame,
  Baby,
  Zap,
  Heart,
  Waves,
  Sunrise,
  Mountain,
  Hand,
  SlidersHorizontal,
  Stethoscope,
  Moon,
  GraduationCap,
  Music,
  Sparkles,
  Feather,
} from "lucide-react";
import { Section } from "@/components/ui/Section/Section";
import { Eyebrow } from "@/components/ui/Typography/Eyebrow";
import { Heading } from "@/components/ui/Typography/Heading";
import { Text } from "@/components/ui/Typography/Text";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./TherapyCategories.module.css";

interface Style {
  icon: typeof Wind;
  name: string;
  description: string;
}

const CORE_STYLES: Style[] = [
  { icon: Wind, name: "Dhyana & Pranayama", description: "Seated meditation paired with breath control practices." },
  { icon: Flame, name: "Ashtanga Yoga", description: "A fixed, physically demanding sequence linking breath to movement." },
  { icon: Baby, name: "Pregnancy Yoga", description: "Trimester-appropriate movement, breath, and rest for expecting mothers." },
  { icon: Zap, name: "Power Yoga", description: "A faster-paced, strength-building take on traditional postures." },
  { icon: Heart, name: "Bhakti Yoga", description: "A devotional practice centered on chant and surrender." },
  { icon: Waves, name: "Vinyasa Yoga", description: "Postures linked in a continuous, breath-timed flow." },
  { icon: Sunrise, name: "Morning Flow", description: "A gentle sequence to open the body at the start of the day." },
  { icon: Mountain, name: "Hatha Yoga", description: "Classical postures held with attention to alignment and breath." },
  { icon: Hand, name: "Mudra Therapy", description: "Hand gestures used to direct energy and focus during practice." },
  { icon: SlidersHorizontal, name: "Iyengar Yoga (with Props)", description: "Precise alignment work supported by belts, blocks, and bolsters." },
];

const SPECIALTY_PROGRAMS: Style[] = [
  {
    icon: Stethoscope,
    name: "Yoga Therapy for Disease & Disorders",
    description: "Individual-focus practice designed around a specific health condition.",
  },
  {
    icon: Moon,
    name: "Restorative Yoga",
    description: "Slow, supported practice for rejuvenation — restoring a youthful, energetic state.",
  },
  {
    icon: GraduationCap,
    name: "Teachers Training Course (TTC)",
    description: "Structured certification for students moving toward teaching yoga themselves.",
  },
  {
    icon: Music,
    name: "Sound & Music Meditation",
    description: "Guided meditation set to sound and live music for deeper stillness.",
  },
  {
    icon: Sparkles,
    name: "Chakra Dhyana",
    description: "Meditation for activating the seven chakras, supported with crystals.",
  },
  {
    icon: Feather,
    name: "Aerial Yoga",
    description: "Postures supported and deepened with a suspended fabric hammock.",
  },
];

/** Every style and program taught at the studio, pulled directly from
 *  the current class flyer — grouped into the core rotation and the
 *  specialty programs taught alongside it. */
export function TherapyCategories() {
  return (
    <Section width="default" spacing="lg" tone="transparent">
      <Reveal className={styles.header}>
        <Eyebrow>What We Teach</Eyebrow>
        <Heading level={2}>Every Style, Taught With Intention</Heading>
      </Reveal>

      <div className={styles.grid}>
        {CORE_STYLES.map(({ icon: Icon, name, description }, i) => (
          <Reveal key={name} delay={i * 0.04} className={styles.card}>
            <Icon size={24} strokeWidth={1.25} className={styles.icon} aria-hidden="true" />
            <Heading level={3} size={4} className={styles.cardTitle}>
              {name}
            </Heading>
            <Text size="sm" color="muted">
              {description}
            </Text>
          </Reveal>
        ))}
      </div>

      <Reveal className={styles.subHeader}>
        <Eyebrow>We Also Teach</Eyebrow>
        <Heading level={3}>Specialty Programs & Workshops</Heading>
      </Reveal>

      <div className={styles.list}>
        {SPECIALTY_PROGRAMS.map(({ icon: Icon, name, description }, i) => (
          <Reveal key={name} delay={i * 0.05} className={styles.row}>
            <Icon size={24} strokeWidth={1.25} className={styles.icon} aria-hidden="true" />
            <div className={styles.rowBody}>
              <Heading level={4} className={styles.rowTitle}>
                {name}
              </Heading>
              <Text size="sm" color="muted">
                {description}
              </Text>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
