import surveyImg from "@/assets/svc-survey.jpg";
import certImg from "@/assets/svc-cert.jpg";
import advisoryImg from "@/assets/svc-advisory.jpg";
import careersHeroImg from "@/assets/careers-hero.jpg";
import aboutSurveyorImg from "@/assets/about-surveyor.jpg";
import whyPortImg from "@/assets/why-port.jpg";

// Custom generated service images
import fleetImg from "@/assets/svc-fleet-in-services.png";
import newConstImg from "@/assets/svc-new-construction.png";
import transferClassImg from "@/assets/svc-transfer-of-class.png";
import yachtImg from "@/assets/svc-yacht-service.png";
import offshoreImg from "@/assets/svc-offshore-service.png";
import conversionImg from "@/assets/svc-conversion-projects.png";
import planApprovalImg from "@/assets/svc-plan-approval.png";
import flagStatutoryImg from "@/assets/svc-flag-statutory.png";
import surveyCertImg from "@/assets/svc-survey-certification.png";
import solasImg from "@/assets/svc-solas.png";
import marpolImg from "@/assets/svc-marpol.png";
import loadLineImg from "@/assets/svc-load-line.png";
import tonnageImg from "@/assets/svc-tonnage.png";
import moduImg from "@/assets/svc-modu.png";
import ballastWaterImg from "@/assets/svc-ballast-water.png";
import ihmRecyclingImg from "@/assets/svc-ihm-recycling.png";
import energyEffImg from "@/assets/svc-energy-efficiency.png";



/* ------------------------------------------------------------------ */
/*  Interfaces                                                         */
/* ------------------------------------------------------------------ */

export interface ServiceContentSection {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
}

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
  category: "classification" | "statutory" | "environmental" | "other";
  detailedContent?: ServiceContentSection[];
}

/* ------------------------------------------------------------------ */
/*  Service Catalogue                                                  */
/* ------------------------------------------------------------------ */

