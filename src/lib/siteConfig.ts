/**
 * Single source of truth for the production origin and brand name, used
 * by root metadata, robots.ts, sitemap.ts, and the JSON-LD block so they
 * can never drift out of sync. Update SITE_URL once a real domain is
 * assigned — everything else derives from it.
 */
export const SITE_URL = "https://swasthayoga.in";
export const SITE_NAME = "Swastha Yoga";
