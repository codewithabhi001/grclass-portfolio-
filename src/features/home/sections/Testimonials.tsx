"use client";

/**
 * Testimonials | interactive sliding horizontal carousel fetching live portfolio feedback.
 */
import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { fetchPortfolioFeedback } from "@/lib/api";
import { motion, AnimatePresence } from "framer-motion";

interface FeedbackItem {
  company_name: string;
  username: string;
  company_country: string | null;
  profile_pic_url: string | null;
  comment: string;
  rating: number;
}

const FALLBACK_FEEDBACK: FeedbackItem[] = [
  {
    company_name: "Nordic Bulk",
    username: "Henrik Lindqvist",
    company_country: "Sweden",
    profile_pic_url: null,
    comment: "GR Class combines the rigor we expect from a recognised society with response times that match modern fleet operations.",
    rating: 5
  },
  {
    company_name: "Pacific Lines",
    username: "Aiko Tanaka",
    company_country: "Japan",
    profile_pic_url: null,
    comment: "Their digital certificate platform removed weeks of paperwork from each vessel onboarding cycle.",
    rating: 5
  },
  {
    company_name: "Atlantic Tankers",
    username: "Marcus Owens",
    company_country: "United Kingdom",
    profile_pic_url: null,
    comment: "Independent advice on our LNG retrofit was clear, technically sound, and commercially aware.",
    rating: 5
  }
];

export function Testimonials() {
  const [feedback, setFeedback] = useState<FeedbackItem[]>(FALLBACK_FEEDBACK);
  const [startIndex, setStartIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFeedback() {
      try {
        const res = await fetchPortfolioFeedback();
        const list = Array.isArray(res) ? res : (res as any)?.data || [];
        if (list.length > 0) {
          setFeedback(list);
        }
      } catch (err) {
        console.error("Failed to load feedback, using fallback:", err);
      } finally {
        setLoading(false);
      }
    }
    loadFeedback();
  }, []);

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + feedback.length) % feedback.length);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % feedback.length);
  };

  // Get exactly 3 visible items with wrap-around
  const visibleItems: FeedbackItem[] = [];
  if (feedback.length > 0) {
    for (let i = 0; i < 3; i++) {
      visibleItems.push(feedback[(startIndex + i) % feedback.length]);
    }
  }

  return (
    <section className="container-page py-16 sm:py-20 md:py-28 bg-secondary-soft/30 border-t border-b border-border-soft">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="max-w-2xl">
          <span className="eyebrow text-secondary">Trusted by Fleet Leaders</span>
          <h2 className="h-display mt-3 text-[clamp(24px,3.2vw,40px)] text-primary">
            From bulkers to LNG carriers | measured in cycles, not promises.
          </h2>
        </div>
        {/* Navigation Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="flex h-12 w-12 items-center justify-center border border-border bg-card text-primary transition-all hover:bg-secondary hover:text-secondary-foreground"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="flex h-12 w-12 items-center justify-center border border-border bg-card text-primary transition-all hover:bg-secondary hover:text-secondary-foreground"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Testimonials List */}
      <div className="mt-10 md:mt-12 relative overflow-hidden">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleItems.map((t, idx) => {
              const uniqueKey = `${t.username}-${t.company_name}-${(startIndex + idx) % feedback.length}`;
              return (
                <motion.article
                  key={uniqueKey}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex flex-col border border-border border-t-[3px] border-t-secondary bg-card p-6 transition-all duration-300 hover:border-t-accent hover:shadow-card sm:p-7"
                >
                  <div className="flex justify-between items-start">
                    <Quote className="h-6 w-6 text-accent/60 transition-colors group-hover:text-accent" />
                    {/* Stars */}
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3.5 w-3.5 ${
                            i < t.rating ? "fill-accent text-accent animate-pulse" : "text-border"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-4 flex-1 text-[14px] italic leading-relaxed text-muted-foreground sm:text-[14.5px] line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                    "{t.comment}"
                  </p>
                  <div className="mt-6 hairline pt-4 flex items-center gap-3">
                    {t.profile_pic_url ? (
                      <img
                        src={typeof t.profile_pic_url === "string" ? t.profile_pic_url : (t.profile_pic_url as any).src}
                        alt={t.username}
                        className="h-10 w-10 rounded-full object-cover border border-border"
                      />
                    ) : null}
                    <div>
                      <div className="text-[13px] font-semibold text-primary">{t.username}</div>
                      <div className="mt-0.5 text-[12px] text-subtle">{t.company_name}</div>
                      {t.company_country && (
                        <div className="mt-1 text-[11px] font-medium text-secondary">{t.company_country}</div>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
