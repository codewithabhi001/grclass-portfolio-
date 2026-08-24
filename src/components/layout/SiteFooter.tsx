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
            <div className="flex items-center gap-3 border-l border-white/20 pl-6 ml-2">
              <a href="https://www.facebook.com/profile.php?id=61593836337234" target="_blank" rel="noopener" className="transition-colors hover:text-background/70">Facebook</a>
              <a href="https://x.com/grclass" target="_blank" rel="noopener" className="transition-colors hover:text-background/70">X</a>
              <a href="https://www.instagram.com/grclassofficial/" target="_blank" rel="noopener" className="transition-colors hover:text-background/70">Instagram</a>
              <a href="https://linkedin.com/company/grclass" target="_blank" rel="noopener" className="transition-colors hover:text-background/70">LinkedIn</a>
              <a href="https://youtube.com/@grclass" target="_blank" rel="noopener" className="transition-colors hover:text-background/70">YouTube</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});
SiteFooter.displayName = "SiteFooter";
