import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1440px" },
    },
    extend: {
      fontFamily: {
        display: ['"Libre Franklin"', "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ['"DM Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"DM Mono"', "ui-monospace", "monospace"],
        // Explicit web serif so headings render identically on every device/OS.
        // Gelasio is metric-compatible with Georgia (the design's original
        // fallback), so it keeps the intended proportions without reflow.
        serif: ["Gelasio", "Georgia", "Cambria", '"Times New Roman"', "serif"],
      },
      /**
       * Type scale.
       *
       * Four fluid display steps for headings and six static steps for
       * body/UI text. Every clamp interpolates between a 375px and a 1280px
       * viewport, so sizes are locked at both ends and never overshoot.
       *
       * Use these instead of arbitrary `text-[NNpx]` values — the page-level
       * one-offs they replaced had drifted to 16 different heading sizes.
       */
      fontSize: {
        // Display — fluid. Optical letter-spacing tightens as size grows.
        "display-xl": ["clamp(2.25rem, 1.73rem + 2.21vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.022em" }],
        "display-lg": ["clamp(1.875rem, 1.51rem + 1.55vw, 2.75rem)", { lineHeight: "1.1", letterSpacing: "-0.019em" }],
        "display-md": ["clamp(1.625rem, 1.31rem + 1.33vw, 2.375rem)", { lineHeight: "1.15", letterSpacing: "-0.016em" }],
        "display-sm": ["clamp(1.375rem, 1.17rem + 0.88vw, 1.875rem)", { lineHeight: "1.22", letterSpacing: "-0.012em" }],
        // Titles — card and list headings.
        "title-lg": ["1.375rem", { lineHeight: "1.3", letterSpacing: "-0.011em" }],
        title: ["1.125rem", { lineHeight: "1.38", letterSpacing: "-0.008em" }],
        "title-sm": ["1rem", { lineHeight: "1.45", letterSpacing: "-0.005em" }],
        // Body — generous leading for long-form legibility.
        lead: ["1.0625rem", { lineHeight: "1.72" }],
        "body-lg": ["1rem", { lineHeight: "1.72" }],
        body: ["0.9375rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.65" }],
        caption: ["0.8125rem", { lineHeight: "1.55" }],
        // Micro labels — uppercase eyebrows, badges, meta rows.
        overline: ["0.6875rem", { lineHeight: "1.1", letterSpacing: "0.16em" }],
        "overline-sm": ["0.625rem", { lineHeight: "1.1", letterSpacing: "0.18em" }],
        // Micro text — same sizes as the overlines but no tracking, for the
        // sentence-case labels and meta rows that were on ad-hoc 9–11px values.
        micro: ["0.6875rem", { lineHeight: "1.45" }],
        "micro-sm": ["0.625rem", { lineHeight: "1.4" }],
        // Tailwind defaults kept so existing `text-xs`/`text-sm` keep working.
        xs: ["0.75rem", { lineHeight: "1.5" }],
        sm: ["0.875rem", { lineHeight: "1.6" }],
        base: ["1rem", { lineHeight: "1.7" }],
        lg: ["1.125rem", { lineHeight: "1.65" }],
        xl: ["1.25rem", { lineHeight: "1.5" }],
        "2xl": ["1.5rem", { lineHeight: "1.35" }],
        "3xl": ["1.875rem", { lineHeight: "1.2" }],
        "4xl": ["2.25rem", { lineHeight: "1.12" }],
        "5xl": ["3rem", { lineHeight: "1.05" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
      },
      colors: {
        border: "hsl(var(--border))",
        "border-soft": "hsl(var(--border-soft))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        subtle: "hsl(var(--subtle))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          deep: "hsl(var(--primary-deep))",
          soft: "hsl(var(--primary-soft))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          soft: "hsl(var(--secondary-soft))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          bright: "hsl(var(--accent-bright))",
          soft: "hsl(var(--accent-soft))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      backgroundImage: {
        "gradient-hero": "var(--gradient-hero)",
        "gradient-navy": "var(--gradient-navy)",
        "gradient-brass": "var(--gradient-brass)",
        "gradient-fade-bottom": "var(--gradient-fade-bottom)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        elev: "var(--shadow-elev)",
        brass: "var(--shadow-brass)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      spacing: {
        // Height of the fixed site header — see `--header-h` in index.css.
        header: "var(--header-h)",
      },
      maxWidth: {
        // Optimal measure for long-form body copy (~68 characters).
        measure: "68ch",
        "measure-sm": "56ch",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slow-pan": {
          "0%": { transform: "scale(1.05) translateX(0)" },
          "100%": { transform: "scale(1.12) translateX(-1.5%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.7s var(--ease-out) both",
        "slow-pan": "slow-pan 18s var(--ease-out) infinite alternate",
        marquee: "marquee 38s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
