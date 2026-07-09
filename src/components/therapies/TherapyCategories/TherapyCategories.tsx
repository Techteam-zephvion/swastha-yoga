import { HeartPulse, Baby, Wind, PersonStanding, Waves } from "lucide-react";
import { Section } from "@/components/ui/Section/Section";
import { Eyebrow } from "@/components/ui/Typography/Eyebrow";
import { Heading } from "@/components/ui/Typography/Heading";
import { Text } from "@/components/ui/Typography/Text";
import { Button } from "@/components/ui/Button/Button";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./TherapyCategories.module.css";

interface TherapyCategory {
  icon: typeof HeartPulse;
  label: string;
  heading: string;
  description: string;
  conditions: string[];
  benefits: string[];
}

const CATEGORIES: TherapyCategory[] = [
  {
    icon: HeartPulse,
    label: "Pain Relief",
    heading: "Move Without Wincing",
    description:
      "For bodies carrying pain that's become part of the daily routine — we work to loosen what's held tight and rebuild the movement patterns that keep pain from returning.",
    conditions: ["Chronic back pain", "Sciatica", "Arthritis", "Frozen shoulder"],
    benefits: ["Reduced inflammation", "Restored range of motion", "Fewer flare-ups"],
  },
  {
    icon: Baby,
    label: "Prenatal Care",
    heading: "Support Through Every Trimester",
    description:
      "Certified prenatal practice shaped around what each stage of pregnancy actually needs — safe movement, breath, and rest that prepares the body without straining it.",
    conditions: ["Pregnancy discomfort", "Pelvic instability", "Sleep disruption"],
    benefits: ["Easier labor preparation", "Reduced swelling", "Steadier energy"],
  },
  {
    icon: Wind,
    label: "Stress Management",
    heading: "Quiet an Overactive Mind",
    description:
      "Breathwork and restorative practice for nervous systems stuck in overdrive — a way back to a slower, steadier baseline that holds up outside the studio too.",
    conditions: ["Anxiety", "Burnout", "Sleep difficulty", "Racing thoughts"],
    benefits: ["Lower resting tension", "Deeper sleep", "Sustained calm"],
  },
  {
    icon: PersonStanding,
    label: "Mobility & Rehabilitation",
    heading: "Rebuild Strength, Safely",
    description:
      "Structured, progressive work for bodies recovering from injury or surgery — rebuilding strength and confidence in movement one supported session at a time.",
    conditions: ["Post-surgery recovery", "Postural imbalance", "Limited mobility"],
    benefits: ["Regained independence", "Better posture", "Injury prevention"],
  },
  {
    icon: Waves,
    label: "Breath & Mindfulness",
    heading: "Reconnect With the Present",
    description:
      "Pranayama and meditative practice for anyone looking to feel more grounded — a quieter relationship with the body and the moment it's actually in.",
    conditions: ["Shallow breathing", "Chronic distraction", "Emotional overwhelm"],
    benefits: ["Clearer focus", "Emotional steadiness", "Grounded presence"],
  },
];

/** Therapies grouped by the problem they solve, not the technique used —
 *  each row reads like a magazine entry: outcome, description, who it
 *  helps, what changes. No cards, no shadows. */
export function TherapyCategories() {
  return (
    <Section width="default" spacing="lg" tone="transparent">
      <Reveal className={styles.header}>
        <Eyebrow>What We Treat</Eyebrow>
        <Heading level={2}>What Problem Can We Help You Solve?</Heading>
      </Reveal>

      <div className={styles.list}>
        {CATEGORIES.map(({ icon: Icon, label, heading, description, conditions, benefits }, i) => (
          <Reveal key={label} delay={i * 0.05} className={styles.row}>
            <div className={styles.rowHead}>
              <Icon size={26} strokeWidth={1.25} className={styles.icon} aria-hidden="true" />
              <Eyebrow className={styles.label}>{label}</Eyebrow>
              <Heading level={3} className={styles.heading}>
                {heading}
              </Heading>
            </div>

            <div className={styles.rowBody}>
              <Text size="md" color="muted" className={styles.description}>
                {description}
              </Text>

              <div className={styles.meta}>
                <div className={styles.metaGroup}>
                  <Text as="span" size="sm" className={styles.metaLabel}>
                    Typical Conditions
                  </Text>
                  <Text as="span" size="sm" color="muted">
                    {conditions.join(", ")}
                  </Text>
                </div>
                <div className={styles.metaGroup}>
                  <Text as="span" size="sm" className={styles.metaLabel}>
                    Benefits
                  </Text>
                  <Text as="span" size="sm" color="muted">
                    {benefits.join(", ")}
                  </Text>
                </div>
              </div>

              <Button href="/contact" variant="ghost" className={styles.cta}>
                Learn More
              </Button>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
