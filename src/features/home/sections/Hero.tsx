/**
 * Hero | Modern cinematic vessel with editorial gradient and executive typography.
 * Showcases the newly generated state-of-the-art container ship asset.
 */
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, PlayCircle, Anchor, Globe2, Clock } from "lucide-react";
import heroImg from "@/assets/hero-vessel-modern.jpg";

export function Hero() {
  const imgSrc = typeof heroImg === "string" ? heroImg : (heroImg as any).src;

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-primary-deep sm:min-h-[740px] lg:h-[94vh] lg:min-h-[740px]">
      {/* Background Image Layer with Cinematic Scaling */}
      <div className="absolute inset-0 z-0">
        <img
          src={imgSrc}
          alt="Modern GR Class maritime container vessel sailing oceanic waters"
          className="h-full w-full object-cover object-[65%_50%] lg:object-[60%_45%] scale-105 transition-transform duration-1000 ease-out"
          loading="eager"
          decoding="async"
        />

        {/* Multi-stage High-End Scrim & Contrast Gradients */}
        {/* Mobile scrim: Dark gradient top-to-bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/80 to-primary-deep/50 lg:hidden" />

        {/* Desktop scrim: Elegant directional scrim that preserves the ship's golden hour lighting on the right */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-primary-deep via-primary-deep/90 via-50% to-transparent" />
        
        {/* Soft bottom vignette to merge seamlessly into StatsStrip */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-primary-deep via-primary-deep/60 to-transparent" />

        {/* Subtle decorative grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />
      </div>

      {/* Content Container */}
      <div className="container-page relative z-10 flex min-h-[inherit] flex-col justify-center pt-28 pb-16 sm:pt-36 sm:pb-20 lg:h-full lg:justify-center lg:pt-20 lg:pb-8">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
          }}
          className="max-w-3xl lg:w-[54%] xl:w-[50%]"
        >
          {/* Eyebrow badge */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 backdrop-blur-md sm:mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent sm:text-[11px]">
              Recognised Classification Society
            </span>
            <span className="h-3 w-px bg-white/20" />
            <span className="text-[10px] font-medium tracking-wider text-white/70 sm:text-[11px]">
              RO · RSO · EST. 2022
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="h-display text-[clamp(2rem,5.2vw,3.75rem)] font-extrabold leading-[1.08] tracking-tight text-white drop-shadow-sm"
          >
            GR Class Maritime Classification
            <span className="block mt-1.5 bg-gradient-to-r from-accent via-accent-bright to-accent bg-clip-text text-transparent">
              &amp; Fleet Certification.
            </span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-xl text-[15px] font-normal leading-relaxed text-white/80 sm:text-base md:text-[17px] md:leading-relaxed"
          >
            Setting world-class benchmarks in maritime safety, hull integrity, and statutory compliance.
            Providing prompt technical surveys and certified classification for newly built ships and active fleets globally.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-gradient-to-r from-accent to-accent-bright px-6 py-3.5 text-sm font-bold tracking-wide text-primary shadow-[0_8px_24px_hsl(var(--accent)/0.35)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_32px_hsl(var(--accent)/0.5)] sm:px-7 sm:py-4"
            >
              <span>Get in Touch</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/verify"
              className="inline-flex items-center justify-center gap-2.5 rounded-lg border border-white/20 bg-white/[0.08] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/[0.16] sm:px-7 sm:py-4"
            >
              <ShieldCheck className="h-4 w-4 text-accent" />
              <span>Verify Certificate</span>
            </Link>

            <Link
              href="/how-it-works"
              className="group hidden items-center gap-3 px-3 text-sm font-semibold text-white/85 transition-colors hover:text-white sm:inline-flex"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent transition-transform group-hover:scale-110">
                <PlayCircle className="h-5 w-5" />
              </div>
              <span>How it works</span>
            </Link>
          </motion.div>

          {/* Value Micro-Pills */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-2.5 sm:gap-4 border-t border-white/10 pt-6"
          >
            <div className="flex items-center gap-2 text-xs text-white/70">
              <Anchor className="h-3.5 w-3.5 text-accent" />
              <span>IMO Aligned Ruleset</span>
            </div>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <div className="flex items-center gap-2 text-xs text-white/70">
              <Globe2 className="h-3.5 w-3.5 text-accent" />
              <span>4 Global Strategic Hubs</span>
            </div>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <div className="flex items-center gap-2 text-xs text-white/70">
              <Clock className="h-3.5 w-3.5 text-accent" />
              <span>Rapid Survey Dispatch</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
          <span>Explore Platform</span>
          <ArrowRight className="h-3 w-3 rotate-90 text-accent" />
        </div>
      </div>
    </section>
  );
}
