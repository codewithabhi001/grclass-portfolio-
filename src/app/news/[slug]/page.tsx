import NewsArticlePageClient from "./NewsArticlePageClient";
import { newsItems as staticNewsItems } from "@/data/news";

export async function generateStaticParams() {
  const staticSlugs = staticNewsItems.map((item) => ({ slug: item.slug }));
  return staticSlugs;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = staticNewsItems.find((item) => item.slug === slug);
  if (!article) {
    return {
      title: "News Article",
      description: "Latest maritime updates from GR Class.",
    };
  }
  return {
    title: `${article.title} | Maritime Insights`,
    description: article.excerpt || `${article.title} - Read the latest technical insights and regulatory updates from GR Class classification society.`,
    keywords: [
      "GR Class News",
      "grclass",
      "gr class",
      "Maritime News",
      "Ship Classification Updates",
      article.category || "Maritime",
    ],
    openGraph: {
      title: `${article.title} | GR Class`,
      description: article.excerpt,
    },
  };
}

export default function Page() {
  return <NewsArticlePageClient />;
}
