/**
 * Primary site navigation. Sticky, navy, gold underline on hover.
 * Mobile: collapses behind a sheet trigger.
 * Desktop: mega dropdown for Services.
 */
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, ShieldCheck, UserRound, X } from "lucide-react";
import { mainNav, site, type NavItem } from "@/lib/site";
import { BrandLogo } from "./BrandLogo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const pathname = usePathname();
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
          "fixed inset-x-0 top-0 z-50 h-header transition-[background-color,box-shadow,backdrop-filter] duration-300 " +
          (scrolled
            ? "bg-primary/90 shadow-[0_8px_30px_hsl(var(--primary-deep)/0.35)] backdrop-blur-xl"
            : "bg-primary/95 backdrop-blur-md")
        }
      >
        {/* Top accent line */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-accent via-accent-bright to-accent opacity-90" />

        <div className="container-page flex h-full items-center justify-between gap-4 md:gap-6">
          <BrandLogo variant="light" />

          {/* Desktop nav */}
          <nav className="hidden items-stretch self-stretch lg:flex" aria-label="Primary">
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
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={
                      "group relative flex items-center px-3.5 text-body-sm font-semibold tracking-[0.005em] transition-colors duration-200 xl:px-4 " +
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
                      aria-hidden
                      className={
                        "absolute bottom-3 left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-accent transition-all duration-300 " +
                        (active ? "w-[60%] opacity-100" : "w-0 opacity-0 group-hover:w-[40%] group-hover:opacity-60")
                      }
                    />
                  </Link>

                  {/* Mega Dropdown */}
                  {hasChildren && showDropdown && (
                    <div
                      className="absolute inset-x-0 top-full z-50 border-t border-white/10 bg-primary-deep/95 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-300"
                      onMouseEnter={openDropdown}
                      onMouseLeave={closeDropdown}
                    >
                      <div className="container-page grid grid-cols-2 gap-x-8 gap-y-10 py-10 xl:grid-cols-4">
                        {item.children!.map((cat) => (
                          <div key={cat.heading}>
                            <h3 className="mb-4 font-display text-overline font-bold uppercase text-accent">
                              {cat.heading}
                            </h3>
                            <ul className="space-y-2.5">
                              {cat.items.map((sub) => (
                                <li key={sub.href + sub.label}>
                                  <Link
                                    href={sub.href}
                                    className="text-body-sm text-white/70 transition-colors hover:text-white"
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
              href="/verify"
              className="hidden items-center gap-1.5 rounded-md px-3 py-2 text-caption font-medium text-white/60 transition-colors hover:bg-white/[0.06] hover:text-white lg:flex"
            >
              <ShieldCheck className="h-4 w-4" /> Verify
            </Link>
            <a
              href={site.ops}
              className="hidden items-center gap-1.5 rounded-md px-3 py-2 text-caption font-medium text-white/60 transition-colors hover:bg-white/[0.06] hover:text-white xl:flex"
            >
              <UserRound className="h-4 w-4" /> Login
            </a>

            {/* Divider */}
            <span aria-hidden className="mx-2 hidden h-6 w-px bg-white/15 xl:block" />

            <Link
              href="/contact"
              className="hidden items-center rounded-sm bg-gradient-to-r from-accent to-accent-bright bg-sweep px-5 py-2.5 text-caption font-bold tracking-[0.01em] text-primary shadow-brass transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--accent)/0.6)] md:inline-flex"
            >
              Get in touch
            </Link>
            <button
              onClick={() => setOpen((o) => !o)}
              className="-mr-2 flex h-11 w-11 items-center justify-center rounded-md text-white/80 transition-colors hover:bg-white/[0.06] hover:text-white lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-x-0 bottom-0 top-header z-40 overflow-y-auto overscroll-contain bg-primary-deep lg:hidden">
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
                        aria-expanded={isExpanded}
                        className={
                          "flex w-full items-center justify-between border-b border-white/[0.06] py-4 text-body-lg font-medium transition-colors " +
                          (active ? "text-accent" : "text-white/75 hover:text-white")
                        }
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={
                          "h-4 w-4 shrink-0 transition-transform duration-200 " +
                          (isExpanded ? "rotate-180" : "")
                        } />
                      </button>
                      {isExpanded && (
                        <div className="border-b border-white/[0.06] pb-4">
                          {item.children!.map((cat) => (
                            <div key={cat.heading} className="mt-5 first:mt-3">
                              <h4 className="mb-2 px-3 font-display text-overline-sm font-bold uppercase text-accent">
                                {cat.heading}
                              </h4>
                              <ul>
                                {cat.items.map((sub) => (
                                  <li key={sub.href + sub.label}>
                                    <Link
                                      href={sub.href}
                                      onClick={() => setOpen(false)}
                                      className="block px-3 py-2 text-body-sm text-white/60 transition-colors hover:text-white"
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
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={
                        "flex items-center justify-between border-b border-white/[0.06] py-4 text-body-lg font-medium transition-colors " +
                        (active ? "text-accent" : "text-white/75 hover:text-white")
                      }
                    >
                      <span>{item.label}</span>
                      <span aria-hidden className="font-mono text-overline-sm text-white/25">
                        {String(mainNav.indexOf(item) + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  )}
                </div>
              );
            })}

            <div className="mt-8 space-y-3 pb-4">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center bg-accent px-4 py-3.5 text-body-sm font-bold text-accent-foreground"
              >
                Get in touch
              </Link>
              <Link
                href="/verify"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 border border-white/15 px-4 py-3.5 text-body-sm font-medium text-white/80"
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
