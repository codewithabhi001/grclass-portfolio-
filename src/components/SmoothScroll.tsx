"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Momentum scrolling. Mounted once from the root layout.
 *
 * Two things this guards against:
 *  - `prefers-reduced-motion` — Lenis is skipped entirely so the browser's
 *    native, instant scrolling is used.
 *  - The rAF loop is cancelled on unmount. Previously it kept calling into a
 *    destroyed Lenis instance for the life of the tab.
 */
export const SmoothScroll = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
};
