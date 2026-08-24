/**
 * Top-level page shell | composes the header, main landmark, and footer.
 * Pages render their own sections inside.
 *
 * The header is `position: fixed`, so the first section of every page is
 * responsible for clearing `--header-h`. `PageHero` does this via
 * `pt-header`; pages that open with a custom band should do the same.
 */
import { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <a
        href="#main"
        className="sr-only-focusable fixed left-4 top-4 z-[60] bg-accent px-4 py-2.5 text-body-sm font-bold text-accent-foreground shadow-elev"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
