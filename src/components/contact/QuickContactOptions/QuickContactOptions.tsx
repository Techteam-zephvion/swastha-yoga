import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { Section } from "@/components/ui/Section/Section";
import { Heading } from "@/components/ui/Typography/Heading";
import { Text } from "@/components/ui/Typography/Text";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./QuickContactOptions.module.css";

const OPTIONS = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 72048 88573",
    detail: "Fastest way to reach us — most replies within the hour.",
    href: "https://wa.me/917204888573",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 72048 88573",
    detail: "Call directly for same-day questions.",
    href: "tel:+917204888573",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@swasthayoga.in",
    detail: "For longer notes or first-time enquiries.",
    href: "mailto:hello@swasthayoga.in",
  },
  {
    icon: MapPin,
    label: "Clinic Address",
    value: "Girinagar, Bengaluru",
    detail: "In-person consultations by appointment.",
    href: "#map",
  },
] as const;

/** Four plain, text-forward ways to reach the studio — no color-coded
 *  icon tiles, just the same restrained block treatment used across the
 *  rest of the site. */
export function QuickContactOptions() {
  return (
    <Section width="default" spacing="lg" tone="transparent">
      <div className={styles.grid}>
        {OPTIONS.map(({ icon: Icon, label, value, detail, href }, i) => (
          <Reveal key={label} delay={i * 0.06} className={styles.block}>
            <a href={href} className={styles.link}>
              <Icon size={26} strokeWidth={1.25} className={styles.icon} aria-hidden="true" />
              <Text as="span" size="sm" className={styles.label}>
                {label}
              </Text>
              <Heading level={4} className={styles.value}>
                {value}
              </Heading>
              <Text size="sm" color="muted">
                {detail}
              </Text>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
