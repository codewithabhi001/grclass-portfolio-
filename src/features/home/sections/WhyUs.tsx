/**
 * Why GR Class | image left, checklist right, with floating stat tile.
 */
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import portImg from "@/assets/why-port.jpg";
import { whyPoints } from "@/data/home";

export function WhyUs() {
  return (
    <section className="container-page py-16 sm:py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-14 lg:gap-20">
        <div className="md:order-2">
          <span className="eyebrow text-secondary">Why GR Class</span>
          <h2 className="h-display mt-3 text-[clamp(24px,3.2vw,40px)] text-primary">
            Engineered for operational reality, not just paperwork.
          </h2>
          <p className="mt-5 text-[14.5px] font-light leading-[1.8] text-muted-foreground sm:text-[15px]">
            Our methodology is built around one principle: a vessel under our class should never wait
            on us to sail. Every workflow | from survey scheduling to certificate issue | is
            engineered around fleet uptime.
          </p>

          <ul className="mt-7 hairline">
            {whyPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 border-b border-border-soft py-3.5 sm:gap-3.5">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center bg-secondary">
                  <Check className="h-3 w-3 text-secondary-foreground" strokeWidth={3} />
                </span>
                <span className="text-[13.5px] leading-relaxed text-muted-foreground sm:text-[14px]">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[340px] overflow-hidden sm:h-[440px] md:order-1 md:h-[500px]"
        >
          <img
            src={portImg}
            alt="Aerial view of a busy global shipping port"
            className="h-full w-full object-cover"
            loading="lazy"
            width={1280}
            height={1280}
          />
          <div className="absolute right-4 top-4 bg-primary px-4 py-3.5 text-right sm:right-5 sm:top-5">
            <div className="font-display text-[26px] font-extrabold leading-none text-background sm:text-[30px]">
              99.4%
            </div>
            <div className="mt-1 text-[9px] uppercase tracking-wider text-background/50">
              Survey on-time rate
            </div>
          </div>
          <div className="absolute bottom-4 left-4 max-w-[220px] border-l-2 border-accent bg-primary/90 px-4 py-3 backdrop-blur-sm sm:bottom-5 sm:left-5 sm:max-w-[240px]">
            <div className="text-[10px] font-bold uppercase tracking-wider text-accent">
              24 / 7 dispatch
            </div>
            <div className="mt-1 text-[11.5px] font-light leading-relaxed text-background/80 sm:text-[12px]">
              Emergency surveyors deployable from 32 regional hubs.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
