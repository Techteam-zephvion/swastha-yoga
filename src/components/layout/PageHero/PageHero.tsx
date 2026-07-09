import Image from "next/image";
import { Breadcrumb, type BreadcrumbItem } from "@/components/ui/Breadcrumb/Breadcrumb";
import { Eyebrow } from "@/components/ui/Typography/Eyebrow";
import { Heading } from "@/components/ui/Typography/Heading";
import { Text } from "@/components/ui/Typography/Text";
import styles from "./PageHero.module.css";

export interface PageHeroProps {
  title: string;
  eyebrow?: string;
  /** Optional short supporting paragraph beneath the title. */
  description?: string;
  breadcrumbItems?: BreadcrumbItem[];
}

/**
 * The shared banner every internal page (About, Therapies, Gallery,
 * Contact) opens with — a smaller, quieter counterpart to the homepage's
 * full cinematic hero, reusing the same sunrise photograph but heavily
 * toned down so it reads as a supporting backdrop, not a second
 * competing hero moment.
 */
export function PageHero({ title, eyebrow, description, breadcrumbItems }: PageHeroProps) {
  return (
    <header className={styles.root}>
      <Image
        src="/hero/background.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className={styles.image}
      />
      <div className={styles.scrim} aria-hidden="true" />

      <div className={styles.content}>
        {breadcrumbItems && (
          <Breadcrumb items={breadcrumbItems} tone="paper" className={styles.breadcrumb} />
        )}
        {eyebrow && <Eyebrow color="paper">{eyebrow}</Eyebrow>}
        <Heading level={1} color="paper" className={styles.title}>
          {title}
        </Heading>
        {description && (
          <Text size="lg" color="paper" className={styles.description}>
            {description}
          </Text>
        )}
      </div>
    </header>
  );
}
