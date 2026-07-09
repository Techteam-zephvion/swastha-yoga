"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { SiteNav } from "@/components/layout/SiteNav/SiteNav";
import { Footer } from "@/components/layout/Footer/Footer";
import { PageTransition } from "@/components/layout/PageTransition/PageTransition";

/**
 * Composes the global site chrome around every route's content: the
 * shared nav (skipped on "/", which renders its own hero-embedded nav
 * with a bespoke entrance sequence — see `components/hero/Nav`), the
 * page-transition wrapper, and the shared footer. Each page's own
 * `page.tsx` still owns its `<main>` element; this only adds chrome
 * around it.
 */
export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      {!isHome && <SiteNav />}
      <PageTransition>{children}</PageTransition>
      <Footer />
    </>
  );
}
