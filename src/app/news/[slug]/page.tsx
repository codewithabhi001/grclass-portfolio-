import NewsArticlePageClient from "./NewsArticlePageClient";
import { newsItems as staticNewsItems } from "@/data/news";

export async function generateStaticParams() {
  const staticSlugs = staticNewsItems.map((item) => ({ slug: item.slug }));
  return staticSlugs;
}

export const metadata = {
  title: "Please wait",
  description: "",
};

export default function Page() {
  return <NewsArticlePageClient />;
}
