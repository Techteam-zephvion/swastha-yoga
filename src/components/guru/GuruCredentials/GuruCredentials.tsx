import { Section } from "@/components/ui/Section/Section";
import { Eyebrow } from "@/components/ui/Typography/Eyebrow";
import { Heading } from "@/components/ui/Typography/Heading";
import { Text } from "@/components/ui/Typography/Text";
import { Media } from "@/components/ui/Image/Media";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./GuruCredentials.module.css";

type Credential = {
  src: string;
  alt: string;
  caption: string;
};

const CREDENTIALS: Credential[] = [
  {
    src: "/guru/guru-phd-completion.webp",
    alt: "Dr. Sumitra M Patil holding her PhD thesis in Yoga from Vels Institute of Science, Technology & Advanced Studies",
    caption: "PhD in Yoga, Vels Institute of Science, Technology & Advanced Studies, Chennai.",
  },
  {
    src: "/guru/guru-phd-convocation.webp",
    alt: "Dr. Sumitra M Patil receiving her doctorate on stage at her PhD convocation",
    caption: "Receiving her doctorate on stage at convocation.",
  },
  {
    src: "/guru/guru-mba-convocation.webp",
    alt: "Dr. Sumitra M Patil at her MBA convocation at Greater Manchester Business School",
    caption: "MBA in Global Healthcare Management, Greater Manchester Business School.",
  },
  {
    src: "/guru/guru-award-ceremony.webp",
    alt: "Dr. Sumitra M Patil honored at the Yoga Lakshmi Puraskara for contributions to women's empowerment through yoga",
    caption: "Honored with the Yoga Lakshmi Puraskara for contributions to women’s empowerment through yoga.",
  },
  {
    src: "/guru/guru-lotus-pose.webp",
    alt: "Dr. Sumitra M Patil seated in a lotus pose at the Swastha Yoga studio",
    caption: "Still on the mat, at the studio she founded.",
  },
];

/** A credentials shelf — proof, not decoration. Five real moments from
 *  Dr. Sumitra's own record, laid out as a simple wrapping grid rather
 *  than a certificate wall. */
export function GuruCredentials() {
  return (
    <Section width="default" spacing="lg" tone="paper">
      <Reveal className={styles.header}>
        <Eyebrow>Credentials</Eyebrow>
        <Heading level={2}>Dr. Sumitra M Patil</Heading>
        <Text size="lg" color="muted" className={styles.intro}>
          Founder of Swastha Yoga and the guru who shaped this practice —
          a PhD in Yoga, an MBA in Global Healthcare Management, and a career
          of recognition for teaching and women&rsquo;s empowerment through
          yoga.
        </Text>
      </Reveal>

      <div className={styles.grid}>
        {CREDENTIALS.map((item, i) => (
          <Reveal
            key={item.src}
            variant="fade-in"
            delay={i * 0.06}
            className={styles.tile}
          >
            <Media
              src={item.src}
              alt={item.alt}
              fill
              ratio="portrait"
              radius="lg"
              reveal={false}
              sizes="(max-width: 860px) 45vw, 22vw"
              wrapperClassName={styles.frame}
            />
            <Text size="sm" color="muted" className={styles.caption}>
              {item.caption}
            </Text>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
