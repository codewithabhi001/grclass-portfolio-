/**
 * Home page composition | Next.js-style: a thin route file
 * that orders feature sections. All content lives in src/data/home.ts.
 */
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

const HomePage = () => {
  return (
    <SiteShell>
      <Hero />
      <StatsStrip />
      <TrustBar />
      <About />
      <Services />
      <WhyUs />
      <Network />
      <Testimonials />
      <CtaBand />
    </SiteShell>
  );
};

export default HomePage;
