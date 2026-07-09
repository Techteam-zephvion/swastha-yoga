import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import { Providers } from "@/components/providers";
import { AppShell } from "@/components/layout/AppShell";
import { SITE_URL, SITE_NAME } from "@/lib/siteConfig";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const displaySerif = Cormorant_Garamond({
  variable: "--font-display-serif",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const DEFAULT_TITLE = "Swastha Yoga — Therapy & Prenatal Care";
const DEFAULT_DESCRIPTION =
  "Swastha Yoga Therapy & Prenatal Centre in Girinagar, Bengaluru — personalized yoga therapy, prenatal care, and stress and mobility support.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s — ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    images: [{ url: "/hero/background.webp", width: 1920, height: 1080, alt: SITE_NAME }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/hero/background.webp"],
  },
};

// Static, code-authored structured data (no user input ever flows into
// this object), rendered as literal script text below rather than via
// dangerouslySetInnerHTML — safe here because the JSON contains none of
// the characters (<, >, &) that would need escaping.
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Swastha Yoga Therapy & Prenatal Centre",
  image: `${SITE_URL}/hero/background.webp`,
  url: SITE_URL,
  telephone: "+91-72048-88573",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Girinagar",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "06:00",
    closes: "20:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${displaySerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script type="application/ld+json">{JSON.stringify(localBusinessJsonLd)}</script>
        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}
