/**
 * Top-level page shell — composes the header, util bar, trust bar, and footer.
 * Acts like a Next.js root `layout.tsx`. Pages render their own sections inside.
 */
import { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { UtilNav } from "./UtilNav";

export function SiteShell({
  children,
  showTrust = false,
}: {
  children: ReactNode;
  showTrust?: boolean;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <UtilNav />
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
