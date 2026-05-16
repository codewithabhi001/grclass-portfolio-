import { FormEvent, forwardRef, useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight, Send } from "lucide-react";
import { mainNav, site } from "@/lib/site";
import { BrandLogo } from "./BrandLogo";
import { subscribeNewsletter } from "@/lib/api";
import { toast } from "sonner";

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
        <div className="md:col-span-4">
          <BrandLogo variant="light" />
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
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-accent" /> 30 St Mary Axe, London EC3A 8BF
            </div>
          </div>
        </div>

        {/* Sitemap */}
        <div className="md:col-span-2">
          <h4 className="mb-5 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
            Navigate
          </h4>
          <ul className="space-y-2.5 text-sm text-background/65">
            {mainNav.map((i) => (
              <li key={i.href}>
                <Link to={i.href} className="transition-colors hover:text-background">
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="md:col-span-3">
          <h4 className="mb-5 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
            Services
          </h4>
          <ul className="space-y-2.5 text-sm text-background/65">
            {[
              "Class Surveys",
              "Statutory Certification",
              "Technical Advisory",
              "Transfer of Class",
              "Decarbonisation",
              "Digital Verification",
            ].map((s) => (
              <li key={s} className="transition-colors hover:text-background">
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Status */}
        <div className="md:col-span-3">
          <h4 className="mb-5 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
            Operations
          </h4>
          <a
            href={site.ops}
            className="group flex items-center justify-between border border-background/10 bg-background/[0.04] p-4 transition-colors hover:border-accent/40"
          >
            <div>
              <div className="flex items-center gap-2 text-[13px] text-background/85">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Surveyor Portal
              </div>
              <div className="mt-1 text-[11px] text-background/45">All systems operational</div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-background/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
          </a>

          <form onSubmit={subscribe} className="mt-5">
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
                className="w-full border border-background/10 bg-background/[0.04] px-3 py-2.5 text-[13px] text-background placeholder:text-background/30 focus:border-accent focus:outline-none"
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
            ISO 9001:2015 audited · IACS Observer · Founded 1998
          </p>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container-page flex flex-col items-start justify-between gap-3 py-5 text-[11px] text-background/40 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <div className="flex gap-6">
            <Link to="/legal/privacy" className="transition-colors hover:text-background/70">Privacy</Link>
            <Link to="/legal/terms" className="transition-colors hover:text-background/70">Terms</Link>
            <Link to="/legal/compliance" className="transition-colors hover:text-background/70">Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
});
SiteFooter.displayName = "SiteFooter";
