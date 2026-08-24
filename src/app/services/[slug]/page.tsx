import ServiceDetailPageClient from "./ServiceDetailPageClient";
import { servicesCatalogue } from "@/data/services";

export function generateStaticParams() {
  return servicesCatalogue.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesCatalogue.find((s) => s.slug === slug);
  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested maritime service could not be found.",
    };
  }
  return {
    title: `${service.title} | Marine Services & Classification`,
    description: `${service.tagline} ${service.description.slice(0, 120)}... Expert statutory & classification surveys delivered worldwide by GR Class.`,
    keywords: [
      service.title,
      "GR Class",
      "grclass",
      "gr class",
      "GR class",
      "Maritime Classification",
      "Ship Classification Society",
      "Recognized Organization",
      "Statutory Marine Services",
      service.category,
    ],
    openGraph: {
      title: `${service.title} | GR Class`,
      description: service.tagline || service.description,
    },
  };
}

export default function Page() {
  return <ServiceDetailPageClient />;
}
