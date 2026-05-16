/**
 * Hero stats strip | sits directly under the hero, uses navy band.
 */
import { Globe2, Anchor, Users, ShieldCheck } from "lucide-react";
import { heroStats } from "@/data/home";

const ICONS = [Globe2, Anchor, Users, ShieldCheck];

export function StatsStrip() {
  return (
    <div className="relative bg-primary-soft">
      <div className="container-page grid grid-cols-2 gap-y-8 py-8 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 md:py-10">
        {heroStats.map((s, i) => {
          const Icon = ICONS[i];
          return (
            <div
              key={s.label}
              className="group flex items-center gap-4 md:border-r md:border-background/10 md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center bg-background/5 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <Icon className="h-5 w-5" strokeWidth={1.6} />
              </div>
              <div className="min-w-0">
                <div className="font-display text-[26px] font-extrabold leading-none text-background sm:text-[28px]">
                  {s.value}
                </div>
                <div className="mt-1.5 text-[10.5px] uppercase tracking-[0.14em] text-background/50">
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
