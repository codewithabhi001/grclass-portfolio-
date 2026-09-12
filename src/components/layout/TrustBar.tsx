/**
 * Trust strip beneath the stats strip | flag/certification chips on a clean corporate band.
 */
import { trustTags } from "@/data/home";

export function TrustBar() {
  return (
    <div className="border-b border-border-soft bg-slate-50/80 py-3">
      <div className="container-page flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="whitespace-nowrap text-[10.5px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
            Recognised &amp; Certified Under International Conventions
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {trustTags.map((t) => (
            <span
              key={t}
              className="rounded-xs border border-border/80 bg-white px-2.5 py-0.5 text-[10.5px] font-semibold tracking-wide text-primary shadow-2xs transition-colors hover:border-accent"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
