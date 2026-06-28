/**
 * About | heritage, mission, capabilities, expertise.
 */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/layout/PageHero";
import { milestones, leadership, values } from "@/data/about";
import aboutImg from "@/assets/about-surveyor.jpg";
import { fetchAboutUs } from "@/lib/api";
import { ShieldCheck, Anchor, Award, Target, Globe2, Users } from "lucide-react";
import { SEO } from "@/components/SEO";

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
      <SEO 
        title="About Us | Heritage & Mission" 
        description="Learn about GR Class, our heritage, our leadership, and our mission to provide uncompromising quality in maritime classification." 
        url="/about" 
      />
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
        title="GR Class — Classified for Standards."
        subtitle="Recognized Organization (RO), Recognized Security Organization (RSO), and Classification Society (CS). Headquartered in Ajman, UAE. EST. 2022."
        breadcrumbs={[{ label: "About" }]}
      />

      {/* Logo showcase band */}
      <section className="bg-card border-b border-border py-10 md:py-14">
        <div className="container-page flex flex-col items-center text-center">
          <img
            src="/grclass-logo.webp"
            alt="GR Class"
            className="h-24 md:h-32 w-auto"
            style={{
              filter: "brightness(0) saturate(100%) invert(10%) sepia(60%) saturate(2800%) hue-rotate(200deg) brightness(90%) contrast(100%)"
            }}
          />
          <h2 className="h-display mt-6 text-[clamp(22px,2.6vw,36px)] text-primary">
            GR Class — Classified for Standards
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] font-light leading-relaxed text-muted-foreground">
            A Recognized Organization (RO), Recognized Security Organization (RSO) and Classification Society (CS) authorized to offer statutory/class certification and services.
          </p>
        </div>
      </section>

      {/* Intro + image */}
      <section className="container-page py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-12 md:items-start">
          <div className="md:col-span-7">
            <span className="eyebrow text-secondary">Introduction</span>
            
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
                  Welcome to GR Class
                </h2>
                <p className="mt-6 text-[16px] font-light leading-relaxed text-muted-foreground">
                  GR Class welcomes you for your asset's safety and compliances. GR Class is a Recognized Organization (RO), Recognized Security Organization (RSO), and Classification Society (CS) authorized to offer statutory/class certification and services.
                </p>
                <p className="mt-4 text-[16px] font-light leading-relaxed text-muted-foreground">
                  We are committed to ensuring the highest standards of safety, reliability, and environmental sustainability in the maritime industry. Our team possesses technical expertise and professionalism guaranteeing dedicated serving our clients.
                </p>
                <p className="mt-4 text-[16px] font-light leading-relaxed text-muted-foreground">
                  Our range of services includes the classification of newly built ships, as well as the classification and certification of existing vessels for continued safe operation. We also provide statutory certification services.
                </p>
                <p className="mt-4 text-[16px] font-light leading-relaxed text-muted-foreground">
                  We strive to be the trusted partner for ship owners and operators, offering them reliable, cost-effective solutions tailored to their specific needs.
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
            {/* EST badge */}
            <div className="mt-4 bg-primary px-6 py-4 text-center">
              <div className="font-display text-[28px] font-extrabold leading-none text-background">
                EST. 2022
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-wider text-background/50">
                Established
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="border-t border-border bg-card py-20">
        <div className="container-page">
          <span className="eyebrow text-secondary">Pillars of Excellence</span>
          <h2 className="h-display mt-3 text-[clamp(24px,2.4vw,34px)] text-primary">
            Mission, Capabilities & Expertise
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative flex flex-col items-start border border-border bg-background p-8 transition-all duration-300 hover:shadow-card hover:border-accent"
            >
              <div className="flex h-14 w-14 items-center justify-center bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="h-display mt-6 text-[22px] text-primary">Mission</h3>
              <p className="mt-4 text-[15px] font-light leading-relaxed text-muted-foreground">
                Ensuring Marine safety, safeguard of lives and property at sea. A comprehensive approach combining international regulations (e.g., SOLAS, ISPS Code), advanced surveillance, rigorous training, and risk management to protect lives, vessels, and the marine environment.
              </p>
            </motion.div>

            {/* Capabilities Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative flex flex-col items-start border border-border bg-background p-8 transition-all duration-300 hover:shadow-card hover:border-accent"
            >
              <div className="flex h-14 w-14 items-center justify-center bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <Globe2 className="h-7 w-7" />
              </div>
              <h3 className="h-display mt-6 text-[22px] text-primary">Capabilities</h3>
              <p className="mt-4 text-[15px] font-light leading-relaxed text-muted-foreground">
                Being a Class, our geographical presence with certified surveyors makes GR Class stronger and technically capable and gives strength to survey capabilities to standardize regulatory and compliance capabilities. GR Class has good technical infrastructure, maintaining secure and reliable information systems to manage vessel data, survey statuses, and certificates.
              </p>
            </motion.div>

            {/* Expertise Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group relative flex flex-col items-start border border-border bg-background p-8 transition-all duration-300 hover:shadow-card hover:border-accent"
            >
              <div className="flex h-14 w-14 items-center justify-center bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <Award className="h-7 w-7" />
              </div>
              <h3 className="h-display mt-6 text-[22px] text-primary">Expertise</h3>
              <p className="mt-4 text-[15px] font-light leading-relaxed text-muted-foreground">
                We work with values, ethics, and standards. We gain the trust from our valued customers and that builds GR Class with a class standard to the next level. Our surveyors, auditors and technical experts have decades of experience in assessing and verifying ship safety standards and tackling complex maritime issues through clear procedures and cost-effective support for ship operators.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="border-t border-border bg-primary py-20">
        <div className="container-page">
          <span className="eyebrow text-accent">Our Services</span>
          <h2 className="h-display mt-3 text-[clamp(24px,2.4vw,34px)] text-background">
            Comprehensive maritime services under one roof.
          </h2>
          <div className="mt-12 grid gap-px bg-background/10 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Anchor className="h-6 w-6" />,
                title: "Classification",
                items: ["Fleet in Services", "New Construction", "Transfer of Class", "Yacht Service", "Offshore Service", "Conversion Projects", "Plan & Manual Approval"],
              },
              {
                icon: <ShieldCheck className="h-6 w-6" />,
                title: "Statutory Services",
                items: ["Flag Statutory Services", "Survey & Certification", "SOLAS", "MARPOL", "Load Line", "Tonnage"],
              },
              {
                icon: <Globe2 className="h-6 w-6" />,
                title: "Environmental",
                items: ["Ballast Water Management", "IHM & Ship Recycling", "Energy Efficiency", "EU MRV Compliance", "Emergency Response"],
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Other Services",
                items: ["Compliance Support", "Remote Surveys", "Port State Control", "Technical Advisory"],
              },
            ].map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-primary-deep p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center bg-accent/20 text-accent">
                  {cat.icon}
                </div>
                <h3 className="h-display mt-5 text-[18px] text-background">{cat.title}</h3>
                <ul className="mt-4 space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[13px] text-background/60">
                      <span className="h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
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

      {/* Contact CTA with phone */}
      <section className="bg-primary-deep py-16">
        <div className="container-page text-center">
          <img
            src="/grclass-logo.webp"
            alt="GR Class"
            className="mx-auto h-16 md:h-20 w-auto mb-6"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <h2 className="h-display text-[clamp(22px,2.4vw,34px)] text-background">
            Get in Touch
          </h2>
          <p className="mt-4 text-[18px] font-display font-bold text-accent tracking-wide">
            +971555324087
          </p>
          <p className="mt-2 text-[14px] text-background/50">
            info@grclass.com
          </p>
        </div>
      </section>
    </SiteShell>
  );
};

export default AboutPage;
