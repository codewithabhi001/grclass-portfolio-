/**
 * Hero stats strip | Sits directly under the "What's New" ticker.
 * Clean, prestigious white banner matching the reference portal's stats strip,
 * with deep navy serif numerals, subtle gold cues, and slate tracking labels.
 */
import { heroStats } from "@/data/home";

export function StatsStrip() {
  return (
    <section className="relative z-10 border-b border-border bg-white py-8 sm:py-10 shadow-xs">
      <div className="container-page">
        <div className="grid grid-cols-2 divide-y divide-border sm:grid-cols-4 sm:divide-y-0 sm:divide-x sm:divide-border">
          {heroStats.map((s, idx) => (
            <div
              key={s.label}
              className={`group flex flex-col items-center justify-center px-4 py-4 text-center sm:py-2 transition-transform duration-200 hover:-translate-y-0.5 ${
                idx % 2 === 0 ? "border-r border-border sm:border-r-0" : ""
              }`}
            >
              {/* Stat Value in Deep Navy Serif */}
              <div className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-primary leading-none">
                {s.value}
              </div>

              {/* Subtitle Label in Uppercase Tracking */}
              <div className="mt-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground group-hover:text-primary transition-colors">
                {s.label}
              </div>

              {/* Tiny subtle Gold accent line on hover */}
              <div className="mt-2 h-[2px] w-6 bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
