/**
 * Hero | Aggressive, Ultra-Clean Maritime Command Center UI/UX.
 * Showcases the modern 8K cinematic vessel with high-contrast executive hierarchy.
 */
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, PlayCircle, Anchor, Globe2, Clock, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-vessel-modern.jpg";

export function Hero() {
  const imgSrc = typeof heroImg === "string" ? heroImg : (heroImg as any).src;

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-primary-deep sm:min-h-[760px] lg:h-[96vh] lg:min-h-[760px]">
      {/* Background Image Layer with Cinematic Scaling */}
      <div className="absolute inset-0 z-0">
        <img
          src={imgSrc}
          alt="Modern GR Class maritime container vessel sailing oceanic waters"
          className="h-full w-full object-cover object-[62%_45%] scale-105 transition-transform duration-1000 ease-out brightness-95"
          loading="eager"
          decoding="async"
        />

        {/* Aggressive Maritime Scrims: Dark gradient on text side, transparent over the ship */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/85 to-primary-deep/60 lg:hidden" />
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-primary-deep/95 via-primary-deep/80 via-45% to-transparent" />
        
        {/* Bottom subtle blend into StatsStrip */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary-deep to-transparent" />
      </div>

      {/* Content Container */}
      <div className="container-page relative z-10 flex min-h-[inherit] flex-col justify-center pt-28 pb-14 sm:pt-36 sm:pb-16 lg:h-full lg:justify-center lg:pt-16 lg:pb-6">
        <div className="grid lg:grid-cols-12 lg:items-center lg:gap-12">
          {/* Left Column: Aggressive Typography & Actions */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
            }}
            className="lg:col-span-7 xl:col-span-7"
          >
            {/* Live Authority Status Badge */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-accent/40 bg-[#0e2747]/90 px-4 py-1.5 shadow-[0_0_20px_rgba(181,137,31,0.25)] backdrop-blur-md sm:mb-5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-85" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent sm:text-[11px]">
                Recognised Classification Society
              </span>
              <span className="h-3 w-px bg-white/30" />
              <span className="text-[10px] font-bold tracking-wider text-white/90 sm:text-[11px]">
                RO · RSO · EST. 2022
              </span>
            </motion.div>

            {/* Aggressive Punchy Heading */}
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="h-display text-[clamp(2.3rem,5.2vw,4.2rem)] font-black leading-[1.04] tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)]"
            >
              MARITIME CLASSIFICATION.
              <span className="block mt-1 bg-gradient-to-r from-[#F0C05A] via-[#FFD782] to-[#B5891F] bg-clip-text text-transparent">
                UNCOMPROMISED SAFETY.
              </span>
            </motion.h1>

            {/* Sharp Subtitle */}
            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 max-w-xl text-[15px] font-normal leading-relaxed text-white/90 sm:text-base md:text-[17px]"
            >
              GR Class delivers world-class vessel classification, statutory audits, and emergency surveyor mobilization. Engineered for fleet uptime, compliance certainty, and maritime excellence.
            </motion.p>

            {/* High-Impact CTA Action Row */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-accent via-accent-bright to-accent px-7 py-4 text-sm font-black tracking-wide text-primary shadow-[0_8px_30px_rgba(181,137,31,0.5)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_40px_rgba(181,137,31,0.7)]"
              >
                <span>Request Survey / Class</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/verify"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border-2 border-white/30 bg-[#0e2747]/80 px-7 py-4 text-sm font-bold text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:border-accent hover:bg-[#123663] hover:text-accent"
              >
                <ShieldCheck className="h-4 w-4 text-accent" />
                <span>Verify Certificate</span>
              </Link>

              <Link
                href="/how-it-works"
                className="group hidden items-center gap-2.5 px-3 text-sm font-bold text-white/90 transition-colors hover:text-white sm:inline-flex"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/60 bg-accent/20 text-accent transition-transform group-hover:scale-110">
                  <PlayCircle className="h-5 w-5" />
                </div>
                <span>How It Works</span>
              </Link>
            </motion.div>

            {/* Micro Badges */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap items-center gap-3 border-t border-white/15 pt-5 text-xs font-semibold text-white/80"
            >
              <div className="flex items-center gap-1.5 text-accent">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>IMO &amp; Flag State Aligned</span>
              </div>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <div className="flex items-center gap-1.5 text-white/90">
                <Globe2 className="h-4 w-4 text-accent" />
                <span>4 Strategic Global Hubs</span>
              </div>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <div className="flex items-center gap-1.5 text-white/90">
                <Clock className="h-4 w-4 text-accent" />
                <span>24/7 Global Dispatch</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Aggressive Floating Command Cards (Desktop) */}
          <div className="hidden lg:col-span-5 lg:flex flex-col gap-4 pl-4 xl:pl-8">
            {/* Command Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="rounded-2xl border-2 border-accent/40 bg-[#071d38]/85 p-5 shadow-[0_12px_36px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300 hover:border-accent hover:bg-[#0c294e]"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-wider text-accent bg-accent/20 px-2.5 py-0.5 rounded-full">
                  Survey Reliability
                </span>
                <span className="font-display text-2xl font-black text-white">99.4%</span>
              </div>
              <div className="mt-2 text-xs font-semibold text-white/90">On-Time Survey Dispatch</div>
              <div className="mt-1 text-[11px] font-light text-white/70">
                Emergency marine surveyors deployable immediately across international hubs.
              </div>
            </motion.div>

            {/* Command Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="rounded-2xl border-2 border-white/20 bg-[#071d38]/85 p-5 shadow-[0_12px_36px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300 hover:border-accent hover:bg-[#0c294e]"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-wider text-white/90 bg-white/15 px-2.5 py-0.5 rounded-full">
                  Global Oversight
                </span>
                <span className="font-display text-lg font-black text-accent">4 Strategic Hubs</span>
              </div>
              <div className="mt-2 text-xs font-semibold text-white/90">UAE (HQ) · India · Greece · Panama</div>
              <div className="mt-1 text-[11px] font-light text-white/70">
                Full-service statutory and classification oversight spanning primary maritime corridors.
              </div>
            </motion.div>

            {/* Command Card 3: Flag States Strip */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="rounded-2xl border-2 border-white/15 bg-[#071d38]/75 p-4 shadow-[0_12px_36px_rgba(0,0,0,0.6)] backdrop-blur-xl"
            >
              <div className="text-[10px] font-bold uppercase tracking-wider text-white/60 mb-2">
                Authorised Flag Administrations
              </div>
              <div className="flex flex-wrap gap-1.5 text-[11px] font-bold text-white">
                <span className="bg-white/10 px-2 py-0.5 rounded border border-white/10">Panama</span>
                <span className="bg-white/10 px-2 py-0.5 rounded border border-white/10">Belize</span>
                <span className="bg-white/10 px-2 py-0.5 rounded border border-white/10">Honduras</span>
                <span className="bg-white/10 px-2 py-0.5 rounded border border-white/10">Palau</span>
                <span className="bg-white/10 px-2 py-0.5 rounded border border-white/10">Vanuatu</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
