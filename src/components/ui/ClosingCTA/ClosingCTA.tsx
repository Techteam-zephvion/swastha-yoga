import type { ReactNode } from "react";
import { Section, type SectionTone } from "@/components/ui/Section/Section";
import { Heading } from "@/components/ui/Typography/Heading";
import { Text } from "@/components/ui/Typography/Text";
import { Button } from "@/components/ui/Button/Button";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./ClosingCTA.module.css";

interface ClosingCTAAction {
  label: string;
  href: string;
}

export interface ClosingCTAProps {
  heading: ReactNode;
  text: ReactNode;
  primary: ClosingCTAAction;
  secondary: ClosingCTAAction;
  /** @default "ivory" */
  tone?: SectionTone;
}

/**
 * The one closing-invitation block every page ends on — a heading, one
 * line of reassurance, and two actions. Previously duplicated
 * byte-for-byte (styles and structure) across About/Therapies/Contact
 * with only the copy and links differing; this is that shared shape.
 */
export function ClosingCTA({ heading, text, primary, secondary, tone = "ivory" }: ClosingCTAProps) {
  return (
    <Section width="narrow" spacing="lg" tone={tone}>
      <Reveal className={styles.wrap}>
        <Heading level={2}>{heading}</Heading>
        <Text size="lg" color="muted" className={styles.text}>
          {text}
        </Text>
        <div className={styles.actions}>
          <Button href={primary.href} variant="primary">
            {primary.label}
          </Button>
          <Button href={secondary.href} variant="secondary">
            {secondary.label}
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
