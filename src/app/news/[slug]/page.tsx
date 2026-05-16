import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/layout/PageHero";
import { newsItems } from "@/data/news";
import newsHero from "@/assets/news-hero.jpg";

const NewsArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = newsItems.find((n) => n.slug === slug);
  if (!item) return <Navigate to="/news" replace />;
  const related = newsItems.filter((n) => n.slug !== item.slug).slice(0, 3);

  return (
    <SiteShell>
      <PageHero
        eyebrow={item.category}
        title={item.title}
        subtitle={item.excerpt}
        breadcrumbs={[{ label: "News", href: "/news" }, { label: item.title.slice(0, 40) + "…" }]}
      />
      <section className="container-page py-16 md:py-20">
        <Link to="/news" className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-secondary hover:text-accent">
          <ArrowLeft className="h-3.5 w-3.5" /> All articles
        </Link>
        <img src={newsHero} alt={item.title} className="mt-8 aspect-[16/9] w-full object-cover" />
        <div className="mt-6 flex items-center gap-5 text-[12px] text-subtle">
          <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {new Date(item.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
          <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {item.readTime}</span>
        </div>
        <article className="prose-editorial mt-10 max-w-3xl space-y-5 text-[16px] font-light leading-[1.85] text-muted-foreground">
          <p className="text-[18px] font-normal text-foreground">{item.excerpt}</p>
          <p>
            This bulletin summarises the technical position of the GR Class rule committee as of the publication
            date. It does not constitute a rule amendment and does not alter any existing contractual obligations
            under a GR Class service agreement.
          </p>
          <p>
            For operational guidance specific to a vessel or fleet, owners should contact their assigned engagement
            manager. Full technical appendices are available on the surveyor portal.
          </p>
          <h2 className="h-display pt-6 text-[22px] text-primary">Key takeaways</h2>
          <ul className="space-y-2 text-[15px] text-foreground/85">
            <li>| Scope of applicability and effective date</li>
            <li>| Recommended compliance timeline</li>
            <li>| Documentation owners should prepare in advance</li>
            <li>| Points of contact within the GR Class technical committee</li>
          </ul>
        </article>
      </section>

      <section className="border-t border-border bg-secondary-soft py-16">
        <div className="container-page">
          <span className="eyebrow text-secondary">Related</span>
          <div className="mt-8 grid gap-px bg-border md:grid-cols-3">
            {related.map((n) => (
              <Link key={n.slug} to={`/news/${n.slug}`} className="bg-background p-7 transition-colors hover:bg-card">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">{n.category}</span>
                <h3 className="h-display mt-4 text-[17px] text-primary">{n.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
};

export default NewsArticlePage;
