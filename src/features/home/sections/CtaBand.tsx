/**
 * Final CTA | two-column dark band with image + invitation.
 */
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import newsHeroImg from "@/assets/news-hero.jpg";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-primary-deep">
      <div className="grid md:grid-cols-2">
        <div className="relative min-h-[260px] sm:min-h-[320px] md:min-h-[460px]">
          <img
            src={typeof newsHeroImg === "string" ? newsHeroImg : (newsHeroImg as any).src}
            alt="Maritime vessel at sea"
            className="h-full w-full object-cover"
            loading="lazy"
            width={1024}
            height={768}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-primary/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/60 to-transparent md:bg-gradient-to-r md:from-transparent md:to-primary-deep/80" />
        </div>
        <div className="flex flex-col justify-center px-6 py-14 sm:px-10 sm:py-16 md:px-12 md:py-20 lg:px-14">
          <span className="eyebrow text-accent">Begin Class</span>
          <h2 className="h-display mt-3 text-display-md text-background">
            Ready to move your vessel into class with us?
          </h2>
          <p className="mt-5 max-w-md text-body-sm font-light text-background/65">
            Speak directly with a senior surveyor. Initial consultation, fleet review, and
            transfer-of-class scoping are always complimentary.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-accent px-6 py-3.5 text-sm font-semibold tracking-wide text-accent-foreground shadow-brass transition-all hover:bg-accent-bright hover:shadow-[0_12px_32px_hsl(var(--accent)/0.45)]"
            >
              Request consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border border-background/25 px-6 py-3.5 text-sm font-medium text-background transition-colors hover:border-background hover:bg-background/5"
            >
              Explore services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
