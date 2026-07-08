import { waLink } from "@/lib/content";

export function WhatsAppButton({
  className = "",
  label = "Chat on WhatsApp",
  message,
}: {
  className?: string;
  label?: string;
  message?: string;
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-accent-gold px-6 py-3 text-sm tracking-wide text-cream transition-colors hover:bg-accent-gold hover:text-ink ${className}`}
    >
      {label}
    </a>
  );
}
