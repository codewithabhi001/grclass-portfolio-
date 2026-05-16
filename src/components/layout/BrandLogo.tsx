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
      <Link ref={ref} to="/" className="flex items-center gap-3.5 group" aria-label="GR Class | Home">
        <img
          src="/grclass-logo.webp"
          alt="GR Class"
          className="h-16 w-auto"
        />
        <div className="leading-tight">
          <span
            className={
              "block font-display text-[17px] font-extrabold tracking-[0.05em] " +
              (isLight ? "text-background" : "text-primary")
            }
          >
            GR&nbsp;CLASS
          </span>
          <span
            className={
              "mt-0.5 block text-[9px] uppercase tracking-[0.14em] " +
              (isLight ? "text-background/40" : "text-muted-foreground")
            }
          >
            Classification Society
          </span>
        </div>
      </Link>
    );
  },
);
BrandLogo.displayName = "BrandLogo";
