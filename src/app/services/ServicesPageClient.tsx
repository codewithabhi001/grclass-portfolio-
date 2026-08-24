"use client";

/**
 * Services index page | grouped by category with prominent headings.
 */
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowUpRight, Anchor, ShieldCheck, Leaf, Wrench } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";

import { PageHero } from "@/components/layout/PageHero";
import { servicesCatalogue, serviceCategories } from "@/data/services";
import { SurveyorApplicationModal } from "@/features/services/SurveyorApplicationModal";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  classification: <Anchor className="h-8 w-8" />,
  statutory: <ShieldCheck className="h-8 w-8" />,
  environmental: <Leaf className="h-8 w-8" />,
  other: <Wrench className="h-8 w-8" />,
};

const ServicesPageClient = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const currentHash = typeof window !== "undefined" ? window.location.hash : "";
    if (currentHash) {
      const hash = currentHash.replace("#", "");
      setActiveHash(hash);
      const element = document.getElementById(hash);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 150);
        return () => clearTimeout(timer);
      }
    } else {
      setActiveHash("");
    }
  }, []);

  return (
    <SiteShell>
      
      <PageHero
        eyebrow="Our Services"
        title="Comprehensive maritime classification, statutory, and advisory services."
        subtitle="Every engagement is delivered by exclusive surveyors and signed under our recognised organisation status — never sub-contracted."
        breadcrumbs={[{ label: "Services" }]}
      />

      {/* Big logo display */}
      <section className="bg-card border-b border-border section-sm">
        <div className="container-page flex items-center justify-center gap-6">
          <img
            src="/grclass-logo.webp"
            alt="GR Class"
            className="h-16 md:h-20 w-auto"
            style={{
              filter: "brightness(0) saturate(100%) invert(10%) sepia(60%) saturate(2800%) hue-rotate(200deg) brightness(90%) contrast(100%)"
            }}
          />
          <div>
            <div className="font-display text-[22px] md:text-[26px] font-extrabold tracking-[0.06em] text-primary">
              GR&nbsp;CLASS
            </div>
            <div className="text-[11px] md:text-xs uppercase tracking-[0.14em] text-primary/50">
              Classified for Standards
            </div>
          </div>
        </div>
      </section>

      {/* Services grouped by category */}
      {serviceCategories.map((cat, catIdx) => {
        const catServices = servicesCatalogue.filter(s => s.category === cat.slug);
        const Icon = CATEGORY_ICONS[cat.slug];

        return (
          <section
            key={cat.slug}
            id={cat.slug}
            className={`section ${catIdx % 2 === 0 ? "bg-background" : "bg-secondary-soft"}`}
          >
            <div className="container-page">
              {/* Category heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-5 mb-10"
              >
                <div className="flex h-16 w-16 items-center justify-center bg-accent text-accent-foreground flex-shrink-0">
                  {Icon}
                </div>
                <div>
                  <h2 className="h-display text-display-md text-primary">
                    {cat.heading}
                  </h2>
                  <p className="mt-1 text-body font-light text-muted-foreground">
                    {cat.description}
                  </p>
                </div>
              </motion.div>

              {/* Service cards grid */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {catServices.map((svc, i) => {
                  const isHighlighted = activeHash === svc.slug;
                  return (
                    <motion.article
                      key={svc.slug}
                      id={svc.slug}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                      className={`group relative overflow-hidden border bg-card transition-all duration-500 ${
                        isHighlighted
                          ? "border-accent shadow-card scale-[1.01] ring-4 ring-accent/15 z-10"
                          : "border-border hover:border-accent hover:shadow-card"
                      }`}
                    >
                      <Link href={`/services/${svc.slug}`} className="block">
                        <div className="relative h-44 overflow-hidden bg-primary">
                          <img
                            src={typeof svc.image === "string" ? svc.image : (svc.image as any).src}
                            alt={svc.title}
                            className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-fade-bottom" />
                          {/* Category badge */}
                          <span className="absolute left-4 top-4 bg-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">
                            {svc.eyebrow}
                          </span>
                        </div>
                        <div className="px-6 py-6">
                          <h3 className="font-display text-title font-bold text-primary group-hover:text-secondary transition-colors">
                            {svc.title}
                          </h3>
                          <p className="mt-2 text-caption font-light text-muted-foreground line-clamp-3">
                            {svc.tagline}
                          </p>
                          <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-accent transition-all group-hover:gap-2">
                            View Details <ArrowUpRight className="h-3.5 w-3.5" />
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="border-t border-border bg-primary-deep section">
        <div className="container-page grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <img
              src="/grclass-logo.webp"
              alt="GR Class"
              className="h-14 md:h-16 w-auto mb-6"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <span className="eyebrow text-accent">Join the Network</span>
            <h2 className="h-display mt-3 text-display-md text-background">
              Become part of our exclusive surveyor network.
            </h2>
            <p className="mt-4 text-body font-light text-background/60">
              Contact us: <span className="text-accent font-semibold">+971555324087</span>
            </p>
          </div>
          <div className="md:col-span-5 md:text-right">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 bg-accent px-6 py-4 text-body-lg font-bold text-accent-foreground transition-colors hover:bg-accent-bright"
            >
              Become part of our surveyors <ArrowUpRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      <SurveyorApplicationModal open={modalOpen} onOpenChange={setModalOpen} />
    </SiteShell>
  );
};

export default ServicesPageClient;
