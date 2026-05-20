/**
 * Service detail | dynamic route /services/:slug.
 */
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, Clock, ShieldCheck } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/layout/PageHero";
import { getServiceBySlug, servicesCatalogue } from "@/data/services";

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const svc = slug ? getServiceBySlug(slug) : undefined;

  if (!svc) return <Navigate to="/services" replace />;

  const otherServices = servicesCatalogue.filter((s) => s.slug !== svc.slug).slice(0, 3);

  return (
    <SiteShell>
      <PageHero
        eyebrow={svc.eyebrow}
        title={svc.title}
        subtitle={svc.tagline}
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: svc.title }]}
      />

      <section className="container-page py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <motion.img
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              src={svc.image}
              alt={svc.title}
              className="aspect-[16/10] w-full object-cover"
            />
            <p className="mt-8 text-[16px] font-light leading-relaxed text-muted-foreground">
              {svc.description}
            </p>

            {svc.detailedContent && svc.detailedContent.map((section, idx) => (
              <div key={idx} className="mt-10">
                {section.heading && (
                  <h3 className="h-display mb-4 text-[20px] text-primary">
                    {section.heading}
                  </h3>
                )}
                {section.paragraphs?.map((p, pIdx) => (
                  <p key={pIdx} className="mb-4 text-[15px] font-light leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
                {section.list && (
                  <ul className={`mb-4 ${section.list.length > 8 ? "grid gap-x-6 gap-y-2 sm:grid-cols-2" : "space-y-2"}`}>
                    {section.list.map((li, lIdx) => (
                      <li key={lIdx} className="flex items-start gap-3 text-[14.5px] text-foreground/85">
                        <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <h2 className="h-display mt-12 text-[24px] text-primary">Scope of work</h2>
            <ul className="mt-5 space-y-3">
              {svc.scope.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14.5px] text-foreground/85">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="h-display mt-12 text-[24px] text-primary">Deliverables</h2>
            <ul className="mt-5 space-y-3">
              {svc.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14.5px] text-foreground/85">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <aside className="md:col-span-5 md:pl-8">
            <div className="sticky top-24 space-y-6">
              <div className="border border-border bg-card p-7">
                <h3 className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-secondary">
                  Engagement
                </h3>
                <div className="mt-5 space-y-5">
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 text-accent" />
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-subtle">Typical duration</div>
                      <div className="mt-1 text-[14px] text-foreground">{svc.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-4 w-4 text-accent" />
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-subtle">Standards</div>
                      <ul className="mt-1.5 space-y-1 text-[13.5px] text-foreground">
                        {svc.certifications.map((c) => (
                          <li key={c}>· {c}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="group mt-7 flex w-full items-center justify-center gap-2 bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-soft"
                >
                  Request a proposal
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="border border-border bg-accent-soft p-7">
                <span className="font-mono text-[10px] uppercase tracking-wider text-accent">No obligation</span>
                <p className="mt-3 text-[13.5px] font-light leading-relaxed text-foreground/80">
                  Initial scoping conversations are always complimentary. We'll confirm flag-state delegation and outline the workstream within 48 hours.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-border bg-secondary-soft py-20">
        <div className="container-page">
          <span className="eyebrow text-secondary">More from our practice</span>
          <h2 className="h-display mt-3 text-[clamp(22px,2vw,30px)] text-primary">Related services</h2>
          <div className="mt-10 grid gap-px bg-border md:grid-cols-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group bg-card p-7 transition-colors hover:bg-card/70"
              >
                <span className="eyebrow text-secondary">{s.eyebrow}</span>
                <h3 className="h-display mt-3 text-[18px] text-primary">{s.title}</h3>
                <p className="mt-2 text-[13.5px] font-light leading-relaxed text-muted-foreground">
                  {s.tagline}
                </p>
                <div className="mt-5 flex items-center gap-1.5 text-[12px] font-medium text-secondary">
                  Read scope <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
};

export default ServiceDetailPage;
