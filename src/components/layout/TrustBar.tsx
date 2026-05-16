/**
 * Trust strip beneath the hero — flag/certification chips on a dark band.
 */
import { trustTags } from "@/data/home";

export function TrustBar() {
  return (
    <div className="bg-primary-deep">
      <div className="container-page flex flex-wrap items-center gap-3 py-3.5 md:gap-4">
        <span className="whitespace-nowrap text-[9.5px] font-semibold uppercase tracking-[0.18em] text-background/40">
          Recognised under
        </span>
        <span className="hidden h-3 w-px bg-background/10 sm:block" />
        <div className="flex flex-wrap gap-1.5 md:gap-2">
          {trustTags.map((t) => (
            <span
              key={t}
              className="border border-background/15 bg-background/[0.03] px-2.5 py-1 text-[10px] font-medium tracking-wide text-background/70 transition-colors hover:border-accent/50 hover:text-background"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