export const servicesCatalogue: ServiceDetail[] = [
  /* ============================================================== */
  /*  CLASSIFICATION                                                 */
  /* ============================================================== */
  {
    slug: "fleet-in-services",
    eyebrow: "Classification",
    title: "Fleet in Services",
    tagline:
      "Maintaining safety and compliance throughout your vessel's operational life.",
    description:
      "GR ensures ships and maritime assets maintain safety, structural integrity, and regulatory compliance throughout their operational life. This involves periodic, annual, intermediate, and special surveys to verify technical standards and validity of certificates.",
    image: fleetImg,
    scope: [
      "Periodic Surveys",
      "Annual Surveys",
      "Intermediate Surveys",
      "Special Surveys",
      "Certificate Verification",
      "Compliance Assessment",
    ],
    deliverables: [
      "Certificate of Classification",
      "Survey Reports",
      "Technical Compliance Documentation",
      "Digital Records",
    ],
    duration: "Continuous throughout vessel life",
    certifications: ["Class Certificate", "Hull & Machinery", "IACS Standards"],
    category: "classification",
    detailedContent: [
      {
        heading: "Class Admission Process",
        paragraphs: [
          "Application to GR Class is a smooth yet standards-compliant process and can be enacted by contacting either the GR Head Office or your local GR branches.",
          "In order to commence the class admission process and to determine the applicable entry survey requirements, the following information and documentation of the vessel should be transmitted to GR Class:",
        ],
        list: [
          "Updated ship's survey status including recommendations",
          "Updated Hull & Machinery master lists",
          "Copies of existing class certificate",
          "Copies of existing statutory certificates",
          "Copies of ship's registration documents issued by the flag Administration",
          "Main Class Plans (General Arrangement plan, mid ship section, etc.)",
          "Trim & Stability booklet",
          "Ultrasonic Thickness Measurement booklet",
        ],
      },
      {
        heading: "Survey Scheduling & Statutory Certification",
        paragraphs: [
          "A prompt schedule for vessel's attendance shall be determined in contact with ship operators to ensure minimal disruption to vessel's trading activity.",
          "Statutory certificates are to be issued by GR Class on behalf of the Flag Administration following satisfactory completion of the applicable technical surveys.",
        ],
      },
    ],
  },

  {
    slug: "new-construction",
    eyebrow: "Classification",
    title: "New Construction",
    tagline:
      "From concept design to vessel delivery with full regulatory compliance.",
    description:
      "We are deeply structured and technically groomed to execute the concept design to the delivery of the vessel. We ensure compliance with pertinent regulatory, quality, and operational standards.",
    image: newConstImg,
    scope: [
      "Design Review",
      "Material Certification",
      "Construction Supervision",
      "Sea Trials",
      "Initial Classification",
    ],
    deliverables: [
      "Certificate of Class",
      "Construction Survey Reports",
      "Material Test Certificates",
    ],
    duration: "Project duration (typically 12-36 months)",
    certifications: [
      "Class Certificate",
      "IACS Standards",
      "Flag State Certification",
    ],
    category: "classification",
    detailedContent: [
      {
        heading: "New Construction Scope",
        paragraphs: [
          "GR Class provides end-to-end supervision and certification throughout every phase of a new-build project:",
        ],
        list: [
          "Review of class-relevant design documentation, calculations and drawings",
          "Design approval, survey, certification of materials and equipment",
          "Supervision of the vessel's construction on site",
          "Witnessing of functional tests, including dock and sea trials",
          "Initial Classification survey for the issue of ship's Certificate of Class, H/M & Equipment",
          "Initial Statutory surveys for certification on behalf of intended Flag State",
        ],
      },
    ],
  },

  {
    slug: "transfer-of-class",
    eyebrow: "Classification",
    title: "Transfer of Class",
    tagline:
      "A simple and cost-effective process to move your vessel to GR Class.",
    description:
      "Transfer of Class (ToC) is the formal process of moving a ship's classification from one classification society (losing society) to another (gaining society). Transferring an existing vessel to GR Class is a simple and inexpensive process.",
    image: transferClassImg,
    scope: [
      "Class Entry Assessment",
      "Documentation Transfer",
      "Survey Scheduling",
      "Certificate Issuance",
    ],
    deliverables: [
      "New Certificate of Class",
      "Transfer Documentation",
      "Survey Status Report",
    ],
    duration: "2-6 weeks",
    certifications: ["Class Certificate", "Hull & Machinery"],
    category: "classification",
    detailedContent: [
      {
        heading: "Transfer Process",
        paragraphs: [
          "Owners may get in touch with any of our offices or place a request via the Class Entry Service Request Form. We shall contact the losing society and obtain pertinent ship's survey and certification history, and class-related documentation and provide guidance on survey schedules so as to minimize disruptions to commercial and operational obligations of your ship.",
        ],
      },
    ],
  },

  {
    slug: "yacht-service",
    eyebrow: "Classification",
    title: "Yacht Service",
    tagline: "Trusted classification for private and commercial yachts.",
    description:
      "We deliver trusted classification survey and certification services for private and commercial yachts, ensuring compliance with relevant classification standards, enhancing safety and reliable yacht performance.",
    image: yachtImg,
    scope: [
      "Yacht Classification",
      "Safety Surveys",
      "Compliance Certification",
      "Performance Assessment",
    ],
    deliverables: [
      "Yacht Classification Certificate",
      "Safety Compliance Reports",
    ],
    duration: "Varies by yacht size",
    certifications: ["Yacht Classification Standards"],
    category: "classification",
  },

  {
    slug: "offshore-service",
    eyebrow: "Classification",
    title: "Offshore Service",
    tagline:
      "Classification and technical solutions for offshore installations.",
    description:
      "We support the international offshore service by offering classification and technical solutions for MODUs, FPSOs and FSUs, Accommodation Platforms and other floating installations and mobile offshore units.",
    image: offshoreImg,
    scope: [
      "MODU Classification",
      "FPSO Certification",
      "Design Verification",
      "Asset Integrity Management",
    ],
    deliverables: [
      "Offshore Classification Certificate",
      "Design Approval Documentation",
      "Survey Reports",
    ],
    duration: "Continuous",
    certifications: ["GR Class Rules", "International Standards"],
    category: "classification",
    detailedContent: [
      {
        heading: "Offshore Classification Services",
        paragraphs: [
          "GR Class provides comprehensive offshore classification covering the full lifecycle of floating and mobile installations:",
        ],
        list: [
          "Review and Approval of unit's design and corresponding engineering studies, manuals and plans",
          "Determination of intended class notation under GR Class Rules",
          "Periodic scheduled surveys for maintenance of classification",
        ],
      },
    ],
  },

  {
    slug: "conversion-projects",
    eyebrow: "Classification",
    title: "Conversion Projects",
    tagline:
      "Ensuring compliance through every stage of vessel conversion.",
    description:
      "We ensure that a ship's conversion or modification project complies with stringent structural, safety, and environmental standards.",
    image: conversionImg,
    scope: [
      "Feasibility Assessment",
      "Design Approval",
      "Modification Survey",
      "Recertification",
    ],
    deliverables: [
      "Updated Classification Certificate",
      "Conversion Approval Documentation",
    ],
    duration: "Project-dependent",
    certifications: ["Updated Class Notations"],
    category: "classification",
    detailedContent: [
      {
        heading: "GR Class 4-Stage Conversion Process",
        list: [
          "Feasibility & Basic Design Approval",
          "Fabrication & Modification Survey",
          "Commissioning & Sea Trials",
          "Recertification & Updated Notations",
        ],
      },
    ],
  },

  {
    slug: "plan-approval",
    eyebrow: "Classification",
    title: "Approval of Plans and Manuals",
    tagline:
      "Verification of ship design, integrity, and regulatory documentation.",
    description:
      "We undertake reviews and approvals of manuals in accordance with our Classification Rules and Regulations as well as national and international standards.",
    image: planApprovalImg,
    scope: [
      "Plan Review",
      "Manual Approval",
      "Design Verification",
      "Structural Assessment",
    ],
    deliverables: ["Approved Plans", "Compliance Documentation"],
    duration: "2-4 weeks per submission",
    certifications: ["Classification Rules", "International Standards"],
    category: "classification",
    detailedContent: [
      {
        heading: "Key Plans",
        list: [
          "General Arrangement (GA) Plan",
          "Structural Plans: Midship section, shell expansion, and hatch covers",
          "Safety & Systems: Fire Control Plans, Life-Saving Appliances (LSA), ventilation, and fuel/ballast piping",
        ],
      },
      {
        heading: "Calculations & Verifications",
        list: [
          "Shipboard Oil Pollution Emergency Plan (SOPEP)",
          "Shipboard Marine Pollution Emergency Plan (SMEP)",
          "Ballast Water Management Plan (BWMP)",
          "Ship-to-Ship Operational Manual (STS)",
          "Garbage Management Plan (GMP)",
          "Fire Control & Life Saving Plan",
          "Fire Safety Operational & Management Plan",
        ],
      },
    ],
  },

  /* ============================================================== */
  /*  STATUTORY SERVICES                                             */
  /* ============================================================== */
  {
    slug: "flag-statutory-services",
    eyebrow: "Statutory",
    title: "Flag Statutory Services",
    tagline: "Delegated statutory survey and certification services on behalf of flag administrations.",
    description: "As a Recognized Organization (RO) and Recognized Security Organization (RSO), GR Class is delegated by flag administrations to perform audits, surveys, and issue statutory certificates to ensure compliance with national and international codes.",
    image: flagStatutoryImg,
    scope: [
      "Flag State Delegations & Authorizations",
      "Recognized Organization (RO) Surveys",
      "Recognized Security Organization (RSO) Audits",
      "Statutory Certificate Issuance",
      "Liaison with Flag Administrations",
    ],
    deliverables: [
      "Statutory Certificates of Compliance",
      "Audit and Survey Reports",
      "Official Flag Endorsements",
    ],
    duration: "Continuous delegation and audit schedules",
    certifications: ["Flag State Authorizations", "RO / RSO Codes", "IMO Resolution A.739(18)"],
    category: "statutory",
    detailedContent: [
      {
        heading: "Recognized Organization Roles",
        paragraphs: [
          "GR Class acts on behalf of major flag administrations to verify that vessels registered under their flags comply with the applicable international conventions and national regulations.",
          "Our services encompass plan approvals, structural surveys, equipment checks, and safety management audits, ensuring absolute compliance with delegated flag state requirements."
        ]
      }
    ]
  },

  {
    slug: "survey-certification",
    eyebrow: "Statutory",
    title: "Survey & Certification",
    tagline: "Statutory surveys and certification as per international conventions.",
    description: "We carry out comprehensive statutory surveys and issue corresponding certificates, proving that your vessel meets all applicable safety and environmental regulations.",
    image: surveyCertImg,
    scope: [
      "Annual, Intermediate, and Renewal Surveys",
      "Statutory Inspections",
      "Condition Surveys",
      "Certificate Maintenance & Endorsement",
    ],
    deliverables: [
      "Statutory Certificates",
      "Vessel Inspection Reports",
      "Technical Compliance Certificates",
    ],
    duration: "As per statutory survey window (annual/renewal)",
    certifications: ["IMO Conventions", "Flag State Delegations"],
    category: "statutory",
    detailedContent: [
      {
        heading: "Statutory Surveys Scope",
        paragraphs: [
          "Our qualified exclusive surveyors verify that vessels are maintained in full compliance with the statutory codes and requirements. We offer a unified survey regime to reduce vessel downtime, coordinating multiple statutory surveys in a single attendance."
        ]
      }
    ]
  },

  {
    slug: "solas",
    eyebrow: "Statutory",
    title: "SOLAS Compliance",
    tagline: "Safety of Life at Sea convention compliance and certification.",
    description: "Ensuring your vessels adhere to all SOLAS safety standards, covering life-saving appliances, fire protection, radio communications, and safety construction.",
    image: solasImg,
    scope: [
      "Safety Construction Surveys",
      "Safety Equipment Audits",
      "Safety Radio Surveys",
      "Life-Saving Appliances (LSA) Inspections",
      "Fire-Fighting Systems & Equipment Audits",
    ],
    deliverables: [
      "Cargo Ship Safety Construction Certificate",
      "Cargo Ship Safety Equipment Certificate",
      "Cargo Ship Safety Radio Certificate",
      "Passenger Ship Safety Certificate",
    ],
    duration: "Annual inspections and 5-year renewal cycles",
    certifications: ["SOLAS 1974 as amended", "LSA Code", "FFS Code"],
    category: "statutory",
    detailedContent: [
      {
        heading: "SOLAS Safety Requirements",
        paragraphs: [
          "SOLAS compliance is the cornerstone of maritime safety. GR Class provides meticulous surveys of structural construction, machinery installations, electrical equipment, life-saving systems, and fire protection equipment to ensure maximum safety for the crew and the vessel."
        ]
      }
    ]
  },

  {
    slug: "marpol",
    eyebrow: "Statutory",
    title: "MARPOL Compliance",
    tagline: "Prevention of pollution from ships compliance and certification.",
    description: "Complete survey and certification under MARPOL Annexes I to VI to prevent marine pollution by oil, sewage, garbage, and air emissions.",
    image: marpolImg,
    scope: [
      "Annex I: Prevention of Oil Pollution (IOPP)",
      "Annex II: Control of Noxious Liquid Substances (NLS)",
      "Annex IV: Sewage Pollution Prevention (ISPP)",
      "Annex V: Garbage Pollution Prevention",
      "Annex VI: Air Pollution Prevention (IAPP)",
    ],
    deliverables: [
      "IOPP Certificate",
      "NLS Certificate",
      "ISPP Certificate",
      "IAPP Certificate",
      "Garbage Management Plan Approval",
    ],
    duration: "Aligned with annual statutory survey cycles",
    certifications: ["MARPOL 73/78 as amended", "Annexes I - VI"],
    category: "statutory",
    detailedContent: [
      {
        heading: "Marine Environmental Protection",
        paragraphs: [
          "Our environmental compliance surveys verify that ships meet strict MARPOL limits for emissions and discharge. We assist operators in implementing equipment standards like oil filtering devices, sewage treatment plants, and marine exhaust scrubbers."
        ]
      }
    ]
  },

  {
    slug: "load-line",
    eyebrow: "Statutory",
    title: "Load Line Certification",
    tagline: "Vessel freeboard assignment and load line surveys.",
    description: "Calculation, assignment of freeboards, and annual/renewal surveys for the issuance of International Load Line Certificates as per the Load Line Convention.",
    image: loadLineImg,
    scope: [
      "Freeboard Calculation & Verification",
      "Weathertightness & Watertightness Audits",
      "Superstructure & Hatch Cover Inspections",
      "Load Line Mark Verification",
    ],
    deliverables: [
      "International Load Line Certificate (ILLC)",
      "Freeboard Assignment Record",
      "Load Line Survey Reports",
    ],
    duration: "Annual verification, 5-year renewal",
    certifications: ["International Convention on Load Lines 1966"],
    category: "statutory",
    detailedContent: [
      {
        heading: "Load Line Integrity",
        paragraphs: [
          "Load Line surveys ensure that the vessel has sufficient reserve buoyancy and that its hull openings (hatches, ventilators, air pipes, doors) are weathertight to prevent water ingress in heavy seas."
        ]
      }
    ]
  },

  {
    slug: "tonnage",
    eyebrow: "Statutory",
    title: "Tonnage Measurement",
    tagline: "Gross and net tonnage calculations and certification.",
    description: "Measurement and calculation of vessel volumes to determine Gross and Net Tonnages, and issuance of International Tonnage Certificates (ITC 1969).",
    image: tonnageImg,
    scope: [
      "Vessel Volume Calculations",
      "Gross Tonnage (GT) Assessments",
      "Net Tonnage (NT) Assessments",
      "Tonnage Measurement Audits",
    ],
    deliverables: [
      "International Tonnage Certificate (1969)",
      "Tonnage Calculation Sheets",
    ],
    duration: "One-off issuance (unless major modification occurs)",
    certifications: ["International Convention on Tonnage Measurement of Ships 1969"],
    category: "statutory",
    detailedContent: [
      {
        heading: "Tonnage Computations",
        paragraphs: [
          "Tonnage measurements determine a ship's volume for licensing, port fees, taxation, and regulatory thresholds. GR Class performs precise volumetric audits to establish official gross and net tonnages."
        ]
      }
    ]
  },

  {
    slug: "modu",
    eyebrow: "Statutory",
    title: "MODU Certification",
    tagline: "Mobile Offshore Drilling Units safety certification.",
    description: "Surveys, audits, and certification of Mobile Offshore Drilling Units in compliance with the IMO MODU Code and flag-state requirements.",
    image: moduImg,
    scope: [
      "MODU Code Safety Surveys",
      "Offshore Drilling System Audits",
      "Structural Integrity Assessments",
      "Machinery & Electrical System Certification",
    ],
    deliverables: [
      "Mobile Offshore Drilling Unit Safety Certificate",
      "Offshore Survey and Compliance Reports",
    ],
    duration: "Annual survey cycle and 5-year renewals",
    certifications: ["IMO MODU Code (1979, 1989, 2009 editions)", "Flag State offshore mandates"],
    category: "statutory",
    detailedContent: [
      {
        heading: "Offshore Drilling Safety",
        paragraphs: [
          "GR Class applies specialized rules for offshore units, checking mooring systems, stability, hazardous area classification, and drilling safety systems to ensure safe operations on mobile drilling platforms."
        ]
      }
    ]
  },

  /* ============================================================== */
  /*  ENVIRONMENTAL                                                  */
  /* ============================================================== */
  {
    slug: "ballast-water-management",
    eyebrow: "Environmental",
    title: "Ballast Water Management",
    tagline: "Protecting the marine environment from invasive species.",
    description:
      "Ships that sail around the globe run the risk of carrying invasive aquatic species across the ocean, disrupting or harming marine ecosystems. The IMO introduced the BWM Convention requiring all vessels to implement management plans and improve treatment systems.",
    image: ballastWaterImg,
    scope: [
      "BWM Plan Review",
      "Treatment System Certification",
      "Compliance Assessment",
    ],
    deliverables: [
      "BWM Compliance Certificate",
      "Management Plan Approval",
    ],
    duration: "Per vessel assessment",
    certifications: ["BWM Convention", "IMO Standards"],
    category: "environmental",
  },

  {
    slug: "ihm-ship-recycling",
    eyebrow: "Environmental",
    title: "IHM & Ship Recycling",
    tagline:
      "Managing hazardous materials for crew safety and regulatory compliance.",
    description:
      "Improper handling of hazardous materials can impact crew safety. Owners are faced with complying with EU Ship Recycling regulations and preparing for future IMO requirements.",
    image: ihmRecyclingImg,
    scope: [
      "IHM Preparation",
      "EU SRR Compliance",
      "Hong Kong Convention Certification",
    ],
    deliverables: [
      "IHM Certificate",
      "Ship Recycling Compliance Documentation",
    ],
    duration: "4-8 weeks",
    certifications: [
      "EU Regulation No 1257/2013",
      "Hong Kong Convention",
    ],
    category: "environmental",
    detailedContent: [
      {
        heading: "Primary Regulations",
        paragraphs: [
          "GR Class offers shipowners certification in accordance with the Hong Kong Convention and/or the EU Regulation, regardless of the ship's current class.",
        ],
        list: [
          "The Hong Kong International Convention for the Safe and Environmentally Sound Recycling of Ships",
          "The EU Regulation No 1257/2013 on Ship Recycling (EU SRR)",
        ],
      },
    ],
  },

  {
    slug: "energy-efficiency",
    eyebrow: "Environmental",
    title: "Energy Efficiency",
    tagline: "EEDI, EEXI, and CII compliance for a sustainable fleet.",
    description:
      "Environmental regulations mandated by IMO under MARPOL Annex VI covering EEDI for new ships, EEXI for existing ships, CII rating scheme, and SEEMP management plans.",
    image: energyEffImg,
    scope: [
      "EEDI Assessment",
      "EEXI Verification",
      "CII Rating",
      "SEEMP Approval",
    ],
    deliverables: [
      "Energy Efficiency Certificate",
      "SEEMP Approval",
      "CII Rating Report",
    ],
    duration: "Ongoing compliance",
    certifications: ["MARPOL Annex VI", "IMO Resolutions"],
    category: "environmental",
    detailedContent: [
      {
        heading: "Regulatory Framework",
        list: [
          "EEDI (Energy Efficiency Design Index): Mandatory for new ships",
          "EEXI (Existing Ship Energy Efficiency Index): Applies to ships of 400+ GT",
          "CII (Carbon Intensity Indicator): Ships 5,000+ GT rated A-E",
          "SEEMP (Ship Energy Efficiency Management Plan)",
        ],
      },
      {
        heading: "Services Provided",
        list: [
          "Assessment and verification of EEDI/EEXI",
          "Review & Approval of SEEMP",
          "Survey for International Ship Energy Efficiency Certificate",
          "CII rating scheme assessment",
        ],
      },
    ],
  },

  {
    slug: "eu-mrv-compliance",
    eyebrow: "Environmental",
    title: "EU MRV Compliance",
    tagline:
      "Monitoring, reporting and verification for EU maritime regulations.",
    description:
      "The EU MRV Maritime Regulation aims to assess environmental impact by collecting and reporting emissions data. It applies to vessels engaged in commercial transport on routes within the EEA. From 2025, expanded to include cargo ships 400-5000 GT.",
    image: advisoryImg,
    scope: [
      "Monitoring Plan Assessment",
      "Report Verification",
      "Compliance Documentation",
    ],
    deliverables: [
      "EU MRV Compliance Documents",
      "Verified Reports",
    ],
    duration: "Annual cycle",
    certifications: ["EU Regulation 2015/757"],
    category: "environmental",
    detailedContent: [
      {
        heading: "Services",
        list: [
          "EU MRV monitoring plan assessment",
          "Annual EU MRV report verification",
          "Issuance of documents confirming compliance",
        ],
      },
    ],
  },

  {
    slug: "vessel-emergency-response",
    eyebrow: "Environmental",
    title: "Vessel Emergency Response",
    tagline: "24/7 emergency assessment for damaged vessels worldwide.",
    description:
      "Emergency Response Service providing speedy assessment of stability and longitudinal strength of damaged ships. All vessel data stored in computer systems for rapid analysis.",
    image: surveyImg,
    scope: [
      "Emergency Assessment",
      "Stability Analysis",
      "Strength Verification",
      "Regulatory Coordination",
    ],
    deliverables: [
      "Emergency Assessment Reports",
      "Stability Calculations",
      "Damage Reports",
    ],
    duration: "24/7 availability",
    certifications: ["MARPOL 73/78 Annex 1"],
    category: "environmental",
    detailedContent: [
      {
        heading: "Why Choose GR Class",
        list: [
          "Technical expertise with relevant experience",
          "Co-ordination with regulatory authorities regardless of ship position",
          "Available 24 hours a day, 365 days a year",
          "Computer-based strength & stability analysis",
          "Meets MARPOL 73/78 Annex 1 requirements for 5,000+ dwt oil tankers",
        ],
      },
    ],
  },

  /* ============================================================== */
  /*  OTHER SERVICES                                                 */
  /* ============================================================== */
  {
    slug: "compliance-support",
    eyebrow: "Support",
    title: "Compliance Support",
    tagline: "Critical compliance support for the maritime industry.",
    description:
      "We provide critical compliance support by setting technical standards, verifying vessel integrity, and conducting audits on behalf of flag states. We ensure ships meet global safety and environmental mandates, enabling operators to secure insurance, register vessels, and access ports without regulatory penalty.",
    image: careersHeroImg,
    scope: [
      "Technical Standards",
      "Vessel Integrity Verification",
      "Flag State Audits",
      "Regulatory Compliance",
    ],
    deliverables: [
      "Compliance Reports",
      "Audit Documentation",
      "Regulatory Guidance",
    ],
    duration: "On-demand",
    certifications: ["Industry Best Practices", "IMO Guidelines"],
    category: "other",
  },

  {
    slug: "remote-surveys",
    eyebrow: "Support",
    title: "Remote Surveys",
    tagline: "Maintaining compliance without disrupting operations.",
    description:
      "We conduct remote survey and audit activities to support inspection assignments where on-board access is not possible, assisting operational continuity.",
    image: aboutSurveyorImg,
    scope: [
      "Remote Inspection",
      "Documentation Review",
      "Deficiency Verification",
      "Remote Audits",
    ],
    deliverables: [
      "Remote Survey Reports",
      "Compliance Verification",
    ],
    duration: "As needed",
    certifications: ["ISM", "ISPS", "MLC"],
    category: "other",
    detailedContent: [
      {
        heading: "Remote Survey Solutions",
        paragraphs: [
          "Subject to flag Administration authorization and consent, GR Class offers the following remote survey solutions:",
        ],
        list: [
          "Occasional Surveys between scheduled surveys",
          "Documentation based surveys",
          "Rectification of minor deficiencies",
          "Remote interim audits for ISM, ISPS, and MLC certification",
        ],
      },
    ],
  },

  {
    slug: "port-state-control",
    eyebrow: "Support",
    title: "Port State Control",
    tagline: "Improving PSC performance across all regional MOUs.",
    description:
      "GR Class maintains strong oversight and emphasis on continuous PSC performance improvement with the aim to maintain and enhance long-term quality growth and competitiveness.",
    image: whyPortImg,
    scope: [
      "PSC Performance Analysis",
      "Detention Prevention",
      "Pre-arrival Checklists",
      "Regulatory Guidance",
    ],
    deliverables: [
      "PSC Readiness Reports",
      "Prevention Measures",
      "Checklist Tools",
    ],
    duration: "Ongoing support",
    certifications: ["Regional MOU Standards"],
    category: "other",
    detailedContent: [
      {
        heading: "Our Approach",
        paragraphs: [
          "GR Class collaborates closely with Flag States and ship operators through sharing detention prevention measures, pre-arrival checklist tools, and guidance on new enforced regulations.",
        ],
      },
    ],
  },

  {
    slug: "technical-advisory",
    eyebrow: "Support",
    title: "Technical Advisory Services",
    tagline: "Expert marine engineering and operational optimization.",
    description:
      "We provide expert marine engineering, regulatory compliance, and operational optimization. By engaging with our clients and gaining in-depth understanding of their needs, our experts deliver tangible improvements to asset and business performance, safely and responsibly.",
    image: certImg,
    scope: [
      "Marine Engineering",
      "Regulatory Compliance",
      "Operational Optimization",
      "Risk Assessment",
    ],
    deliverables: [
      "Technical Advisory Reports",
      "Optimization Recommendations",
    ],
    duration: "Project-based",
    certifications: ["Industry Best Practices"],
    category: "other",
  },
];

