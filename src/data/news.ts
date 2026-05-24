/**
 * News & insight content | editorial bulletins.
 */
export interface NewsItem {
  slug: string;
  category: "Rule Change" | "Bulletin" | "Industry" | "GR Class";
  date: string;
  title: string;
  excerpt: string;
  readTime: string;
}

export const newsItems: NewsItem[] = [
  {
    slug: "ammonia-fuel-readiness-2025",
    category: "Bulletin",
    date: "2025-03-12",
    title: "Ammonia fuel readiness: technical bulletin TB-2025-04",
    excerpt:
      "Updated guidance on ammonia bunkering, gas detection, and crew competency requirements for vessels seeking GR Class notation.",
    readTime: "6 min",
  },
  {
    slug: "ur-z7-revision",
    category: "Rule Change",
    date: "2025-02-28",
    title: "Unified requirement UR Z7 revision adopted | survey scope expanded",
    excerpt:
      "Effective 1 July 2025, the periodic survey scope under UR Z7 will include additional remote inspection provisions.",
    readTime: "4 min",
  },
  {
    slug: "singapore-office-expansion",
    category: "GR Class",
    date: "2025-02-10",
    title: "Singapore regional hub doubles surveyor capacity",
    excerpt:
      "Eighteen new exclusive surveyors join the Asia-Pacific team, reducing dispatch times across the Malacca Strait.",
    readTime: "3 min",
  },
  {
    slug: "cii-2025-thresholds",
    category: "Industry",
    date: "2025-01-22",
    title: "CII 2025 thresholds | what owners need to know",
    excerpt:
      "The reduction factor tightens to 5%. We summarise the operational levers that move the dial for bulk and tanker fleets.",
    readTime: "8 min",
  },
  {
    slug: "digital-certificate-v3",
    category: "GR Class",
    date: "2024-12-18",
    title: "Digital certificate platform v3 released",
    excerpt:
      "Faster verification, offline QR fallback, and direct integration with major flag-state registries.",
    readTime: "5 min",
  },
  {
    slug: "mlc-2024-amendments",
    category: "Rule Change",
    date: "2024-11-30",
    title: "MLC 2024 amendments | implementation timeline",
    excerpt:
      "Crew welfare, repatriation, and connectivity provisions enter force in stages through 2026. Audit checklist inside.",
    readTime: "7 min",
  },
];
