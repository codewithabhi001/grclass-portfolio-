/**
 * Brand mark | pairs image logo with type-led branding.
 * Uses forwardRef so parent components (Radix, motion) can attach refs safely.
 */
import { forwardRef } from "react";
import { Link } from "react-router-dom";

interface BrandLogoProps {
  variant?: "light" | "dark";
  size?: "default" | "large";
  layout?: "horizontal" | "vertical";
  className?: string;
}

const sizeMap = {
  default: {
    logo: "h-12 w-auto sm:h-16 md:h-18 lg:h-[88px]",
    brand: "text-[16px] sm:text-[20px] md:text-[24px]",
    tagline: "text-[7.5px] sm:text-[9.5px] md:text-[11.5px]",
  },
  large: {
    logo: "h-24 w-auto md:h-32",
    brand: "text-[30px]",
    tagline: "text-[12px] md:text-[13px]",
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
        to="/"
        className={`flex ${isVertical ? "flex-col items-start gap-3 sm:gap-4" : "items-center gap-2.5 sm:gap-3"} group ${className}`}
        aria-label="GR Class | Home"
      >
        <img
          src="/grclass-logo.webp"
          alt="GR Class"
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
