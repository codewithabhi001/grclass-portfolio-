"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, ShieldCheck, UserRound, X } from "lucide-react";
import { mainNav, site } from "@/lib/site";
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
          "fixed inset-x-0 top-0 z-50 h-header transition-all duration-300 " +
          (scrolled
            ? "bg-[#071830] shadow-[0_8px_30px_rgba(0,0,0,0.45)] border-b border-white/10"
            : "bg-[#071830] border-b border-white/10")
        }
      >
        {/* Top accent line */}
        <div className="absolute inset-x-0 top-0 h-[2.5px] bg-accent" />

        <div className="container-page flex h-full items-center justify-between gap-4">
          <BrandLogo variant="light" size="default" />

          {/* Desktop nav */}
          <nav className="hidden items-center self-stretch lg:flex gap-1 xl:gap-2" aria-label="Primary">
            {mainNav.map((item) => {
              const active = pathname === item.href;
              const hasChildren = !!item.children;

              return (
                <div
                  key={item.href}
                  className="flex h-full items-center"
                  onMouseEnter={hasChildren ? openDropdown : undefined}
                  onMouseLeave={hasChildren ? closeDropdown : undefined}
                >
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={
                      "group relative flex items-center px-3 py-2 text-sm font-semibold tracking-wide transition-colors duration-200 xl:px-4 " +
                      (active
                        ? "text-white"
                        : "text-white/70 hover:text-white")
                    }
                  >
                    <span>{item.label}</span>
                    {hasChildren && (
                      <ChevronDown className={
                        "ml-1 h-3.5 w-3.5 transition-transform duration-200 " +
                        (showDropdown ? "rotate-180" : "")
                      } />
                    )}
                    {/* Active indicator — accent line at bottom edge */}
                    <span
                      aria-hidden
                      className={
                        "absolute -bottom-1 left-3 right-3 h-[2.5px] rounded-full bg-accent transition-all duration-200 " +
                        (active ? "opacity-100" : "opacity-0 group-hover:opacity-60")
                      }
                    />
                  </Link>

                  {/* Mega Dropdown */}
                  {hasChildren && showDropdown && (
                    <div
                      className="absolute inset-x-0 top-full z-50 border-t border-b-2 border-t-white/15 border-b-accent bg-[#071830] shadow-[0_30px_60px_-10px_rgba(0,0,0,0.95)] animate-in fade-in slide-in-from-top-2 duration-200"
                      onMouseEnter={openDropdown}
                      onMouseLeave={closeDropdown}
                    >
                      <div className="container-page py-10">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-8 xl:grid-cols-4">
                          {item.children!.map((cat) => (
                            <div key={cat.heading} className="border-r border-white/10 pr-6 last:border-r-0">
                              <div className="mb-4 flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-accent" />
                                <h3 className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-accent">
                                  {cat.heading}
                                </h3>
                              </div>
                              <ul className="space-y-2.5">
                                {cat.items.map((sub) => (
                                  <li key={sub.href + sub.label}>
                                    <Link
                                      href={sub.href}
                                      className="inline-block text-body-sm text-white/80 transition-all duration-150 hover:text-accent hover:translate-x-1"
                                    >
                                      {sub.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        {/* Mega Menu Bottom Bar */}
                        <div className="mt-8 flex flex-wrap items-center justify-between border-t border-white/10 pt-5 text-xs text-white/70">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-white">Direct Classification & Technical Desk:</span>
                            <span>24/7 Global Surveyor Deployment</span>
                          </div>
                          <Link
                            href="/services"
                            className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-accent transition-colors hover:text-accent-bright"
                          >
                            <span>View All 23+ Statutory & Classification Services</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-2 md:gap-3">
            <Link
              href="/verify"
              className="hidden items-center gap-1.5 rounded-xs border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/90 transition-all hover:border-accent hover:bg-white/10 hover:text-white lg:flex"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-accent" /> Verify
            </Link>
            <a
              href={site.ops}
              className="hidden items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white/70 transition-colors hover:text-white xl:flex"
            >
              <UserRound className="h-3.5 w-3.5" /> Portal Login
            </a>

            {/* Divider */}
            <span aria-hidden className="mx-1 hidden h-5 w-px bg-white/15 lg:block" />

            <Link
              href="/contact"
              className="hidden items-center rounded-xs bg-accent px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-accent-foreground shadow-sm transition-all duration-200 hover:bg-accent-bright hover:shadow-md md:inline-flex"
            >
              Get in touch
            </Link>
            <button
              onClick={() => setOpen((o) => !o)}
              className="flex h-10 w-10 items-center justify-center rounded-xs text-white/90 transition-colors hover:bg-white/10 hover:text-white lg:hidden"
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
        <div className="fixed inset-x-0 bottom-0 top-header z-40 overflow-y-auto overscroll-contain bg-[#071830] border-t border-white/10 lg:hidden">
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
                          "flex w-full items-center justify-between border-b border-white/[0.08] py-3.5 text-base font-semibold transition-colors " +
                          (active ? "text-accent" : "text-white/80 hover:text-white")
                        }
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={
                          "h-4 w-4 shrink-0 transition-transform duration-200 " +
                          (isExpanded ? "rotate-180 text-accent" : "")
                        } />
                      </button>
                      {isExpanded && (
                        <div className="border-b border-white/[0.08] bg-white/[0.02] py-2">
                          {item.children!.map((cat) => (
                            <div key={cat.heading} className="mt-3 px-3 first:mt-1">
                              <h4 className="mb-1.5 font-sans text-[11px] font-bold uppercase tracking-wider text-accent">
                                {cat.heading}
                              </h4>
                              <ul className="space-y-1">
                                {cat.items.map((sub) => (
                                  <li key={sub.href + sub.label}>
                                    <Link
                                      href={sub.href}
                                      onClick={() => setOpen(false)}
                                      className="block py-1.5 text-sm text-white/70 transition-colors hover:text-white"
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
                        "flex items-center justify-between border-b border-white/[0.08] py-3.5 text-base font-semibold transition-colors " +
                        (active ? "text-accent" : "text-white/80 hover:text-white")
                      }
                    >
                      <span>{item.label}</span>
                      <span aria-hidden className="font-mono text-xs text-white/30">
                        {String(mainNav.indexOf(item) + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  )}
                </div>
              );
            })}

            <div className="mt-8 space-y-3 pb-6">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center rounded-xs bg-accent px-4 py-3.5 text-sm font-bold uppercase tracking-wider text-accent-foreground shadow-sm transition-colors hover:bg-accent-bright"
              >
                Get in touch
              </Link>
              <Link
                href="/verify"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xs border border-white/20 bg-white/5 px-4 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                <ShieldCheck className="h-4 w-4 text-accent" /> Verify Certificate
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
