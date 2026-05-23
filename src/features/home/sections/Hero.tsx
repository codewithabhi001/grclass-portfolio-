/**
 * Hero | full-bleed cinematic vessel with editorial gradient.
 * Video background + framer-motion content reveal.
 * Desktop: cream wave overlay on left, video right.
 * Mobile: full video bg with gradient overlay for readability.
 */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, PlayCircle } from "lucide-react";
import heroVideo from "@/assets/hero-v1.mp4";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#F6F4EB] sm:min-h-[720px] lg:h-[92vh] lg:min-h-[720px]">

      {/* Video layer — full width on all screens */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover object-right-bottom lg:object-[80%_60%]"
          poster="/placeholder.svg"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Concentric circles decoration — desktop only, centered on visible video */}
        <div className="absolute inset-y-0 right-0 w-[55%] hidden items-center justify-center pointer-events-none opacity-30 overflow-hidden lg:flex">
          <div className="absolute w-[140vh] aspect-square rounded-full border border-white/15" />
          <div className="absolute w-[100vh] aspect-square rounded-full border border-white/25" />
          <div className="absolute w-[60vh] aspect-square rounded-full border border-white/35" />
        </div>

        {/* Sparkle — desktop only */}
        <div className="absolute bottom-10 right-10 opacity-70 hidden lg:block">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0Z" />
          </svg>
        </div>
      </div>

      {/* Mobile/Tablet: gradient overlay for text readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-primary-deep/95 via-primary-deep/70 to-primary-deep/40 lg:hidden" />

      {/* Desktop: cream wave SVG overlay (left side) */}
      <div className="absolute inset-0 pointer-events-none z-[1] hidden lg:block">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" className="w-full h-full text-[#F6F4EB]">
          <path d="M0,0 L780,0 C920,0 700,450 900,900 L0,900 Z" fill="currentColor" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="container-page relative z-10 flex min-h-[inherit] flex-col justify-center pt-20 pb-12 sm:pt-24 sm:pb-16 lg:h-full lg:justify-end lg:pt-0 lg:pb-28">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
          }}
          className="max-w-3xl lg:w-[60%]"
        >
          {/* Eyebrow badge */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5 inline-flex items-center gap-2.5 bg-[#EAE5D5]/90 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-primary sm:mb-6 sm:gap-3 sm:px-4 sm:py-2 sm:text-[11px] lg:bg-[#EAE5D5]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent sm:h-2 sm:w-2" />
            RECOGNISED CLASSIFICATION SOCIETY
            <span className="hidden h-3 w-px bg-primary/20 sm:block" />
            <span className="hidden sm:inline">EST. 1998</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="h-display max-w-[15ch] text-[clamp(36px,9vw,85px)] leading-[1.05] text-white lg:text-primary"
          >
            Maritime Classification
            <span className="block text-accent">
              &amp; Certification.
            </span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-xl text-[15px] font-medium leading-relaxed text-white/80 sm:mt-6 sm:text-[16px] lg:text-primary/80 lg:text-lg"
          >
            Our range of services includes the classification of newly built ships, as well as the classification and certification of existing vessels for continued safe operation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-accent px-6 py-3.5 text-[14px] font-semibold tracking-wide text-accent-foreground shadow-brass transition-all hover:bg-accent-bright sm:px-8 sm:py-4 sm:text-[15px]"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/verify"
              className="inline-flex items-center justify-center gap-2 border border-white/25 bg-white/[0.06] px-6 py-3.5 text-[14px] font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10 sm:px-8 sm:py-4 sm:text-[15px] lg:border-primary/20 lg:bg-primary lg:text-white lg:hover:bg-primary-deep"
            >
              <ShieldCheck className="h-5 w-5" />
              Verify Certificate
            </Link>
            <Link
              to="/how-it-works"
              className="group hidden items-center gap-3 px-4 text-[15px] font-semibold text-primary transition-colors hover:text-primary-soft sm:inline-flex lg:inline-flex"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent text-accent">
                <PlayCircle className="h-5 w-5" fill="currentColor" />
              </div>
              <span className="text-white/80 lg:text-primary">How it works</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/50 sm:bottom-8 sm:text-[11px] lg:text-primary/50 lg:left-[40%]">
          Scroll for More
          <ArrowRight className="h-3 w-3 rotate-90 text-accent" />
        </div>
      </div>
    </section>
  );
}
