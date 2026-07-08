export function SectionHeading({
  eyebrow,
  title,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col items-center gap-3 text-center ${className}`}>
      {eyebrow && (
        <span className="text-xs tracking-[0.3em] text-accent-gold uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl text-cream md:text-4xl">{title}</h2>
      <span className="h-px w-16 bg-accent-gold/60" aria-hidden="true" />
    </div>
  );
}
