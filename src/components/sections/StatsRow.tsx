import { stats } from "@/lib/content";

export function StatsRow() {
  return (
    <section className="border-y border-ink-soft/60 bg-ink-light/30">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 py-12 text-center md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1">
            <span className="font-display text-3xl text-accent-gold md:text-4xl">
              {stat.value}
            </span>
            <span className="text-xs tracking-wide text-cream-dim uppercase">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
