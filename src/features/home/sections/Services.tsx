/**
 * Services grid | three editorial cards with photo, eyebrow, blurb.
 */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/home";

export function Services() {
  return (
    <section className="bg-secondary-soft py-16 sm:py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end md:gap-12">
          <div className="max-w-xl">
            <span className="eyebrow text-secondary">Our Practice</span>
            <h2 className="h-display mt-3 text-[clamp(24px,3.2vw,40px)] text-primary">
              Three core services. One unified standard.
            </h2>
          </div>
          <p className="max-w-md text-[14px] font-light leading-relaxed text-muted-foreground sm:text-[15px]">
            Each engagement is delivered by exclusive surveyors and signed under our recognised
            organisation status | never sub-contracted.
          </p>
        </div>

        <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 md:mt-14 md:grid-cols-3">
          {services.map((svc, i) => (
            <motion.article
              key={svc.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden border-t-[3px] border-transparent bg-card transition-all duration-300 hover:border-accent hover:shadow-card sm:last:col-span-2 md:last:col-span-1"
            >
              <Link to={`/services/${svc.slug}`} className="block">
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
                  <span className="absolute left-4 top-4 border border-background/25 bg-primary-deep/60 px-2 py-0.5 font-mono text-[10px] text-background/80 backdrop-blur-sm">
                    0{i + 1}
                  </span>
                </div>
                <div className="px-5 py-6 sm:px-6 sm:py-7">
                  <span className="eyebrow text-secondary">{svc.eyebrow}</span>
                  <h3 className="mt-3 font-display text-[18px] font-bold text-primary sm:text-[19px]">
                    {svc.title}
                  </h3>
                  <p className="mt-3 text-[13px] font-light leading-relaxed text-muted-foreground sm:text-[13.5px]">
                    {svc.description}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-medium text-secondary transition-all group-hover:gap-2">
                    Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
