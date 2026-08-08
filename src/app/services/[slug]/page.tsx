import ServiceDetailPageClient from "./ServiceDetailPageClient";
import { servicesCatalogue } from "@/data/services";

export function generateStaticParams() {
  return servicesCatalogue.map((s) => ({
    slug: s.slug,
  }));
}

export const metadata = {
  title: "",
  description: "",
};

export default function Page() {
  return <ServiceDetailPageClient />;
}
