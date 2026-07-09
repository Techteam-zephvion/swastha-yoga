import { MapPin } from "lucide-react";
import { Section } from "@/components/ui/Section/Section";
import { Text } from "@/components/ui/Typography/Text";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./MapSection.module.css";

/** A responsive placeholder standing in for a live Google Maps embed —
 *  same aspect-ratio/radius treatment as the site's other media, so
 *  swapping in a real `<iframe>` later is a one-line change. */
export function MapSection() {
  return (
    <Section id="map" width="default" spacing="lg" tone="transparent">
      <Reveal variant="fade-in" className={styles.frame}>
        <MapPin size={28} strokeWidth={1.25} className={styles.icon} aria-hidden="true" />
        <Text size="sm" color="muted" className={styles.caption}>
          Map embed coming soon — Girinagar, Bengaluru
        </Text>
      </Reveal>
    </Section>
  );
}
