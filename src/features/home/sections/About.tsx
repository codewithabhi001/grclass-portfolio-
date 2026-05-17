/**
 * About section | split layout with vessel inspector image and feature list.
 */
import { motion } from "framer-motion";
import aboutImg from "@/assets/about-surveyor.jpg";
import { aboutFeatures } from "@/data/home";

export function About() {
  return (
    <section className="container-page py-16 sm:py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-14 lg:gap-20">
        {/* Left Column (Image & Quote) */}
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[320px] overflow-hidden sm:h-[420px] md:h-[480px]"
          >
            <img
              src={aboutImg}
              alt="GR Class surveyor inspecting a vessel hull"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1280}
              height={1280}
            />
            <div className="absolute bottom-0 left-0 flex gap-5 bg-primary px-5 py-4 sm:gap-7 sm:px-6 sm:py-5">
              <div>
                <div className="font-display text-[22px] font-extrabold leading-none text-background sm:text-[26px]">
                  25+
                </div>
                <div className="mt-1 text-[9px] uppercase tracking-wider text-background/50">
                  Years experience
                </div>
              </div>
              <div className="w-px bg-background/15" />
              <div>
                <div className="font-display text-[22px] font-extrabold leading-none text-background sm:text-[26px]">
                  IACS
                </div>
                <div className="mt-1 text-[9px] uppercase tracking-wider text-background/50">
                  Aligned ruleset
                </div>
              </div>
            </div>
          </motion.div>

          <blockquote className="border-l-[3px] border-accent bg-accent-soft px-5 py-4">
            <p className="text-[14px] italic leading-relaxed text-muted-foreground sm:text-[14.5px]">
              "Classification is a contract of trust between owner, flag, and the sea.
              Our role is to keep that contract honest."
            </p>
            <cite className="mt-2 block text-[10px] uppercase not-italic tracking-wider text-subtle">
              | Office of the Chief Surveyor
            </cite>
          </blockquote>
        </div>

        {/* Copy */}
        <div>
          <span className="eyebrow text-secondary">About GR Class</span>
          <h2 className="h-display mt-3 text-[clamp(24px,3.2vw,40px)] text-primary">
            A modern classification society, built for today's fleets.
          </h2>
          <p className="mt-5 text-[14.5px] font-light leading-[1.8] text-muted-foreground sm:text-[15px]">
            GR Class welcomes you for your asset’s safety and compliances. GR Class is a Recognized Organization (RO), Recognized Security Organization (RSO), and Classification Society (CS) authorised to offer statutory/class certification and services.
          </p>
          <p className="mt-4 text-[14.5px] font-light leading-[1.8] text-muted-foreground sm:text-[15px]">
            We are committed to ensuring the highest standards of safety, reliability, and environmental sustainability in the maritime industry. Our team possesses strong technical expertise and professionalism, guaranteeing dedicated service to our clients.
          </p>
          {/* <p className="mt-4 text-[14.5px] font-light leading-[1.8] text-muted-foreground sm:text-[15px]">
            Our range of services includes the classification of newly built ships, as well as the classification and certification of existing vessels for continued safe operation. We also provide statutory certification services.
          </p>
          <p className="mt-4 text-[14.5px] font-light leading-[1.8] text-muted-foreground sm:text-[15px]">
            We strive to be the trusted partner for ship owners and operators, offering reliable and cost-effective solutions tailored to their specific requirements.
          </p> */}

          <ul className="mt-7 hairline">
            {aboutFeatures.map((f, i) => (
              <li
                key={f.title}
                className="flex gap-4 border-b border-border-soft py-4"
              >
                <span className="min-w-[28px] pt-0.5 font-mono text-[11px] font-medium text-accent">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold text-primary">{f.title}</h3>
                  <p className="mt-1 text-[13px] font-light leading-relaxed text-muted-foreground sm:text-[13.5px]">
                    {f.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
