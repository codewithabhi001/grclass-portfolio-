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
  phone: "+971555324087",
  address: "B.C. 1304883, C1 Building, Ajman District Business, Makani No – 4442612247, UAE.",
  additionalOffices: [
    {
      name: "India Office",
      address: "Office No - 6, Hermes Atrium, Sector -11, CBD Belapur, Navi Mumbai, Maharashtra, India.",
    },
    {
      name: "Greece Office",
      address: "Notara Str. 110, Piraeus, 18535, Greece.",
    },
    {
      name: "Panama Office",
      address: "Edificio Global Plaza, Calle 50, Piso 21, Republic de Panama.",
    },
  ] as const,
} as const;

export interface NavItem {
  label: string;
  href: string;
  children?: {
    heading: string;
    items: { label: string; href: string; desc?: string }[];
  }[];
}

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "How it Works", href: "/how-it-works" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        heading: "Classification",
        items: [
          { label: "Fleet in Services", href: "/services/fleet-in-services" },
          { label: "New Construction", href: "/services/new-construction" },
          { label: "Transfer of Class", href: "/services/transfer-of-class" },
          { label: "Yacht Service", href: "/services/yacht-service" },
          { label: "Offshore Service", href: "/services/offshore-service" },
          { label: "Conversion Projects", href: "/services/conversion-projects" },
          { label: "Plan & Manual Approval", href: "/services/plan-approval" },
        ],
      },
      {
        heading: "Statutory Services",
        items: [
          { label: "Flag Statutory Services", href: "/services/flag-statutory-services" },
          { label: "Survey & Certification", href: "/services/survey-certification" },
          { label: "SOLAS", href: "/services/solas" },
          { label: "MARPOL", href: "/services/marpol" },
          { label: "Load Line", href: "/services/load-line" },
          { label: "Tonnage", href: "/services/tonnage" },
          { label: "MODU", href: "/services/modu" },
        ],
      },
      {
        heading: "Environmental",
        items: [
          { label: "Ballast Water Management", href: "/services/ballast-water-management" },
          { label: "IHM & Ship Recycling", href: "/services/ihm-ship-recycling" },
          { label: "Energy Efficiency", href: "/services/energy-efficiency" },
          { label: "EU MRV Compliance", href: "/services/eu-mrv-compliance" },
          { label: "Emergency Response", href: "/services/vessel-emergency-response" },
        ],
      },
      {
        heading: "Other Services",
        items: [
          { label: "Compliance Support", href: "/services/compliance-support" },
          { label: "Remote Surveys", href: "/services/remote-surveys" },
          { label: "Port State Control", href: "/services/port-state-control" },
          { label: "Technical Advisory", href: "/services/technical-advisory" },
        ],
      },
    ],
  },
  { label: "About", href: "/about" },
  { label: "News", href: "/news" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const utilNav = [
  { label: "EN", href: "#" },
  { label: "Investors", href: "/investors" },
  { label: "Careers", href: "/careers" },
  { label: "Press", href: "/press" },
  { label: "Vessel Search", href: "/vessel-search" },
] as const;
