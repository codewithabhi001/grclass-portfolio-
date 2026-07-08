import { Helmet } from 'react-helmet-async';
import { site } from '@/lib/site';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  type?: 'website' | 'article';
  image?: string;
  url?: string;
  noindex?: boolean;
  schema?: Record<string, unknown> | Record<string, unknown>[];
  datePublished?: string;
  dateModified?: string;
}

export function SEO({ 
  title, 
  description, 
  keywords, 
  type = 'website',
  image = '/og-image.png',
  url,
  noindex = false,
  schema,
  datePublished,
  dateModified,
}: SEOProps) {
  const metaTitle = title ? `${title} | ${site.name}` : `${site.name} | ${site.tagline}`;
  const metaDescription = description || site.description;
  const canonicalUrl = url ? `${site.url}${url}` : site.url;
  const defaultKeywords = "GR Class, GR Class Maritime, classification society, vessel surveys, statutory certification, digital verification, maritime classification, RO, Recognized Organization, ship classification, marine surveys";
  const metaKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;
  // Use absolute URL for OG image so social platforms can resolve it
  const ogImage = image.startsWith('http') ? image : `${site.url}${image}`;

  // Build JSON-LD array
  const schemas: Record<string, unknown>[] = [];
  if (schema) {
    if (Array.isArray(schema)) {
      schemas.push(...schema);
    } else {
      schemas.push(schema);
    }
  }

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content={site.name} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter — uses name attribute per Twitter Card spec */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Article dates */}
      {datePublished && <meta property="article:published_time" content={datePublished} />}
      {dateModified && <meta property="article:modified_time" content={dateModified} />}

      {/* Structured Data (JSON-LD) */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
      ))}
    </Helmet>
  );
}
