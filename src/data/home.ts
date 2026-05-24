/**
 * Static content for the home page sections.
 * Mirrors how a Next.js project would colocate route data.
 */
import surveyImg from "@/assets/svc-survey.jpg";
import certImg from "@/assets/svc-cert.jpg";
import advisoryImg from "@/assets/svc-advisory.jpg";

export const heroStats = [
  { value: "40+", label: "Global Ports" },
  { value: "5+", label: "Flag States" },
  { value: "20+", label: "Surveyors" },
  { value: "20+", label: "Certificates Issued" },
] as const;

export const trustTags = [
  "ISO 9001:2015",
  "ISO 14001",
  "MLC 2006",
  "SOLAS",
  "MARPOL",
] as const;

export const services = [
  {
    slug: "classification-services",
    eyebrow: "Classification",
    title: "Classification Services",
    description:
      "Comprehensive classification for newly built ships, transfer of class, and existing vessels, including offshore, yachts, and conversion projects.",
    image: surveyImg,
  },
  {
    slug: "statutory-services",
    eyebrow: "Statutory",
    title: "Statutory Services",
    description:
      "Global compliance and certification on behalf of flag administrations, ensuring adherence to international maritime conventions like SOLAS and MARPOL.",
    image: certImg,
  },
  {
    slug: "environmental-services",
    eyebrow: "Sustainability",
    title: "Environmental Services",
    description:
      "Navigating green shipping with expertise in Ballast Water Management, Ship Recycling (IHM), Energy Efficiency (EEDI/EEXI/CII), and EU MRV compliance.",
    image: advisoryImg,
  },
  {
    slug: "other-services",
    eyebrow: "Support",
    title: "Other Services",
    description:
      "Providing critical compliance support, remote surveys, Port State Control performance oversight, and expert technical advisory services.",
    image: surveyImg,
  },
] as const;

export const aboutFeatures = [
  {
    title: "Mission",
    body: "Ensuring Marine safety, safeguard of lives and property at sea. A comprehensive approach combining international regulations (e.g., SOLAS, ISPS Code), advanced surveillance, rigorous training, and risk management to protect lives, vessels, and the marine environment.",
  },
  {
    title: "Capabilities",
    body: "Being a Class, our geographical presence with certified surveyors makes GR Class stronger and technically capable, giving strength to survey capabilities to standardize regulatory and compliance capabilities. GR Class has good technical infrastructure, maintaining secure and reliable information systems to manage vessel data, survey statuses, and certificates.",
  },
  {
    title: "Expertise",
    body: "We work with values, ethics, and standards. We gain the trust from our valued customers and that builds GR Class with a class standard to the next level. Our surveyors, auditors and technical experts have decades of experience in assessing and verifying ship safety standards and tackling complex maritime issues through clear procedures and cost-effective support for ship operators.",
  },
];

export const whyPoints = [
  "Recognised by 5+ flag administrations including major open registries",
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
  { n: "10", l: "Regional offices" },
  { n: "40+", l: "Survey ports" },
  { n: "5+", l: "Flag administrations" },
  { n: "24/7", l: "Emergency dispatch" },
];
