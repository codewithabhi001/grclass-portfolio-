"use client";

import { FormEvent, forwardRef, useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, Send, ShieldCheck, FileCheck, Anchor, Globe2 } from "lucide-react";
import { mainNav, site } from "@/lib/site";
import { BrandLogo } from "./BrandLogo";
import { subscribeNewsletter } from "@/lib/api";
import { toast } from "sonner";
import { servicesCatalogue } from "@/data/services";
import { validateFormSubmission, recordSubmissionTimestamp } from "@/lib/antiSpam";

export const SiteFooter = forwardRef<HTMLElement>((_, ref) => {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [nlHumanVerified, setNlHumanVerified] = useState(false);
  const [nlNonce, setNlNonce] = useState("");
  const [busy, setBusy] = useState(false);
  const [renderedAt] = useState<number>(() => Date.now());

  const subscribe = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    if (!nlHumanVerified || !nlNonce.startsWith("gr_nl_human_")) {
      toast.error("Verification required", {
        description: "Please check the verification box to subscribe to official circulars.",
      });
      return;
    }

    const botCheck = validateFormSubmission({
      honeypotValue: honeypot,
      renderedAt,
      email,
      formKey: "newsletter",
      minDurationSeconds: 1.5,
      cooldownSeconds: 30,
    });

    if (botCheck.isSpam) {
      if (botCheck.silentBlock) {
        setBusy(true);
        setTimeout(() => {
          setBusy(false);
          toast.success("Subscribed", { description: "You are now registered for technical circulars." });
          setEmail("");
          setHoneypot("");
          setNlHumanVerified(false);
          setNlNonce("");
        }, 500);
        return;
      } else {
        toast.error("Subscription blocked", {
          description: botCheck.reason || "Please enter a valid official email address.",
        });
        return;
      }
    }

    setBusy(true);
    try {
      await subscribeNewsletter(email, "footer");
      recordSubmissionTimestamp("newsletter");
      toast.success("Subscribed", { description: "You will receive the next regulatory bulletin." });
      setEmail("");
      setHoneypot("");
      setNlHumanVerified(false);
      setNlNonce("");
    } catch (err) {
      toast.error("Subscription failed", {
        description: err instanceof Error ? err.message : "Please try again.",
      });
    } finally {
      setBusy(false);
    }
  };

  return (
    <footer ref={ref} className="bg-primary-deep text-white border-t border-white/10">
      {/* Top Institutional Accreditation & Authority Ribbon */}
      <div className="border-b border-white/10 bg-[#051329] py-3.5">
        <div className="container-page flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-[11px] font-semibold tracking-wider text-white/70 uppercase">
            <span className="flex items-center gap-1.5 text-accent">
              <ShieldCheck className="h-3.5 w-3.5" /> Recognised Organization (RO)
            </span>
            <span className="hidden h-3 w-px bg-white/20 sm:inline" />
            <span className="flex items-center gap-1.5">
              <Anchor className="h-3.5 w-3.5 text-accent" /> Recognised Security Organization (RSO)
            </span>
            <span className="hidden h-3 w-px bg-white/20 sm:inline" />
            <span className="flex items-center gap-1.5">
              <Globe2 className="h-3.5 w-3.5 text-accent" /> ISO 9001:2015 &amp; ISO 14001
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-medium text-white/80">
            <span className="text-white/40 hidden md:inline">24/7 Technical Dispatch:</span>
            <a
              href={`tel:${site.phone}`}
              className="flex items-center gap-1.5 font-mono text-accent hover:text-white transition-colors"
            >
              <Phone className="h-3 w-3" /> {site.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Corporate Directory */}
      <div className="container-page py-14 sm:py-16 lg:py-20">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-12">
          {/* Column 1: Organization Mandate & Identity */}
          <div className="md:col-span-12 lg:col-span-4">
            <BrandLogo variant="light" size="large" layout="horizontal" />
            <p className="mt-5 max-w-sm text-sm font-light leading-relaxed text-white/75">
              {site.description}
            </p>

            <div className="mt-6 space-y-2.5 text-xs text-white/80">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2.5 transition-colors hover:text-accent"
              >
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <span>{site.email}</span>
              </a>
              <a
                href={`tel:${site.phone}`}
                className="flex items-center gap-2.5 transition-colors hover:text-accent"
              >
                <Phone className="h-4 w-4 text-accent shrink-0" />
                <span>{site.phone}</span>
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 text-accent shrink-0" />
                <span className="leading-relaxed text-white/70">{site.address}</span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/verify"
                className="inline-flex items-center gap-2 rounded-xs border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-colors hover:border-accent hover:bg-white/10 hover:text-accent"
              >
                <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                Verify Official Certificate
              </Link>
            </div>
          </div>

          {/* Column 2: Governance & Institutional Links */}
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.16em] text-accent">
              The Society
            </h4>
            <ul className="space-y-2 text-xs text-white/75">
              <li>
                <Link href="/about" className="transition-colors hover:text-white block py-0.5">
                  About GR Class
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="transition-colors hover:text-white block py-0.5">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/careers" className="transition-colors hover:text-white block py-0.5">
                  Surveyor Network
                </Link>
              </li>
              <li>
                <Link href="/news" className="transition-colors hover:text-white block py-0.5">
                  Regulatory News
                </Link>
              </li>
              <li>
                <Link href="/faq" className="transition-colors hover:text-white block py-0.5">
                  Technical FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-white block py-0.5">
                  Request Survey
                </Link>
              </li>
              <li>
                <Link href="/profile" className="transition-colors hover:text-white block py-0.5">
                  Corporate Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Classification Practice */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.16em] text-accent">
              Classification
            </h4>
            <ul className="space-y-2 text-xs text-white/75">
              {servicesCatalogue
                .filter((s) => s.category === "classification")
                .map((svc) => (
                  <li key={svc.slug}>
                    <Link
                      href={`/services/${svc.slug}`}
                      className="transition-colors hover:text-white block py-0.5 line-clamp-1"
                    >
                      {svc.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Column 4: Statutory & Environmental Conventions */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.16em] text-accent">
              Statutory Services
            </h4>
            <ul className="space-y-2 text-xs text-white/75">
              {servicesCatalogue
                .filter((s) => s.category === "statutory" || s.category === "environmental")
                .slice(0, 7)
                .map((svc) => (
                  <li key={svc.slug}>
                    <Link
                      href={`/services/${svc.slug}`}
                      className="transition-colors hover:text-white block py-0.5 line-clamp-1"
                    >
                      {svc.title}
                    </Link>
                  </li>
                ))}
            </ul>

            {/* Regulatory Circulars Subscription Box */}
            <div className="mt-8 border-t border-white/10 pt-5">
              <h5 className="text-[11px] font-bold uppercase tracking-wider text-accent">
                Regulatory Circulars
              </h5>
              <p className="mt-1 text-[11px] text-white/60 font-light">
                Receive IMO compliance bulletins and rulebook amendments.
              </p>

              <form onSubmit={subscribe} className="mt-3">
                <div style={{ display: "none", position: "absolute", opacity: 0, pointerEvents: "none" }} aria-hidden="true">
                  <input
                    type="text"
                    name="website_url_hp"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                <div className="flex">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="official@shipping.com"
                    className="w-full border border-white/15 bg-white/5 px-3 py-2 text-xs text-white placeholder:text-white/30 focus:border-accent focus:outline-none rounded-none"
                  />
                  <button
                    type="submit"
                    disabled={busy || !nlHumanVerified}
                    className={`flex items-center justify-center px-3 transition-colors rounded-none ${
                      !nlHumanVerified
                        ? "bg-white/10 text-white/40 cursor-not-allowed"
                        : "bg-accent text-accent-foreground hover:bg-accent-bright cursor-pointer"
                    }`}
                    aria-label="Subscribe"
                    title={!nlHumanVerified ? "Check the security verification below to enable" : "Subscribe"}
                  >
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </div>

                <label className="mt-2 flex items-center gap-2 text-[10px] text-white/60 cursor-pointer select-none hover:text-white transition-colors">
                  <input
                    type="checkbox"
                    checked={nlHumanVerified}
                    onChange={(e) => {
                      setNlHumanVerified(e.target.checked);
                      if (e.target.checked) setNlNonce(`gr_nl_human_${Date.now()}`);
                      else setNlNonce("");
                    }}
                    className="h-3 w-3 rounded border-white/20 bg-white/5 accent-accent cursor-pointer"
                  />
                  <span>Security verification: I am human</span>
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Regional Offices & Administration */}
      <div className="border-t border-white/10 bg-[#051329] py-8">
        <div className="container-page">
          <div className="mb-4">
            <span className="text-[11px] font-sans uppercase tracking-[0.18em] text-accent font-bold">
              Global Administrative Offices &amp; Survey Attendance
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {/* Headquarters UAE */}
            <div className="border border-white/10 bg-white/[0.03] p-4 rounded-xs">
              <span className="text-[10.5px] font-bold uppercase tracking-wider text-accent block">
                Headquarters · Ajman, UAE
              </span>
              <p className="mt-1.5 text-xs text-white/75 leading-relaxed font-light">
                {site.address}
              </p>
              <div className="mt-2 text-[11px] font-mono text-white/90">
                Tel: {site.phone}
              </div>
            </div>

            {/* India Regional Office */}
            <div className="border border-white/10 bg-white/[0.03] p-4 rounded-xs">
              <span className="text-[10.5px] font-bold uppercase tracking-wider text-accent block">
                Regional Office · Navi Mumbai, India
              </span>
              <p className="mt-1.5 text-xs text-white/75 leading-relaxed font-light">
                {site.additionalOffices[0].address}
              </p>
            </div>

            {/* European Office Greece */}
            <div className="border border-white/10 bg-white/[0.03] p-4 rounded-xs">
              <span className="text-[10.5px] font-bold uppercase tracking-wider text-accent block">
                European Office · Piraeus, Greece
              </span>
              <p className="mt-1.5 text-xs text-white/75 leading-relaxed font-light">
                {site.additionalOffices[1].address}
              </p>
            </div>

            {/* Americas Office Panama */}
            <div className="border border-white/10 bg-white/[0.03] p-4 rounded-xs">
              <span className="text-[10.5px] font-bold uppercase tracking-wider text-accent block">
                Americas Office · Panama City, Panama
              </span>
              <p className="mt-1.5 text-xs text-white/75 leading-relaxed font-light">
                {site.additionalOffices[2].address}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Official Statutory Disclaimer & Bottom Legal Bar */}
      <div className="border-t border-white/10 bg-[#040f21] py-6">
        <div className="container-page flex flex-col gap-4 text-xs text-white/50">
          <p className="text-[11px] leading-relaxed text-white/45">
            <strong>Statutory Mandate:</strong> GR Class operates as a Recognized Organization (RO) and
            Recognized Security Organization (RSO) delivering statutory ship surveys, plan approvals, and
            marine safety certificates under bilateral authorizations granted by maritime flag administrations
            in accordance with the IMO Code for Recognized Organizations (RO Code).
          </p>

          <div className="flex flex-col items-start justify-between gap-3 pt-3 border-t border-white/5 sm:flex-row sm:items-center">
            <span>© {new Date().getFullYear()} {site.name} Classification Society. All rights reserved.</span>

            <div className="flex flex-wrap items-center gap-4 text-white/70">
              <Link href="/legal/privacy" className="transition-colors hover:text-accent">Privacy Policy</Link>
              <span>·</span>
              <Link href="/legal/terms" className="transition-colors hover:text-accent">Terms of Service</Link>
              <span>·</span>
              <Link href="/legal/compliance" className="transition-colors hover:text-accent">Code of Ethics &amp; Compliance</Link>
              <span>·</span>
              <Link href="/verify" className="transition-colors hover:text-accent">Verify Certificate</Link>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/profile.php?id=61593836337234"
                target="_blank"
                rel="noopener"
                aria-label="Facebook"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 hover:bg-[#1877F2] text-white transition-all"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 1.092.063 1.544.126V7.79s-.834-.013-1.87-.013c-1.327 0-1.738.63-1.738 1.666v2.6h3.425l-.467 3.667h-2.958v8.105A11.978 11.978 0 0 0 24 12.014C24 5.387 18.627 0 12 0S0 5.387 0 12.014c0 5.343 3.476 9.873 8.292 11.46l.809.217Z"/></svg>
              </a>
              <a
                href="https://x.com/grclassofficial"
                target="_blank"
                rel="noopener"
                aria-label="X"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 hover:bg-white hover:text-black text-white transition-all"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a
                href="https://www.instagram.com/grclassofficial/"
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 hover:bg-gradient-to-tr hover:from-amber-500 hover:to-pink-600 text-white transition-all"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z"/></svg>
              </a>
              <a
                href="https://linkedin.com/company/grclass"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 hover:bg-[#0A66C2] text-white transition-all"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

SiteFooter.displayName = "SiteFooter";
