/**
 * Service catalogue | single source for /services index and /services/:slug detail.
 */
import surveyImg from "@/assets/svc-survey.jpg";
import certImg from "@/assets/svc-cert.jpg";
import advisoryImg from "@/assets/svc-advisory.jpg";

export interface ServiceDetail {
  slug: string;
  eyebrow: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  scope: string[];
  deliverables: string[];
  duration: string;
  certifications: string[];
}

export const servicesCatalogue: ServiceDetail[] = [
  {
    slug: "classification-services",
    eyebrow: "Classification",
    title: "Classification Services",
    tagline: "Ensuring structural and mechanical integrity for your fleet.",
    description:
      "GR Class provides comprehensive classification services for newly built ships and existing vessels. We verify that your assets meet the highest standards of safety and reliability throughout their lifecycle.",
    image: surveyImg,
    scope: [
      "Fleet in Services",
      "New Construction",
      "Transfer of Class",
      "Yacht Service",
      "Offshore Service",
      "Conversion Projects",
      "Approval of Plans and Manuals",
    ],
    deliverables: [
      "Certificate of Classification",
      "Survey reports and status updates",
      "Technical approval documentation",
      "Digital records on the GR Class portal",
    ],
    duration: "Continuous throughout vessel life",
    certifications: ["Class Certificate", "Hull & Machinery", "IACS Standards"],
  },
  {
    slug: "statutory-services",
    eyebrow: "Statutory",
    title: "Statutory Services",
    tagline: "Global compliance and certification on behalf of flag administrations.",
    description:
      "As a Recognized Organization (RO), GR Class is authorized to perform surveys and issue statutory certificates ensuring compliance with international maritime conventions.",
    image: certImg,
    scope: [
      "Flag Statutory Services",
      "Survey & Certification",
      "SOLAS (Safety of Life at Sea)",
      "MARPOL (Pollution Prevention)",
      "Load Line & Tonnage",
      "MODU (Mobile Offshore Drilling Units)",
    ],
    deliverables: [
      "International Statutory Certificates",
      "Compliance audit reports",
      "Flag state endorsements",
      "Digital verification via QR code",
    ],
    duration: "Periodic as per regulations",
    certifications: ["SOLAS", "MARPOL", "ITC 69", "ILLC 66"],
  },
  {
    slug: "environmental-services",
    eyebrow: "Sustainability",
    title: "Environmental Services",
    tagline: "Navigating the pathway to green shipping and decarbonisation.",
    description:
      "We support ship owners in meeting evolving environmental regulations and improving energy efficiency to protect the marine environment.",
    image: advisoryImg,
    scope: [
      "Ballast Water Management (BWM)",
      "Inventory of Hazardous Materials (IHM)",
      "Energy Efficiency (EEDI-EEXI-CII)",
      "EU MRV Compliance",
      "Vessel Emergency Response Services",
    ],
    deliverables: [
      "Environmental compliance certificates",
      "Verified emission reports",
      "BWM plans and approvals",
      "Emergency response protocols",
    ],
    duration: "Periodic assessments",
    certifications: ["MEPC Resolutions", "EU 2015/757", "ISO 14001"],
  },
  {
    slug: "advisory-support",
    eyebrow: "Support",
    title: "Support & Advisory",
    tagline: "Technical expertise and compliance support for maritime operations.",
    description:
      "Beyond core surveys, we offer specialized technical advisory and compliance support to help you manage complex maritime issues effectively.",
    image: surveyImg,
    scope: [
      "Compliance Support",
      "Remote Surveys",
      "Port State Control Assistance",
      "Technical Advisory Services",
    ],
    deliverables: [
      "Technical advisory reports",
      "Remote survey verification",
      "PSC readiness assessments",
      "Regulatory guidance memos",
    ],
    duration: "On-demand",
    certifications: ["Industry Best Practices", "IMO Guidelines"],
  },
];

export const getServiceBySlug = (slug: string) =>
  servicesCatalogue.find((s) => s.slug === slug);
