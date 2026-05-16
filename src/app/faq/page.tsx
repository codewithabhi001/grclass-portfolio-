/**
 * FAQ — accordion grouped by topic.
 */
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/layout/PageHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/faq";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FaqPage = () => (
  <SiteShell>
    <PageHero
      eyebrow="Reference"
      title="Frequently asked questions."
      subtitle="Answers on classification scope, costs, timelines, and digital verification. Don't see your question? Speak with a surveyor."
      breadcrumbs={[{ label: "FAQ" }]}
    />

    <section className="container-page py-20 md:py-24">
      <div className="grid gap-12 md:grid-cols-12">
        {/* Topic nav */}
        <aside className="md:col-span-3">
          <div className="sticky top-24">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Topics</span>
            <ul className="mt-5 space-y-2.5">
              {faqs.map((g) => (
                <li key={g.topic}>
                  <a
                    href={`#${g.topic.replace(/\s+/g, "-").toLowerCase()}`}
                    className="text-[13.5px] text-muted-foreground transition-colors hover:text-primary"
                  >
                    {g.topic}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Groups */}
        <div className="space-y-16 md:col-span-9">
          {faqs.map((g) => (
            <section key={g.topic} id={g.topic.replace(/\s+/g, "-").toLowerCase()} className="scroll-mt-24">
              <h2 className="h-display border-b-[2px] border-accent pb-4 text-[22px] text-primary md:text-[26px]">
                {g.topic}
              </h2>
              <Accordion type="single" collapsible className="mt-2">
                {g.items.map((item, i) => (
                  <AccordionItem key={i} value={`${g.topic}-${i}`} className="border-b border-border">
                    <AccordionTrigger className="py-5 text-left font-display text-[16px] font-semibold text-primary hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-[14.5px] font-light leading-relaxed text-muted-foreground">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          ))}
        </div>
      </div>
    </section>

    <section className="border-t border-border bg-muted/40 py-16">
      <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h3 className="h-display text-[22px] text-primary">Still have questions?</h3>
          <p className="mt-2 text-[14px] font-light text-muted-foreground">
            Initial scoping conversations are always complimentary.
          </p>
        </div>
        <Link
          to="/contact"
          className="group inline-flex items-center gap-2 bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-bright"
        >
          Contact us <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  </SiteShell>
);

export default FaqPage;
