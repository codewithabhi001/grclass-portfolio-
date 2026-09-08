/**
 * Hero | Clean Corporate Maritime Classification & Certification.
 * Light mode #F6F4EB with crisp typography, sharp container framing,
 * and a single modern vessel visual (no wavy masks, no AI watermarks).
 */
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, PlayCircle } from "lucide-react";
import heroImg from "@/assets/hero-vessel-modern.jpg";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F6F4EB] min-h-[calc(100vh-5rem)] flex items-center pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-28 lg:pb-16">
      <div className="container-page relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left Column: Corporate Content */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
            }}
            className="lg:col-span-7 xl:col-span-6"
          >
            {/* Eyebrow badge */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 bg-[#EAE5D5] border border-primary/10 px-3.5 py-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-primary rounded-sm shadow-xs"
            >
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span>RECOGNISED CLASSIFICATION SOCIETY</span>
              <span className="h-3 w-px bg-primary/20" />
              <span className="text-primary/70">EST. 2022</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-primary leading-[1.08]"
            >
              GR Class Maritime Classification{" "}
              <span className="bg-gradient-to-r from-accent to-accent-bright bg-clip-text text-transparent block sm:inline">
                &amp; Certification.
              </span>
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 text-base sm:text-lg leading-relaxed text-primary/80 font-normal max-w-xl"
            >
              Our range of services includes the classification of newly built ships, as well as the classification and certification of existing vessels for continued safe operation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3.5"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-accent-bright bg-sweep px-7 py-3.5 text-body-sm font-bold tracking-wide text-primary shadow-sm hover:shadow-md transition-all rounded-sm"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/verify"
                className="inline-flex items-center justify-center gap-2 bg-primary px-7 py-3.5 text-body-sm font-semibold text-white transition-colors hover:bg-primary-deep rounded-sm border border-primary/20 shadow-sm"
              >
                <ShieldCheck className="h-4 w-4 text-accent" />
                Verify Certificate
              </Link>
              <Link
                href="/how-it-works"
                className="group inline-flex items-center gap-2.5 px-3 py-2 text-body-sm font-semibold text-primary transition-colors hover:text-primary-soft"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-accent text-accent transition-transform group-hover:scale-105">
                  <PlayCircle className="h-4 w-4" fill="currentColor" />
                </div>
                <span>How it works</span>
              </Link>
            </motion.div>

            {/* Corporate Trust Indicators */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 pt-6 border-t border-primary/15 grid grid-cols-3 gap-4"
            >
              <div>
                <div className="font-display text-lg sm:text-xl font-bold text-primary">IACS</div>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-primary/60 font-semibold mt-0.5">
                  Compliant Standards
                </div>
              </div>
              <div>
                <div className="font-display text-lg sm:text-xl font-bold text-primary">Global</div>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-primary/60 font-medium mt-0.5">
                  Surveyor Network
                </div>
              </div>
              <div>
                <div className="font-display text-lg sm:text-xl font-bold text-primary">24/7</div>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-primary/60 font-medium mt-0.5">
                  Technical Support
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Single High-Res Corporate Vessel Visual */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-6"
          >
            <div className="relative overflow-hidden rounded-sm border border-primary/15 shadow-xl bg-primary-deep group">
              <img
                src={typeof heroImg === "string" ? heroImg : (heroImg as any).src}
                alt="Modern commercial container vessel under GR Class classification"
                className="w-full h-[320px] sm:h-[420px] lg:h-[460px] xl:h-[500px] object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Clean bottom corporate caption bar */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-deep/95 via-primary-deep/60 to-transparent p-4 sm:p-5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs font-semibold text-white tracking-wide">
                    Commercial Fleet Survey &amp; Classification
                  </span>
                </div>
                <span className="text-[11px] font-mono font-medium uppercase tracking-widest text-accent hidden sm:inline">
                  IMO / SOLAS
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

