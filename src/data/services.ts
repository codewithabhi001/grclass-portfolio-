/**
 * Service catalogue — single source for /services index and /services/:slug detail.
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
    slug: "class-surveys",
    eyebrow: "Surveys",
    title: "Class Surveys",
    tagline: "Hull, machinery, and systems — verified to IACS unified rules.",
    description:
      "Our class surveys cover the full lifecycle of a vessel under GR Class — from initial classification through periodic, intermediate, and special surveys. Every inspection is conducted by an exclusive GR Class surveyor and signed under our recognised organisation status.",
    image: surveyImg,
    scope: [
      "Initial classification of newbuild and existing tonnage",
      "Annual, intermediate, and special periodical surveys",
      "Hull, machinery, and electrical installation inspection",
      "Damage and repair surveys with on-site dispatch",
      "Continuous machinery survey scheme (CMS)",
    ],
    deliverables: [
      "Survey report with photographic record",
      "Class maintenance recommendations",
      "Updated certificate of class",
      "Digital record on the surveyor portal",
    ],
    duration: "1–5 days on board",
    certifications: ["IACS UR Z7", "ISO 9001:2015", "Flag-state delegations"],
  },
  {
    slug: "statutory-certification",
    eyebrow: "Certification",
    title: "Statutory Certification",
    tagline: "SOLAS, MARPOL, MLC, and Load Line — issued digitally.",
    description:
      "Acting on delegation from 40+ flag administrations, GR Class issues all major statutory certificates. Every certificate is tamper-evident, instantly verifiable, and accepted by port state control authorities worldwide.",
    image: certImg,
    scope: [
      "SOLAS — Safety of Life at Sea certification",
      "MARPOL — pollution prevention certification (Annexes I–VI)",
      "MLC 2006 — Maritime Labour Convention",
      "Load Line, Tonnage, and ITC certificates",
      "ISM and ISPS Code audits and certification",
    ],
    deliverables: [
      "Digital certificates with QR verification",
      "Audit report and corrective action plan",
      "Flag-state filing on owner's behalf",
      "Lifetime record on grclass.com/verify",
    ],
    duration: "2–10 days depending on scope",
    certifications: ["SOLAS Ch. I", "MARPOL Annex I–VI", "MLC 2006", "ISM Code"],
  },
  {
    slug: "technical-advisory",
    eyebrow: "Advisory",
    title: "Technical Advisory",
    tagline: "Independent expertise on newbuilds, retrofits, and decarbonisation.",
    description:
      "Beyond statutory work, our advisory practice supports owners and yards through complex technical decisions: newbuild specification review, alternative fuel feasibility, retrofit engineering, and decarbonisation pathway planning.",
    image: advisoryImg,
    scope: [
      "Newbuild specification and contract review",
      "Alternative fuels — LNG, methanol, ammonia readiness studies",
      "EEXI, CII, and decarbonisation strategy",
      "Retrofit engineering and risk assessment",
      "Independent technical due diligence",
    ],
    deliverables: [
      "Technical assessment report",
      "Risk register and mitigation plan",
      "Compliance roadmap (5–10 year horizon)",
      "Quarterly review with the advisory partner",
    ],
    duration: "2–12 weeks",
    certifications: ["IMO MEPC.328(76)", "Poseidon Principles", "ISO 14001"],
  },
  {
    slug: "transfer-of-class",
    eyebrow: "Transfer",
    title: "Transfer of Class",
    tagline: "Migrate your fleet to GR Class without operational disruption.",
    description:
      "A structured transfer process aligned with IACS PR 1A. We manage records review, transfer survey, and flag liaison so your vessel remains in continuous class throughout.",
    image: surveyImg,
    scope: [
      "Records review with previous society",
      "Transfer of class survey",
      "Outstanding condition resolution",
      "New certificate issuance",
      "Owner training on the GR Class portal",
    ],
    deliverables: [
      "Transfer survey report",
      "New class certificate",
      "Migrated digital records",
      "Dedicated transition manager",
    ],
    duration: "10–20 working days",
    certifications: ["IACS PR 1A", "ISO 9001:2015"],
  },
];

export const getServiceBySlug = (slug: string) =>
  servicesCatalogue.find((s) => s.slug === slug);
