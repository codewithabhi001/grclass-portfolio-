import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Anchor,
  Shield,
  Globe,
  Users,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Maximize2,
  FileText,
  MapPin,
  Mail,
  Phone,
  Compass,
  FileSignature,
  Cpu,
  Award,
  AlertTriangle,
  Activity,
  Check,
  ChevronRight,
  Layers,
  Printer,
  X,
  Smartphone,
  Zap,
  WifiOff
} from "lucide-react";

// Import site-wide configurations (single source of truth for contact/address)
import { site } from "@/lib/site";

// Import images from assets to use in slides
import aboutSurveyor from "@/assets/about-surveyor.jpg";
import profileCoverHero from "@/assets/profile-cover-hero.png";
import svcFleet from "@/assets/svc-fleet-in-services.png";
import svcNewConstruction from "@/assets/svc-new-construction.png";
import svcSolas from "@/assets/svc-solas.png";
import svcBallastWater from "@/assets/svc-ballast-water.png";
import svcEnergyEfficiency from "@/assets/svc-energy-efficiency.png";
import whyPort from "@/assets/why-port.jpg";
import heroVessel from "@/assets/hero-vessel.jpg";
import careersHero from "@/assets/careers-hero.jpg";
import svcPlanApproval from "@/assets/svc-plan-approval.png";
import svcCert from "@/assets/svc-cert.jpg";

