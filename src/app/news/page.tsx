/**
 * News & Insight | editorial listing with category filters.
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/layout/PageHero";
import { newsItems } from "@/data/news";
import newsHero from "@/assets/news-hero.jpg";

const categories = ["All", "Rule Change", "Bulletin", "Industry", "GR Class"] as const;

const NewsPage = () => {
  const [active, setActive] = useState<typeof categories[number]>("All");
  const filtered = active === "All" ? newsItems : newsItems.filter((n) => n.category === active);

  return (
    <SiteShell>
      <PageHero
        eyebrow="Newsroom"
        title="Rule changes, technical bulletins, and industry briefings."
        subtitle="Editorial-grade analysis from the GR Class technical committee and advisory practice."
        breadcrumbs={[{ label: "News" }]}
      />

      {/* Filter bar */}
      <section className="border-b border-border bg-background/80">
        <div className="container-page flex flex-wrap items-center gap-1.5 py-5">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={
                "px-4 py-2 text-[12px] font-medium tracking-wide transition-colors " +
                (active === c
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:border-accent hover:text-primary")
              }
            >
              {c}
            </button>
          ))}
          <div className="ml-auto font-mono text-[11px] uppercase tracking-wider text-subtle">
            {filtered.length} article{filtered.length !== 1 && "s"}
          </div>
        </div>
      </section>

      {/* Featured */}
      {active === "All" && (
        <section className="container-page pt-16">
          <Link to={`/news/${newsItems[0].slug}`} className="group grid gap-10 border-b border-border pb-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <img src={newsHero} alt={newsItems[0].title} className="aspect-[4/3] w-full object-cover" loading="lazy" />
            </div>
            <div className="md:col-span-7 md:py-4">
              <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider">
                <span className="bg-accent px-2.5 py-1 text-accent-foreground">{newsItems[0].category}</span>
                <span className="text-subtle">Featured</span>
              </div>
              <h2 className="h-display mt-5 text-[clamp(24px,2.6vw,36px)] text-primary transition-colors group-hover:text-secondary">
                {newsItems[0].title}
              </h2>
              <p className="mt-4 max-w-xl text-[15px] font-light leading-relaxed text-muted-foreground">
                {newsItems[0].excerpt}
              </p>
              <div className="mt-6 flex items-center gap-5 text-[12px] text-subtle">
                <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {new Date(newsItems[0].date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
                <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {newsItems[0].readTime}</span>
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
          {(active === "All" ? filtered.slice(1) : filtered).map((n, i) => (
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
    </SiteShell>
  );
};

export default NewsPage;
