"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";

import flagshipImg from "@/assets/hero-banner-flagship.jpg";
import modernVesselImg from "@/assets/hero-vessel-modern.jpg";
import surveyorImg from "@/assets/about-surveyor.jpg";

interface SlideData {
  id: number;
  image: any;
  badge: string;
  title: string;
  description: string;
  primaryCta: string;
  primaryHref: string;
  secondaryCta: string;
  secondaryHref: string;
}

const SLIDES: SlideData[] = [
  {
    id: 0,
    image: flagshipImg,
    badge: "MARITIME CLASSIFICATION & CERTIFICATION",
    title: "Setting the Standard in Ship Classification and Marine Safety",
    description:
      "Authorised classification for new construction and fleet in service, technical plan approvals, and comprehensive hull surveys delivered with international compliance.",
    primaryCta: "Explore Services",
    primaryHref: "/services",
    secondaryCta: "Verify Certificate",
    secondaryHref: "/verify",
  },
  {
    id: 1,
    image: modernVesselImg,
    badge: "STATUTORY SURVEYS & FLAG AUTHORISATIONS",
    title: "Global Statutory Compliance Under IMO, SOLAS & MARPOL",
    description:
      "Delivering authorized surveys, international conventions compliance, and official certificates on behalf of major flag administrations and worldwide trading fleets.",
    primaryCta: "Statutory Services",
    primaryHref: "/services/statutory-services",
    secondaryCta: "Request Survey",
    secondaryHref: "/contact",
  },
  {
    id: 2,
    image: surveyorImg,
    badge: "EXCLUSIVE SURVEYOR NETWORK",
    title: "Qualified Marine Surveyors Stationed Across Strategic Hub Ports",
    description:
      "Direct attendance by seasoned naval architects and certified marine surveyors covering 40+ international ports for rapid emergency response and condition assessments.",
    primaryCta: "Join Surveyor Network",
    primaryHref: "/careers",
    secondaryCta: "Find a Surveyor",
    secondaryHref: "/contact",
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  // Autoplay ticker
  useEffect(() => {
    if (!isPlaying || isHovered) return;
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [isPlaying, isHovered, nextSlide]);

  const slide = SLIDES[current];

  return (
    <section
      aria-label="GR Class Maritime Classification Hero"
      className="relative w-full overflow-hidden bg-primary-deep text-white min-h-[580px] sm:min-h-[640px] lg:min-h-[680px] flex items-center pt-header"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image Carousel with cross-fade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <img
              src={typeof slide.image === "string" ? slide.image : slide.image.src}
              alt={slide.title}
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Deep navy atmospheric overlay matching GR Class branding */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-deep/95 via-primary-deep/85 sm:via-primary-deep/75 to-primary-deep/25 lg:to-transparent" />
        {/* Subtle bottom fade to seamlessly meet the ticker */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-primary-deep via-primary-deep/60 to-transparent" />
      </div>

      {/* Main Hero Content */}
      <div className="container-page relative z-10 w-full py-14 sm:py-18 lg:py-20">
        <div className="max-w-2xl lg:max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Clean, editorial Eyebrow text in Amber Accent */}
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-5 sm:w-6 bg-accent shrink-0" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  {slide.badge}
                </span>
              </div>

              {/* Solid White Serif Headline (timeless, authoritative, high-contrast) */}
              <h1 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-white leading-[1.15] max-w-2xl text-balance">
                {slide.title}
              </h1>

              {/* Clear, professional maritime description */}
              <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-white/85 font-normal">
                {slide.description}
              </p>

              {/* Clean CTA Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href={slide.primaryHref}
                  className="group inline-flex items-center justify-center gap-2 rounded-xs bg-accent hover:bg-accent-bright px-6 sm:px-7 py-3.5 text-body-sm font-semibold tracking-wide text-accent-foreground shadow-sm transition-all hover:shadow-md active:scale-[0.99]"
                >
                  <span>{slide.primaryCta}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href={slide.secondaryHref}
                  className="inline-flex items-center justify-center gap-2 rounded-xs border border-white/30 bg-white/5 px-6 py-3.5 text-body-sm font-medium text-white backdrop-blur-xs transition-colors hover:border-white hover:bg-white/15 active:scale-[0.99]"
                >
                  <ShieldCheck className="h-4 w-4 text-accent" />
                  <span>{slide.secondaryCta}</span>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Carousel Controls (Bottom Center) matching reference portal layout */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 rounded-full border border-white/15 bg-primary-deep/85 px-3.5 py-1.5 shadow-lg backdrop-blur-md">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="flex h-6 w-6 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Slide Indicators: Accent Pill for active, dots for inactive */}
        <div className="flex items-center gap-1.5 px-1">
          {SLIDES.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className="focus:outline-hidden"
            >
              {current === idx ? (
                <span className="block h-2 w-6 rounded-full bg-accent transition-all duration-300" />
              ) : (
                <span className="block h-2 w-2 rounded-full bg-white/40 transition-all duration-300 hover:bg-white/70" />
              )}
            </button>
          ))}
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
          className="flex h-6 w-6 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        >
          {isPlaying ? (
            <Pause className="h-3 w-3" />
          ) : (
            <Play className="h-3 w-3" />
          )}
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="flex h-6 w-6 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
