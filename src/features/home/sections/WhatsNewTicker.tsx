"use client";

import { Megaphone } from "lucide-react";
import Link from "next/link";

const ANNOUNCEMENTS = [
  { text: "Classification Rules for New Construction & Conversions — 2026-27 Edition published.", href: "/services" },
  { text: "Online Certificate Verification: Real-time authenticity validation active 24/7 for all issued certificates.", href: "/verify" },
  { text: "Statutory survey authorizations active for major open registries and international maritime administrations.", href: "/about" },
  { text: "Surveyor network coverage operational across 40+ international hub ports in Europe, the Middle East, and Asia.", href: "/contact" },
  { text: "Compliance circulars updated for IMO SOLAS Chapter II-1, MARPOL Annex VI, and Ballast Water Management.", href: "/services" },
  { text: "Official Notice: Beware of unauthorized representatives — verify all surveyor credentials on this portal.", href: "/verify" },
];

export function WhatsNewTicker() {
  return (
    <div className="relative z-20 w-full overflow-hidden border-y border-white/10 bg-primary-deep text-white">
      <div className="flex w-full items-center overflow-hidden">
        {/* "WHAT'S NEW" Badge matching the reference portal */}
        <div className="relative z-20 flex shrink-0 items-center gap-2 bg-accent px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider text-accent-foreground shadow-md sm:px-6">
          <Megaphone className="h-3.5 w-3.5 shrink-0" />
          <span className="whitespace-nowrap font-sans">What&apos;s New</span>
          {/* Subtle angled cut or accent edge */}
          <div className="absolute -right-2 top-0 bottom-0 w-2 bg-accent [clip-path:polygon(0_0,0_100%,100%_0)] hidden sm:block" />
        </div>

        {/* Ticker marquee with pause on hover */}
        <div className="relative flex flex-1 min-w-0 items-center overflow-hidden py-2.5">
          <div className="flex shrink-0 animate-marquee items-center hover:[animation-play-state:paused]">
            {ANNOUNCEMENTS.map((item, idx) => (
              <div key={`a1-${idx}`} className="flex shrink-0 items-center">
                <Link
                  href={item.href}
                  className="whitespace-nowrap px-3 text-xs sm:text-[13px] font-normal text-white/90 transition-colors hover:text-accent sm:px-4"
                >
                  {item.text}
                </Link>
                <span className="select-none px-2 text-xs font-bold text-accent sm:px-3">
                  ||
                </span>
              </div>
            ))}
          </div>

          {/* Duplicate set to ensure seamless infinite looping */}
          <div
            aria-hidden="true"
            className="flex shrink-0 animate-marquee items-center hover:[animation-play-state:paused]"
          >
            {ANNOUNCEMENTS.map((item, idx) => (
              <div key={`a2-${idx}`} className="flex shrink-0 items-center">
                <Link
                  href={item.href}
                  className="whitespace-nowrap px-3 text-xs sm:text-[13px] font-normal text-white/90 transition-colors hover:text-accent sm:px-4"
                >
                  {item.text}
                </Link>
                <span className="select-none px-2 text-xs font-bold text-accent sm:px-3">
                  ||
                </span>
              </div>
            ))}
          </div>

          {/* Right fade gradient for clean edge */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-12 bg-gradient-to-l from-primary-deep to-transparent" />
        </div>
      </div>
    </div>
  );
}
