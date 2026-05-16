/**
 * Static content for the home page sections.
 * Mirrors how a Next.js project would colocate route data.
 */
import surveyImg from "@/assets/svc-survey.jpg";
import certImg from "@/assets/svc-cert.jpg";
import advisoryImg from "@/assets/svc-advisory.jpg";

export const heroStats = [
  { value: "120+", label: "Global Ports" },
  { value: "40+", label: "Flag States" },
  { value: "150+", label: "Surveyors" },
  { value: "2,500+", label: "Certificates Issued" },
] as const;

export const trustTags = [
  "IMO",
  "IACS Observer",
  "ISO 9001:2015",
  "ISO 14001",
  "MLC 2006",
  "SOLAS",
  "MARPOL",
] as const;

export const services = [
  {
    slug: "class-surveys",
    eyebrow: "Surveys",
    title: "Class Surveys",
    description:
      "Periodic, intermediate, and special surveys covering hull integrity, machinery, and onboard systems against IACS unified requirements.",
    image: surveyImg,
  },
  {
    slug: "statutory-certification",
    eyebrow: "Certification",
    title: "Statutory Certification",
    description:
      "Issuance of SOLAS, MARPOL, MLC and Load Line certificates on behalf of flag administrations, fully digital and verifiable.",
    image: certImg,
  },
  {
    slug: "technical-advisory",
    eyebrow: "Advisory",
    title: "Technical Advisory",
    description:
      "Independent expertise on newbuild specifications, retrofit projects, alternative fuels, and decarbonisation strategy.",
    image: advisoryImg,
  },
] as const;

export const aboutFeatures = [
  {
    title: "Independent classification",
    body: "Established under recognized organisation status with rigorous separation between class and commercial interests.",
  },
  {
    title: "Global surveyor network",
    body: "150+ exclusive surveyors covering major ports across Europe, Asia, the Americas, and the Middle East.",
  },
  {
    title: "Digital certification",
    body: "Tamper-evident certificates verifiable in seconds via grclass.com/verify — accepted by port state control.",
  },
];

export const whyPoints = [
  "Recognised by 40+ flag administrations including major open registries",
  "24/7 emergency surveyor dispatch from regional hubs",
  "Full IACS-aligned rule set, updated quarterly",
  "Audited annually under ISO 9001:2015 and ISO 14001",
  "Dedicated decarbonisation and alternative fuels practice",
];

export const testimonials = [
  {
    quote:
      "GR Class combines the rigor we expect from a recognised society with response times that match modern fleet operations.",
    name: "Henrik Lindqvist",
    role: "Fleet Director, Nordic Bulk",
    flag: "🇸🇪 Sweden",
  },
  {
    quote:
      "Their digital certificate platform removed weeks of paperwork from each vessel onboarding cycle.",
    name: "Aiko Tanaka",
    role: "Compliance Lead, Pacific Lines",
    flag: "🇯🇵 Japan",
  },
  {
    quote:
      "Independent advice on our LNG retrofit was clear, technically sound, and commercially aware.",
    name: "Marcus Owens",
    role: "Newbuild Manager, Atlantic Tankers",
    flag: "🇬🇧 United Kingdom",
  },
];

export const networkStats = [
  { n: "32", l: "Regional offices" },
  { n: "120+", l: "Survey ports" },
  { n: "40+", l: "Flag administrations" },
  { n: "24/7", l: "Emergency dispatch" },
];
