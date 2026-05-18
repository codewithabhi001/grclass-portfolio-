/**
 * About | heritage, leadership, values.
 */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/layout/PageHero";
import { milestones, leadership, values } from "@/data/about";
import aboutImg from "@/assets/about-surveyor.jpg";
import { fetchAboutUs } from "@/lib/api";

const AboutPage = () => {
  const [aboutData, setAboutData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetchAboutUs();
        setAboutData(res?.data || res);
      } catch (err) {
        console.error("Failed to load About Us from API, using static fallback.", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <SiteShell>
      <style>{`
        .dynamic-html-content section {
          color: inherit !important;
          font-family: inherit !important;
          line-height: inherit !important;
        }
        .dynamic-html-content h2 {
          color: hsl(var(--primary)) !important;
          font-family: var(--font-display) !important;
          font-weight: 800 !important;
          font-size: clamp(22px, 2.4vw, 32px) !important;
          border-bottom: 2px solid hsl(var(--accent)) !important;
          padding-bottom: 8px !important;
          margin-top: 0 !important;
          margin-bottom: 1.5rem !important;
        }
        .dynamic-html-content h3 {
          color: hsl(var(--secondary)) !important;
          font-family: var(--font-display) !important;
          font-weight: 700 !important;
          font-size: 20px !important;
          margin-top: 1.5rem !important;
          margin-bottom: 0.75rem !important;
        }
        .dynamic-html-content p {
          margin-bottom: 1rem !important;
        }
        .dynamic-html-content hr {
          border-color: hsl(var(--border)) !important;
          margin: 2rem 0 !important;
        }
      `}</style>

      <PageHero
        eyebrow="Organisation"
        title="Independent classification, built around modern fleet operations."
        subtitle="Recognized Organization (RO) and Classification Society (CS). Headquartered in Ajman, UAE. Dedicated to the highest standards of maritime safety."
        breadcrumbs={[{ label: "About" }]}
      />

      {/* Intro + image */}
      <section className="container-page py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-12 md:items-start">
          <div className="md:col-span-7">
            <span className="eyebrow text-secondary">Who we are</span>
            
            {loading ? (
              <div className="space-y-6 animate-pulse mt-6">
                <div className="h-8 bg-border-soft w-3/4 rounded"></div>
                <div className="h-4 bg-border-soft w-full rounded"></div>
                <div className="h-4 bg-border-soft w-full rounded"></div>
                <div className="h-4 bg-border-soft w-5/6 rounded"></div>
                <div className="h-4 bg-border-soft w-4/5 rounded"></div>
              </div>
            ) : aboutData && aboutData.body_html ? (
              <div
                className="dynamic-html-content mt-6 text-[16px] font-light leading-relaxed text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: aboutData.body_html }}
              />
            ) : (
              <>
                <h2 className="h-display mt-3 text-[clamp(24px,2.6vw,38px)] text-primary">
                  A recognised society with the response time of a modern operator.
                </h2>
                <p className="mt-6 text-[16px] font-light leading-relaxed text-muted-foreground">
                  GR Class welcomes you for your asset’s safety and compliances. GR Class is a Recognized Organization (RO), Recognized Security Organization (RSO), and Classification Society (CS) authorised to offer statutory/class certification and services.
                </p>
                <p className="mt-4 text-[16px] font-light leading-relaxed text-muted-foreground">
                  We are committed to ensuring the highest standards of safety, reliability, and environmental sustainability in the maritime industry. Our team possesses strong technical expertise and professionalism, guaranteeing dedicated service to our clients.
                </p>
                <p className="mt-4 text-[16px] font-light leading-relaxed text-muted-foreground">
                  Our range of services includes the classification of newly built ships, as well as the classification and certification of existing vessels for continued safe operation. We also provide statutory certification services.
                </p>
                <p className="mt-4 text-[16px] font-light leading-relaxed text-muted-foreground">
                  We strive to be the trusted partner for ship owners and operators, offering reliable and cost-effective solutions tailored to their specific requirements.
                </p>
              </>
            )}
          </div>
          <div className="md:col-span-5">
            <motion.img
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              src={aboutImg}
              alt="GR Class surveyor on board"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-border bg-secondary-soft py-20">
        <div className="container-page">
          <span className="eyebrow text-secondary">What we stand for</span>
          <h2 className="h-display mt-3 text-[clamp(24px,2.4vw,34px)] text-primary">Three principles, applied without exception.</h2>
          <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="bg-card p-8">
                <h3 className="h-display text-[19px] text-primary">{v.title}</h3>
                <p className="mt-3 text-[14px] font-light leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
};

export default AboutPage;
