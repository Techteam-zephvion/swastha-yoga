import { Section } from "@/components/ui/Section/Section";
import { Heading } from "@/components/ui/Typography/Heading";
import { Text } from "@/components/ui/Typography/Text";
import { Button } from "@/components/ui/Button/Button";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./ClosingCTA.module.css";

/** The page's single closing invitation — a quiet next step rather than
 *  a repeat of the therapy grid above. */
export function ClosingCTA() {
  return (
    <Section width="narrow" spacing="lg" tone="ivory">
      <Reveal className={styles.wrap}>
        <Heading level={2}>Not Sure Where to Start?</Heading>
        <Text size="lg" color="muted" className={styles.text}>
          Every practice begins with a conversation, not a diagnosis. Tell us
          what you&rsquo;re carrying, and we&rsquo;ll help you find the right
          place to begin.
        </Text>
        <div className={styles.actions}>
          <Button href="/contact" variant="primary">
            Book Consultation
          </Button>
          <Button href="/contact" variant="secondary">
            Explore Contact
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
