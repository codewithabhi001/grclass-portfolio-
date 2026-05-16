/**
 * Services index page | editorial grid of all GR Class practice areas.
 */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/layout/PageHero";
import { servicesCatalogue } from "@/data/services";

const ServicesPage = () => (
  <SiteShell>
    <PageHero
      eyebrow="Practice"
      title="Class, statutory, and advisory services for the modern fleet."
      subtitle="Every engagement is delivered by exclusive surveyors and signed under our recognised organisation status | never sub-contracted."
      breadcrumbs={[{ label: "Services" }]}
    />

    <section className="container-page py-20 md:py-24">
      <div className="grid gap-px bg-border md:grid-cols-2">
        {servicesCatalogue.map((svc, i) => (
          <motion.article
            key={svc.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden border-t-[3px] border-transparent bg-card transition-all duration-300 hover:border-accent hover:shadow-card"
          >
            <Link to={`/services/${svc.slug}`} className="block">
              <div className="relative h-56 overflow-hidden bg-primary">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-fade-bottom" />
              </div>
              <div className="px-7 py-8">
                <span className="eyebrow text-secondary">{svc.eyebrow}</span>
                <h3 className="h-display mt-3 text-[22px] text-primary">{svc.title}</h3>
                <p className="mt-3 text-[14px] font-light leading-relaxed text-muted-foreground">
                  {svc.tagline}
                </p>
                <div className="mt-6 flex items-center gap-1.5 text-[12px] font-medium text-secondary">
                  Read scope <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>

    <section className="border-t border-border bg-secondary-soft py-20">
      <div className="container-page grid gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <span className="eyebrow text-secondary">Tell us about your vessel</span>
          <h2 className="h-display mt-3 text-[clamp(24px,2.4vw,36px)] text-primary">
            Initial scoping conversations are always complimentary.
          </h2>
        </div>
        <div className="md:col-span-5 md:text-right">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-bright"
          >
            Speak with a surveyor <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  </SiteShell>
);

export default ServicesPage;
