import LegalPageClient from "./LegalPageClient";

export function generateStaticParams() {
  return [
    { doc: "privacy" },
    { doc: "terms" },
    { doc: "compliance" }
  ];
}

const docTitles: Record<string, string> = {
  privacy: "Privacy Policy",
  terms: "Terms of Service",
  compliance: "Regulatory Compliance & Ethics",
};

export async function generateMetadata({ params }: { params: Promise<{ doc: string }> }) {
  const { doc } = await params;
  const title = docTitles[doc] || "Legal Document";
  return {
    title: `${title} | GR Class`,
    description: `Official ${title.toLowerCase()} and governance policies of GR Class Maritime Classification Society.`,
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function Page() {
  return <LegalPageClient />;
}
