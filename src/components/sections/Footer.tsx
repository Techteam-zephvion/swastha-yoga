import Image from "next/image";
import Link from "next/link";
import { contact, nav, site } from "@/lib/content";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function Footer() {
  return (
    <footer className="border-t border-ink-soft/60 bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <Image
              src="/brand/main-logo.webp"
              alt={`${site.name} logo`}
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="font-display text-lg text-cream">{site.name}</span>
          </div>
          <p className="max-w-xs text-sm text-cream-dim">
            {contact.address.line1}
            <br />
            {contact.address.line2}
            <br />
            {contact.address.line3}
          </p>
          <a
            href={`tel:+91${contact.phone}`}
            className="text-sm text-cream-dim transition-colors hover:text-accent-gold"
          >
            +91 {contact.phoneDisplay}
          </a>
        </div>

        <nav className="flex flex-col gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-cream-dim transition-colors hover:text-accent-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <WhatsAppButton className="self-start" />
      </div>
      <div className="border-t border-ink-soft/60 px-6 py-4 text-center text-xs text-cream-dim/70">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
