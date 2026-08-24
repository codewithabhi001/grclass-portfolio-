/**
 * Services section on the homepage.
 * Redesigned to show all 23 services dynamically with a premium category filter tab layout.
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { servicesCatalogue } from "@/data/services";

const CATEGORY_TABS = [
  { id: "all", label: "All Services" },
  { id: "classification", label: "Classification" },
  { id: "statutory", label: "Statutory" },
  { id: "environmental", label: "Environmental" },
  { id: "other", label: "Other Services" },
] as const;

export function Services() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredServices = servicesCatalogue.filter((svc) => {
    if (activeTab === "all") return true;
    return svc.category === activeTab;
  });

  return (
    <section className="bg-background section-lg section-dot-grid border-y border-border-soft">
      <div className="container-page">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end md:gap-12">
          <div className="max-w-xl">
            <span className="eyebrow text-secondary">Our Practice</span>
            <h2 className="h-display mt-3 text-display-md text-primary">
              Our services. One unified standard.
            </h2>
          </div>
          <p className="max-w-md text-body-sm font-light text-muted-foreground">
            Each engagement is delivered by exclusive surveyors and signed under our recognised
            organisation status | never sub-contracted.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="mt-10 flex flex-wrap gap-2 sm:gap-3">
          {CATEGORY_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 sm:px-5 sm:py-2.5 text-[10px] sm:text-xs font-mono uppercase tracking-widest transition-all duration-300 border ${
                  isActive
                    ? "bg-primary border-primary text-background font-semibold shadow-sm"
                    : "bg-background border-border text-muted-foreground hover:border-accent hover:text-primary"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <motion.div 
          layout
          className="mt-10 grid gap-6 sm:grid-cols-2 md:mt-12 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((svc) => (
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                key={svc.slug}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_hsl(var(--primary)/0.12)]"
              >
                {/* Glowing border effect */}
                <div className="absolute inset-0 border-2 border-transparent transition-all duration-300 group-hover:border-accent/40 rounded-xl pointer-events-none z-10" />
                <div className="absolute -inset-2 bg-gradient-to-r from-accent/0 via-accent/15 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl pointer-events-none z-0" />
                <Link href={`/services/${svc.slug}`} className="flex flex-col h-full relative z-20 bg-card">
                  {/* Image container */}
                  <div className="relative h-44 overflow-hidden bg-primary sm:h-48">
                    <img
                      src={typeof svc.image === "string" ? svc.image : (svc.image as any).src}
                      alt={svc.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      width={1024}
                      height={768}
                    />
                    <div className="absolute inset-0 bg-gradient-fade-bottom" />
                    {/* Category badge */}
                    <span className="absolute left-4 top-4 bg-accent px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-accent-foreground">
                      {svc.eyebrow}
                    </span>
                  </div>

                  {/* Text Container */}
                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="font-display text-title font-bold text-primary group-hover:text-secondary transition-colors line-clamp-1">
                      {svc.title}
                    </h3>
                    <p className="mt-3 text-caption font-light text-muted-foreground line-clamp-3 flex-1">
                      {svc.tagline}
                    </p>
                    <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-accent transition-all group-hover:gap-2">
                      Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
