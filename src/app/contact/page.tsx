import type { Metadata } from "next";
import { contact, timings, site } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: `Contact — ${site.name}`,
  description: "Get in touch with Swastha Yoga in Girinagar, Bengaluru.",
};

export default function ContactPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="Get in Touch" title="Visit or Reach Out" />

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-display text-lg text-accent-gold">Studio</h3>
              <p className="mt-2 text-cream-dim">
                {contact.address.line1}
                <br />
                {contact.address.line2}
                <br />
                {contact.address.line3}
              </p>
            </div>

            <div>
              <h3 className="font-display text-lg text-accent-gold">Reach Us</h3>
              <a
                href={`tel:+91${contact.phone}`}
                className="mt-2 block text-cream-dim transition-colors hover:text-accent-gold"
              >
                +91 {contact.phoneDisplay}
              </a>
              <div className="mt-4">
                <WhatsAppButton />
              </div>
            </div>

            <div>
              <h3 className="font-display text-lg text-accent-gold">Batch Timings</h3>
              <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {timings.map((batch) => (
                  <div key={batch.label}>
                    <p className="text-sm font-medium text-cream">{batch.label}</p>
                    <ul className="mt-1 flex flex-col gap-0.5">
                      {batch.times.map((t) => (
                        <li key={t} className="text-xs text-cream-dim">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-ink-soft/60 bg-ink-light/20 p-6">
            <h3 className="font-display text-lg text-cream">Send a Message</h3>
            <div className="mt-4">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
