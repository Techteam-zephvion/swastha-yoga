import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/content";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-soft/60 bg-ink/90 backdrop-blur">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/main-logo.webp"
            alt={`${site.name} logo`}
            width={44}
            height={44}
            className="h-11 w-11 object-contain"
          />
          <span className="font-display text-lg tracking-wide text-cream">
            {site.name}
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm tracking-wide text-cream-dim transition-colors hover:text-accent-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
