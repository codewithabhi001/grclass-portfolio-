/**
 * Services section on the homepage.
 * Redesigned to show all 23 services dynamically with a premium category filter tab layout.
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
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
    <section className="bg-secondary-soft py-16 sm:py-20 md:py-28">
      <div className="container-page">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end md:gap-12">
          <div className="max-w-xl">
            <span className="eyebrow text-secondary">Our Practice</span>
            <h2 className="h-display mt-3 text-[clamp(24px,3.2vw,40px)] text-primary">
              Our services. One unified standard.
            </h2>
          </div>
          <p className="max-w-md text-[14px] font-light leading-relaxed text-muted-foreground sm:text-[15px]">
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
                className={`px-4 py-2 sm:px-5 sm:py-2.5 text-[10.5px] sm:text-xs font-mono uppercase tracking-widest transition-all duration-300 border ${
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
                className="group relative flex flex-col justify-between overflow-hidden border border-border bg-card transition-all duration-300 hover:border-accent hover:shadow-card"
              >
                <Link to={`/services/${svc.slug}`} className="flex flex-col h-full">
                  {/* Image container */}
                  <div className="relative h-44 overflow-hidden bg-primary sm:h-48">
                    <img
                      src={svc.image}
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
                    <h3 className="font-display text-[18px] font-bold text-primary group-hover:text-secondary transition-colors line-clamp-1">
                      {svc.title}
                    </h3>
                    <p className="mt-3 text-[13px] font-light leading-relaxed text-muted-foreground sm:text-[13.5px] line-clamp-3 flex-1">
                      {svc.tagline}
                    </p>
                    <div className="mt-6 inline-flex items-center gap-1.5 text-[12px] font-medium text-accent transition-all group-hover:gap-2">
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
