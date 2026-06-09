/**
 * Primary site navigation. Sticky, navy, gold underline on hover.
 * Mobile: collapses behind a sheet trigger.
 * Desktop: mega dropdown for Services.
 */
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, ShieldCheck, UserRound, X } from "lucide-react";
import { mainNav, site, type NavItem } from "@/lib/site";
import { BrandLogo } from "./BrandLogo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const { pathname } = useLocation();
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
    setShowDropdown(false);
    setExpandedMobile(null);
  }, [pathname]);

  const openDropdown = useCallback(() => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setShowDropdown(true);
  }, []);

  const closeDropdown = useCallback(() => {
    dropdownTimeout.current = setTimeout(() => setShowDropdown(false), 120);
  }, []);

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
              const hasChildren = !!item.children;

              return (
                <div
                  key={item.href}
                  className="flex items-stretch"
                  onMouseEnter={hasChildren ? openDropdown : undefined}
                  onMouseLeave={hasChildren ? closeDropdown : undefined}
                >
                  <NavLink
                    to={item.href}
                    className={
                      "group relative flex items-center px-4 text-[13.5px] font-semibold tracking-wide transition-colors duration-200 " +
                      (active
                        ? "text-white"
                        : "text-white/65 hover:text-white")
                    }
                  >
                    {item.label}
                    {hasChildren && (
                      <ChevronDown className={
                        "ml-1 h-3.5 w-3.5 transition-transform duration-200 " +
                        (showDropdown ? "rotate-180" : "")
                      } />
                    )}
                    {/* Active indicator — gold bar */}
                    <span
                      className={
                        "absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] rounded-full bg-accent transition-all duration-300 " +
                        (active ? "w-[60%] opacity-100" : "w-0 opacity-0 group-hover:w-[40%] group-hover:opacity-60")
                      }
                    />
                  </NavLink>

                  {/* Mega Dropdown */}
                  {hasChildren && showDropdown && (
                    <div
                      className="absolute left-0 w-full top-full bg-primary-deep shadow-2xl z-50 animate-in fade-in duration-200"
                      onMouseEnter={openDropdown}
                      onMouseLeave={closeDropdown}
                    >
                      <div className="container-page grid grid-cols-4 gap-8 py-10">
                        {item.children!.map((cat) => (
                          <div key={cat.heading}>
                            <h3 className="text-accent font-display text-[13px] font-bold uppercase tracking-[0.14em] mb-4">
                              {cat.heading}
                            </h3>
                            <ul className="space-y-2.5">
                              {cat.items.map((sub) => (
                                <li key={sub.href + sub.label}>
                                  <Link
                                    to={sub.href}
                                    className="text-[13.5px] text-white/70 hover:text-white transition-colors"
                                  >
                                    {sub.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
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
              const hasChildren = !!item.children;
              const isExpanded = expandedMobile === item.href;

              return (
                <div key={item.href}>
                  {hasChildren ? (
                    <>
                      <button
                        onClick={() => setExpandedMobile(isExpanded ? null : item.href)}
                        className={
                          "flex w-full items-center justify-between border-b border-white/[0.06] py-4 text-[15px] font-medium transition-colors " +
                          (active ? "text-accent" : "text-white/75 hover:text-white")
                        }
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={
                          "h-4 w-4 transition-transform duration-200 " +
                          (isExpanded ? "rotate-180" : "")
                        } />
                      </button>
                      {isExpanded && (
                        <div className="border-b border-white/[0.06] pb-4">
                          {item.children!.map((cat) => (
                            <div key={cat.heading} className="mt-4 first:mt-2">
                              <h4 className="text-accent font-display text-[11px] font-bold uppercase tracking-[0.14em] mb-2 px-3">
                                {cat.heading}
                              </h4>
                              <ul className="space-y-1">
                                {cat.items.map((sub) => (
                                  <li key={sub.href + sub.label}>
                                    <Link
                                      to={sub.href}
                                      onClick={() => setOpen(false)}
                                      className="block px-3 py-1.5 text-[13.5px] text-white/60 hover:text-white transition-colors"
                                    >
                                      {sub.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
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
                  )}
                </div>
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
