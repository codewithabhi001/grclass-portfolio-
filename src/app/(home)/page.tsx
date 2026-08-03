import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { SEO } from "@/components/SEO";
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

const HomePage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <SiteShell>
      <SEO 
        title="Maritime Classification & Vessel Certification Society" 
        description="GR Class is a Recognized Organization (RO) & Classification Society delivering statutory vessel surveys, digital certification & maritime compliance across 120+ ports worldwide." 
        url="/" 
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://grclass.com"
            }]
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "GR Class",
            "alternateName": "GR Class Maritime",
            "url": "https://grclass.com",
            "logo": "https://grclass.com/grclass-logo.webp",
            "description": "Recognized Organization (RO), Recognized Security Organization (RSO), and Classification Society (CS) offering statutory/class certification and vessel survey services.",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+971555324087",
              "contactType": "customer service",
              "email": "info@grclass.com",
              "areaServed": "Worldwide"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "B.C. 1304883, C1 Building, Ajman District Business, Makani No – 4442612247",
              "addressLocality": "Ajman",
              "addressCountry": "AE"
            },
            "sameAs": [
              "https://www.linkedin.com/company/grclass/"
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "GR Class",
            "url": "https://grclass.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://grclass.com/vessel-search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        ]}
      />
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

export default HomePage;
