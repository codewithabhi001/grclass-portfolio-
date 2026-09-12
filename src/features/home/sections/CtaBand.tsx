"use client";

/**
 * Final CTA | Executive consultation banner framed cleanly with generous spacing
 * before the site footer.
 */
import Link from "next/link";
import { ArrowRight, ShieldCheck, PhoneCall } from "lucide-react";
import newsHeroImg from "@/assets/news-hero.jpg";

export function CtaBand() {
  return (
    <section className="bg-slate-50/60 py-16 sm:py-20 lg:py-24 border-t border-border-soft overflow-hidden">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-sm border border-primary/20 bg-primary-deep shadow-2xl">
          {/* Background Vessel Image with Deep Navy Gradient */}
          <div className="absolute inset-0 z-0">
            <img
              src={typeof newsHeroImg === "string" ? newsHeroImg : (newsHeroImg as any).src}
              alt="GR Class commercial vessel at sea"
              className="h-full w-full object-cover object-center opacity-40 mix-blend-luminosity"
              loading="lazy"
              width={1280}
              height={720}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-deep via-primary-deep/95 to-primary-deep/80 sm:to-primary-deep/60" />
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
          </div>

          {/* Card Content Grid */}
          <div className="relative z-10 grid gap-8 p-8 sm:p-12 lg:grid-cols-12 lg:items-center lg:gap-12 lg:p-16">
            <div className="lg:col-span-8">
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5">
                <span className="h-[2px] w-5 bg-accent" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  Fleet Classification &amp; Transfer of Class
                </span>
              </div>

              {/* Title */}
              <h2 className="mt-4 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.2]">
                Ready to Classify or Transfer Your Fleet with GR Class?
              </h2>

              {/* Body */}
              <p className="mt-4 max-w-2xl text-sm sm:text-base font-normal leading-relaxed text-white/80">
                Speak directly with a senior marine surveyor. Initial statutory consultations,
                classification scoping, and rulebook compliance reviews are handled with rapid,
                guaranteed turnaround times.
              </p>

              {/* Key Credentials Badges */}
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-white/70">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-accent" /> Recognised Organization (RO)
                </span>
                <span className="h-3 w-px bg-white/20 hidden sm:block" />
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-accent" /> 24/7 Global Surveyor Dispatch
                </span>
                <span className="h-3 w-px bg-white/20 hidden sm:block" />
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-accent" /> ISO 9001:2015 Audited
                </span>
              </div>
            </div>

            {/* Action Buttons Column */}
            <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center lg:col-span-4 lg:flex-col lg:items-stretch">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xs bg-accent px-6 py-4 text-sm font-semibold tracking-wide text-accent-foreground shadow-sm transition-all hover:bg-accent-bright hover:shadow-md active:scale-[0.99]"
              >
                <span>Request Consultation</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xs border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-xs transition-colors hover:border-white hover:bg-white/15 active:scale-[0.99]"
              >
                <span>Explore All Services</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
