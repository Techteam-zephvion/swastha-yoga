"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/Section/Section";
import { Eyebrow } from "@/components/ui/Typography/Eyebrow";
import { Heading } from "@/components/ui/Typography/Heading";
import { Text } from "@/components/ui/Typography/Text";
import { Button } from "@/components/ui/Button/Button";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./ConsultationForm.module.css";

const CONCERNS = [
  "Pain Relief",
  "Prenatal Care",
  "Stress Management",
  "Mobility & Rehabilitation",
  "Breath & Mindfulness",
  "Something Else",
];

const CONTACT_METHODS = ["Phone Call", "WhatsApp", "Email"];

const TIMES = ["Morning", "Afternoon", "Evening", "Flexible"];

/** The page's central action — a calm, single-column request form. No
 *  real submission endpoint exists yet, so on submit we simply confirm
 *  receipt in place rather than pretending to send anywhere. */
export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <Section id="consultation-form" width="narrow" spacing="lg" tone="paper">
      <Reveal className={styles.header}>
        <Eyebrow>Book a Consultation</Eyebrow>
        <Heading level={2}>Tell Us What You Need</Heading>
        <Text size="lg" color="muted" className={styles.intro}>
          A few details help us prepare before we speak — nothing here
          commits you to anything.
        </Text>
      </Reveal>

      {submitted ? (
        <Reveal className={styles.confirmation}>
          <CheckCircle2 size={32} strokeWidth={1.25} className={styles.confirmIcon} aria-hidden="true" />
          <Heading level={3}>Request Received</Heading>
          <Text color="muted" className={styles.confirmText}>
            Thank you — we&rsquo;ll reach out at your preferred time to
            confirm your consultation.
          </Text>
        </Reveal>
      ) : (
        <Reveal delay={0.1}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="name" className={styles.label}>
                  Full Name
                </label>
                <input id="name" name="name" type="text" required className={styles.input} />
              </div>
              <div className={styles.field}>
                <label htmlFor="phone" className={styles.label}>
                  Phone Number
                </label>
                <input id="phone" name="phone" type="tel" required className={styles.input} />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>
                Email <span className={styles.optional}>(optional)</span>
              </label>
              <input id="email" name="email" type="email" className={styles.input} />
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="concern" className={styles.label}>
                  Primary Concern
                </label>
                <select id="concern" name="concern" required defaultValue="" className={styles.input}>
                  <option value="" disabled>
                    Select an option
                  </option>
                  {CONCERNS.map((concern) => (
                    <option key={concern} value={concern}>
                      {concern}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.field}>
                <label htmlFor="contactMethod" className={styles.label}>
                  Preferred Contact Method
                </label>
                <select
                  id="contactMethod"
                  name="contactMethod"
                  required
                  defaultValue=""
                  className={styles.input}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {CONTACT_METHODS.map((method) => (
                    <option key={method} value={method}>
                      {method}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="preferredTime" className={styles.label}>
                Preferred Time
              </label>
              <select
                id="preferredTime"
                name="preferredTime"
                required
                defaultValue=""
                className={styles.input}
              >
                <option value="" disabled>
                  Select an option
                </option>
                {TIMES.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.field}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea id="message" name="message" rows={4} className={styles.input} />
            </div>

            <Button type="submit" variant="primary" className={styles.submit}>
              Request Consultation
            </Button>
          </form>
        </Reveal>
      )}
    </Section>
  );
}
