/**
 * News & Insight | editorial listing with category filters.
 */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
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

const NewsPage = () => {
  const [news, setNews] = useState<any[]>(staticNewsItems);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetchNews();
        const newsData = Array.isArray(res) ? res : res?.data || [];
        if (newsData && newsData.length > 0) {
          const mapped = newsData.map((n: any) => {
            const cleanText = n.body_html?.replace(/<[^>]*>/g, "") || "";
            const slug = slugify(n.title) || n.id;
            
            // Classify category
            let category: any = "GR Class";
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
              slug,
              category,
              date: n.published_at || new Date().toISOString(),
              title: n.title,
              excerpt: cleanText.length > 160 ? cleanText.slice(0, 157) + "..." : cleanText,
              readTime: getReadTime(n.body_html || ""),
              body_html: n.body_html,
              thumbnail_url: n.thumbnail_url || newsHero
            };
          });
          setNews(mapped);
        }
      } catch (err) {
        console.error("Failed to fetch news from API, falling back to static news.", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const sortedNews = [...news].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <SiteShell>
      <PageHero
        eyebrow="Newsroom"
        title="Rule changes, technical bulletins, and industry briefings."
        subtitle="Editorial-grade analysis from the GR Class technical committee and advisory practice."
        breadcrumbs={[{ label: "News" }]}
      />

      {loading ? (
        <section className="container-page py-16 animate-pulse">
          <div className="grid gap-10 md:grid-cols-12 border-b border-border pb-16">
            <div className="md:col-span-5 h-[280px] bg-border-soft rounded"></div>
            <div className="md:col-span-7 space-y-4">
              <div className="h-4 bg-border-soft w-1/4 rounded"></div>
              <div className="h-8 bg-border-soft w-3/4 rounded"></div>
              <div className="h-4 bg-border-soft w-full rounded"></div>
              <div className="h-4 bg-border-soft w-5/6 rounded"></div>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3 mt-16">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-4 p-7 border border-border">
                <div className="h-4 bg-border-soft w-1/3 rounded"></div>
                <div className="h-6 bg-border-soft w-full rounded"></div>
                <div className="h-4 bg-border-soft w-5/6 rounded"></div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <>
          {/* Featured (Most Recent) */}
          {sortedNews.length > 0 && (
            <section className="container-page pt-16">
              <Link to={`/news/${sortedNews[0].slug}`} className="group grid gap-10 border-b border-border pb-16 md:grid-cols-12">
                <div className="md:col-span-5">
                  <img 
                    src={sortedNews[0].thumbnail_url || newsHero} 
                    alt={sortedNews[0].title} 
                    className="aspect-[4/3] w-full object-cover" 
                    loading="lazy" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = newsHero;
                    }}
                  />
                </div>
                <div className="md:col-span-7 md:py-4">
                  <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider">
                    <span className="bg-accent px-2.5 py-1 text-accent-foreground">{sortedNews[0].category}</span>
                    <span className="text-subtle">Featured</span>
                  </div>
                  <h2 className="h-display mt-5 text-[clamp(24px,2.6vw,36px)] text-primary transition-colors group-hover:text-secondary">
                    {sortedNews[0].title}
                  </h2>
                  <p className="mt-4 max-w-xl text-[15px] font-light leading-relaxed text-muted-foreground">
                    {sortedNews[0].excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-5 text-[12px] text-subtle">
                    <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {new Date(sortedNews[0].date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {sortedNews[0].readTime}</span>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-secondary">
                    Read article <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            </section>
          )}

          {/* Listing */}
          <section className="container-page py-16 md:py-20">
            <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
              {sortedNews.slice(1).map((n, i) => (
                <motion.article
                  key={n.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
                  className="group bg-background transition-colors hover:bg-card"
                >
                  <Link to={`/news/${n.slug}`} className="block p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">{n.category}</span>
                    <span className="font-mono text-[10px] text-subtle">{new Date(n.date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</span>
                  </div>
                  <h3 className="h-display mt-5 text-[18px] leading-snug text-primary transition-colors group-hover:text-secondary">
                    {n.title}
                  </h3>
                  <p className="mt-3 text-[13.5px] font-light leading-relaxed text-muted-foreground">
                    {n.excerpt}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-[11px] text-subtle">
                      <Clock className="h-3 w-3" /> {n.readTime}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-subtle transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </section>
        </>
      )}
    </SiteShell>
  );
};

export default NewsPage;
