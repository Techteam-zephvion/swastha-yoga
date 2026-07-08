"use client";

import Link from "next/link";
import { useState } from "react";
import { nav } from "@/lib/content";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-label="Toggle navigation menu"
        onClick={() => setOpen((v) => !v)}
        className="flex h-9 w-9 flex-col items-center justify-center gap-1.5"
      >
        <span
          className={`h-px w-6 bg-cream transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
        />
        <span className={`h-px w-6 bg-cream transition-opacity ${open ? "opacity-0" : ""}`} />
        <span
          className={`h-px w-6 bg-cream transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>
      {open && (
        <nav className="absolute inset-x-0 top-full flex flex-col gap-1 border-b border-ink-soft/60 bg-ink px-6 pb-6 pt-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm tracking-wide text-cream-dim transition-colors hover:text-accent-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
