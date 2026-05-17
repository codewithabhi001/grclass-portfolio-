/**
 * Primary site navigation. Sticky, navy, gold underline on hover.
 * Mobile: collapses behind a sheet trigger.
 */
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, ShieldCheck, UserRound, X } from "lucide-react";
import { mainNav, site } from "@/lib/site";
import { BrandLogo } from "./BrandLogo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={
        "sticky top-0 z-50 border-b transition-all duration-300 " +
        (scrolled
          ? "border-background/10 bg-primary/95 backdrop-blur-md shadow-[0_4px_24px_hsl(var(--primary-deep)/0.4)]"
          : "border-background/5 bg-primary")
      }
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-[72px] md:gap-6">
        <BrandLogo variant="light" />

        {/* Desktop nav */}
        <nav className="hidden items-stretch lg:flex" aria-label="Primary">
          {mainNav.map((item) => {
            const active = pathname === item.href;
            return (
              <NavLink
                key={item.href}
                to={item.href}
                className={
                  "relative -mb-px flex items-center border-b-[3px] px-3.5 py-5 text-[13px] font-medium transition-colors " +
                  (active
                    ? "border-accent text-background"
                    : "border-transparent text-background/75 hover:border-accent hover:text-background")
                }
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2 md:gap-4">
          <Link
            to="/verify"
            className="hidden items-center gap-1.5 text-[13px] text-background/70 transition-colors hover:text-background lg:flex"
          >
            <ShieldCheck className="h-4 w-4" /> Verify
          </Link>
          <a
            href={site.ops}
            className="hidden items-center gap-1.5 text-[13px] text-background/70 transition-colors hover:text-background xl:flex"
          >
            <UserRound className="h-4 w-4" /> Login
          </a>
          <Link
            to="/contact"
            className="hidden bg-accent px-4 py-2 text-[12.5px] font-semibold tracking-wide text-accent-foreground transition-colors hover:bg-accent-bright md:inline-block lg:px-5"
          >
            Get in touch
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center text-background lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-background/10 bg-primary-deep lg:hidden">
          <nav className="container-page flex flex-col py-4" aria-label="Mobile">
            {mainNav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className={
                    "flex items-center justify-between border-b border-background/5 py-4 text-[15px] transition-colors " +
                    (active ? "text-accent" : "text-background/85 hover:text-background")
                  }
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-[10px] text-background/30">
                    {String(mainNav.indexOf(item) + 1).padStart(2, "0")}
                  </span>
                </Link>
              );
            })}

            <div className="mt-6 space-y-3">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center bg-accent px-4 py-3.5 text-sm font-semibold text-accent-foreground"
              >
                Get in touch
              </Link>
              <Link
                to="/verify"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 border border-background/20 px-4 py-3 text-sm text-background"
              >
                <ShieldCheck className="h-4 w-4" /> Verify Certificate
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
