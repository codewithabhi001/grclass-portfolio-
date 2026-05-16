/**
 * Testimonials | three editorial cards on muted ivory background.
 */
import { testimonials } from "@/data/home";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="container-page py-16 sm:py-20 md:py-28">
      <div className="max-w-2xl">
        <span className="eyebrow text-secondary">Trusted by Fleet Leaders</span>
        <h2 className="h-display mt-3 text-[clamp(24px,3.2vw,40px)] text-primary">
          From bulkers to LNG carriers | measured in cycles, not promises.
        </h2>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-12 md:grid-cols-3">
        {testimonials.map((t) => (
          <article
            key={t.name}
            className="group flex flex-col border border-border border-t-[3px] border-t-secondary bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-t-accent hover:shadow-card sm:p-7 sm:last:col-span-2 md:last:col-span-1"
          >
            <Quote className="h-6 w-6 text-accent/60 transition-colors group-hover:text-accent" />
            <p className="mt-4 flex-1 text-[14px] italic leading-relaxed text-muted-foreground sm:text-[14.5px]">
              "{t.quote}"
            </p>
            <div className="mt-6 hairline pt-4">
              <div className="text-[13px] font-semibold text-primary">{t.name}</div>
              <div className="mt-0.5 text-[12px] text-subtle">{t.role}</div>
              <div className="mt-2 text-[11px] font-medium text-secondary">{t.flag}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
