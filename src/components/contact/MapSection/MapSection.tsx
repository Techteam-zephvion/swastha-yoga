import { Section } from "@/components/ui/Section/Section";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./MapSection.module.css";

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.494629764792!2d77.54526927593113!3d12.940169815564843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fa97f1cef5b%3A0xf8707ac1fa441e45!2sSwastha%20Yoga%20Therapy%20and%20Prenatal%20Center!5e0!3m2!1sen!2sin!4v1783704308356!5m2!1sen!2sin";

/** Live Google Maps embed pinned to the clinic's listing, in the same
 *  aspect-ratio/radius frame used by the site's other media. */
export function MapSection() {
  return (
    <Section id="map" width="default" spacing="lg" tone="transparent">
      <Reveal variant="fade-in" className={styles.frame}>
        <iframe
          src={MAP_EMBED_SRC}
          className={styles.iframe}
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Swastha Yoga Therapy and Prenatal Center — map location"
        />
      </Reveal>
    </Section>
  );
}
