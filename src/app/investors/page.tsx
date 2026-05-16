import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/layout/PageHero";
import { Download, TrendingUp } from "lucide-react";

const kpis = [
  { k: "2,500+", l: "Active class certificates" },
  { k: "150+", l: "Exclusive surveyors" },
  { k: "32", l: "Regional offices" },
  { k: "99.4%", l: "Survey on-time rate" },
];

const reports = [
  { year: "2024", title: "Annual Report 2024", note: "Audited financials, sustainability disclosure" },
  { year: "2023", title: "Annual Report 2023", note: "Audited financials" },
  { year: "2024 H1", title: "Half-year update", note: "Unaudited management commentary" },
];

const InvestorsPage = () => (
  <SiteShell>
    <PageHero
      eyebrow="Investor Relations"
      title="Classification, built for long-term operators."
      subtitle="GR Class is privately held. Our reporting framework mirrors listed-company disclosure standards."
      breadcrumbs={[{ label: "Investors" }]}
    />
    <section className="container-page py-20">
      <div className="grid gap-px bg-border md:grid-cols-4">
        {kpis.map((x) => (
          <div key={x.l} className="bg-background px-6 py-8">
            <div className="font-display text-[32px] font-extrabold leading-none text-primary">{x.k}</div>
            <div className="mt-2 text-[11px] uppercase tracking-wider text-subtle">{x.l}</div>
          </div>
        ))}
      </div>
    </section>

    <section className="border-t border-border bg-muted/40 py-20">
      <div className="container-page grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <span className="eyebrow text-secondary">Governance</span>
          <h2 className="h-display mt-3 text-[clamp(22px,2.2vw,32px)] text-primary">
            Disclosed quarterly. Audited annually.
          </h2>
          <p className="mt-5 text-[15px] font-light leading-[1.8] text-muted-foreground">
            GR Class operates under a dual-board governance model: a Technical Committee responsible
            for rule integrity, and a Supervisory Board overseeing commercial strategy. Both sit
            independently of operational leadership.
          </p>
        </div>
        <div className="md:col-span-7">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Reports & filings</h3>
          <ul className="mt-5 hairline">
            {reports.map((r) => (
              <li key={r.title} className="grid gap-4 border-b border-border-soft bg-card px-6 py-5 md:grid-cols-[100px_1fr_auto] md:items-center">
                <span className="font-mono text-[12px] uppercase tracking-wider text-accent">{r.year}</span>
                <div>
                  <div className="font-display text-[16px] font-semibold text-primary">{r.title}</div>
                  <div className="mt-1 text-[12.5px] text-subtle">{r.note}</div>
                </div>
                <a href="#" className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-secondary hover:text-accent">
                  Download <Download className="h-3.5 w-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="bg-primary py-16">
      <div className="container-page flex items-center gap-4 text-background">
        <TrendingUp className="h-5 w-5 text-accent" />
        <p className="text-[14px]">Investor enquiries: <a href="mailto:ir@grclass.com" className="text-accent underline-offset-4 hover:underline">ir@grclass.com</a></p>
      </div>
    </section>
  </SiteShell>
);

export default InvestorsPage;