/**
 * Service catalogue | single source for /services index and /services/:slug detail.
 */
import surveyImg from "@/assets/svc-survey.jpg";
import certImg from "@/assets/svc-cert.jpg";
import advisoryImg from "@/assets/svc-advisory.jpg";

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
  detailedContent?: ServiceContentSection[];
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
    detailedContent: [
      {
        heading: "Fleet in Services",
        paragraphs: [
          "Gr ensure ships and maritime assets maintain safety, structural integrity, and regulatory compliance throughout their operational life. This involves periodic, annual, intermediate, and special surveys to verify technical standards and validity of certificates.",
          "Application to GR Class is smooth yet standards compliant process and can be enacted by contacting either with the GR Head Office or your local GR branches.",
          "In order to commence the class admission process and to determine the applicable entry surveys requirements, the following information and documentation of the vessel should be transmitted to GR Class:"
        ],
        list: [
          "Updated ship’s survey status including recommendations, if any.",
          "Updated Hull & Machinery master lists, if any",
          "Copies of existing class certificate",
          "Copies of existing statutory certificates",
          "Copies of ship’s registration documents issued by the flag Administration (i.e. Registry, Radio License, etc.)",
          "Main Class Plans (i.e. General Arrangement plan, mid ship section, etc.)",
          "Trim & Stability booklet",
          "Ultrasonic Thickness Measurement booklet"
        ]
      },
      {
        paragraphs: [
          "A prompt schedule for vessel’s attendance shall be determined in contact with ship operators to ensure minimal disruption to vessel’s trading activity.",
          "Statutory certificates are to be issued by GR Class on behalf of the Flag Administration following satisfactory completion of the applicable technical surveys in accordance with the International Conventions and or national applicable legislation."
        ]
      },
      {
        heading: "New Construction",
        paragraphs: [
          "We are deeply structured and technically groomed to execute the concept design to the delivery of the vessel. We ensure compliance with pertinent regulatory, quality, and operational standards.",
          "In a new building project, GR Class proceeds to:"
        ],
        list: [
          "Review of class-relevant design documentation, calculations and drawings",
          "Design approval, survey, certification of materials and equipment",
          "Supervision of the vessel’s construction on site",
          "Witnessing of functional tests, including dock and sea trials",
          "Initial Classification survey for the issue of ship’s Certificate of Class, H/M & Equipment",
          "Initial Statutory surveys for certification on behalf of intended Flag State"
        ]
      },
      {
        heading: "Transfer of class",
        paragraphs: [
          "Transfer of Class (ToC) is the formal process of moving a ship's classification from one classification society (losing society) to another (gaining society).",
          "Transferring an existing vessel to GR Class is a simple and inexpensive process. Owners may get in touch with any of our offices or place a request via the Class Entry Service Request Form.",
          "We shall contact with the loosing society and obtain pertinent ship’s survey and certification history, and class related documentation and provide guidance on survey schedules so as to minimize disruptions to commercial and operational obligations of your ship."
        ]
      },
      {
        heading: "Yacht Service",
        paragraphs: [
          "We deliver trusted classification survey and certification services for private and commercial yachts, ensuring compliance with relevant classification standards, enhancing safety and reliable yacht performance."
        ]
      },
      {
        heading: "Offshore service",
        paragraphs: [
          "We support the international off shore service by offering classification and technical solutions for MODUs, FPSOs and FSUs, Accommodation Platforms and other floating installations and mobile off shore units. We do rule development, design verification, and asset integrity management for marine and energy structures like oil rigs, FPSOs, and subsea systems to ensure these complex units operate safely, reliably, and in full compliance with global regulations.",
          "Our marine offshore activities include:"
        ],
        list: [
          "Review and Approval of unit’s design and corresponding engineering studies, manuals and plans, with applicable Rules & Standards;",
          "Determination of intended class notation under GR Class Rules",
          "Periodic scheduled surveys for maintenance of classification."
        ]
      },
      {
        heading: "Conversion projects",
        paragraphs: [
          "We ensures that a ship's conversion or modification project complies with stringent structural, safety, and environmental standards.",
          "GR class 4-Stage Conversion Process includes:"
        ],
        list: [
          "Feasibility & Basic Design Approval",
          "Fabrication & Modification Survey",
          "Commissioning & Sea Trials",
          "Recertification & Updated Notations"
        ]
      },
      {
        heading: "Approval of Plans and manuals",
        paragraphs: [
          "We undertake reviews and approvals of manuals in accordance with our Classification Rules and Regulations as well as national and international standards.",
          "Plan Approval Process: Plan approval is the verification of a ship’s design, structural integrity, and layout before construction, modification, or major repairs.",
          "Key Plans:"
        ],
        list: [
          "General Arrangement (GA) Plan: The overarching blueprint of the ship's layout, decks, and bulkheads.",
          "Structural Plans: Midship section, shell expansion, and hatch covers.",
          "Safety & Systems: Fire Control Plans, Life-Saving Appliances (LSA), ventilation, and fuel/ballast piping."
        ]
      },
      {
        heading: "Calculations & Verifications",
        paragraphs: [
          "Beyond ship’s constructional design and engineering approvals, GR Class provide review and approval of several marine manuals and statutory related plans including:"
        ],
        list: [
          "Shipboard Oil Pollution Emergency Plan (SOPEP)",
          "Shipboard Marine Pollution Emergency Plan (SMEP)",
          "Ballast Water Management Plan (BWMP)",
          "Ship-to-Ship Operational Manual (STS)",
          "Garbage Management Plan (GMP)",
          "Fire Control & Life Saving Plan",
          "Fire Safety Operational & Management Plan"
        ]
      }
    ],
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
      "Cargo Ship Safety Construction/Equipment/Radio",
      "International Load Line (LL) & Tonnage (ITC 69)",
      "ISM Code (DOC & SMC)",
      "ISPS Code (ISSC)",
      "Maritime Labor Certificate (MLC 2006)",
      "Various specific certificates (IOPP, IAPP, ISPP, etc.)",
    ],
    deliverables: [
      "International Statutory Certificates",
      "Compliance audit reports",
      "Flag state endorsements",
      "Digital verification via QR code",
    ],
    duration: "Periodic as per regulations",
    certifications: ["SOLAS", "MARPOL", "ITC 69", "ILLC 66", "MLC 2006"],
    detailedContent: [
      {
        heading: "Statutory services",
        paragraphs: [
          "GR CLASS is fully authorized to perform inspections and issue statutory certifications under the following international regulations:"
        ],
        list: [
          "Cargo Ship Safety Construction Certificate (CCC).",
          "Cargo Ship Safety Equipment Certificate (CEC).",
          "Cargo Ship Safety Radio Certificate (CRC).",
          "International Load Line Certificate (LL).",
          "International Tonnage Certificate (ITC 69).",
          "International Oil Pollution Prevention Certificate (IOPP).",
          "International Air Pollution Prevention Certificate (IAPP).",
          "International Sewage Pollution Prevention Certificate (ISPP).",
          "ISM Code (Document of Compliance-DOC & Safety Management Certificate-SMC).",
          "ISPS Code (International Ship Security Certificate-ISSC).",
          "Crew Accommodation Inspection Certificate (OMCA).",
          "Fishing Vessel Safety Certificate (FISVEL).",
          "Safety Certificate for Vessels under 500 GT (SAFCE).",
          "Radio Certificate for Vessels under 300 GT (SARCE).",
          "Authorization for Grain Loading Certificate (GRALO).",
          "Passenger Vessel Safety Certificate (PASAC).",
          "Pleasure Vessel Safety Certificate (PLECE).",
          "International Pollution Prevention Certificate for the Carriage of Noxious Liquid Substances in Bulk (NLS).",
          "International Certificate of Fitness for Carriage of Dangerous Chemicals in Bulk (IBC).",
          "Certificate of Fitness for Carriage of Dangerous Chemicals in Bulk (BCH).",
          "International Certificate of Fitness for Carriage of Liquefied Gases in Bulk (IGC).",
          "Certificate of Fitness for Carriage of Liquefied Gases in Bulk (GC).",
          "Anti-fouling Certificate (AFS).",
          "Special Purpose Ship Safety Certification (SPS).",
          "High Speed Craft Safety Certification (HSC).",
          "International Marine Bulk Cargoes Certificate (IMSBC).",
          "Certificate of the Carriage of Dangerous Goods (CDG).",
          "Caribbean Cargo Ship Safety Certificate (CCSSC).",
          "Maritime Labor Certificate (MLC 2006).",
          "International Energy Efficiency Certificate (IEEC).",
          "Hull & Machinery Class Certificate.",
          "Doc. of compliance with the special requirements for ships carrying dangerous goods (DOC-IMDG).",
          "Enhanced survey program (ESP).",
          "Certificate of prevention of pollution by garbage from ships.",
          "Declaration of Maritime Labour Compliance (DMLC) II.",
          "Manual, Booklets & Plan Approvals, etc."
        ]
      }
    ],
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
      "IHM & Ship Recycling",
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
    certifications: ["MEPC Resolutions", "EU Regulation No 1257/2013", "ISO 14001"],
    detailedContent: [
      {
        heading: "Ballast water Management(BWM)",
        paragraphs: [
          "Protecting the marine environment from invasive species.",
          "Ships that sail around the globe run the risk of carrying invasive aquatic species across the ocean, disrupting or harming marine ecosystems. To protect the environment, the International Maritime Organization (IMO) introduced the International Convention for the Control and Management of Ships’ Ballast Water & Sediments (BWM Convention). This regulation requires all vessels that carry ballast water to implement BWM management plans and improve treatment systems."
        ]
      },
      {
        heading: "IHM & Ship Recycling",
        paragraphs: [
          "Improper handling of hazardous materials can impact crew safety, and if not recorded properly, can expose an owner to risk and liability.",
          "Owners are faced with complying with EU Ship Recycling regulations and preparing for future IMO requirements.",
          "The primary regulations impacting the inventory of hazardous material are:"
        ],
        list: [
          "The Hong Kong International Convention for the Safe and Environmentally Sound Recycling of Ships, not yet in force, and",
          "The EU Regulation No 1257/2013 on Ship Recycling (EU SRR), which entered into force on 30 December 2013 and is applicable to offshore and marine vessels (including mobile offshore units) flagged with EU Member States and certain non-EU flagged vessels calling on EU ports."
        ]
      },
      {
        paragraphs: [
          "GR Class offers shipowners certification in accordance with the Hong Kong Convention and/or the EU Regulation, regardless of the ship’s current class, as delegated and authorized by Flag Administrations as its Recognized Organization (RO)."
        ]
      },
      {
        heading: "Energy Efficiency (EEDI-EEXI-CII)",
        paragraphs: [
          "In the maritime shipping industry, EEDI, EEXI, and CII are environmental regulations mandated by the International Maritime Organization (IMO) under MARPOL Annex VI."
        ],
        list: [
          "EEDI (Energy Efficiency Design Index): Mandatory for new ships. This indicates how much carbon dioxide (CO2) a new ship emits per mile while carrying cargo. The goal is to create a low-emission design.",
          "EEXI (Existing Ship Energy Efficiency Index): Applies to older/existing ships of 400 gross tons and over. This is similar to EEDI for older ships, requiring measures such as Engine Power Limitation.",
          "CII (Carbon Intensity Indicator): This measures how ships operate. Ships larger than 5,000 gross tons are given an A, B, C, D, or E rating based on their annual emissions.",
          "SEEMP (Ship Energy Efficiency Management Plan): This is a practical plan (document) that outlines how each ship will improve its energy efficiency and meet CII targets."
        ]
      },
      {
        heading: "How we assist – Energy Efficiency Services for ships",
        paragraphs: [
          "Under MARPOL Annex VI, technical and operational measures were adopted at the IMO level aiming to reduce carbon intensity of international shipping.",
          "GR Class offers Energy Efficiency services relevant to the assessment, approval and certification of:"
        ],
        list: [
          "EEDI RELATED SERVICES: Assessment and verification of Ship’s Energy Efficiency Design Index (EEDI).",
          "Review & Approval of Ship Energy Efficiency Management Plan (SEEMP).",
          "Survey for the issuance of the International Ship Energy Efficiency Certificate.",
          "EEXI & CII RELATED SERVICES: Assessment and verification of Ship’s Energy Efficiency Existing Ship Index (EEXI), applicable from the first annual, intermediate or renewal IAPP survey after 1 January 2023.",
          "Review & Approval of the enhanced Ship’s Energy Efficiency Management Plan (SEEMP III), whereby an approved SEEMP needs to be kept onboard from 1 January 2023.",
          "Assessment and determination of ship’s operational Carbon Intensity Indicator (CII) rating scheme, from 1 January 2023 onwards."
        ]
      },
      {
        heading: "EU MRV COMPLIANCE",
        paragraphs: [
          "EU MRV for ships larger than 400 GT",
          "The EU Monitoring, Reporting and Verification (EU MRV) Maritime Regulation (Regulation (EU) 2015/757) aims to assess the environmental impact of maritime transport by collecting and reporting emissions data. It serves as the foundation for carbon tax determination through the EU Emissions Trading System (EU ETS) and Fuel EU Maritime regulation. The EU MRV applies to vessels engaged in commercial transport of cargo or passengers on routes which begin and/or end at ports within the European Economic Area (EEA).",
          "From 1 January 2025, the revised EU MRV regulations encompass general cargo ships between 400 and 5000 GT, as well as offshore ships of 400 GT and above.",
          "GR Class can help ship owners and operators comply with the EU MRV, offering a thorough understanding of regulations and environmental performance services. As an accredited EU MRV, GR can provide services required by EU MRV regulation, including:"
        ],
        list: [
          "EU MRV monitoring plan assessment,",
          "Annual EU MRV report verification",
          "Issuance of documents confirming compliance"
        ]
      },
      {
        heading: "Vessel emergency response services",
        paragraphs: [
          "The Emergency Response Service (ERS) is aimed at providing a speedy assessment of the stability and longitudinal strength of a damaged ship in an emergency event. All salient data of the vessels relating to the main hull and its components is stored in computer system along with the loading guidance and strength data. In the event of an emergency, the assessment is carried out using the stored data and details of the damage sustained by means of in-house computer software.",
          "Why Choose GR Class? All vessels, irrespective of whether it is classed with us, can enroll on our Ships Emergency Response Service. Reasons to choose us include:"
        ],
        list: [
          "We have the technical expertise with relevant experience",
          "We can co-ordinate with regulatory authorities who can extend necessary help to your vessel regardless of your ship position",
          "Available at any time 24 hours a day, 365 days a year.",
          "Computer-based strength & stability analysis for damaged ships.",
          "Meets the MARPOL 73/78 Annex 1 “Shore-based Computer Programs” requirement for 5,000 + dwt oil tankers."
        ]
      }
    ]
  },
  {
    slug: "other-services",
    eyebrow: "Support",
    title: "Other Services",
    tagline: "Technical expertise and compliance support for maritime operations.",
    description:
      "Beyond core surveys, we offer specialized technical advisory and compliance support to help you manage complex maritime issues effectively.",
    image: surveyImg,
    scope: [
      "Compliances Support",
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
    detailedContent: [
      {
        heading: "Compliances support",
        paragraphs: [
          "We provide critical compliance support to the maritime industry by setting technical standards, verifying vessel integrity, and conducting audits on behalf of flag states. They ensure ships meet global safety and environmental mandates, enabling operators to secure insurance, register vessels, and access ports without regulatory penalty."
        ]
      },
      {
        heading: "Remote Surveys",
        paragraphs: [
          "We conduct remote survey and audit activities as new methods of supporting specific type of inspection assignments in locations where on-board access is not possible, to assist operational continuity for our fleet.",
          "Our remote survey services aim to assisting that vessels remain compliant with classification and statutory requirements without disrupting operations. GR Class offered remote survey solutions include:"
        ],
        list: [
          "Occasional Surveys between scheduled surveys",
          "Documentation based surveys- Review and approval for updated documentation, manuals, and onboard plans remotely to ensure compliance",
          "Rectification of minor deficiencies- Verification of corrective actions taken to address deficiencies previously identified during surveys.",
          "Remote interim audits for ISM, ISPS, and MLC certification."
        ]
      },
      {
        paragraphs: [
          "Further, Remote surveys are subject to each vessel’s pertinent flag Administration authorization and consent."
        ]
      },
      {
        heading: "Port State Control",
        paragraphs: [
          "Port State Control (PSC) is an inspection regime where national authorities inspect foreign-flagged ships in their ports to ensure they comply with international safety, environmental, and labor conventions.",
          "Our approach: GR Class maintains a strong oversight and emphasis on continuous Port State Control performance improvement in the various PSC Regional Memorandum of Understanding (MOUs) with the aim to maintain and enhance long-term quality growth and competitiveness.",
          "Recognizing the importance of Port State Control performance, GR Class collaborates closely with Flag States and ship operators to improve their fleet’s associated PSC records through the sharing of detention prevention measures, the use of pre-arrival checklist tools, and advice and guidance on the implementation of new enforced statutory regulations and related requirements."
        ]
      },
      {
        heading: "Technical Advisory Services",
        paragraphs: [
          "In Technical advisory services for ships, we provide expert marine engineering, regulatory compliance, and operational optimization. By engaging with our clients & gaining an in-depth understanding of their needs and challenges, our experts can deliver tangible improvements to asset and business performance, safely & responsibly.",
          "In an increasingly digital world, we partner with clients to go beyond compliance, enabling their assets to perform reliably, efficiently and with a significantly reduced level of risk and cost."
        ]
      }
    ]
  },
];

export const getServiceBySlug = (slug: string) =>
  servicesCatalogue.find((s) => s.slug === slug);
