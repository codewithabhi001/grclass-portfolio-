/**
 * Reusable inner-page hero band | used by Services, About, Contact, etc.
 *
 * Sits directly beneath the fixed site header, so it owns the header offset:
 * `pt-header` plus the band's own top padding. Without it the breadcrumb row
 * and eyebrow rendered underneath the header on every inner page.
 */
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
  /** Optional right-hand slot (CTA, search field, stat). */
  aside?: React.ReactNode;
}

export function PageHero({ eyebrow, title, subtitle, breadcrumbs = [], aside }: PageHeroProps) {
  return (
    <section className="relative border-b-[3px] border-accent bg-primary pt-header">
      {/* Subtle depth so the band does not read as a flat block of navy. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_15%_0%,hsl(var(--primary-soft)/0.9),transparent_65%)]"
      />

      <div className="container-page relative py-12 md:py-16 lg:py-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="min-w-0 flex-1">
            {breadcrumbs.length > 0 && (
              <nav aria-label="Breadcrumb" className="mb-5">
                <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-caption text-background/45">
                  <li>
                    <Link href="/" className="transition-colors hover:text-background/80">
                      Home
                    </Link>
                  </li>
                  {breadcrumbs.map((b, i) => (
                    <li key={b.label} className="flex items-center gap-2">
                      <ChevronRight aria-hidden className="h-3 w-3 shrink-0 text-background/25" />
                      {b.href && i < breadcrumbs.length - 1 ? (
                        <Link href={b.href} className="transition-colors hover:text-background/80">
                          {b.label}
                        </Link>
                      ) : (
                        <span aria-current="page" className="text-background/70">
                          {b.label}
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            <span className="eyebrow text-accent">{eyebrow}</span>
            <h1 className="h-display mt-4 max-w-[22ch] text-display-lg text-background">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-5 max-w-measure text-lead font-light text-background/60">
                {subtitle}
              </p>
            )}
          </div>

          {aside && <div className="shrink-0 lg:pb-1">{aside}</div>}
        </div>
      </div>
    </section>
  );
}
