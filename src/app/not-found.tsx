/**
 * Root 404 | replaces the legacy `src/pages/NotFound.tsx`, which the Pages
 * Router was picking up as a real, indexable `/NotFound` route served with a
 * 200. As `app/not-found.tsx` this handles every unmatched URL instead.
 */
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

const SUGGESTIONS = [
  { href: "/services", label: "Services", body: "Classification, statutory and advisory scopes." },
  { href: "/verify", label: "Verify a certificate", body: "Check a certificate or survey report by number." },
  { href: "/contact", label: "Contact", body: "Talk to a surveyor or request a quotation." },
];

export default function NotFound() {
  return (
    <SiteShell>
      <div className="container-page section-lg flex min-h-[60vh] flex-col items-center justify-center text-center">
        <span className="eyebrow text-secondary">Error 404</span>
        <h1 className="h-display mt-4 text-display-lg text-primary">Page not found.</h1>
        <p className="mt-5 max-w-measure-sm text-body-lg font-light text-muted-foreground">
          The page you are looking for may have been moved, renamed, or is temporarily
          unavailable.
        </p>

        <Link
          href="/"
          className="group mt-9 inline-flex items-center gap-2 bg-accent px-8 py-4 text-body-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-bright"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to homepage
        </Link>

        <ul className="mt-14 grid w-full max-w-3xl gap-px bg-border-soft text-left sm:grid-cols-3">
          {SUGGESTIONS.map((s) => (
            <li key={s.href}>
              <Link
                href={s.href}
                className="group flex h-full flex-col bg-card p-6 transition-colors hover:bg-secondary-soft/40"
              >
                <span className="flex items-center gap-2 text-title-sm font-semibold text-primary">
                  {s.label}
                  <ArrowRight className="h-3.5 w-3.5 text-accent transition-transform group-hover:translate-x-1" />
                </span>
                <span className="mt-2 text-caption font-light text-muted-foreground">{s.body}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </SiteShell>
  );
}
