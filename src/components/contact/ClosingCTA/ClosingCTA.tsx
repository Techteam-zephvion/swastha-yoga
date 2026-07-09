import { Section } from "@/components/ui/Section/Section";
import { Heading } from "@/components/ui/Typography/Heading";
import { Text } from "@/components/ui/Typography/Text";
import { Button } from "@/components/ui/Button/Button";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./ClosingCTA.module.css";

/** A short, reassuring send-off rather than a second sales pitch — the
 *  form above already did the asking. */
export function ClosingCTA() {
  return (
    <Section width="narrow" spacing="lg" tone="transparent">
      <Reveal className={styles.wrap}>
        <Heading level={2}>You Don&rsquo;t Have to Have It Figured Out</Heading>
        <Text size="lg" color="muted" className={styles.text}>
          Reaching out is often the hardest part. Whatever you&rsquo;re
          carrying, we&rsquo;ll meet you there and figure out the rest
          together.
        </Text>
        <div className={styles.actions}>
          <Button href="#consultation-form" variant="primary">
            Book Your Consultation
          </Button>
          <Button href="tel:+917204888573" variant="secondary">
            Call Us Now
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
