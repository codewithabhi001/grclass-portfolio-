/**
 * Brand mark | pairs image logo with type-led branding.
 * Uses forwardRef so parent components (Radix, motion) can attach refs safely.
 */
import { forwardRef } from "react";
import { Link } from "react-router-dom";

interface BrandLogoProps {
  variant?: "light" | "dark";
}

export const BrandLogo = forwardRef<HTMLAnchorElement, BrandLogoProps>(
  ({ variant = "light" }, ref) => {
    const isLight = variant === "light";
    return (
      <Link ref={ref} to="/" className="flex items-center gap-3 group" aria-label="GR Class | Home">
        <img
          src="/grclass-logo.webp"
          alt="GR Class"
          className="h-11 w-auto md:h-14"
          style={{
            filter: isLight
              ? "brightness(0) invert(1)"                                          /* white for dark bg */
              : "brightness(0) saturate(100%) invert(10%) sepia(60%) saturate(2800%) hue-rotate(200deg) brightness(90%) contrast(100%)" /* dark navy override */
          }}
        />
        <div className="leading-tight">
          <span
            className={
              "block font-display text-[16px] font-extrabold tracking-[0.06em] " +
              (isLight ? "text-background" : "text-primary")
            }
          >
            GR&nbsp;CLASS
          </span>
          <span
            className={
              "mt-0.5 block text-[8.5px] uppercase tracking-[0.14em] " +
              (isLight ? "text-background/40" : "text-primary/50")
            }
          >
            Classified for standard
          </span>
        </div>
      </Link>
    );
  },
);
BrandLogo.displayName = "BrandLogo";

