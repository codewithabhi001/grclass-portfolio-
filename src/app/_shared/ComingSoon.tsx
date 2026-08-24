/**
 * Generic placeholder for inner pages (services details, about, etc.).
 * Replace with full builds as you iterate.
 */
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/layout/PageHero";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ComingSoonProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

const ComingSoon = ({ eyebrow, title, subtitle }: ComingSoonProps) => (
  <SiteShell>
    <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} />
    <section className="container-page section-lg">
      <div className="mx-auto max-w-2xl text-center">
        <span className="font-mono text-[11px] uppercase tracking-wider text-accent">
          Page in build
        </span>
        <h2 className="h-display mt-4 text-display-sm text-primary">
          This section is being prepared.
        </h2>
        <p className="mt-4 text-body font-light text-muted-foreground">
          The home page redesign is the V1 milestone. Inner pages | full service detail,
          how-it-works, news, and verification | will follow the same editorial system.
        </p>
        <Link
          href="/"
          className="group mt-8 inline-flex items-center gap-2 bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-bright"
        >
          Back to home <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  </SiteShell>
);

export default ComingSoon;
