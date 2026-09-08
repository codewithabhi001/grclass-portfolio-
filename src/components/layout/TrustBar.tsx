import { trustTags } from "@/data/home";
import { Shield } from "lucide-react";

export function TrustBar() {
  return (
    <div className="border-b border-white/10 bg-primary/90 backdrop-blur-sm">
      <div className="container-page flex flex-wrap items-center gap-3 py-4 md:gap-4">
        <div className="flex items-center gap-2">
          <Shield className="h-3.5 w-3.5 text-accent" />
          <span className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
            Recognised under
          </span>
        </div>
        <span className="hidden h-4 w-px bg-white/15 sm:block" />
        <div className="flex flex-wrap gap-2">
          {trustTags.map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium tracking-wide text-background/80 transition-all duration-300 hover:border-accent/60 hover:bg-accent/10 hover:text-accent"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
