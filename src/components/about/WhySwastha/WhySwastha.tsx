import { HeartHandshake, Baby, Waves, GraduationCap } from "lucide-react";
import { Section } from "@/components/ui/Section/Section";
import { Eyebrow } from "@/components/ui/Typography/Eyebrow";
import { Heading } from "@/components/ui/Typography/Heading";
import { Text } from "@/components/ui/Typography/Text";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./WhySwastha.module.css";

const PRINCIPLES = [
  {
    icon: HeartHandshake,
    title: "Personalized, Not Prescriptive",
    description: "Every session is shaped around the person in front of us, not a fixed sequence.",
  },
  {
    icon: Baby,
    title: "Prenatal Expertise",
    description: "Certified prenatal yoga training, built for every stage of pregnancy.",
  },
  {
    icon: Waves,
    title: "Holistic by Design",
    description: "Hatha yoga, breathwork, sound and energy healing — woven together, not separate.",
  },
  {
    icon: GraduationCap,
    title: "Evidence-Informed",
    description: "Grounded in structured study: an MSc, 500+ hours of certification, 12 years of practice.",
  },
] as const;

/** Four core principles, stated with restraint — a minimal icon, a
 *  short title, one sentence. No cards, no shadows, no ornament. */
export function WhySwastha() {
  return (
    <Section width="default" spacing="lg" tone="transparent">
      <Reveal className={styles.header}>
        <Eyebrow>Why Swastha</Eyebrow>
        <Heading level={2}>What Guides Every Session</Heading>
      </Reveal>

      <div className={styles.grid}>
        {PRINCIPLES.map(({ icon: Icon, title, description }, i) => (
          <Reveal key={title} delay={i * 0.08} className={styles.principle}>
            <Icon size={28} strokeWidth={1.25} className={styles.icon} aria-hidden="true" />
            <Heading level={4} className={styles.title}>
              {title}
            </Heading>
            <Text size="sm" color="muted">
              {description}
            </Text>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
