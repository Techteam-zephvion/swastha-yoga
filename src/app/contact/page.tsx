import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero/PageHero";
import { QuickContactOptions } from "@/components/contact/QuickContactOptions/QuickContactOptions";
import { ConsultationForm } from "@/components/contact/ConsultationForm/ConsultationForm";
import { ClinicInfo } from "@/components/contact/ClinicInfo/ClinicInfo";
import { MapSection } from "@/components/contact/MapSection/MapSection";
import { FAQ } from "@/components/contact/FAQ/FAQ";
import { ClosingCTA } from "@/components/contact/ClosingCTA/ClosingCTA";

export const metadata: Metadata = {
  title: "Contact — Swastha Yoga",
  description:
    "Reach Swastha Yoga by WhatsApp, phone, or email, or book a consultation directly — therapy and prenatal care in Girinagar, Bengaluru.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Let's Start the Conversation"
        eyebrow="Contact"
        description="Booking a consultation shouldn't feel like a hurdle. Reach out however's easiest, and we'll take it from there."
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <QuickContactOptions />
      <ConsultationForm />
      <ClinicInfo />
      <MapSection />
      <FAQ />
      <ClosingCTA />
    </main>
  );
}
