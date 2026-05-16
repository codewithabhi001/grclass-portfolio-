/**
 * Brand mark — small, type-led logo. Pairs with `BrandLogo` for nav.
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
      <Link ref={ref} to="/" className="flex items-center gap-3 group" aria-label="GR Class — Home">
      <span
        className={
          "flex h-9 w-9 flex-shrink-0 items-center justify-center font-display text-[13px] font-extrabold tracking-wider transition-colors " +
          (isLight ? "bg-background text-primary" : "bg-primary text-background")
        }
      >
        GR
      </span>
      <span className="leading-tight">
        <span
          className={
            "block font-display text-[15px] font-extrabold tracking-[0.05em] " +
            (isLight ? "text-background" : "text-primary")
          }
        >
          GR&nbsp;CLASS
        </span>
        <span
          className={
            "mt-0.5 block text-[8px] uppercase tracking-[0.14em] " +
            (isLight ? "text-background/40" : "text-muted-foreground")
          }
        >
          Classification Society
        </span>
      </span>
    </Link>
    );
  },
);
BrandLogo.displayName = "BrandLogo";
