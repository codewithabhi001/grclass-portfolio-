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
        q: "Does GR Class follow standard class rules?",
        a: "We adopt standard class unified requirements and procedures in full, ensuring that our class rules conform to the highest safety and quality standards recognized globally.",
      },
      {
        q: "Which flag administrations recognise GR Class?",
        a: "GR Class is delegated statutory authority by 5 flag administrations, including major registries. A complete list is available on request.",
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
        a: "No. Owners can engage GR Class for a single survey, a transfer of class, or a multi-year fleet relationship. Transfer of class follows standard international class procedures.",
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
        a: "Within 24 hours to any of our 40+ covered ports. For emergency damage surveys, our regional duty surveyor responds within 4 hours.",
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
        a: "Yes. Our certificates are issued under flag-state delegation and are fully accepted by port state control authorities worldwide.",
      },
    ],
  },
];
