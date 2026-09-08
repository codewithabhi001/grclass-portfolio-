"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { TrustBar } from "@/components/layout/TrustBar";
import { Hero } from "@/features/home/sections/Hero";
import { StatsStrip } from "@/features/home/sections/StatsStrip";
import { About } from "@/features/home/sections/About";
import { Services } from "@/features/home/sections/Services";
import { WhyUs } from "@/features/home/sections/WhyUs";
import { Network } from "@/features/home/sections/Network";
import { Testimonials } from "@/features/home/sections/Testimonials";
import { CtaBand } from "@/features/home/sections/CtaBand";
import { SurveyorApplicationModal } from "@/features/services/SurveyorApplicationModal";

const HomePageClient = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <SiteShell>
      <Hero />
      <StatsStrip />
      <TrustBar />

      {/* Join Surveyor Network banner */}
      <section className="border-y border-border-soft bg-gradient-to-b from-card to-secondary-soft/20 py-10 sm:py-12">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-r from-primary-deep via-primary to-primary-deep p-7 sm:p-10 shadow-lg">
            {/* Ambient decorative elements */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-secondary/15 blur-3xl" />
            
            <div className="relative z-10 grid gap-6 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent mb-3">
                  Exclusive Technical Network
                </div>
                <h2 className="h-display text-2xl font-bold tracking-tight text-background sm:text-3xl">
                  Become part of our global surveyor network.
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-background/70 max-w-xl font-light leading-relaxed">
                  Join certified marine surveyors delivering class inspections, statutory audits, and flag compliance across premier international ports.
                </p>
              </div>
              <div className="md:col-span-4 md:text-right">
                <button
                  onClick={() => setModalOpen(true)}
                  className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-gradient-to-r from-accent to-accent-bright px-6 py-3.5 text-xs sm:text-sm font-bold text-primary shadow-brass transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_25px_hsl(var(--accent)/0.5)] cursor-pointer"
                >
                  <span>Apply as Surveyor</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Services />
      <WhyUs />
      <Network />
      <Testimonials />
      <CtaBand />

      <SurveyorApplicationModal open={modalOpen} onOpenChange={setModalOpen} />
    </SiteShell>
  );
};

export default HomePageClient;
