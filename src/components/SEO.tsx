import { Helmet } from 'react-helmet-async';
import { site } from '@/lib/site';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  type?: 'website' | 'article';
  image?: string;
  url?: string;
}

export function SEO({ 
  title, 
  description, 
  keywords, 
  type = 'website',
  image = '/og-image.png',
  url
}: SEOProps) {
  const metaTitle = title ? `${title} | ${site.name}` : `${site.name} | ${site.tagline}`;
  const metaDescription = description || site.description;
  const canonicalUrl = url ? `${site.url}${url}` : site.url;
  const defaultKeywords = "GR Class, GR Class Maritime, classification society, vessel surveys, statutory certification, digital verification, maritime classification, RO, Recognized Organization, ship classification, marine surveys";
  const metaKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={metaTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
}
