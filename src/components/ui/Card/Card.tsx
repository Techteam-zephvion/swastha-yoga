import type { ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";
import { Media } from "@/components/ui/Image/Media";
import { Heading } from "@/components/ui/Typography/Heading";
import { Text } from "@/components/ui/Typography/Text";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./Card.module.css";

export interface CardProps {
  title: string;
  description?: string;
  /** Image src — omit for a text-only card (e.g. a credential entry). */
  image?: string;
  imageAlt?: string;
  href?: string;
  className?: string;
}

/**
 * The one shared card used for therapies/services, gallery pieces, and
 * any other "image + title + description" grid item across the site —
 * a subtle lift and border-glow on hover, consistent radius/spacing,
 * and its own scroll reveal so grids of these stagger in naturally.
 */
export function Card({ title, description, image, imageAlt, href, className }: CardProps) {
  const content: ReactNode = (
    <>
      {image && (
        <Media
          src={image}
          alt={imageAlt ?? ""}
          ratio="landscape"
          radius="md"
          reveal={false}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
          className={styles.image}
        />
      )}
      <div className={styles.body}>
        <Heading level={3} size={4}>
          {title}
        </Heading>
        {description && (
          <Text size="sm" color="muted">
            {description}
          </Text>
        )}
      </div>
    </>
  );

  return (
    <Reveal variant="fade-up" className={clsx(styles.wrapper, className)}>
      {href ? (
        <Link href={href} className={styles.card}>
          {content}
        </Link>
      ) : (
        <div className={styles.card}>{content}</div>
      )}
    </Reveal>
  );
}
