"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/ui/Section/Section";
import { Eyebrow } from "@/components/ui/Typography/Eyebrow";
import { Heading } from "@/components/ui/Typography/Heading";
import { Text } from "@/components/ui/Typography/Text";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./FAQ.module.css";

const QUESTIONS = [
  {
    question: "Do I need any prior yoga experience?",
    answer:
      "No. Most people who come to us are managing pain, pregnancy, or stress, not looking for an advanced practice. Every session starts from where your body is right now.",
  },
  {
    question: "What happens in the first consultation?",
    answer:
      "We talk through your history and what's brought you in, then take a closer look at movement, breath, and posture before shaping a plan together. There's no pressure to commit beyond that first conversation.",
  },
  {
    question: "How long before I notice a difference?",
    answer:
      "It varies by condition, but many students feel some relief within the first few sessions, with steadier progress over four to six weeks of consistent practice.",
  },
  {
    question: "Is prenatal yoga safe throughout pregnancy?",
    answer:
      "Yes, with a practice adapted to each trimester. We ask for your doctor's clearance and adjust every session to what's appropriate for your stage of pregnancy.",
  },
  {
    question: "Can sessions be done online?",
    answer:
      "Yes — many therapy and prenatal sessions translate well to a guided video call. We'll recommend in-person visits where hands-on assessment matters more.",
  },
  {
    question: "How do I prepare for my first visit?",
    answer:
      "Wear comfortable clothing, avoid a heavy meal beforehand, and bring any relevant medical reports if you're coming in for a specific condition.",
  },
];

/** A plain, single-open accordion for consultation FAQs — CSS-driven
 *  expand/collapse (grid-template-rows) rather than a JS height
 *  animation, kept accessible with a real disclosure button. */
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section width="narrow" spacing="lg" tone="ivory">
      <Reveal className={styles.header}>
        <Eyebrow>Common Questions</Eyebrow>
        <Heading level={2}>Before You Book</Heading>
      </Reveal>

      <div className={styles.list}>
        {QUESTIONS.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <Reveal key={item.question} delay={i * 0.04} className={styles.item}>
              <button
                type="button"
                id={`faq-trigger-${i}`}
                className={styles.trigger}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <Text as="span" size="md" className={styles.question}>
                  {item.question}
                </Text>
                <ChevronDown
                  size={20}
                  strokeWidth={1.5}
                  className={styles.chevron}
                  data-open={isOpen}
                  aria-hidden="true"
                />
              </button>
              <div
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-trigger-${i}`}
                className={styles.panel}
                data-open={isOpen}
              >
                <div className={styles.panelInner}>
                  <Text size="sm" color="muted">
                    {item.answer}
                  </Text>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
