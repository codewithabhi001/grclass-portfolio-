/**
 * Hero stats strip | sits directly under the hero, uses navy band.
 */
import { Globe2, Anchor, Users, ShieldCheck } from "lucide-react";
import { heroStats } from "@/data/home";

const ICONS = [Globe2, Anchor, Users, ShieldCheck];

export function StatsStrip() {
  return (
    <div className="relative border-y border-white/10 bg-primary-deep/95 shadow-inner">
      <div className="container-page py-6 sm:py-8 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 md:gap-0">
        {heroStats.map((s, i) => {
          const Icon = ICONS[i];
          return (
            <div
              key={s.label}
              className="group flex items-center gap-4 rounded-xl p-3 sm:p-4 transition-all duration-300 hover:bg-white/[0.04] md:border-r md:border-white/10 md:rounded-none md:last:border-r-0 md:px-6"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-primary">
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </div>
              <div className="min-w-0">
                <div className="font-display text-2xl sm:text-3xl font-extrabold leading-none text-background tracking-tight group-hover:text-accent transition-colors">
                  {s.value}
                </div>
                <div className="mt-1.5 text-[11px] font-semibold uppercase tracking-wider text-background/60">
                  {s.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
