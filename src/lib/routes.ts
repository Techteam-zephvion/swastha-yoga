/**
 * Single source of truth for every top-level route in the site. SiteNav,
 * the mobile drawer, Footer, and Breadcrumb all read from here instead
 * of hardcoding labels/paths independently, so adding or renaming a page
 * only ever happens in one place.
 */
export interface RouteDefinition {
  label: string;
  href: string;
}

export const ROUTES: readonly RouteDefinition[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Guru", href: "/guru" },
  { label: "Therapies", href: "/therapies" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

/** The subset shown in the primary nav — every route except Home,
 *  which is reached via the brand mark instead of its own link. */
export const NAV_ROUTES: readonly RouteDefinition[] = ROUTES.filter(
  (route) => route.href !== "/",
);
