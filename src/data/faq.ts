/**
 * FAQ content | grouped by topic.
 */
export interface FaqGroup {
  topic: string;
  items: { q: string; a: string }[];
}

export const faqs: FaqGroup[] = [
  {
    topic: "Classification Scope",
    items: [
      {
        q: "Which vessel types does GR Class certify?",
        a: "Cargo vessels (bulk, tanker, container, general cargo), offshore units, passenger vessels, and specialised craft from 500 GT upward. We do not currently classify naval or pleasure craft.",
      },
      {
        q: "Is GR Class an IACS member?",
        a: "GR Class holds IACS Observer status. We adopt IACS unified requirements in full and participate in technical working groups, with full membership currently under review.",
      },
      {
        q: "Which flag administrations recognise GR Class?",
        a: "Forty-plus flag states delegate statutory work to GR Class, including major open registries. A complete list is available on request and updated quarterly.",
      },
    ],
  },
  {
    topic: "Costs & Engagement",
    items: [
      {
        q: "How are survey fees structured?",
        a: "Surveys are quoted on a fixed-fee basis where scope is defined, or on a daily-rate basis for non-routine work. Travel and standby time are billed at cost.",
      },
      {
        q: "Is there a minimum engagement period?",
        a: "No. Owners can engage GR Class for a single survey, a transfer of class, or a multi-year fleet relationship. Transfer of class follows IACS PR 1A.",
      },
      {
        q: "Are initial consultations chargeable?",
        a: "No. Scoping conversations and feasibility discussions are always complimentary.",
      },
    ],
  },
  {
    topic: "Timelines",
    items: [
      {
        q: "How quickly can a surveyor be dispatched?",
        a: "Within 24 hours to any of our 120+ covered ports. For emergency damage surveys, our regional duty surveyor responds within 4 hours.",
      },
      {
        q: "How long does transfer of class take?",
        a: "Typically 10–20 working days from records review to issuance of new class certificate, assuming no outstanding conditions.",
      },
      {
        q: "When are certificates issued after a survey?",
        a: "Digital certificates are issued within 48 hours of survey close-out, subject to satisfactory findings.",
      },
    ],
  },
  {
    topic: "Verification & Digital",
    items: [
      {
        q: "How can I verify a GR Class certificate?",
        a: "Visit grclass.com/verify and enter the certificate reference, or scan the QR code printed on the certificate. Verification is instant and free.",
      },
      {
        q: "Are GR Class certificates accepted by port state control?",
        a: "Yes. Our certificates are issued under flag-state delegation and are accepted by all major PSC regimes including Paris MoU, Tokyo MoU, and USCG.",
      },
    ],
  },
];
