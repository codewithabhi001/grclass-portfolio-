import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/layout/PageHero";
import { Download, Mail } from "lucide-react";
import { site } from "@/lib/site";


const releases = [
  { date: "2025-03-12", title: "GR Class publishes ammonia fuel readiness bulletin TB-2025-04" },
  { date: "2025-02-10", title: "Singapore regional hub doubles surveyor capacity" },
  { date: "2024-12-18", title: "Digital certificate platform v3 released" },
  { date: "2024-09-05", title: "GR Class joins Poseidon Principles as signatory society" },
];

const PressPageClient = () => (
  <SiteShell>
    
    <PageHero
      eyebrow="Press & Media"
      title="News, bulletins, and media resources."
      subtitle="For interviews, quotes, and technical commentary, contact our press office directly."
      breadcrumbs={[{ label: "Press" }]}
    />
    <section className="container-page section">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-8">
          <span className="eyebrow text-secondary">Recent releases</span>
          <h2 className="h-display mt-3 text-display-sm text-primary">Latest announcements</h2>
          <ul className="mt-10 hairline">
            {releases.map((r) => (
              <li key={r.title} className="grid gap-4 border-b border-border-soft py-6 md:grid-cols-[140px_1fr_auto] md:items-center">
                <time className="font-mono text-xs uppercase tracking-wider text-accent">
                  {new Date(r.date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
                </time>
                <h3 className="h-display text-body-lg text-primary">{r.title}</h3>
                <a href="#" className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-secondary transition-colors hover:text-accent">
                  PDF <Download className="h-3.5 w-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <aside className="md:col-span-4">
          <div className="border border-border bg-card p-7">
            <h3 className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-secondary">Press contact</h3>
            <a href={`mailto:press@grclass.com`} className="mt-5 flex items-center gap-3 text-body-sm text-foreground hover:text-secondary">
              <Mail className="h-4 w-4 text-accent" /> press@grclass.com
            </a>
            <p className="mt-6 text-caption font-light text-muted-foreground">
              Response within 4 working hours during European business hours.
            </p>
          </div>
          <div className="mt-5 border border-border bg-accent-soft p-7">
            <span className="font-mono text-[10px] uppercase tracking-wider text-accent">Media kit</span>
            <p className="mt-3 text-caption font-light text-foreground/80">
              Logos, executive portraits, and company backgrounder (PDF).
            </p>
            <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-caption font-semibold text-primary hover:text-secondary">
              Download kit <Download className="h-4 w-4" />
            </a>
          </div>
        </aside>
      </div>
    </section>
    <section className="border-t border-border bg-secondary-soft section-sm">
      <div className="container-page text-xs text-subtle">
        General enquiries: {site.email} · Press: press@grclass.com
      </div>
    </section>
  </SiteShell>
);

export default PressPageClient;
