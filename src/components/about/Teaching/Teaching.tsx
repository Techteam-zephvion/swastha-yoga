import { Eyebrow } from "@/components/ui/Typography/Eyebrow";
import { Heading } from "@/components/ui/Typography/Heading";
import { Text } from "@/components/ui/Typography/Text";
import { Media } from "@/components/ui/Image/Media";
import { Section } from "@/components/ui/Section/Section";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./Teaching.module.css";

/** An asymmetrical magazine spread, not another image/text block — a
 *  large photograph anchors the section, with a small pull-quote and a
 *  short paragraph floating in the negative space beside it rather than
 *  sitting in a matched column. */
export function Teaching() {
  return (
    <Section width="wide" spacing="lg" tone="ivory">
      <div className={styles.layout}>
        <Reveal variant="fade-in" className={styles.imageWrap}>
          <Media
            src="/about/journey/teaching-kids-class.webp"
            alt="Gandharva teaching a children's yoga class on the studio's wooden platform"
            fill
            ratio="landscape"
            radius="lg"
            reveal={false}
            sizes="(max-width: 960px) 92vw, 62vw"
            wrapperClassName={styles.imageFrame}
          />
        </Reveal>

        <div className={styles.textCol}>
          <Reveal delay={0.1} className={styles.pullQuote}>
            <Text as="p" size="lg" className={styles.quote}>
              &ldquo;Teach the person, not the pose.&rdquo;
            </Text>
          </Reveal>

          <Reveal delay={0.2}>
            <Eyebrow>Teaching</Eyebrow>
            <Heading level={2} className={styles.heading}>
              Every Room Starts From Zero
            </Heading>
            <Text size="md" color="muted" className={styles.paragraph}>
              A children&rsquo;s class doesn&rsquo;t run on the same
              instructions as a therapy session, and neither runs on a
              script. Every room Gandharva teaches starts by watching, not
              instructing — a habit formed long before Swastha Yoga existed,
              and one that hasn&rsquo;t changed since.
            </Text>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
