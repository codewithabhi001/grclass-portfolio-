/**
 * Site-wide configuration. Single source of truth for brand strings,
 * navigation, and contact info. Treat like a Next.js `lib/config.ts`.
 */

export const site = {
  name: "GR Class",
  tagline: "Classified for Standards",
  description:
    "Recognized Organization (RO), Recognized Security Organization (RSO), and Classification Society (CS) authorized to offer statutory/class certification and services.",
  url: "https://grclass.com",
  ops: "https://ops.grclass.com",
  email: "info@grclass.com",
  phone: "+44 20 7946 0123",
  address: "B.C. 1304883, Ajman Free Zone C1 Building, Ajman District Business, Makani No – 4442612247, UAE",
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
