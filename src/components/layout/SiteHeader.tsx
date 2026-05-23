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
    <>
      <header
        className={
          "sticky top-0 z-50 transition-all duration-300 " +
          (scrolled
            ? "bg-primary/[0.97] backdrop-blur-xl shadow-[0_2px_24px_rgba(0,0,0,0.25)]"
            : "bg-primary")
        }
      >
        {/* Top accent line */}
        <div className="h-[2px] w-full bg-gradient-to-r from-accent via-accent-bright to-accent" />

        <div className="container-page flex h-16 items-center justify-between gap-4 md:h-20 md:gap-6">
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
                    "group relative flex items-center px-4 text-[13.5px] font-semibold tracking-wide transition-colors duration-200 " +
                    (active
                      ? "text-white"
                      : "text-white/65 hover:text-white")
                  }
                >
                  {item.label}
                  {/* Active indicator — gold bar */}
                  <span
                    className={
                      "absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] rounded-full bg-accent transition-all duration-300 " +
                      (active ? "w-[60%] opacity-100" : "w-0 opacity-0 group-hover:w-[40%] group-hover:opacity-60")
                    }
                  />
                </NavLink>
              );
            })}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-1 md:gap-2">
            <Link
              to="/verify"
              className="hidden items-center gap-1.5 rounded-md px-3 py-2 text-[13px] font-medium text-white/60 transition-colors hover:bg-white/[0.06] hover:text-white lg:flex"
            >
              <ShieldCheck className="h-4 w-4" /> Verify
            </Link>
            <a
              href={site.ops}
              className="hidden items-center gap-1.5 rounded-md px-3 py-2 text-[13px] font-medium text-white/60 transition-colors hover:bg-white/[0.06] hover:text-white xl:flex"
            >
              <UserRound className="h-4 w-4" /> Login
            </a>

            {/* Divider */}
            <span className="hidden h-6 w-px bg-white/15 mx-2 xl:block" />

            <Link
              to="/contact"
              className="hidden items-center bg-accent px-5 py-2.5 text-[13px] font-bold tracking-wide text-accent-foreground shadow-brass transition-all hover:bg-accent-bright hover:shadow-[0_6px_20px_hsl(var(--accent)/0.4)] md:inline-flex"
            >
              Get in touch
            </Link>
            <button
              onClick={() => setOpen((o) => !o)}
              className="flex h-10 w-10 items-center justify-center text-white/80 hover:text-white transition-colors lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Bottom border */}
        <div className="h-px w-full bg-white/[0.08]" />
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-x-0 top-[66px] md:top-[82px] bottom-0 z-40 overflow-y-auto bg-primary-deep lg:hidden">
          <nav className="container-page flex flex-col py-6" aria-label="Mobile">
            {mainNav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className={
                    "flex items-center justify-between border-b border-white/[0.06] py-4 text-[15px] font-medium transition-colors " +
                    (active ? "text-accent" : "text-white/75 hover:text-white")
                  }
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-[10px] text-white/25">
                    {String(mainNav.indexOf(item) + 1).padStart(2, "0")}
                  </span>
                </Link>
              );
            })}

            <div className="mt-8 space-y-3">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center bg-accent px-4 py-3.5 text-sm font-bold text-accent-foreground"
              >
                Get in touch
              </Link>
              <Link
                to="/verify"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 border border-white/15 px-4 py-3 text-sm font-medium text-white/80"
              >
                <ShieldCheck className="h-4 w-4" /> Verify Certificate
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

