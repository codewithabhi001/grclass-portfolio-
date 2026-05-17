/**
 * About | heritage, leadership, values.
 */
import { motion } from "framer-motion";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/layout/PageHero";
import { milestones, leadership, values } from "@/data/about";
import aboutImg from "@/assets/about-surveyor.jpg";

const AboutPage = () => (
  <SiteShell>
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

    {/* Timeline - Hidden as of now
    <section className="container-page py-20 md:py-24">
      <span className="eyebrow text-secondary">Heritage</span>
      <h2 className="h-display mt-3 text-[clamp(24px,2.4vw,34px)] text-primary">Twenty-five years of independent classification.</h2>
      <div className="mt-14 grid gap-px bg-border md:grid-cols-2">
        {milestones.map((m) => (
          <motion.div
            key={m.year}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="bg-background p-8"
          >
            <div className="flex items-baseline gap-4">
              <div className="font-mono text-[12px] uppercase tracking-wider text-accent">{m.year}</div>
              <div className="h-px flex-1 bg-border" />
            </div>
            <h3 className="h-display mt-3 text-[20px] text-primary">{m.title}</h3>
            <p className="mt-2 text-[14px] font-light leading-relaxed text-muted-foreground">{m.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
    */}

    {/* Leadership - Hidden as of now
    <section className="border-t border-border bg-primary py-20">
      <div className="container-page">
        <span className="eyebrow text-accent">Leadership</span>
        <h2 className="h-display mt-3 text-[clamp(24px,2.4vw,34px)] text-background">The team accountable for every signature.</h2>
        <div className="mt-12 grid gap-px bg-background/10 md:grid-cols-2 lg:grid-cols-4">
          {leadership.map((l) => (
            <div key={l.name} className="bg-primary p-7">
              <div className="relative aspect-square w-full overflow-hidden bg-primary-deep">
                <img
                  src={l.photo}
                  alt={`${l.name} | ${l.role}`}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
              </div>
              <h3 className="h-display mt-5 text-[17px] text-background">{l.name}</h3>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-accent">{l.role}</div>
              <p className="mt-3 text-[13px] font-light leading-relaxed text-background/60">{l.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    */}
  </SiteShell>
);

export default AboutPage;
