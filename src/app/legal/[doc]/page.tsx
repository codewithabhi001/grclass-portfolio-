import LegalPageClient from "./LegalPageClient";

export function generateStaticParams() {
  return [
    { doc: "privacy" },
    { doc: "terms" },
    { doc: "compliance" }
  ];
}

export const metadata = {
  title: "",
  description: "",
};

export default function Page() {
  return <LegalPageClient />;
}
