"use client";

import { FormEvent, useState } from "react";
import { contact } from "@/lib/content";

export function ContactForm() {
  const [values, setValues] = useState({ name: "", phone: "", message: "" });
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!values.name.trim() || !values.phone.trim() || !values.message.trim()) {
      setError("Please fill in your name, phone number, and message.");
      return;
    }
    setError(null);
    const text = `Hi Swastha Yoga, my name is ${values.name} (${values.phone}). ${values.message}`;
    window.open(
      `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-xs tracking-wide text-cream-dim uppercase">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          className="rounded-lg border border-ink-soft/60 bg-ink px-4 py-2.5 text-cream outline-none focus:border-accent-gold"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" className="text-xs tracking-wide text-cream-dim uppercase">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          value={values.phone}
          onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
          className="rounded-lg border border-ink-soft/60 bg-ink px-4 py-2.5 text-cream outline-none focus:border-accent-gold"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs tracking-wide text-cream-dim uppercase">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          className="rounded-lg border border-ink-soft/60 bg-ink px-4 py-2.5 text-cream outline-none focus:border-accent-gold"
        />
      </div>
      {error && <p className="text-sm text-accent-pink">{error}</p>}
      <button
        type="submit"
        className="mt-2 rounded-full bg-accent-gold px-6 py-3 text-sm tracking-wide text-ink transition-opacity hover:opacity-90"
      >
        Send via WhatsApp
      </button>
      <p className="text-xs text-cream-dim/70">
        Submitting opens WhatsApp with your details pre-filled so we can reply
        directly — no account or email needed.
      </p>
    </form>
  );
}
