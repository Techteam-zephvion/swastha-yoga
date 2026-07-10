import { Section } from "@/components/ui/Section/Section";
import { Text } from "@/components/ui/Typography/Text";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./GalleryIntro.module.css";

/** Two sentences, nothing more — sets the mood before the exhibition
 *  begins rather than explaining what a gallery is. */
export function GalleryIntro() {
  return (
    <Section width="narrow" spacing="md" tone="paper" className={styles.section}>
      <Reveal variant="fade-in">
        <Text size="lg" className={styles.text}>
          These aren&rsquo;t stock photos of a studio. They&rsquo;re the
          practice, the teaching, and the people who&rsquo;ve shaped Swastha
          Yoga over a decade — collected here the way you&rsquo;d keep the
          photographs that actually mattered.
        </Text>
      </Reveal>
    </Section>
  );
}
