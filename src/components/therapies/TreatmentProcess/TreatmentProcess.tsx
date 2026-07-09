import { Section } from "@/components/ui/Section/Section";
import { Eyebrow } from "@/components/ui/Typography/Eyebrow";
import { Heading } from "@/components/ui/Typography/Heading";
import { Text } from "@/components/ui/Typography/Text";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./TreatmentProcess.module.css";

const STEPS = [
  {
    title: "Consultation",
    description: "A conversation about your body, your history, and what brought you here.",
  },
  {
    title: "Assessment",
    description: "A closer look at movement, breath, and posture to understand the full picture.",
  },
  {
    title: "Personalized Plan",
    description: "A practice designed around your body, not a fixed sequence taught to every room.",
  },
  {
    title: "Guided Practice",
    description: "Sessions that adapt as you do, with attention on form and pace throughout.",
  },
  {
    title: "Recovery & Progress",
    description: "Steady check-ins that track what's changed and what the body needs next.",
  },
] as const;

/** How a session comes together, as a quiet vertical progression rather
 *  than a numbered feature list — one path, five stages. */
export function TreatmentProcess() {
  return (
    <Section width="narrow" spacing="lg" tone="ivory">
      <Reveal className={styles.header}>
        <Eyebrow>How It Works</Eyebrow>
        <Heading level={2}>The Path From First Visit to Progress</Heading>
      </Reveal>

      <ol className={styles.timeline}>
        {STEPS.map((step, i) => (
          <Reveal key={step.title} as="li" delay={i * 0.06} className={styles.step}>
            <span className={styles.index}>{String(i + 1).padStart(2, "0")}</span>
            <span className={styles.stepBody}>
              <Heading level={4} className={styles.stepTitle}>
                {step.title}
              </Heading>
              <Text size="sm" color="muted">
                {step.description}
              </Text>
            </span>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
