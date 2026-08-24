"use client";

/**
 * How it Works | six-step engagement timeline.
 */
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/layout/PageHero";
import { processSteps } from "@/data/process";


const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How Maritime Classification Works with GR Class",
  "description": "A transparent six-step engagement model from initial scoping to certificate issue, used across class surveys, statutory work, and advisory mandates.",
  "step": processSteps.map((step) => ({
    "@type": "HowToStep",
    "name": step.title,
    "text": step.body,
    "position": step.step
  }))
};

const HowItWorksPageClient = () => (
  <SiteShell>
    
    <PageHero
      eyebrow="Process"
      title="From initial scoping to certificate issue."
      subtitle="A transparent six-step engagement model used across class surveys, statutory work, and advisory mandates."
      breadcrumbs={[{ label: "How it Works" }]}
    />

    <section className="container-page section">
      <ol className="relative space-y-px bg-border">
        {processSteps.map((step, i) => (
          <motion.li
            key={step.step}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="grid gap-6 bg-background px-2 py-10 md:grid-cols-12 md:gap-10 md:px-8"
          >
            <div className="md:col-span-2">
              <div className="font-mono text-[11px] uppercase tracking-wider text-accent">Step</div>
              <div className="h-display mt-1 text-[44px] text-primary md:text-[56px]">{step.step}</div>
            </div>
            <div className="md:col-span-7">
              <h3 className="h-display text-[22px] text-primary md:text-[26px]">{step.title}</h3>
              <p className="mt-3 max-w-2xl text-body font-light text-muted-foreground">
                {step.body}
              </p>
            </div>
            <div className="md:col-span-3 md:border-l md:border-border md:pl-6">
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-subtle">
                <Clock className="h-3.5 w-3.5" /> Typical duration
              </div>
              <div className="mt-2 text-body-sm text-foreground">{step.duration}</div>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>

    <section className="border-t border-border bg-primary section">
      <div className="container-page text-center">
        <span className="eyebrow justify-center text-accent">Ready to begin</span>
        <h2 className="h-display mx-auto mt-4 max-w-2xl text-display-md text-background">
          The first conversation is always complimentary.
        </h2>
        <Link
          href="/contact"
          className="group mt-8 inline-flex items-center gap-2 bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-bright"
        >
          Speak with our team
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  </SiteShell>
);

export default HowItWorksPageClient;
