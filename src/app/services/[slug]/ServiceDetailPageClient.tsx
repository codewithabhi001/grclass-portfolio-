"use client";

/**
 * Service detail | dynamic route /services/:slug.
 * Now supports both main category pages and individual sub-service pages.
 */
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Clock, ShieldCheck, Phone } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/layout/PageHero";
import { getServiceBySlug, servicesCatalogue } from "@/data/services";

import { site } from "@/lib/site";

const ServiceDetailPageClient = () => {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();

  const svc = slug ? getServiceBySlug(slug) : undefined;

  useEffect(() => {
    if (slug === "statutory-services") {
      router.replace("/services#statutory");
    } else if (!svc) {
      router.replace("/services");
    }
  }, [slug, svc, router]);

  if (slug === "statutory-services" || !svc) return null;

  const otherServices = servicesCatalogue
    .filter((s) => s.slug !== svc.slug && s.category === svc.category)
    .slice(0, 3);
  
  // If same-category services are less than 3, fill with other categories
  const moreServices = otherServices.length < 3
    ? [...otherServices, ...servicesCatalogue.filter(s => s.slug !== svc.slug && s.category !== svc.category).slice(0, 3 - otherServices.length)]
    : otherServices;

  return (
    <SiteShell>
      
      <PageHero
        eyebrow={svc.eyebrow}
        title={svc.title}
        subtitle={svc.tagline}
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: svc.title }]}
      />

      <section className="container-page section">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            {/* Hero image */}
            <motion.img
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              src={typeof svc.image === "string" ? svc.image : (svc.image as any).src}
              alt={svc.title}
              className="aspect-[16/10] w-full object-cover"
            />

            {/* Description */}
            <p className="mt-8 text-body-lg font-light text-muted-foreground">
              {svc.description}
            </p>

            {/* Detailed Content Sections */}
            {svc.detailedContent && svc.detailedContent.map((section, idx) => (
              <div key={idx} className="mt-10">
                {section.heading && (
                  <h3 className="h-display mb-4 text-[20px] text-primary border-l-[3px] border-accent pl-4">
                    {section.heading}
                  </h3>
                )}
                {section.paragraphs?.map((p, pIdx) => (
                  <p key={pIdx} className="mb-4 text-body font-light text-muted-foreground">
                    {p}
                  </p>
                ))}
                {section.list && (
                  <ul className={`mb-4 ${section.list.length > 10 ? "grid gap-x-6 gap-y-2 sm:grid-cols-2" : "space-y-2"}`}>
                    {section.list.map((li, lIdx) => (
                      <li key={lIdx} className="flex items-start gap-3 text-body-sm text-foreground/85">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Scope of Work */}
            <h2 className="h-display mt-12 text-[24px] text-primary">Scope of Work</h2>
            <ul className="mt-5 space-y-3">
              {svc.scope.map((item) => (
                <li key={item} className="flex items-start gap-3 text-body-sm text-foreground/85">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Deliverables */}
            <h2 className="h-display mt-12 text-[24px] text-primary">Deliverables</h2>
            <ul className="mt-5 space-y-3">
              {svc.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 text-body-sm text-foreground/85">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <aside className="md:col-span-5 md:pl-8">
            <div className="sticky top-24 space-y-6">
              {/* GR Class logo */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/grclass-logo.webp"
                  alt="GR Class"
                  className="h-12 w-auto"
                  style={{
                    filter: "brightness(0) saturate(100%) invert(10%) sepia(60%) saturate(2800%) hue-rotate(200deg) brightness(90%) contrast(100%)"
                  }}
                />
                <div>
                  <div className="font-display text-body-lg font-extrabold tracking-[0.06em] text-primary">GR&nbsp;CLASS</div>
                  <div className="text-[9px] uppercase tracking-[0.14em] text-primary/50">Classified for Standards</div>
                </div>
              </div>

              <div className="border border-border bg-card p-7">
                <h3 className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-secondary">
                  Engagement
                </h3>
                <div className="mt-5 space-y-5">
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 text-accent" />
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-subtle">Typical duration</div>
                      <div className="mt-1 text-body-sm text-foreground">{svc.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-4 w-4 text-accent" />
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-subtle">Standards</div>
                      <ul className="mt-1.5 space-y-1 text-caption text-foreground">
                        {svc.certifications.map((c) => (
                          <li key={c}>· {c}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 text-accent" />
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-subtle">Contact</div>
                      <a href={`tel:${site.phone}`} className="mt-1 block text-body-sm font-semibold text-accent hover:text-accent-bright transition-colors">
                        {site.phone}
                      </a>
                    </div>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="group mt-7 flex w-full items-center justify-center gap-2 bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-soft"
                >
                  Request a proposal
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="border border-border bg-accent-soft p-7">
                <span className="font-mono text-[10px] uppercase tracking-wider text-accent">No obligation</span>
                <p className="mt-3 text-caption font-light text-foreground/80">
                  Initial scoping conversations are always complimentary. We'll confirm flag-state delegation and outline the workstream within 48 hours.
                </p>
              </div>

              {/* Contact info */}
              <div className="border border-border bg-primary p-7">
                <h3 className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
                  Reach Us
                </h3>
                <div className="mt-4 space-y-3">
                  <a href={`tel:${site.phone}`} className="flex items-center gap-3 text-body-sm text-background/80 hover:text-background transition-colors">
                    <Phone className="h-4 w-4 text-accent" />
                    {site.phone}
                  </a>
                  <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-body-sm text-background/80 hover:text-background transition-colors">
                    <ShieldCheck className="h-4 w-4 text-accent" />
                    {site.email}
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Services */}
      <section className="border-t border-border bg-secondary-soft section">
        <div className="container-page">
          <span className="eyebrow text-secondary">More from our practice</span>
          <h2 className="h-display mt-3 text-display-sm text-primary">Related services</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {moreServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-card border border-border p-7 transition-all hover:border-accent hover:shadow-card"
              >
                <span className="eyebrow text-secondary">{s.eyebrow}</span>
                <h3 className="h-display mt-3 text-title text-primary">{s.title}</h3>
                <p className="mt-2 text-caption font-light text-muted-foreground">
                  {s.tagline}
                </p>
                <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-accent">
                  View Details <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
};

export default ServiceDetailPageClient;
