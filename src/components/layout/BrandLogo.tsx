/**
 * Brand mark | pairs image logo with type-led branding.
 * Uses forwardRef so parent components (Radix, motion) can attach refs safely.
 */
import { forwardRef } from "react";
import Link from "next/link";

interface BrandLogoProps {
  variant?: "light" | "dark";
  size?: "default" | "large";
  layout?: "horizontal" | "vertical";
  className?: string;
}

const sizeMap = {
  default: {
    logo: "h-10 w-auto sm:h-11 md:h-12 lg:h-13",
    brand: "text-lg sm:text-xl md:text-2xl font-extrabold",
    tagline: "text-[8px] sm:text-[9px] md:text-[10px]",
  },
  large: {
    logo: "h-16 w-auto sm:h-20 md:h-24",
    brand: "text-2xl sm:text-3xl md:text-4xl font-extrabold",
    tagline: "text-xs sm:text-sm",
  },
} as const;

export const BrandLogo = forwardRef<HTMLAnchorElement, BrandLogoProps>(
  ({ variant = "light", size = "default", layout = "horizontal", className = "" }, ref) => {
    const isLight = variant === "light";
    const s = sizeMap[size];
    const isVertical = layout === "vertical";
    
    return (
      <Link
        ref={ref}
        href="/"
        className={`flex ${isVertical ? "flex-col items-start gap-3 sm:gap-4" : "items-center gap-2.5 sm:gap-3"} group ${className}`}
        aria-label="GR Class | Home"
      >
        <img
          src="/grclass-logo.webp"
          alt="GR Class Classification Society Logo"
          className={s.logo}
          style={{
            filter: isLight
              ? "brightness(0) invert(1)"                                          /* white for dark bg */
              : "brightness(0) saturate(100%) invert(10%) sepia(60%) saturate(2800%) hue-rotate(200deg) brightness(90%) contrast(100%)" /* dark navy override */
          }}
        />
        <div className="leading-tight">
          <span
            className={
              "block font-display font-extrabold tracking-[0.06em] " +
              s.brand + " " +
              (isLight ? "text-background" : "text-primary")
            }
          >
            GR&nbsp;CLASS
          </span>
          <span
            className={
              "mt-0.5 block uppercase tracking-[0.14em] " +
              s.tagline + " " +
              (isLight ? "text-background/40" : "text-primary/50")
            }
          >
            Classified for Standards
          </span>
        </div>
      </Link>
    );
  },
);
BrandLogo.displayName = "BrandLogo";
