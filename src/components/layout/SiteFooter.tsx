"use client";

import { FormEvent, forwardRef, useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight, Send } from "lucide-react";
import { mainNav, site } from "@/lib/site";
import { BrandLogo } from "./BrandLogo";
import { subscribeNewsletter } from "@/lib/api";
import { toast } from "sonner";
import { servicesCatalogue } from "@/data/services";


export const SiteFooter = forwardRef<HTMLElement>((_, ref) => {
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);

  const subscribe = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setBusy(true);
    try {
      await subscribeNewsletter(email, "footer");
      toast.success("Subscribed", { description: "You'll receive the next bulletin." });
      setEmail("");
    } catch (err) {
      toast.error("Subscription failed", {
        description: err instanceof Error ? err.message : "Please try again.",
      });
    } finally {
      setBusy(false);
    }
  };

  return (
    <footer ref={ref} className="bg-primary text-background">
      {/* Gold accent separator line */}
      <div className="h-[3px] bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="container-page grid gap-10 py-14 sm:gap-12 md:grid-cols-12 md:py-16">
        {/* Brand block */}
        <div className="md:col-span-3">
          <BrandLogo variant="light" size="large" layout="vertical" />
          <div className="mb-2" />
          <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-background/55">
            {site.description}
          </p>
          <div className="mt-8 space-y-3 text-sm text-background/70">
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 transition-colors hover:text-background">
              <Mail className="h-4 w-4 text-accent" /> {site.email}
            </a>
            <a href={`tel:${site.phone}`} className="flex items-center gap-3 transition-colors hover:text-background">
              <Phone className="h-4 w-4 text-accent" /> {site.phone}
            </a>
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-accent" />
              <span className="leading-relaxed text-background/70">{site.address}</span>
            </div>
          </div>
        </div>

        {/* Sitemap */}
        <div className="md:col-span-2">
          <h4 className="mb-5 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-sm text-background/65">
            {mainNav.map((i) => (
              <li key={i.href}>
                <Link href={i.href} className="transition-colors hover:text-background">
                  {i.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/profile" className="transition-colors hover:text-background">
                Company Profile
              </Link>
            </li>
          </ul>
        </div>

        {/* Services — grouped by category */}
        <div className="md:col-span-4">
          <h4 className="mb-5 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
            Services
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
            {/* Column 1: Classification & Other */}
            <div className="space-y-6">
              {/* Classification */}
              <div>
                <h5 className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-background/45">
                  Classification
                </h5>
                <ul className="space-y-1.5 text-xs text-background/65">
                  {servicesCatalogue
                    .filter((s) => s.category === "classification")
                    .map((svc) => (
                      <li key={svc.slug}>
                        <Link
                          href={`/services/${svc.slug}`}
                          className="transition-colors hover:text-background block"
                        >
                          {svc.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
              {/* Other */}
              <div>
                <h5 className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-background/45">
                  Other Services
                </h5>
                <ul className="space-y-1.5 text-xs text-background/65">
                  {servicesCatalogue
                    .filter((s) => s.category === "other")
                    .map((svc) => (
                      <li key={svc.slug}>
                        <Link
                          href={`/services/${svc.slug}`}
                          className="transition-colors hover:text-background block"
                        >
                          {svc.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            {/* Column 2: Statutory & Environmental */}
            <div className="space-y-6">
              {/* Statutory */}
              <div>
                <h5 className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-background/45">
                  Statutory
                </h5>
                <ul className="space-y-1.5 text-xs text-background/65">
                  {servicesCatalogue
                    .filter((s) => s.category === "statutory")
                    .map((svc) => (
                      <li key={svc.slug}>
                        <Link
                          href={`/services/${svc.slug}`}
                          className="transition-colors hover:text-background block"
                        >
                          {svc.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
              {/* Environmental */}
              <div>
                <h5 className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-background/45">
                  Environmental
                </h5>
                <ul className="space-y-1.5 text-xs text-background/65">
                  {servicesCatalogue
                    .filter((s) => s.category === "environmental")
                    .map((svc) => (
                      <li key={svc.slug}>
                        <Link
                          href={`/services/${svc.slug}`}
                          className="transition-colors hover:text-background block"
                        >
                          {svc.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="md:col-span-3">
          <h4 className="mb-5 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
            Operations
          </h4>

          <form onSubmit={subscribe} className="mt-2">
            <label className="block font-mono text-[10px] uppercase tracking-wider text-background/40">
              Technical bulletin
            </label>
            <div className="mt-2 flex">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full border border-background/10 bg-background/[0.04] px-3 py-2.5 text-caption text-background placeholder:text-background/30 focus:border-accent focus:outline-none"
              />
              <button
                type="submit"
                disabled={busy}
                className="flex items-center justify-center bg-accent px-3 text-accent-foreground transition-colors hover:bg-accent-bright disabled:opacity-60"
                aria-label="Subscribe"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>

          <p className="mt-5 text-[11px] leading-relaxed text-background/40">
            ISO 9001:2015 & ISO 14001 Certified · Founded 2022
          </p>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container-page flex flex-col items-start justify-between gap-3 py-5 text-[11px] text-background/40 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href={`tel:${site.phone}`} className="transition-colors hover:text-background/70">{site.phone}</a>
            <Link href="/legal/privacy" className="transition-colors hover:text-background/70">Privacy</Link>
            <Link href="/legal/terms" className="transition-colors hover:text-background/70">Terms</Link>
            <Link href="/legal/compliance" className="transition-colors hover:text-background/70">Compliance</Link>
            <div className="flex items-center gap-2 border-l border-white/20 pl-6 ml-2">
              {/* Facebook */}
              <a href="https://www.facebook.com/profile.php?id=61593836337234" target="_blank" rel="noopener" aria-label="Facebook" className="group flex items-center justify-center w-9 h-9 rounded-full bg-white/5 hover:bg-[#1877F2] transition-all duration-300 hover:scale-110">
                <svg className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 1.092.063 1.544.126V7.79s-.834-.013-1.87-.013c-1.327 0-1.738.63-1.738 1.666v2.6h3.425l-.467 3.667h-2.958v8.105A11.978 11.978 0 0 0 24 12.014C24 5.387 18.627 0 12 0S0 5.387 0 12.014c0 5.343 3.476 9.873 8.292 11.46l.809.217Z"/></svg>
              </a>
              {/* X / Twitter */}
              <a href="https://x.com/grclassofficial" target="_blank" rel="noopener" aria-label="X" className="group flex items-center justify-center w-9 h-9 rounded-full bg-white/5 hover:bg-white transition-all duration-300 hover:scale-110">
                <svg className="w-4 h-4 text-white/50 group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/grclassofficial/" target="_blank" rel="noopener" aria-label="Instagram" className="group flex items-center justify-center w-9 h-9 rounded-full bg-white/5 hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] transition-all duration-300 hover:scale-110">
                <svg className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com/company/grclass" target="_blank" rel="noopener" aria-label="LinkedIn" className="group flex items-center justify-center w-9 h-9 rounded-full bg-white/5 hover:bg-[#0A66C2] transition-all duration-300 hover:scale-110">
                <svg className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});
SiteFooter.displayName = "SiteFooter";
