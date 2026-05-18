import { useState, useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/layout/PageHero";
import { newsItems as staticNewsItems } from "@/data/news";
import newsHero from "@/assets/news-hero.jpg";
import { fetchNews } from "@/lib/api";

const slugify = (text: string) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const getReadTime = (html: string) => {
  const words = html.replace(/<[^>]*>/g, "").split(/\s+/).filter(Boolean).length;
  const mins = Math.max(1, Math.ceil(words / 200));
  return `${mins} min`;
};

const NewsArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [item, setItem] = useState<any>(null);
  const [related, setRelated] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const res = await fetchNews();
        const newsData = Array.isArray(res) ? res : res?.data || [];

        // Map API data
        const apiItems = newsData.map((n: any) => {
          const cleanText = n.body_html?.replace(/<[^>]*>/g, "") || "";
          const itemSlug = slugify(n.title) || n.id;

          let category = "GR Class";
          const lowerTitle = n.title.toLowerCase();
          if (lowerTitle.includes("rule") || lowerTitle.includes("revision") || lowerTitle.includes("standard")) {
            category = "Rule Change";
          } else if (lowerTitle.includes("bulletin") || lowerTitle.includes("advisory")) {
            category = "Bulletin";
          } else if (lowerTitle.includes("environmental") || lowerTitle.includes("cii") || lowerTitle.includes("industry")) {
            category = "Industry";
          }

          return {
            id: n.id,
            slug: itemSlug,
            category,
            date: n.published_at || new Date().toISOString(),
            title: n.title,
            excerpt: cleanText.length > 160 ? cleanText.slice(0, 157) + "..." : cleanText,
            readTime: getReadTime(n.body_html || ""),
            body_html: n.body_html,
            thumbnail_url: n.thumbnail_url || newsHero
          };
        });

        // Merge API items and static items
        const combined = [...apiItems];
        staticNewsItems.forEach((si) => {
          if (!combined.some((ci) => ci.slug === si.slug || ci.title === si.title)) {
            combined.push({
              ...si,
              body_html: null,
              thumbnail_url: newsHero
            });
          }
        });

        const matched = combined.find((n) => n.slug === slug || n.id === slug);
        if (matched) {
          setItem(matched);
          setRelated(combined.filter((n) => n.slug !== matched.slug).slice(0, 3));
        } else {
          const staticMatch = staticNewsItems.find((n) => n.slug === slug);
          if (staticMatch) {
            setItem({ ...staticMatch, thumbnail_url: newsHero });
            setRelated(staticNewsItems.filter((n) => n.slug !== slug).slice(0, 3));
          }
        }
      } catch (err) {
        console.error("Failed to fetch news from API, falling back to static lookup.", err);
        const staticMatch = staticNewsItems.find((n) => n.slug === slug);
        if (staticMatch) {
          setItem({ ...staticMatch, thumbnail_url: newsHero });
          setRelated(staticNewsItems.filter((n) => n.slug !== slug).slice(0, 3));
        }
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [slug]);

  if (!loading && !item) return <Navigate to="/news" replace />;

  return (
    <SiteShell>
      <style>{`
        .dynamic-html-content p {
          margin-bottom: 1.25rem !important;
          line-height: 1.85 !important;
          color: hsl(var(--muted-foreground)) !important;
        }
        .dynamic-html-content h2 {
          color: hsl(var(--primary)) !important;
          font-family: var(--font-display) !important;
          font-weight: 700 !important;
          font-size: 22px !important;
          margin-top: 2rem !important;
          margin-bottom: 1rem !important;
        }
        .dynamic-html-content ul {
          list-style-type: none !important;
          padding-left: 0 !important;
          margin-bottom: 1.5rem !important;
        }
        .dynamic-html-content li {
          position: relative !important;
          padding-left: 1.5rem !important;
          margin-bottom: 0.5rem !important;
          color: hsl(var(--foreground)) / 0.85 !important;
        }
        .dynamic-html-content li::before {
          content: "—" !important;
          position: absolute !important;
          left: 0 !important;
          color: hsl(var(--accent)) !important;
        }
      `}</style>

      {loading ? (
        <>
          <PageHero
            eyebrow="Loading..."
            title="Please wait"
            subtitle="Retrieving latest article from the newsroom..."
            breadcrumbs={[{ label: "News", href: "/news" }, { label: "Loading..." }]}
          />
          <section className="container-page py-16 md:py-20 animate-pulse">
            <div className="h-6 bg-border-soft w-20 rounded"></div>
            <div className="mt-8 aspect-[16/9] w-full bg-border-soft rounded"></div>
            <div className="mt-10 max-w-3xl space-y-4">
              <div className="h-4 bg-border-soft w-full rounded"></div>
              <div className="h-4 bg-border-soft w-full rounded"></div>
              <div className="h-4 bg-border-soft w-5/6 rounded"></div>
              <div className="h-6 bg-border-soft w-1/3 rounded mt-12"></div>
              <div className="h-4 bg-border-soft w-full rounded"></div>
            </div>
          </section>
        </>
      ) : (
        <>
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
            <img
              src={item.thumbnail_url || newsHero}
              alt={item.title}
              className="mt-8 aspect-[16/9] w-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = newsHero;
              }}
            />
            <div className="mt-6 flex items-center gap-5 text-[12px] text-subtle">
              <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {new Date(item.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
              <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {item.readTime}</span>
            </div>

            {item.body_html ? (
              <div
                className="dynamic-html-content mt-10 max-w-3xl text-[16px] font-light leading-[1.85] text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: item.body_html }}
              />
            ) : (
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
            )}
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
        </>
      )}
    </SiteShell>
  );
};

export default NewsArticlePage;
