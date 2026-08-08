/**
 * Reusable inner-page hero band | used by Services, About, Contact, etc.
 * Mirrors the original `.page-hero` block.
 */
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export function PageHero({ eyebrow, title, subtitle, breadcrumbs = [] }: PageHeroProps) {
  return (
    <section className="border-b-[3px] border-accent bg-primary">
      <div className="container-page py-14 md:py-16">
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-[12px] text-background/40">
            <Link href="/" className="transition-colors hover:text-background/70">Home</Link>
            {breadcrumbs.map((b) => (
              <span key={b.label} className="flex items-center gap-2">
                <ChevronRight className="h-3 w-3 text-background/25" />
                {b.href ? (
                  <Link href={b.href} className="transition-colors hover:text-background/70">{b.label}</Link>
                ) : (
                  <span className="text-background/65">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <span className="eyebrow text-accent">{eyebrow}</span>
        <h1 className="h-display mt-3 max-w-3xl text-[clamp(28px,3.2vw,46px)] text-background">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-xl text-[16px] font-light leading-relaxed text-background/60">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