/* ------------------------------------------------------------------ */
/*  Helper                                                             */
/* ------------------------------------------------------------------ */

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return servicesCatalogue.find((s) => s.slug === slug);
}

/* ------------------------------------------------------------------ */
/*  Category Groupings                                                 */
/* ------------------------------------------------------------------ */

export const serviceCategories = [
  {
    heading: "Classification",
    description:
      "Comprehensive classification services for vessels of all types throughout their lifecycle.",
    slug: "classification",
    services: [
      "fleet-in-services",
      "new-construction",
      "transfer-of-class",
      "yacht-service",
      "offshore-service",
      "conversion-projects",
      "plan-approval",
    ],
  },
  {
    heading: "Statutory Services",
    description:
      "International compliance and certification on behalf of flag administrations.",
    slug: "statutory",
    services: [
      "flag-statutory-services",
      "survey-certification",
      "solas",
      "marpol",
      "load-line",
      "tonnage",
      "modu",
    ],
  },
  {
    heading: "Environmental",
    description:
      "Navigating green shipping regulations and environmental compliance.",
    slug: "environmental",
    services: [
      "ballast-water-management",
      "ihm-ship-recycling",
      "energy-efficiency",
      "eu-mrv-compliance",
      "vessel-emergency-response",
    ],
  },
  {
    heading: "Other Services",
    description:
      "Technical advisory and compliance support for maritime operations.",
    slug: "other",
    services: [
      "compliance-support",
      "remote-surveys",
      "port-state-control",
      "technical-advisory",
    ],
  },
];