export default function ProfilePage() {
  const [slideMode, setSlideMode] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [controlsVisible, setControlsVisible] = useState<boolean>(true);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const totalSlides = 17;
  const slideContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Keyboard controls for slideshow
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!slideMode) return;
      if (e.key === "ArrowRight" || e.key === "Space") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [slideMode, currentSlide]);

  // Auto-hide controls timer in fullscreen mode
  useEffect(() => {
    if (!slideMode) return;
    const timer = setTimeout(() => {
      setControlsVisible(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, [currentSlide, slideMode]);

  const handleMouseMove = () => {
    setControlsVisible(true);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const toggleMode = () => {
    setSlideMode(!slideMode);
  };

  const printProfile = () => {
    window.print();
  };

  // Custom styling specifically for the slides
  const slideClass = "w-full h-full bg-card overflow-y-auto md:overflow-hidden flex flex-col justify-between relative select-none";
  const printPageClass = "w-full min-h-screen md:h-[calc(100vh-73px)] bg-card overflow-y-auto md:overflow-hidden flex flex-col justify-between relative page-break-after-always";

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          /* Force colors and backgrounds to be exact */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          /* Hide all screen components */
          .print\\:hidden,
          header,
          footer,
          button,
          nav,
          .no-print {
            display: none !important;
          }
          
          /* Set A4 landscape page settings with zero margins */
          @page {
            size: A4 landscape;
            margin: 0 !important;
          }
          
          html, body {
            margin: 0 !important;
            padding: 0 !important;
            width: 297mm !important;
            height: 210mm !important;
            min-width: 297mm !important;
            min-height: 210mm !important;
            overflow: visible !important;
            background-color: #0b1f45 !important;
          }

          /* Print slide page styling */
          .print-slide-page {
            width: 297mm !important;
            height: 210mm !important;
            min-width: 297mm !important;
            min-height: 210mm !important;
            page-break-after: always !important;
            break-after: page !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            position: relative !important;
            overflow: hidden !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
            margin: 0 !important;
            padding: 0 !important;
            box-sizing: border-box !important;
            background-color: #0b1f45 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          
          /* Scale adjustment to ensure layout fits within print viewport */
          .print-slide-page > div {
            width: 100% !important;
            height: 100% !important;
            max-width: none !important;
            max-height: none !important;
            border: none !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            margin: 0 !important;
            padding: 0 !important;
            box-sizing: border-box !important;
          }

          /* Specific adjustments for backgrounds on print */
          .print-slide-page .bg-\\[\\#f5f3ef\\] {
            background-color: #f5f3ef !important;
          }
          .print-slide-page .bg-white {
            background-color: #ffffff !important;
          }
          .print-slide-page .bg-\\[\\#0b1f45\\] {
            background-color: #0b1f45 !important;
          }
        }
      `}} />

      {/* Screen layout container (hidden during print) */}
      <div 
        className="min-h-screen bg-[#0b1f45] text-slate-100 flex flex-col font-sans overflow-x-hidden print:hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Top fixed navbar for controls (only visible in scroll mode) */}
        {!slideMode && (
          <header className="sticky top-0 z-50 bg-[#0b1f45]/90 backdrop-blur-md border-b border-slate-800/80 px-6 py-4 flex items-center justify-between shadow-md print:hidden animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="text-xs font-mono uppercase tracking-widest text-slate-400">
                Company Profile 2026
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleMode}
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 active:bg-slate-650 text-xs font-semibold uppercase tracking-wider text-slate-200 rounded-md border border-slate-700 transition-all shadow-sm group hover:border-amber-500/50"
              >
                <Maximize2 className="h-4 w-4 text-amber-500 group-hover:scale-110 transition-transform" />
                <span>Full Screen</span>
              </button>

              <button
                onClick={printProfile}
                className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-500 active:bg-amber-700 text-xs font-semibold uppercase tracking-wider text-slate-950 rounded-md transition-all font-bold shadow-sm"
              >
                <Printer className="h-4 w-4" />
                <span>Print / PDF</span>
              </button>

              <Link
                to="/"
                className="text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-slate-200 px-3 py-2 transition-all"
              >
                Exit
              </Link>
            </div>
          </header>
        )}

        {/* Main Container */}
        <main className="flex-1 flex flex-col">
          {slideMode ? (
            /* FULL SCREEN SLIDESHOW MODE */
            <div className="fixed inset-0 w-screen h-screen bg-[#0b1f45] flex items-center justify-center z-50 overflow-hidden select-none">
              
              {/* The Fullscreen Slide */}
              <div ref={slideContainerRef} className="w-full h-full relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={slideClass}
                  >
                    <SlideContent index={currentSlide} />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Floating Left Arrow */}
              <div className={`absolute left-6 top-1/2 -translate-y-1/2 z-40 transition-opacity duration-300 ${controlsVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                <button
                  onClick={prevSlide}
                  className="p-4 bg-slate-950/70 hover:bg-slate-900 hover:text-amber-500 text-slate-400 rounded-full border border-slate-800 backdrop-blur-md transition-all shadow-lg"
                >
                  <ArrowLeft className="h-6 w-6" />
                </button>
              </div>

              {/* Floating Right Arrow */}
              <div className={`absolute right-6 top-1/2 -translate-y-1/2 z-40 transition-opacity duration-300 ${controlsVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                <button
                  onClick={nextSlide}
                  className="p-4 bg-slate-950/70 hover:bg-slate-900 hover:text-amber-500 text-slate-400 rounded-full border border-slate-800 backdrop-blur-md transition-all shadow-lg"
                >
                  <ArrowRight className="h-6 w-6" />
                </button>
              </div>

              {/* Floating Top Header Controls */}
              <div className={`absolute top-0 left-0 right-0 p-6 z-40 bg-gradient-to-b from-slate-950/80 to-transparent flex items-center justify-between transition-opacity duration-300 ${controlsVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-300">
                    Slide {currentSlide + 1} of {totalSlides}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={toggleMode}
                    className="flex items-center gap-2 px-3 py-1.5 bg-slate-900/80 hover:bg-slate-800 text-slate-200 text-[10px] font-bold uppercase tracking-wider rounded border border-slate-800 backdrop-blur-sm transition-all"
                  >
                    <Layers className="h-3.5 w-3.5 text-amber-500" />
                    <span>Scroll Mode</span>
                  </button>
                  <button
                    onClick={printProfile}
                    className="flex items-center gap-2 px-3 py-1.5 bg-amber-600 hover:bg-amber-500 text-slate-950 text-[10px] font-bold uppercase tracking-wider rounded backdrop-blur-sm transition-all"
                  >
                    <Printer className="h-3.5 w-3.5" />
                    <span>Print / PDF</span>
                  </button>
                  <Link
                    to="/"
                    className="p-1.5 bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 rounded border border-slate-800 backdrop-blur-sm transition-all"
                    title="Close Presentation"
                  >
                    <X className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Floating Bottom Nav Indicators */}
              <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-40 px-6 py-3 bg-slate-950/70 border border-slate-800 backdrop-blur-md rounded-full flex items-center gap-2 transition-opacity duration-300 ${controlsVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                {Array.from({ length: totalSlides }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === currentSlide ? "w-6 bg-amber-500" : "w-2 bg-slate-700 hover:bg-slate-500"
                    }`}
                    title={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Hint message on start */}
              {currentSlide === 0 && (
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest text-slate-500 font-mono pointer-events-none animate-pulse">
                  Use arrow keys ← and → to navigate
                </div>
              )}
            </div>
          ) : isSmallScreen ? (
            /* GRID OVERVIEW MODE (3 COLUMNS HORIZONTALLY) */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-full max-w-7xl mx-auto">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <div 
                  key={i} 
                  className="cursor-pointer border border-slate-800 rounded-lg overflow-hidden shadow-lg hover:border-amber-500/50 hover:shadow-amber-500/10 hover:-translate-y-1 transition-all duration-300 bg-[#0b1f45]/50 group"
                  onClick={() => {
                    setCurrentSlide(i);
                    setSlideMode(true);
                  }}
                >
                  <ScaledSlide index={i} />
                  <div className="bg-[#0c2049] p-3 text-center border-t border-slate-800/80 flex justify-between items-center">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">
                      Page {i + 1}
                    </span>
                    <span className="text-[9px] text-amber-500 font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                      View Slide &rarr;
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* SCROLL DOCUMENT MODE */
            <div className="flex flex-col w-full">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <div key={i} className={printPageClass}>
                  <SlideContent index={i} />
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Print-only layout container (visible only on print) */}
      <div className="hidden print:block bg-[#0b1f45]">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <div key={i} className="print-slide-page">
            <SlideContent index={i} />
          </div>
        ))}
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════
   SCALED SLIDE WRAPPER FOR HORIZONTAL GRID VIEW
   Maintains exact desktop aspect ratio on small viewports
═══════════════════════════════════════════════════════ */
function ScaledSlide({ index }: { index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [parentHeight, setParentHeight] = useState(700);

  useEffect(() => {
    const updateScale = () => {
      if (!containerRef.current) return;
      const parentWidth = containerRef.current.getBoundingClientRect().width;
      const baseWidth = 1120;
      const baseHeight = 700;
      const newScale = parentWidth / baseWidth;
      setScale(newScale);
      setParentHeight(baseHeight * newScale);
    };

    updateScale();
    window.addEventListener("resize", updateScale);

    let resizeObserver: ResizeObserver | null = null;
    if (containerRef.current) {
      resizeObserver = new ResizeObserver(() => {
        updateScale();
      });
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener("resize", updateScale);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{ height: `${parentHeight}px` }} 
      className="w-full relative overflow-hidden bg-card"
    >
      <div 
        style={{ 
          width: "1120px", 
          height: "700px", 
          transform: `scale(${scale})`, 
          transformOrigin: "top left",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <SlideContent index={index} />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   SLIDE SELECTOR COMPONENT
═══════════════════════════════════════════════════════ */
function SlideContent({ index }: { index: number }) {
  switch (index) {
    case 0:
      return <Slide1Cover />;
    case 1:
      return <Slide2Welcome />;
    case 2:
      return <Slide3WhoWeAre />;
    case 3:
      return <Slide4VisionMission />;
    case 4:
      return <Slide5WhatWeDoIntro />;
    case 5:
      return <Slide6Classification />;
    case 6:
      return <Slide7Statutory />;
    case 7:
      return <Slide8Environmental />;
    case 8:
      return <Slide9ComplianceOther />;
    case 9:
      return <Slide10PlanApproval />;
    case 10:
      return <Slide11HowWeConnect />;
    case 11:
      return <Slide12SoftwareInAction />;
    case 12:
      return <Slide13SurveyorApp />;
    case 13:
      return <Slide14WhyDifferent />;
    case 14:
      return <Slide11WhyChoose />;
    case 15:
      return <Slide12Geographical />;
    case 16:
      return <Slide13BackCover />;
    default:
      return null;
  }
}

/* ═══════════════════════════════════════════════════════
   SLIDE 1 — COVER
═══════════════════════════════════════════════════════ */
function Slide1Cover() {
  return (
    <div className="w-full min-h-full md:h-full bg-[#0b1f45] grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 text-white relative overflow-y-auto md:overflow-hidden">
      {/* Left Pane */}
      <div className="p-12 md:p-16 flex flex-col justify-between relative z-10 border-r-4 border-amber-600 bg-[#0b1f45]/90 backdrop-blur-[2px]">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <img 
              src="/grclass-logo.webp" 
              alt="GR Class Logo" 
              className="h-11 w-auto" 
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <span className="font-serif text-2xl md:text-3xl font-black tracking-widest text-white uppercase">
              GR <span className="text-amber-500">Class</span>
            </span>
          </div>
          <span className="text-[9px] md:text-xs font-semibold tracking-[0.3em] uppercase text-slate-400 mt-2">
            Maritime Classification Society
          </span>
          <span className="inline-block border border-slate-700 bg-slate-800/40 text-[8px] md:text-[9px] font-bold tracking-widest text-slate-400 px-3 py-1 rounded w-fit mt-2">
            RECOGNIZED ORGANIZATION — RO
          </span>
        </div>

        <div className="my-auto py-6">
          <div className="flex items-center gap-3 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-amber-500 mb-3">
            <span className="w-8 h-[2px] bg-amber-500"></span>
            Company Profile 2026
          </div>
          <h1 className="font-serif font-black text-4xl md:text-5xl lg:text-6xl leading-[1.1] uppercase tracking-wide">
            Your Trusted<br />
            <span className="text-amber-500 font-serif">Classification</span><br />
            Partner
          </h1>
          <p className="mt-4 text-xs md:text-sm font-light text-slate-300 max-w-[380px] leading-relaxed">
            Ensuring marine safety, safeguarding lives and property at sea, and delivering digital regulatory and compliance services across 120+ ports.
          </p>
        </div>
      </div>

      {/* Right Pane (Background Image with Sunset Cargo Ship) */}
      <div className="relative bg-[#0d2a6e] overflow-hidden flex flex-col justify-between">
        <img
          src={profileCoverHero}
          alt="GR Class Cover Vessel"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f45] via-transparent to-transparent z-10"></div>
        <div className="absolute inset-0 bg-slate-950/20 z-0"></div>

        {/* Small credential label top right */}
        <div className="p-12 md:p-16 self-end z-20">
          <span className="text-[10px] tracking-widest text-white font-bold bg-[#0b1f45]/70 border border-slate-700/50 px-3 py-1 rounded uppercase backdrop-blur-sm">
            ISO 9001 CERTIFIED
          </span>
        </div>

        {/* Stats bar */}
        <div className="z-20 bg-slate-950/85 border-t border-amber-600 grid grid-cols-2 md:grid-cols-4 print:grid-cols-4 divide-y md:divide-y-0 md:divide-x print:divide-y-0 print:divide-x divide-slate-800/50 text-center backdrop-blur-sm">
          <div className="py-5 px-2">
            <span className="block font-serif font-black text-xl md:text-2xl text-amber-500">120+</span>
            <span className="text-[8px] md:text-[9px] tracking-wider text-slate-400 uppercase">Ports Worldwide</span>
          </div>
          <div className="py-5 px-2">
            <span className="block font-serif font-black text-xl md:text-2xl text-amber-500">360°</span>
            <span className="text-[8px] md:text-[9px] tracking-wider text-slate-400 uppercase">Vessel Coverage</span>
          </div>
          <div className="py-5 px-2">
            <span className="block font-serif font-black text-xl md:text-2xl text-amber-500">100%</span>
            <span className="text-[8px] md:text-[9px] tracking-wider text-slate-400 uppercase">Digital Certified</span>
          </div>
          <div className="py-5 px-2">
            <span className="block font-serif font-black text-xl md:text-2xl text-amber-500">0</span>
            <span className="text-[8px] md:text-[9px] tracking-wider text-slate-400 uppercase">PSC Detentions</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   SLIDE 2 — WELCOME
═══════════════════════════════════════════════════════ */
function Slide2Welcome() {
  return (
    <div className="w-full min-h-full md:h-full bg-[#f5f3ef] text-slate-900 grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] print:grid-cols-[1.2fr_0.8fr] relative overflow-y-auto md:overflow-hidden">
      {/* Welcome content */}
      <div className="p-12 md:p-16 flex flex-col justify-between">
        <div>
          {/* Slide Header with Logo */}
          <div className="flex justify-between items-center border-b border-slate-300/60 pb-2 mb-4">
            <div className="flex items-center gap-2">
              <img src="/grclass-logo.webp" alt="GR Class" className="h-5 w-auto brightness-0" style={{ filter: "brightness(0)" }} />
              <span className="font-serif text-[11px] font-bold tracking-widest text-[#0b1f45] uppercase">
                GR <span className="text-amber-600">Class</span>
              </span>
            </div>
            <span className="text-[8px] font-mono tracking-widest text-slate-500 uppercase">
              Classified for Standards
            </span>
          </div>

          <div className="inline-block bg-[#0b1f45] text-amber-500 text-[8px] md:text-[9px] font-bold tracking-[0.25em] uppercase px-3 py-1 rounded mb-3">
            Welcome to GR Class
          </div>
          <h2 className="font-serif font-black text-3xl md:text-4xl text-[#0b1f45] leading-none uppercase">
            Leader's Message
          </h2>
          <div className="w-12 h-[2px] bg-amber-600 my-3"></div>

          <div className="space-y-4 text-xs md:text-sm font-normal text-slate-700 leading-relaxed max-w-[500px]">
            <p>
              As the lead representative at GR Class, I find the responsibilities and challenges in the marine safety and classification field to be truly inspiring.
            </p>
            <p>
              Our maritime industry is constantly evolving, requiring us to rapidly adapt to new regulations, complex environmental targets, and advanced digital technologies.
            </p>
            <p>
              The classification field is unique — it requires a deep understanding of marine structures, engineering safety, and the ability to verify technical compliances that withstand the harsh realities of the sea.
            </p>
            <p>
              This commitment drives us to work with values, ethics, and standards. We strive to be the trusted partner for shipowners and operators, delivering swift, reliable, and cost-effective services globally.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 border-t border-slate-300/80 pt-4">
          <div className="font-serif italic font-bold text-lg text-[#0b1f45]">
            GR Class Technical Board
          </div>
          <span className="text-[9px] tracking-wider text-slate-500 uppercase font-mono">
            Classified for Standards
          </span>
        </div>
      </div>

      {/* Image Block */}
      <div className="relative bg-slate-300 min-h-[250px] md:min-h-0 print:min-h-0">
        <img
          src={aboutSurveyor}
          alt="Surveyor"
          className="w-full h-full object-cover grayscale opacity-95 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f45]/90 via-transparent to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white z-10">
          <span className="block font-mono text-[9px] uppercase tracking-widest text-amber-500">
            Certified Surveyor
          </span>
          <span className="block font-serif text-lg font-bold">
            Maritime Inspections
          </span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   SLIDE 3 — WHO WE ARE
═══════════════════════════════════════════════════════ */
function Slide3WhoWeAre() {
  return (
    <div className="w-full min-h-full md:h-full bg-white text-slate-900 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] print:grid-cols-[1.1fr_0.9fr] relative overflow-y-auto md:overflow-hidden">
      {/* Left pane - Dark Background */}
      <div className="bg-[#0b1f45] text-white p-12 md:p-16 flex flex-col justify-between">
        <div>
          {/* Slide Header with Logo */}
          <div className="flex justify-between items-center border-b border-white/10 pb-2 mb-4">
            <div className="flex items-center gap-2">
              <img src="/grclass-logo.webp" alt="GR Class" className="h-5 w-auto brightness-0 invert" />
              <span className="font-serif text-[11px] font-bold tracking-widest text-white uppercase">
                GR <span className="text-amber-500">Class</span>
              </span>
            </div>
            <span className="text-[8px] font-mono tracking-widest text-slate-400 uppercase">
              Classified for Standards
            </span>
          </div>

          <div className="inline-block bg-white/10 text-amber-500 text-[8px] font-bold tracking-[0.25em] uppercase px-3 py-1 rounded mb-3">
            Corporate Profile
          </div>
          <h2 className="font-serif font-black text-3xl md:text-4xl leading-tight uppercase">
            Who<br />We Are
          </h2>
          <div className="w-12 h-[2px] bg-amber-500 my-3"></div>
          <p className="text-xs md:text-sm font-light text-slate-300 leading-relaxed">
            GR Class welcomes shipowners and operators for asset safety and compliances. We are a Recognized Organization (RO), Recognized Security Organization (RSO) and Classification Society (CS) authorized to offer statutory/class certification and services.
          </p>
        </div>

        {/* Fact Sheet */}
        <div className="space-y-2.5 border-t border-slate-800/80 pt-4">
          <div className="grid grid-cols-[80px_1fr] gap-2 text-[10px] md:text-xs">
            <span className="font-bold tracking-wider text-amber-500 uppercase">Type</span>
            <span className="text-slate-300">Classification Society</span>
          </div>
          <div className="grid grid-cols-[80px_1fr] gap-2 text-[10px] md:text-xs">
            <span className="font-bold tracking-wider text-amber-500 uppercase">Est</span>
            <span className="text-slate-300">2022</span>
          </div>
          <div className="grid grid-cols-[80px_1fr] gap-2 text-[10px] md:text-xs">
            <span className="font-bold tracking-wider text-amber-500 uppercase">HQ</span>
            <span className="text-slate-300">Ajman, UAE</span>
          </div>
          <div className="grid grid-cols-[80px_1fr] gap-2 text-[10px] md:text-xs">
            <span className="font-bold tracking-wider text-amber-500 uppercase">Compliance</span>
            <span className="text-slate-300">Digital-first Portals</span>
          </div>
        </div>
      </div>

      {/* Right pane - Image + Details */}
      <div className="relative flex flex-col justify-between bg-slate-900 text-white min-h-[300px] md:min-h-0 print:min-h-0">
        <img
          src={heroVessel}
          alt="Cargo vessel at port"
          className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent z-10"></div>

        <div className="p-12 md:p-16 relative z-20">
          <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] text-amber-500 mb-2">
            OVERVIEW
          </div>
          <h3 className="font-serif font-extrabold text-xl md:text-2xl text-white uppercase">
            A Globally Recognized Technical Authority
          </h3>
          <div className="w-12 h-[2px] bg-amber-500 my-4"></div>

          <div className="space-y-4 text-xs md:text-sm text-slate-300 leading-relaxed font-light">
            <p>
              GR Class serves as a trusted independent classification society for shipowners, shipbuilders, managers, and flag state administrations. We provide objective technical assessments backed by rigorous procedures and modern digital infrastructure.
            </p>
            <p>
              Our primary goal is to ensure the highest standards of safety, reliability, and environmental sustainability in the maritime industry. We classify newly built ships as well as existing vessels for continued safe operation.
            </p>
          </div>
        </div>

        {/* Quote Block overlay */}
        <div className="p-8 md:p-12 relative z-20 bg-slate-950/80 border-t border-slate-800 backdrop-blur-sm">
          <p className="font-serif italic text-xs md:text-sm text-amber-500 leading-relaxed">
            "We build trust with our customers through safety, ethics, and standards, lifting maritime classification to next-level excellence."
          </p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   SLIDE 4 — VISION / MISSION / VALUES
═══════════════════════════════════════════════════════ */
function Slide4VisionMission() {
  return (
    <div className="w-full min-h-full md:h-full bg-[#f5f3ef] text-slate-900 flex flex-col md:grid md:grid-rows-[1.2fr_1fr] print:grid print:grid-rows-[1.2fr_1fr] relative overflow-y-auto md:overflow-hidden">
      {/* Top half: Vision & Mission split */}
      <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 divide-y md:divide-y-0 md:divide-x print:divide-y-0 print:divide-x divide-slate-300/80 border-b border-slate-300/80">
        {/* Vision (Light) */}
        <div className="p-10 flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            {/* Slide Header with Logo */}
            <div className="flex justify-between items-center border-b border-slate-300/60 pb-2 mb-3">
              <div className="flex items-center gap-2">
                <img src="/grclass-logo.webp" alt="GR Class" className="h-5 w-auto brightness-0" style={{ filter: "brightness(0)" }} />
                <span className="font-serif text-[11px] font-bold tracking-widest text-[#0b1f45] uppercase">
                  GR <span className="text-amber-600">Class</span>
                </span>
              </div>
              <span className="text-[8px] font-mono tracking-widest text-slate-500 uppercase">
                Vision
              </span>
            </div>

            <div className="text-[9px] font-bold tracking-widest text-amber-600 uppercase mb-1">
              Our Direction
            </div>
            <h3 className="font-serif font-black text-2xl text-[#0b1f45] uppercase">
              Vision
            </h3>
            <div className="w-8 h-[2px] bg-amber-600 my-2"></div>
          </div>
          <p className="font-serif text-sm font-semibold italic text-[#0b1f45] leading-relaxed relative z-10">
            "To be the most trusted and technically rigorous Classification Society globally, providing digital-first maritime compliance solutions that empower shipowners and flag states across every voyage."
          </p>
        </div>

        {/* Mission (Dark Navy & Image Overlay) */}
        <div className="bg-[#0b1f45] text-white p-10 flex flex-col justify-between relative">
          <img
            src={careersHero}
            alt="Operations bridge"
            className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
          />
          <div className="relative z-10">
            {/* Slide Header with Logo */}
            <div className="flex justify-between items-center border-b border-white/10 pb-2 mb-3">
              <div className="flex items-center gap-2">
                <img src="/grclass-logo.webp" alt="GR Class" className="h-5 w-auto brightness-0 invert" />
                <span className="font-serif text-[11px] font-bold tracking-widest text-white uppercase">
                  GR <span className="text-amber-500">Class</span>
                </span>
              </div>
              <span className="text-[8px] font-mono tracking-widest text-slate-400 uppercase">
                Mission
              </span>
            </div>

            <div className="text-[9px] font-bold tracking-widest text-amber-500 uppercase mb-1">
              Our Purpose
            </div>
            <h3 className="font-serif font-black text-2xl text-white uppercase">
              Mission
            </h3>
            <div className="w-8 h-[2px] bg-amber-500 my-2"></div>
          </div>
          <ul className="space-y-1.5 text-[10px] md:text-[11px] font-light text-slate-300 relative z-10">
            <li className="flex gap-2">
              <span className="text-amber-500 font-bold">•</span>
              <span>Safeguard lives, property, and the marine environment.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-500 font-bold">•</span>
              <span>Deliver rapid, cost-effective, and standards-compliant statutory/class services.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-500 font-bold">•</span>
              <span>Provide robust, round-the-clock technical support to ship operators globally.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom half: Core Values */}
      <div className="p-10 flex flex-col justify-between bg-white">
        <div className="text-[9px] font-bold tracking-widest text-slate-400 uppercase mb-2">
          What We Stand For
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 print:grid-cols-4 gap-6">
          <div>
            <span className="block font-serif font-bold text-xs text-[#0b1f45] uppercase mb-1">
              1. Integrity & Ethics
            </span>
            <p className="text-[9.5px] md:text-[10px] leading-relaxed text-slate-500">
              Impartial, transparent, and standards-driven technical survey assessments.
            </p>
          </div>
          <div>
            <span className="block font-serif font-bold text-xs text-[#0b1f45] uppercase mb-1">
              2. Technical Excellence
            </span>
            <p className="text-[9.5px] md:text-[10px] leading-relaxed text-slate-500">
              Experienced surveyors, auditors, and engineering experts with decades of expertise.
            </p>
          </div>
          <div>
            <span className="block font-serif font-bold text-xs text-[#0b1f45] uppercase mb-1">
              3. Operational Speed
            </span>
            <p className="text-[9.5px] md:text-[10px] leading-relaxed text-slate-500">
              24/7 service availability to minimize fleet disruption and commercial delays.
            </p>
          </div>
          <div>
            <span className="block font-serif font-bold text-xs text-[#0b1f45] uppercase mb-1">
              4. Digital Innovation
            </span>
            <p className="text-[9.5px] md:text-[10px] leading-relaxed text-slate-500">
              Advanced technical infrastructure, secure vessel databases, and digital certificates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   SLIDE 5 — WHAT WE DO (TRANSITION SLIDE)
═══════════════════════════════════════════════════════ */
function Slide5WhatWeDoIntro() {
  return (
    <div className="w-full min-h-full md:h-full bg-[#0b1f45] text-white p-16 flex flex-col justify-between relative overflow-y-auto md:overflow-hidden">
      {/* Background container ship overlay */}
      <img
        src={heroVessel}
        alt="Cargo Vessel Background"
        className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
      />
      <div className="absolute inset-0 bg-[#0b1f45]/80 z-0"></div>

      <div className="flex justify-between items-center border-b border-white/10 pb-6 relative z-10">
        <div className="flex items-center gap-3">
          <img src="/grclass-logo.webp" alt="GR Class" className="h-8 w-auto brightness-0 invert" />
          <span className="font-serif text-lg font-black uppercase text-amber-500">GR Class</span>
        </div>
        <span className="text-[9px] font-mono tracking-widest text-slate-400">
          SECTION 02 / SERVICE CAPABILITIES
        </span>
      </div>

      <div className="my-auto max-w-[650px] relative z-10">
        <h2 className="font-serif font-black text-5xl md:text-6xl uppercase leading-none tracking-wide">
          What<br />
          <span className="text-amber-500 font-serif">We Do</span>
        </h2>
        <div className="w-16 h-[3px] bg-amber-500 my-6"></div>
        <p className="text-xs md:text-sm font-light text-slate-300 leading-relaxed">
          GR Class delivers comprehensive statutory, classification, environmental, and compliance support services. We assist shipowners and operators in maintaining safety, structural integrity, and regulatory compliance throughout the lifecycle of their marine assets.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 print:grid-cols-4 gap-4 border-t border-white/10 pt-6 relative z-10">
        <div>
          <span className="block font-serif font-black text-xl text-amber-500">01</span>
          <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Classification</span>
        </div>
        <div>
          <span className="block font-serif font-black text-xl text-amber-500">02</span>
          <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Statutory</span>
        </div>
        <div>
          <span className="block font-serif font-black text-xl text-amber-500">03</span>
          <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Environmental</span>
        </div>
        <div>
          <span className="block font-serif font-black text-xl text-amber-500">04</span>
          <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Advisory Support</span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   SLIDE 6 — CLASSIFICATION SERVICES
═══════════════════════════════════════════════════════ */
function Slide6Classification() {
  return (
    <div className="w-full min-h-full md:h-full bg-[#f5f3ef] text-slate-900 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] print:grid-cols-[1.1fr_0.9fr] relative overflow-y-auto md:overflow-hidden">
      {/* Classification details */}
      <div className="p-10 flex flex-col justify-between">
        <div>
          {/* Slide Header with Logo */}
          <div className="flex justify-between items-center border-b border-slate-300/60 pb-2 mb-4">
            <div className="flex items-center gap-2">
              <img src="/grclass-logo.webp" alt="GR Class" className="h-5 w-auto brightness-0" style={{ filter: "brightness(0)" }} />
              <span className="font-serif text-[11px] font-bold tracking-widest text-[#0b1f45] uppercase">
                GR <span className="text-amber-600">Class</span>
              </span>
            </div>
            <span className="text-[8px] font-mono tracking-widest text-slate-500 uppercase">
              Classified for Standards
            </span>
          </div>

          <div className="text-[9px] font-bold tracking-widest text-amber-600 uppercase mb-1">
            SERVICE CATEGORY 01
          </div>
          <h2 className="font-serif font-black text-3xl text-[#0b1f45] uppercase">
            Classification Services
          </h2>
          <div className="w-12 h-[2px] bg-amber-600 my-3"></div>
          <p className="text-xs text-slate-600 leading-relaxed mb-4">
            We ensure vessels and assets maintain structural integrity, machinery reliability, and technical compliance throughout their lifecycle.
          </p>

          {/* Core sub-services grid */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-4">
            <div className="bg-white p-2.5 shadow-sm rounded border-l-2 border-amber-500">
              <span className="block text-xs font-bold text-[#0b1f45] uppercase text-[11px]">Fleet in Services</span>
              <p className="text-[9px] text-slate-500 mt-1 leading-normal">
                Periodic, annual, intermediate, and special surveys to verify tech standards.
              </p>
            </div>
            <div className="bg-white p-2.5 shadow-sm rounded border-l-2 border-amber-500">
              <span className="block text-xs font-bold text-[#0b1f45] uppercase text-[11px]">New Construction</span>
              <p className="text-[9px] text-slate-500 mt-1 leading-normal">
                From concept plan approval to construction supervision and delivery.
              </p>
            </div>
            <div className="bg-white p-2.5 shadow-sm rounded border-l-2 border-amber-500">
              <span className="block text-xs font-bold text-[#0b1f45] uppercase text-[11px]">Transfer of Class</span>
              <p className="text-[9px] text-slate-500 mt-1 leading-normal">
                Smooth, cost-effective entry process with minimal operational disruption.
              </p>
            </div>
            <div className="bg-white p-2.5 shadow-sm rounded border-l-2 border-amber-500">
              <span className="block text-xs font-bold text-[#0b1f45] uppercase text-[11px]">Yacht & Offshore</span>
              <p className="text-[9px] text-slate-500 mt-1 leading-normal">
                Rule development, design reviews for yachts, oil rigs, MODUs, and FPSOs.
              </p>
            </div>
          </div>
        </div>

        <div className="text-[9px] text-slate-400 font-mono flex items-center gap-2 border-t border-slate-300 pt-3">
          <CheckCircle2 className="h-3.5 w-3.5 text-amber-500" />
          <span>Includes Conversion Projects & Approval of structural drawings</span>
        </div>
      </div>

      {/* Side Image & Conversion Highlight */}
      <div className="bg-[#0b1f45] text-white p-10 flex flex-col justify-between relative min-h-[250px] md:min-h-0 print:min-h-0">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img src={svcFleet} alt="Vessel Survey" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10">
          <h3 className="font-serif font-bold text-lg text-amber-500 uppercase mb-3">
            Entry Survey Requirements
          </h3>
          <p className="text-[10.5px] font-light text-slate-300 leading-relaxed mb-4">
            To commence the class admission process, the following ship documents must be transmitted to GR Class:
          </p>
          <ul className="space-y-1 text-[9.5px] text-slate-300">
            <li className="flex items-center gap-2">
              <Check className="h-3.5 w-3.5 text-amber-500 flex-shrink-0" />
              <span>Updated ship survey status & recommendations</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-3.5 w-3.5 text-amber-500 flex-shrink-0" />
              <span>Copies of existing class & statutory certs</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-3.5 w-3.5 text-amber-500 flex-shrink-0" />
              <span>Registry papers & main plans (GA, Midship)</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-3.5 w-3.5 text-amber-500 flex-shrink-0" />
              <span>Trim & stability booklet & thickness logs</span>
            </li>
          </ul>
        </div>

        {/* Highlight box */}
        <div className="relative z-10 bg-slate-900/80 p-4 border border-slate-800 rounded">
          <span className="text-[9px] font-bold uppercase tracking-wider text-amber-500 block mb-1">
            Conversion Projects
          </span>
          <p className="text-[9.5px] text-slate-400 leading-normal">
            We handle a 4-stage process: Feasibility & Basic Design Approval, Fabrication & Modification Survey, Commissioning & trials, and Recertification.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   SLIDE 7 — STATUTORY SERVICES
═══════════════════════════════════════════════════════ */
function Slide7Statutory() {
  return (
    <div className="w-full min-h-full md:h-full bg-[#0b1f45] text-white p-12 flex flex-col justify-between relative overflow-y-auto md:overflow-hidden">
      {/* Background icon */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img src={svcSolas} alt="Solas certification" className="w-full h-full object-cover" />
      </div>

      {/* Slide Header with Logo */}
      <div className="flex justify-between items-center border-b border-white/10 pb-2 mb-4 relative z-10">
        <div className="flex items-center gap-2">
          <img src="/grclass-logo.webp" alt="GR Class" className="h-5 w-auto brightness-0 invert" />
          <span className="font-serif text-[11px] font-bold tracking-widest text-white uppercase">
            GR <span className="text-amber-500">Class</span>
          </span>
        </div>
        <span className="text-[8px] font-mono tracking-widest text-slate-400 uppercase">
          Classified for Standards
        </span>
      </div>

      {/* Header */}
      <div className="flex justify-between items-start pb-4 relative z-10">
        <div>
          <div className="text-[9px] font-bold tracking-widest text-amber-500 uppercase mb-1">
            SERVICE CATEGORY 02
          </div>
          <h2 className="font-serif font-black text-3xl uppercase">
            Statutory Services
          </h2>
        </div>
        <div className="bg-slate-800 border border-slate-700 px-4 py-1.5 rounded text-[10px] text-slate-300 font-semibold">
          Flag State Delegations
        </div>
      </div>

      {/* Main Content: Info & Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] print:grid-cols-[1fr_1.2fr] gap-8 my-auto relative z-10">
        <div className="flex flex-col justify-center">
          <p className="text-xs text-slate-300 leading-relaxed mb-4">
            GR Class is fully authorized by Flag Administrations to perform technical surveys and inspections, and issue statutory certificates in accordance with international conventions and codes.
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="mt-1 p-1 bg-amber-500/10 text-amber-500 rounded">
                <Shield className="h-4 w-4" />
              </div>
              <div>
                <span className="block text-xs font-bold text-white uppercase">SOLAS</span>
                <p className="text-[9.5px] text-slate-400">Cargo Ship Safety Construction, Equipment, and Radio surveys.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 p-1 bg-amber-500/10 text-amber-500 rounded">
                <Globe className="h-4 w-4" />
              </div>
              <div>
                <span className="block text-xs font-bold text-white uppercase">MARPOL</span>
                <p className="text-[9.5px] text-slate-400">Oil pollution, sewage prevention, air emissions (Annex I - VI).</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 p-1 bg-amber-500/10 text-amber-500 rounded">
                <Anchor className="h-4 w-4" />
              </div>
              <div>
                <span className="block text-xs font-bold text-white uppercase">Load Line & Tonnage</span>
                <p className="text-[9.5px] text-slate-400">Freeboard assignments and International Tonnage (ITC 69) calculations.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certificate list display (mocking page 91 list) */}
        <div className="bg-slate-950/70 border border-slate-800 p-4 rounded-lg flex flex-col justify-between backdrop-blur-sm">
          <span className="text-[9px] font-bold uppercase tracking-wider text-amber-500 block mb-2">
            Principal Authorizations Include
          </span>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[9px] text-slate-300">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              <span>Safety Construction (CCC)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              <span>Safety Equipment (CEC)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              <span>Safety Radio (CRC)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              <span>International Load Line (LL)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              <span>Tonnage Cert (ITC 69)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              <span>Oil Pollution (IOPP)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              <span>ISM Code Verification</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              <span>ISPS Code (ISSC)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              <span>Maritime Labor (MLC 2006)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              <span>Energy Efficiency (IEEC)</span>
            </div>
          </div>
          <span className="block text-[8px] text-slate-500 mt-3 border-t border-slate-900 pt-2 font-mono">
            * Complete list of 36 statutory certifications is fully delegated & managed.
          </span>
        </div>
      </div>

      {/* Footer metadata */}
      <div className="text-[9px] text-slate-500 font-mono relative z-10">
        GR CLASS — Classified for Standards
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   SLIDE 8 — ENVIRONMENTAL SERVICES
═══════════════════════════════════════════════════════ */
function Slide8Environmental() {
  return (
    <div className="w-full min-h-full md:h-full bg-[#f5f3ef] text-slate-900 p-12 flex flex-col justify-between relative overflow-y-auto md:overflow-hidden">
      {/* Slide Header with Logo */}
      <div className="flex justify-between items-center border-b border-slate-300/60 pb-2 mb-4">
        <div className="flex items-center gap-2">
          <img src="/grclass-logo.webp" alt="GR Class" className="h-5 w-auto brightness-0" style={{ filter: "brightness(0)" }} />
          <span className="font-serif text-[11px] font-bold tracking-widest text-[#0b1f45] uppercase">
            GR <span className="text-amber-600">Class</span>
          </span>
        </div>
        <span className="text-[8px] font-mono tracking-widest text-slate-500 uppercase">
          Classified for Standards
        </span>
      </div>

      {/* Header */}
      <div className="flex justify-between items-start pb-4">
        <div>
          <div className="text-[9px] font-bold tracking-widest text-amber-600 uppercase mb-1">
            SERVICE CATEGORY 03
          </div>
          <h2 className="font-serif font-black text-3xl text-[#0b1f45] uppercase">
            Environmental Services
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <Activity className="h-4 w-4 text-emerald-600" />
          <span className="text-[10px] text-slate-600 font-semibold">Green Shipping & Decarbonization</span>
        </div>
      </div>

      {/* Content Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 print:grid-cols-3 gap-6 my-auto">
        {/* Ballast Water & IHM */}
        <div className="bg-white p-4 shadow-sm border-t-3 border-[#0b1f45] rounded flex flex-col justify-between min-h-[260px] relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-24 h-24 opacity-10 pointer-events-none">
            <img src={svcBallastWater} alt="Ballast Water" className="w-full h-full object-contain" />
          </div>
          <div className="relative z-10">
            <span className="block font-serif font-bold text-sm text-[#0b1f45] uppercase">
              BWM & Ship Recycling
            </span>
            <p className="text-[10px] text-slate-600 mt-2 leading-relaxed">
              Assisting owners in meeting the IMO Ballast Water Convention. Drawing BWM plans, certifying treatment systems. Providing IHM assessments and certification under Hong Kong Convention and EU Ship Recycling Regulation (EU SRR).
            </p>
          </div>
          <span className="text-[8px] font-bold uppercase text-amber-600 relative z-10">IMO & EU SRR Compliant</span>
        </div>

        {/* EEDI / EEXI / CII */}
        <div className="bg-white p-4 shadow-sm border-t-3 border-amber-500 rounded flex flex-col justify-between min-h-[260px] relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-24 h-24 opacity-10 pointer-events-none">
            <img src={svcEnergyEfficiency} alt="Energy Efficiency" className="w-full h-full object-contain" />
          </div>
          <div className="relative z-10">
            <span className="block font-serif font-bold text-sm text-[#0b1f45] uppercase">
              Energy Efficiency
            </span>
            <p className="text-[10px] text-slate-600 mt-2 leading-relaxed">
              Full suite support under MARPOL Annex VI:
            </p>
            <ul className="text-[9.5px] text-slate-500 mt-1.5 space-y-1">
              <li>• **EEDI**: Carbon efficiency check for newbuilds</li>
              <li>• **EEXI**: Compliance index calculations for older vessels</li>
              <li>• **CII**: Carbon Intensity ratings (A - E grades)</li>
              <li>• **SEEMP III**: Action plans to reach carbon reduction</li>
            </ul>
          </div>
          <span className="text-[8px] font-bold uppercase text-amber-600 relative z-10">Decarbonization Pathways</span>
        </div>

        {/* EU MRV & ERS */}
        <div className="bg-white p-4 shadow-sm border-t-3 border-[#0b1f45] rounded flex flex-col justify-between min-h-[260px]">
          <div>
            <span className="block font-serif font-bold text-sm text-[#0b1f45] uppercase">
              EU MRV & ERS
            </span>
            <p className="text-[10px] text-slate-600 mt-2 leading-relaxed">
              **EU MRV compliance** support (Monitoring Plan assessment, emissions report checks) for ships over 400 GT calling EU ports.
              <br /><br />
              **Vessel Emergency Response Service (ERS)**: 24/7 computer stability & strength calculations in case of vessel damage or grounding.
            </p>
          </div>
          <span className="text-[8px] font-bold uppercase text-amber-600">24/7 ERS Critical Support</span>
        </div>
      </div>

      {/* Footer */}
      <div className="text-[9px] text-slate-400 font-mono">
        GR CLASS — Classified for Standards
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   SLIDE 9 — COMPLIANCE & OTHER SUPPORT
═══════════════════════════════════════════════════════ */
function Slide9ComplianceOther() {
  return (
    <div className="w-full min-h-full md:h-full bg-[#0b1f45] text-white p-12 flex flex-col justify-between relative overflow-y-auto md:overflow-hidden">
      {/* Slide Header with Logo */}
      <div className="flex justify-between items-center border-b border-white/10 pb-2 mb-4 relative z-10">
        <div className="flex items-center gap-2">
          <img src="/grclass-logo.webp" alt="GR Class" className="h-5 w-auto brightness-0 invert" />
          <span className="font-serif text-[11px] font-bold tracking-widest text-white uppercase">
            GR <span className="text-amber-500">Class</span>
          </span>
        </div>
        <span className="text-[8px] font-mono tracking-widest text-slate-400 uppercase">
          Classified for Standards
        </span>
      </div>

      {/* Header */}
      <div className="flex justify-between items-start pb-4">
        <div>
          <div className="text-[9px] font-bold tracking-widest text-amber-500 uppercase mb-1">
            SERVICE CATEGORY 04
          </div>
          <h2 className="font-serif font-black text-3xl uppercase">
            Compliance &amp; Remote Support
          </h2>
        </div>
        <span className="text-[10px] text-slate-400 font-mono">Port State Control & Remote Surveys</span>
      </div>

      {/* Columns */}
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] print:grid-cols-[1.1fr_0.9fr] gap-8 my-auto">
        <div className="space-y-4">
          <div>
            <span className="block text-xs font-bold text-amber-500 uppercase mb-1">
              Port State Control (PSC)
            </span>
            <p className="text-[10.5px] text-slate-300 leading-relaxed">
              Recognizing the critical nature of PSC, we collaborate closely with Flag States and ship operators to improve fleets' records. We assist with **PSC pre-arrival checklists**, sharing detention prevention actions, and compliance with the latest Regional MOUs (Paris MoU, Tokyo MoU).
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="w-20 h-20 rounded overflow-hidden border border-slate-700/80 flex-shrink-0">
              <img src={whyPort} alt="Port State" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="block text-xs font-bold text-amber-500 uppercase mb-1">
                Technical Advisory Services
              </span>
              <p className="text-[10.5px] text-slate-300 leading-normal">
                We provide expert marine engineering consultancy, operational optimization, and risk mitigation to help vessels operate safely with reduced cost.
              </p>
            </div>
          </div>
        </div>

        {/* Remote Surveys card */}
        <div className="bg-slate-950/40 border border-slate-800 p-4 rounded flex flex-col justify-between">
          <div>
            <span className="block text-xs font-bold text-white uppercase mb-2">
              Remote Survey Solutions
            </span>
            <p className="text-[10px] text-slate-400 leading-relaxed mb-3">
              We execute remote inspections to support operational continuity where onboard access is restricted or unavailable:
            </p>
            <ul className="space-y-1 text-[9.5px] text-slate-300">
              <li className="flex gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-amber-500 flex-shrink-0" />
                <span>Occasional surveys between scheduled periods</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-amber-500 flex-shrink-0" />
                <span>Documentation-based remote approvals</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-amber-500 flex-shrink-0" />
                <span>Verification of minor deficiencies rectification</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-amber-500 flex-shrink-0" />
                <span>Interim audits for ISM, ISPS, &amp; MLC</span>
              </li>
            </ul>
          </div>
          <span className="block text-[8px] text-slate-500 mt-2 font-mono">
            * Subject to pertinent Flag Administration authorization.
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="text-[9px] text-slate-500 font-mono">
        GR CLASS — Classified for Standards
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   SLIDE 10 — PLAN APPROVAL & CLASS ENTRY
═══════════════════════════════════════════════════════ */
function Slide10PlanApproval() {
  return (
    <div className="w-full min-h-full md:h-full bg-[#f5f3ef] text-slate-900 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] print:grid-cols-[1.1fr_0.9fr] p-12 relative overflow-y-auto md:overflow-hidden">
      {/* Left Column: Plan Approval details */}
      <div className="flex flex-col justify-between h-full">
        {/* Slide Header with Logo */}
        <div className="flex justify-between items-center border-b border-slate-300/60 pb-2 mb-4">
          <div className="flex items-center gap-2">
            <img src="/grclass-logo.webp" alt="GR Class" className="h-5 w-auto brightness-0" style={{ filter: "brightness(0)" }} />
            <span className="font-serif text-[11px] font-bold tracking-widest text-[#0b1f45] uppercase">
              GR <span className="text-amber-600">Class</span>
            </span>
          </div>
          <span className="text-[8px] font-mono tracking-widest text-slate-500 uppercase">
            Classified for Standards
          </span>
        </div>

        <div>
          <div className="text-[9px] font-bold tracking-widest text-amber-600 uppercase mb-1">
            PROCESS OVERVIEW
          </div>
          <h2 className="font-serif font-black text-3xl text-[#0b1f45] uppercase">
            Plan Approval &amp; Admission
          </h2>
          <div className="w-12 h-[2px] bg-amber-600 my-3"></div>
          
          <div className="space-y-4">
            <div>
              <span className="block text-xs font-bold text-[#0b1f45] uppercase mb-1">
                Plan Approval Process
              </span>
              <p className="text-[10px] text-slate-600 leading-relaxed">
                Before construction or modification of a vessel, our technical office verifies structural plans and layout details:
              </p>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="bg-white p-2 shadow-sm rounded border-l-2 border-[#0b1f45]">
                  <span className="block text-[9px] font-bold text-[#0b1f45]">Key Plans</span>
                  <span className="text-[8.5px] text-slate-500 block mt-0.5">GA blueprint, Midship, Shell expansion.</span>
                </div>
                <div className="bg-white p-2 shadow-sm rounded border-l-2 border-[#0b1f45]">
                  <span className="block text-[9px] font-bold text-[#0b1f45]">Safety & Systems</span>
                  <span className="text-[8.5px] text-slate-500 block mt-0.5">Fire control, LSA, fuel/ballast piping layouts.</span>
                </div>
              </div>
            </div>

            <div>
              <span className="block text-xs font-bold text-[#0b1f45] uppercase mb-1">
                Manual Approvals & calculations
              </span>
              <p className="text-[9.5px] text-slate-600 leading-normal">
                We review and approve critical marine manuals:
              </p>
              <div className="flex flex-wrap gap-1 mt-1.5">
                <span className="bg-slate-200 text-[#0b1f45] text-[8px] font-bold px-2 py-0.5 rounded">SOPEP / SMPEP</span>
                <span className="bg-slate-200 text-[#0b1f45] text-[8px] font-bold px-2 py-0.5 rounded">BWMP (Ballast)</span>
                <span className="bg-slate-200 text-[#0b1f45] text-[8px] font-bold px-2 py-0.5 rounded">Garbage Plan</span>
                <span className="bg-slate-200 text-[#0b1f45] text-[8px] font-bold px-2 py-0.5 rounded">Fire Control</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-[9px] text-slate-400 font-mono">
          GR CLASS — Classified for Standards
        </div>
      </div>

      {/* Right Column: Admission Card + Visual Blueprint */}
      <div className="bg-[#0b1f45] text-white p-6 rounded-lg border border-slate-700 flex flex-col justify-between relative overflow-hidden h-full min-h-[300px] md:min-h-0 print:min-h-0">
        {/* Schematic background watermark */}
        <img
          src={svcPlanApproval}
          alt="Technical Drawing Blueprint"
          className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
        />
        <div className="absolute inset-0 bg-[#0b1f45]/90 z-0"></div>

        <div className="relative z-10">
          <span className="block text-xs font-bold text-amber-500 uppercase mb-2">
            Vessel Admission to Class
          </span>
          <p className="text-[10px] text-slate-300 leading-relaxed mb-3">
            Application to GR Class is a smooth process. Owners can submit entry requests directly. We will:
          </p>
          <ol className="space-y-2 text-[9px] text-slate-300 font-light">
            <li className="flex gap-2">
              <span className="text-amber-500 font-bold">1.</span>
              <span>Obtain survey and cert history from the losing society.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-500 font-bold">2.</span>
              <span>Review registry documents & stability booklets.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-500 font-bold">3.</span>
              <span>Coordinate vessel attendance to minimize disruption to voyages.</span>
            </li>
          </ol>
        </div>
        <div className="relative z-10 bg-slate-900/80 p-2.5 rounded border border-slate-800 text-[8.5px] text-slate-400 leading-normal font-medium mt-3">
          Statutory certificates are issued on behalf of Flag States following completion of applicable technical surveys.
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   SLIDE 11 — HOW WE CONNECT (SECTION DIVIDER)
═══════════════════════════════════════════════════════ */
function Slide11HowWeConnect() {
  return (
    <div className="w-full min-h-full md:h-full bg-[#0b1f45] text-white p-16 flex flex-col justify-between relative overflow-y-auto md:overflow-hidden">
      <img
        src={careersHero}
        alt="Maritime operations background"
        className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
      />
      <div className="absolute inset-0 bg-[#0b1f45]/80 z-0"></div>

      <div className="flex justify-between items-center border-b border-white/10 pb-6 relative z-10">
        <div className="flex items-center gap-3">
          <img src="/grclass-logo.webp" alt="GR Class" className="h-8 w-auto brightness-0 invert" />
          <span className="font-serif text-lg font-black uppercase text-amber-500">GR Class</span>
        </div>
        <span className="text-[9px] font-mono tracking-widest text-slate-400">
          SECTION 03 / GR CLASS SOFTWARE
        </span>
      </div>

      <div className="my-auto max-w-[650px] relative z-10">
        <h2 className="font-serif font-black text-5xl md:text-6xl uppercase leading-none tracking-wide">
          How<br />
          <span className="text-amber-500 font-serif">We Connect</span>
        </h2>
        <div className="w-16 h-[3px] bg-amber-500 my-6"></div>
        <p className="text-xs md:text-sm font-light text-slate-300 leading-relaxed">
          GR Class Software is our proprietary operations platform — built exclusively for classification surveys, statutory services, and compliance workflows. Shipowners, surveyors, and GR Class teams work on one connected system at{" "}
          <span className="text-amber-500 font-semibold">{site.ops.replace("https://", "")}</span>.
        </p>
        <p className="text-[10px] md:text-xs font-medium text-amber-500/90 leading-relaxed mt-4">
          Maritime expertise + our own software = faster surveys, faster certificates, less waiting.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 pt-6 relative z-10">
        <div>
          <Cpu className="h-4 w-4 text-amber-500 mb-1" />
          <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Client Portal</span>
        </div>
        <div>
          <Smartphone className="h-4 w-4 text-amber-500 mb-1" />
          <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Surveyor App</span>
        </div>
        <div>
          <Layers className="h-4 w-4 text-amber-500 mb-1" />
          <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Operations Dashboard</span>
        </div>
        <div>
          <Zap className="h-4 w-4 text-amber-500 mb-1" />
          <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Fast Turnaround</span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   SLIDE 12 — GR CLASS SOFTWARE IN ACTION
═══════════════════════════════════════════════════════ */
function Slide12SoftwareInAction() {
  const steps = [
    {
      num: "01",
      title: "Service / Job Request",
      desc: "Client submits via portal — informal service requests convert to formal certification jobs.",
    },
    {
      num: "02",
      title: "Document Upload & Verification",
      desc: "Mandatory documents uploaded digitally; TO and GM verify in-system before approval.",
    },
    {
      num: "03",
      title: "Surveyor Assignment & Authorization",
      desc: "GM assigns surveyor per certificate; TM authorizes survey before field work begins.",
    },
    {
      num: "04",
      title: "Field Survey (Surveyor App)",
      desc: "GPS-verified check-in, auto-filled checklists, photo evidence — works offline in port & syncs instantly.",
    },
    {
      num: "05",
      title: "Technical Review",
      desc: "Office reviews same-day digital report; client sees live status — no phone calls to chase updates.",
    },
    {
      num: "06",
      title: "Certificate Issue & Download",
      desc: "Auto-generated certificate PDF — client downloads instantly from portal when approved.",
    },
  ];

  const features = [
    { icon: Zap, label: "Request to surveyor dispatch — hours, not days" },
    { icon: Activity, label: "Live status & push notifications" },
    { icon: FileText, label: "Auto-prefilled checklists per vessel" },
    { icon: Shield, label: "Secure document vault & audit trail" },
    { icon: CheckCircle2, label: "Instant certificate download" },
  ];

  return (
    <div className="w-full min-h-full md:h-full bg-[#f5f3ef] text-slate-900 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] print:grid-cols-[1.1fr_0.9fr] p-12 relative overflow-y-auto md:overflow-hidden">
      <div className="flex flex-col justify-between h-full pr-0 md:pr-6">
        <div className="flex justify-between items-center border-b border-slate-300/60 pb-2 mb-4">
          <div className="flex items-center gap-2">
            <img src="/grclass-logo.webp" alt="GR Class" className="h-5 w-auto brightness-0" style={{ filter: "brightness(0)" }} />
            <span className="font-serif text-[11px] font-bold tracking-widest text-[#0b1f45] uppercase">
              GR <span className="text-amber-600">Class</span>
            </span>
          </div>
          <span className="text-[8px] font-mono tracking-widest text-slate-500 uppercase">
            Classified for Standards
          </span>
        </div>

        <div>
          <div className="text-[9px] font-bold tracking-widest text-amber-600 uppercase mb-1">
            PLATFORM WORKFLOW
          </div>
          <h2 className="font-serif font-black text-2xl md:text-3xl text-[#0b1f45] uppercase leading-tight">
            From Request to Certificate — Digitally
          </h2>
          <div className="w-12 h-[2px] bg-amber-600 my-3"></div>

          <div className="space-y-2.5">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-3 items-start">
                <span className="font-serif font-black text-sm text-amber-600 flex-shrink-0 w-6">{step.num}</span>
                <div>
                  <span className="block text-[10px] font-bold text-[#0b1f45] uppercase">{step.title}</span>
                  <p className="text-[9px] text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-[9px] text-slate-400 font-mono mt-4">
          GR CLASS — Classified for Standards
        </div>
      </div>

      <div className="bg-[#0b1f45] text-white p-6 rounded-lg border border-slate-700 flex flex-col justify-between relative overflow-hidden h-full min-h-[300px] md:min-h-0 print:min-h-0 mt-6 md:mt-0">
        <img
          src={svcCert}
          alt="Digital certification"
          className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
        />
        <div className="absolute inset-0 bg-[#0b1f45]/90 z-0"></div>

        <div className="relative z-10">
          <span className="block text-xs font-bold text-amber-500 uppercase mb-2">
            GR Class Software
          </span>
          <p className="text-[10px] text-slate-300 leading-relaxed mb-4">
            One integrated platform connecting shipowners, surveyors, and GR Class operations — accessible at{" "}
            <span className="text-amber-500 font-semibold">{site.ops.replace("https://", "")}</span>.
          </p>

          <div className="space-y-2.5">
            {features.map((feat) => (
              <div key={feat.label} className="flex items-center gap-2.5 bg-slate-900/50 border border-slate-800 p-2.5 rounded">
                <feat.icon className="h-3.5 w-3.5 text-amber-500 flex-shrink-0" />
                <span className="text-[9px] text-slate-300">{feat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 bg-slate-900/80 p-2.5 rounded border border-slate-800 text-[8.5px] text-slate-400 leading-normal font-medium mt-3">
          No paper chase. No courier delays. Every step digital, logged, and visible — from first request to issued certificate.
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   SLIDE 13 — SURVEYOR MOBILE APP
═══════════════════════════════════════════════════════ */
function Slide13SurveyorApp() {
  const appFeatures = [
    {
      icon: Compass,
      title: "GPS Check-In",
      desc: "Verified on-site presence at vessel — survey starts only when surveyor is at location.",
    },
    {
      icon: WifiOff,
      title: "Offline Surveys",
      desc: "Works in ports & shipyards with poor signal. Data syncs automatically when back online.",
    },
    {
      icon: FileText,
      title: "Auto Checklists",
      desc: "Pre-filled for certificate type & vessel data — no waiting for paper forms to arrive.",
    },
    {
      icon: Activity,
      title: "Photo Evidence",
      desc: "Capture deck photos & upload directly — evidence reaches office in real time.",
    },
    {
      icon: Smartphone,
      title: "Live Dispatch",
      desc: "Job alerts, in-app chat with office, and instant rework feedback — no email back-and-forth.",
    },
    {
      icon: Zap,
      title: "Same-Day Submit",
      desc: "Digital survey report to office the same day — field work done, review starts immediately.",
    },
  ];

  return (
    <div className="w-full min-h-full md:h-full bg-[#f5f3ef] text-slate-900 grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] print:grid-cols-[0.9fr_1.1fr] relative overflow-y-auto md:overflow-hidden">
      {/* Left — hero panel */}
      <div className="bg-[#0b1f45] text-white p-10 flex flex-col justify-between relative min-h-[320px] md:min-h-0 print:min-h-0">
        <img
          src={aboutSurveyor}
          alt="Surveyor at work"
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        />
        <div className="absolute inset-0 bg-[#0b1f45]/85 z-0"></div>

        <div className="relative z-10">
          <div className="flex justify-between items-center border-b border-white/10 pb-2 mb-4">
            <div className="flex items-center gap-2">
              <img src="/grclass-logo.webp" alt="GR Class" className="h-5 w-auto brightness-0 invert" />
              <span className="font-serif text-[11px] font-bold tracking-widest text-white uppercase">
                GR <span className="text-amber-500">Class</span>
              </span>
            </div>
            <span className="text-[8px] font-mono tracking-widest text-slate-400 uppercase">
              Classified for Standards
            </span>
          </div>

          <div className="text-[9px] font-bold tracking-widest text-amber-500 uppercase mb-1">
            FIELD OPERATIONS
          </div>
          <h2 className="font-serif font-black text-2xl md:text-3xl uppercase leading-tight">
            Surveyor<br />
            <span className="text-amber-500">Mobile App</span>
          </h2>
          <div className="w-12 h-[2px] bg-amber-500 my-3"></div>
          <p className="text-[10px] text-slate-300 leading-relaxed">
            Our surveyors carry GR Class in their pocket. GPS-verified surveys, offline checklists, and instant digital reports — built for speed at sea and in port.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-3 gap-2 mt-4 border-t border-white/10 pt-4">
          <div className="text-center">
            <span className="block font-serif font-black text-xl text-amber-500">GPS</span>
            <span className="text-[7.5px] font-bold uppercase tracking-wider text-slate-400">Verified</span>
          </div>
          <div className="text-center border-x border-white/10">
            <span className="block font-serif font-black text-xl text-amber-500">12+</span>
            <span className="text-[7.5px] font-bold uppercase tracking-wider text-slate-400">Languages</span>
          </div>
          <div className="text-center">
            <span className="block font-serif font-black text-xl text-amber-500">24/7</span>
            <span className="text-[7.5px] font-bold uppercase tracking-wider text-slate-400">Sync</span>
          </div>
        </div>
      </div>

      {/* Right — feature grid */}
      <div className="p-10 flex flex-col justify-between">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {appFeatures.map((feat) => (
            <div key={feat.title} className="bg-white border border-slate-200 p-3 rounded shadow-sm">
              <feat.icon className="h-3.5 w-3.5 text-amber-600 mb-1.5" />
              <span className="block text-[10px] font-bold text-[#0b1f45] uppercase mb-0.5">{feat.title}</span>
              <p className="text-[9px] text-slate-600 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#0b1f45]/5 border border-slate-200 rounded p-3 mt-4">
          <span className="block text-[9px] font-bold text-amber-600 uppercase mb-1">Why we are faster</span>
          <p className="text-[9.5px] text-slate-600 leading-relaxed">
            Traditional societies rely on paper, phone calls, and manual data entry. GR Class surveyors complete digital checklists on-site, submit the same day, and the office reviews immediately — cutting weeks off every survey cycle.
          </p>
        </div>

        <div className="text-[9px] text-slate-400 font-mono mt-3">
          GR CLASS — Classified for Standards
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   SLIDE 14 — WHY WE'RE DIFFERENT
═══════════════════════════════════════════════════════ */
function Slide14WhyDifferent() {
  const comparisons = [
    {
      num: "01",
      traditional: "Email / phone to request a survey",
      grClass: "Self-service portal — submit 24/7, track live",
    },
    {
      num: "02",
      traditional: "Days to dispatch a surveyor",
      grClass: "Same-day assignment & authorization",
    },
    {
      num: "03",
      traditional: "Paper checklists sent by courier",
      grClass: "Auto-generated checklists on surveyor app",
    },
    {
      num: "04",
      traditional: "Survey report posted days later",
      grClass: "Digital report submitted same day from vessel",
    },
    {
      num: "05",
      traditional: "Weeks waiting for certificate",
      grClass: "Instant download when approved",
    },
    {
      num: "06",
      traditional: "Multiple vendors, no single view",
      grClass: "One system — client, surveyor & office connected",
    },
  ];

  return (
    <div className="w-full min-h-full md:h-full bg-[#0b1f45] text-white p-12 flex flex-col justify-between relative overflow-y-auto md:overflow-hidden">
      <img
        src={whyPort}
        alt="Port operations background"
        className="absolute inset-0 w-full h-full object-cover opacity-5 pointer-events-none"
      />

      <div className="flex justify-between items-center border-b border-white/10 pb-2 mb-4 relative z-10">
        <div className="flex items-center gap-2">
          <img src="/grclass-logo.webp" alt="GR Class" className="h-5 w-auto brightness-0 invert" />
          <span className="font-serif text-[11px] font-bold tracking-widest text-white uppercase">
            GR <span className="text-amber-500">Class</span>
          </span>
        </div>
        <span className="text-[8px] font-mono tracking-widest text-slate-400 uppercase">
          Classified for Standards
        </span>
      </div>

      <div className="relative z-10">
        <div className="text-[9px] font-bold tracking-widest text-amber-500 uppercase mb-1">
          OUR DIFFERENTIATOR
        </div>
        <h2 className="font-serif font-black text-3xl uppercase">
          Faster. Digital. Different.
        </h2>
        <div className="w-12 h-[2px] bg-amber-500 my-3"></div>
        <p className="text-[10px] text-slate-400 leading-relaxed max-w-xl">
          Our expertise is maritime compliance. Our advantage is the software we built for it — one team, one system, no delays.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 print:grid-cols-3 gap-4 my-auto relative z-10">
        {comparisons.map((item) => (
          <div key={item.num} className="bg-slate-900/50 border border-slate-800 p-4 rounded relative overflow-hidden">
            <span className="absolute -bottom-2 right-2 font-serif text-5xl font-black text-slate-800/30">{item.num}</span>
            <span className="block text-[8px] font-bold text-slate-500 uppercase mb-1">Others</span>
            <p className="text-[9px] text-slate-500 leading-relaxed mb-2 line-through decoration-slate-600">
              {item.traditional}
            </p>
            <span className="block text-[8px] font-bold text-amber-500 uppercase mb-1">GR Class</span>
            <p className="text-[9.5px] text-slate-300 leading-relaxed">{item.grClass}</p>
          </div>
        ))}
      </div>

      <div className="relative z-10 border-t border-slate-800 pt-3">
        <p className="text-[9.5px] text-slate-400 leading-relaxed text-center italic">
          Maritime expertise you can trust. Software that makes us faster than anyone else in the room.
        </p>
        <div className="flex justify-between text-[8px] text-slate-500 font-mono mt-2">
          <span>GR CLASS — Classified for Standards</span>
          <span>{site.ops.replace("https://", "")}</span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   SLIDE 14 — WHY CHOOSE GR CLASS (THE ADVANTAGE)
═══════════════════════════════════════════════════════ */
function Slide11WhyChoose() {
  return (
    <div className="w-full min-h-full md:h-full bg-[#0b1f45] text-white p-12 flex flex-col justify-between relative overflow-y-auto md:overflow-hidden">
      {/* Background container ship overlay */}
      <img
        src={aboutSurveyor}
        alt="Background cargo vessel"
        className="absolute inset-0 w-full h-full object-cover opacity-5 pointer-events-none"
      />

      {/* Slide Header with Logo */}
      <div className="flex justify-between items-center border-b border-white/10 pb-2 mb-4 relative z-10">
        <div className="flex items-center gap-2">
          <img src="/grclass-logo.webp" alt="GR Class" className="h-5 w-auto brightness-0 invert" />
          <span className="font-serif text-[11px] font-bold tracking-widest text-white uppercase">
            GR <span className="text-amber-500">Class</span>
          </span>
        </div>
        <span className="text-[8px] font-mono tracking-widest text-slate-400 uppercase">
          Classified for Standards
        </span>
      </div>

      {/* Header */}
      <div className="relative z-10">
        <div className="text-[9px] font-bold tracking-widest text-amber-500 uppercase mb-1">
          OUR ADVANTAGE
        </div>
        <h2 className="font-serif font-black text-3xl uppercase">
          Why Choose GR Class
        </h2>
        <div className="w-12 h-[2px] bg-amber-500 my-3"></div>
      </div>

      {/* Grid of Reasons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 print:grid-cols-3 gap-6 my-auto relative z-10">
        <div className="bg-slate-900/50 border border-slate-800 p-4 rounded relative overflow-hidden">
          <span className="absolute -bottom-2 right-2 font-serif text-5xl font-black text-slate-800/30">01</span>
          <span className="block text-xs font-bold text-amber-500 uppercase mb-1">
            Universal Acceptance
          </span>
          <p className="text-[9.5px] text-slate-400 leading-relaxed">
            Statutory certificates are recognized and accepted across major flag administrations and global port authorities.
          </p>
        </div>

        <div className="bg-slate-900/50 border border-slate-800 p-4 rounded relative overflow-hidden">
          <span className="absolute -bottom-2 right-2 font-serif text-5xl font-black text-slate-800/30">02</span>
          <span className="block text-xs font-bold text-amber-500 uppercase mb-1">
            Surveyor Network
          </span>
          <p className="text-[9.5px] text-slate-400 leading-relaxed">
            Technical experts and surveyors located globally — ensuring swift response and 24/7 operations support.
          </p>
        </div>

        <div className="bg-slate-900/50 border border-slate-800 p-4 rounded relative overflow-hidden">
          <span className="absolute -bottom-2 right-2 font-serif text-5xl font-black text-slate-800/30">03</span>
          <span className="block text-xs font-bold text-amber-500 uppercase mb-1">
            Digital Workflows
          </span>
          <p className="text-[9.5px] text-slate-400 leading-relaxed">
            GR Class Software at ops.grclass.com — self-service job requests, live status tracking, and instant certificate downloads.
          </p>
        </div>

        <div className="bg-slate-900/50 border border-slate-800 p-4 rounded relative overflow-hidden">
          <span className="absolute -bottom-2 right-2 font-serif text-5xl font-black text-slate-800/30">04</span>
          <span className="block text-xs font-bold text-amber-500 uppercase mb-1">
            Zero Detentions
          </span>
          <p className="text-[9.5px] text-slate-400 leading-relaxed">
            Our pre-arrival checks and Port State Control advice ensure vessels operate without compliance penalty.
          </p>
        </div>

        <div className="bg-slate-900/50 border border-slate-800 p-4 rounded relative overflow-hidden">
          <span className="absolute -bottom-2 right-2 font-serif text-5xl font-black text-slate-800/30">05</span>
          <span className="block text-xs font-bold text-amber-500 uppercase mb-1">
            Decade Experience
          </span>
          <p className="text-[9.5px] text-slate-400 leading-relaxed">
            Our surveyors and auditors have decades of experience in resolving complex engineering issues.
          </p>
        </div>

        <div className="bg-slate-900/50 border border-slate-800 p-4 rounded relative overflow-hidden">
          <span className="absolute -bottom-2 right-2 font-serif text-5xl font-black text-slate-800/30">06</span>
          <span className="block text-xs font-bold text-amber-500 uppercase mb-1">
            Environmental Focus
          </span>
          <p className="text-[9.5px] text-slate-400 leading-relaxed">
            Supporting green transitions through energy index approvals, CII optimization and emissions audits.
          </p>
        </div>
      </div>

      {/* Footer info */}
      <div className="flex justify-between text-[8px] text-slate-500 font-mono border-t border-slate-800 pt-3 relative z-10">
        <span>GR CLASS — Classified for Standards</span>
        <span>Est. 2022</span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   SLIDE 12 — GEOGRAPHICAL PRESENCE (MAP SHOWN IN PDF)
═══════════════════════════════════════════════════════ */
function Slide12Geographical() {
  return (
    <div className="w-full min-h-full md:h-full bg-[#f5f3ef] text-slate-900 grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] print:grid-cols-[0.8fr_1.2fr] relative overflow-y-auto md:overflow-hidden">
      {/* Left Pane - office presence */}
      <div className="p-10 bg-white border-r border-slate-200 flex flex-col justify-between">
        <div>
          {/* Slide Header with Logo */}
          <div className="flex justify-between items-center border-b border-slate-200 pb-2 mb-4">
            <div className="flex items-center gap-2">
              <img src="/grclass-logo.webp" alt="GR Class" className="h-5 w-auto brightness-0" style={{ filter: "brightness(0)" }} />
              <span className="font-serif text-[11px] font-bold tracking-widest text-[#0b1f45] uppercase">
                GR <span className="text-amber-600">Class</span>
              </span>
            </div>
            <span className="text-[8px] font-mono tracking-widest text-slate-500 uppercase">
              Classified for Standards
            </span>
          </div>

          <div className="text-[9px] font-bold tracking-widest text-amber-600 uppercase mb-1">
            GLOBAL REACH
          </div>
          <h2 className="font-serif font-black text-2xl text-[#0b1f45] uppercase leading-none">
            Geographical Presence
          </h2>
          <div className="w-8 h-[2px] bg-amber-600 my-3"></div>
          <p className="text-[10.5px] text-slate-600 leading-relaxed mb-4">
            Headquartered in Ajman, UAE, and supported by a global footprint of certified surveyors operating across strategic maritime hubs and ports.
          </p>

          <div className="space-y-2.5 mt-3">
            <div className="flex gap-2">
              <MapPin className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-[9.5px] font-bold text-[#0b1f45] uppercase">Head Office Address</span>
                <span className="text-[9px] text-slate-500 leading-relaxed block font-medium">
                  {site.address}
                </span>
              </div>
            </div>

            {/* Additional Offices Grid */}
            <div className="border-t border-slate-100 pt-2 flex flex-col gap-1.5">
              <span className="block text-[9.5px] font-bold text-[#0b1f45] uppercase">Regional Offices</span>
              <div className="grid grid-cols-3 gap-3">
                {site.additionalOffices.map((office) => (
                  <div key={office.name}>
                    <span className="block text-[8.5px] font-bold text-amber-600 uppercase">{office.name}</span>
                    <span className="text-[8px] text-slate-500 leading-normal block mt-0.5 font-medium">
                      {office.address}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-2 border-t border-slate-100 pt-2">
              <Globe className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-[9.5px] font-bold text-[#0b1f45] uppercase">Surveyor Networks</span>
                <span className="text-[8.5px] text-slate-500 leading-normal block">
                  Middle East, Persian Gulf, Red Sea transit routes, Turkey, Singapore, and Europe.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Small badge */}
        <div className="mt-4 flex flex-col gap-2">
          <div className="bg-[#0b1f45]/5 p-2 rounded text-[8.5px] text-slate-500 leading-relaxed border border-slate-200 font-mono">
            Ajman Registered Office<br />B.C. Number: 1304883
          </div>
          <div className="bg-[#0b1f45]/5 p-2 rounded text-[8.5px] text-slate-500 leading-relaxed border border-slate-200">
            <span className="block font-bold uppercase tracking-wider text-amber-600 text-[8px] mb-1 font-mono">We Are Certified With</span>
            <div className="flex flex-wrap gap-x-2 gap-y-0.5 text-[#0b1f45] font-semibold">
              <span>Vanuatu Flag</span> • <span>Cameroon Flag</span> • <span>Belize Flag</span> • <span>Honduras Flag</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Pane - World map visualization */}
      <div className="bg-[#0d2a6e] relative p-10 flex flex-col justify-between text-white min-h-[350px] md:min-h-0 print:min-h-0">
        <h3 className="font-serif font-bold text-sm text-amber-500 uppercase tracking-wider relative z-10">
          Global Marine Survey Coverage
        </h3>

        {/* Simplified SVG Map illustration with coordinate highlights */}
        <div className="absolute inset-0 flex items-center justify-center p-8 opacity-25">
          <svg viewBox="0 0 800 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Simple world shapes */}
            {/* North America */}
            <path d="M50 100 Q100 80 150 110 T200 120 T250 150 L200 200 L150 210 Z" fill="white" />
            {/* South America */}
            <path d="M220 220 Q250 250 260 300 T240 370 L200 320 Z" fill="white" />
            {/* Eurasia / Africa */}
            <path d="M380 80 Q450 70 550 90 T700 80 T750 120 L720 250 L600 280 L520 220 L480 350 L400 330 L370 200 Z" fill="white" />
            {/* Australia */}
            <path d="M680 280 Q740 300 720 350 T650 320 Z" fill="white" />

            {/* Glowing hotspots */}
            {/* Ajman HQ */}
            <circle cx="485" cy="175" r="8" fill="#f59e0b" className="animate-ping" />
            <circle cx="485" cy="175" r="4" fill="#f59e0b" />
            {/* India (Mumbai) */}
            <circle cx="535" cy="195" r="4" fill="#f59e0b" />
            {/* Greece (Piraeus) */}
            <circle cx="450" cy="145" r="4" fill="#f59e0b" />
            {/* Panama */}
            <circle cx="210" cy="210" r="4" fill="#f59e0b" />
            {/* Singapore */}
            <circle cx="600" cy="225" r="4" fill="#f59e0b" />
            {/* Suez */}
            <circle cx="460" cy="165" r="4" fill="#f59e0b" />
            {/* Istanbul */}
            <circle cx="465" cy="140" r="4" fill="#f59e0b" />
            {/* Europe */}
            <circle cx="430" cy="110" r="4" fill="#f59e0b" />
          </svg>
        </div>

        <div className="relative z-10 space-y-3 self-end text-right">
          <div>
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-amber-500 mr-2 align-middle"></span>
            <span className="text-[10px] text-slate-300 align-middle">Ajman Head Office (UAE)</span>
          </div>
          <div>
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-amber-500 mr-2 align-middle opacity-80"></span>
            <span className="text-[10px] text-slate-300 align-middle">India, Greece & Panama Offices</span>
          </div>
          <div>
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-amber-500 mr-2 align-middle opacity-60"></span>
            <span className="text-[10px] text-slate-300 align-middle">Surveyors on-call across 120+ ports</span>
          </div>
          <div>
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-amber-500 mr-2 align-middle opacity-40"></span>
            <span className="text-[10px] text-slate-300 align-middle">Recognized by major Flag Administrations</span>
          </div>
        </div>

        <div className="relative z-10 text-[9px] text-slate-400 font-mono border-t border-white/10 pt-3 flex justify-between">
          <span>Global Coordinates Tracker</span>
          <span>© GR Class System 2026</span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   SLIDE 13 — BACK COVER / CONTACT
═══════════════════════════════════════════════════════ */
function Slide13BackCover() {
  return (
    <div className="w-full min-h-full md:h-full bg-[#0b1f45] text-white p-16 flex flex-col justify-between relative overflow-y-auto md:overflow-hidden">
      {/* Background Vessel Image */}
      <img
        src={heroVessel}
        alt="Vessel Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-[#0b1f45]/90 z-0"></div>

      {/* Top logo & credentials */}
      <div className="flex justify-between items-start border-b border-white/10 pb-6 relative z-10">
        <div className="flex items-center gap-3">
          <img 
            src="/grclass-logo.webp" 
            alt="GR Class Logo" 
            className="h-11 w-auto" 
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <div>
            <span className="font-serif text-2xl font-black uppercase text-white tracking-widest block">
              GR <span className="text-amber-500">Class</span>
            </span>
            <span className="text-[8px] tracking-[0.2em] uppercase text-slate-400 block mt-0.5">
              Classified for Standards
            </span>
          </div>
        </div>
        <div className="text-right">
          <span className="block text-[10px] text-amber-500 font-bold uppercase tracking-wider">
            Recognized Organization (RO)
          </span>
          <span className="block text-[8px] text-slate-400 uppercase tracking-widest mt-0.5">
            ISO 9001 Certified
          </span>
        </div>
      </div>

      {/* Main Grid: Details */}
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] print:grid-cols-[1.1fr_0.9fr] gap-10 my-auto relative z-10">
        {/* Contact Info */}
        <div className="space-y-5">
          <h3 className="font-serif text-lg font-bold text-amber-500 uppercase tracking-wider">
            Contact Details
          </h3>
          <div className="space-y-4 text-xs">
            <div className="flex items-start gap-2.5">
              <MapPin className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <span className="block font-bold text-amber-500 uppercase text-[9px] tracking-wider">Head Office (UAE)</span>
                <span className="text-slate-300 leading-relaxed font-medium block mt-1">
                  {site.address}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 pt-3 border-t border-white/5">
              <Phone className="h-5 w-5 text-amber-500 flex-shrink-0" />
              <div>
                <span className="block font-bold text-amber-500 uppercase text-[9px] tracking-wider">Phone</span>
                <span className="text-slate-300 font-mono font-semibold text-sm block mt-0.5">
                  {site.phone}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Channels */}
        <div className="space-y-5">
          <h3 className="font-serif text-lg font-bold text-amber-500 uppercase tracking-wider">
            Online Channels
          </h3>
          <div className="space-y-4 text-xs">
            <div className="flex items-start gap-2.5">
              <Mail className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <span className="block font-bold text-amber-500 uppercase text-[9px] tracking-wider">Email Enquiries</span>
                <div className="space-y-1 font-mono mt-1">
                  <a href={`mailto:${site.email}`} className="text-slate-300 hover:text-amber-500 transition-colors font-semibold block">
                    {site.email}
                  </a>
                  <a href="mailto:operation@grclass.com" className="text-slate-300 hover:text-amber-500 transition-colors font-semibold block">
                    operation@grclass.com
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2.5 pt-3 border-t border-white/5">
              <Globe className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <span className="block font-bold text-amber-500 uppercase text-[9px] tracking-wider">Official Website</span>
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif font-black text-xl text-white hover:text-amber-500 transition-colors border-b border-amber-600 block mt-1.5 w-fit"
                >
                  {site.url.replace("https://", "www.")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 pt-6 flex justify-between items-end relative z-10">
        <div>
          <span className="block text-[9px] text-slate-500 font-mono">
            © 2026 GR Class. All rights reserved.
          </span>
        </div>
        <div className="text-right text-[9px] text-slate-500 font-mono">
          Navigating Safety. Certifying Excellence.
        </div>
      </div>
    </div>
  );
}
