/**
 * Hero | full-bleed cinematic vessel with editorial gradient.
 * Video background + framer-motion content reveal.
 */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, PlayCircle } from "lucide-react";
import heroVideo from "@/assets/hero-v1.mp4";

export function Hero() {
  return (
    <section className="relative min-h-[640px] w-full overflow-hidden bg-primary sm:min-h-[720px] lg:h-[92vh] lg:min-h-[720px]">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full min-w-full min-h-full object-cover scale-[1.2]"
          poster="/placeholder.svg"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>
      {/* Gradient overlay - left half only for text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary-deep/90 via-primary-deep/50 via-50% to-transparent" />

      {/* Content */}
      <div className="container-page relative z-10 flex min-h-[inherit] flex-col justify-end pt-28 pb-16 sm:pt-32 sm:pb-20 lg:h-full lg:pt-0 lg:pb-28">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
          }}
          className="max-w-3xl"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5 inline-flex items-center gap-3 border border-background/15 bg-background/[0.06] px-3 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-background/75 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_hsl(var(--accent))]" />
            Recognised Classification Society
            <span className="hidden h-3 w-px bg-background/20 sm:block" />
            <span className="hidden sm:inline">Est. 1998</span>
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="h-display max-w-[15ch] text-[clamp(34px,6vw,78px)] text-background"
          >
            Maritime Classification
            <span className="block bg-gradient-to-r from-accent-bright via-accent to-accent-bright bg-clip-text text-transparent">
              &amp; Certification.
            </span>
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-[15px] font-light leading-relaxed text-background/70 sm:text-base"
          >
            Our range of services includes the classification of newly built ships, as well as the classification and certification of existing vessels for continued safe operation.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-accent px-6 py-3.5 text-sm font-semibold tracking-wide text-accent-foreground shadow-brass transition-all hover:bg-accent-bright hover:shadow-[0_12px_32px_hsl(var(--accent)/0.45)]"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/verify"
              className="inline-flex items-center justify-center gap-2 border border-background/30 bg-background/[0.04] px-6 py-3.5 text-sm font-medium text-background backdrop-blur-sm transition-colors hover:border-background hover:bg-background/10"
            >
              <ShieldCheck className="h-4 w-4" />
              Verify Certificate
            </Link>
            <Link
              to="/how-it-works"
              className="group hidden items-center gap-2 px-2 text-sm font-medium text-background/70 transition-colors hover:text-background sm:inline-flex"
            >
              <PlayCircle className="h-4 w-4 text-accent" />
              How it works
            </Link>
          </motion.div>
        </motion.div>

        {/* scroll hint */}
        <div className="absolute bottom-8 right-6 hidden items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-background/45 lg:flex">
          <span className="h-px w-9 bg-background/30" />
          Scroll to explore
        </div>
      </div>
    </section>
  );
}
