/**
 * Site-wide configuration. Single source of truth for brand strings,
 * navigation, and contact info. Treat like a Next.js `lib/config.ts`.
 */

export const site = {
  name: "GR Class",
  tagline: "Maritime Classification & Certification",
  description:
    "Statutory verification, vessel surveys, and digital certification trusted by flag states and ship owners across 120+ ports worldwide.",
  url: "https://grclass.com",
  ops: "https://ops.grclass.com",
  email: "contact@grclass.com",
  phone: "+44 20 7946 0123",
} as const;

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "How it Works", href: "/how-it-works" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "News", href: "/news" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const utilNav = [
  { label: "EN", href: "#" },
  { label: "Investors", href: "/investors" },
  { label: "Careers", href: "/careers" },
  { label: "Press", href: "/press" },
  { label: "Vessel Search", href: "/vessel-search" },
] as const;
