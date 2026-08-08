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
      <section className="border-y border-border bg-secondary-soft py-14">
        <div className="container-page grid gap-8 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8">
            <span className="eyebrow text-secondary">Join the Network</span>
            <h2 className="h-display mt-2 text-[clamp(22px,2.2vw,32px)] text-primary">
              Become part of our exclusive surveyor network.
            </h2>
          </div>
          <div className="md:col-span-4 md:text-right">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 bg-accent px-6 py-3.5 text-[15px] font-bold text-accent-foreground transition-colors hover:bg-accent-bright"
            >
              Become part of our surveyors <ArrowUpRight className="h-4 w-4" />
            </button>
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
