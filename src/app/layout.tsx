import type { Metadata, Viewport } from "next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Providers } from "./providers"; // We will create this
import Script from "next/script";

import "../index.css"; // Global styles

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "GR Class | Ship Classification Society & Statutory Marine Services",
    template: "%s | GR Class",
  },
  description:
    "GR Class (grclass) is an international Ship Classification Society & Recognized Organization (RO/RSO) providing maritime classification, statutory vessel surveys, flag state authorization, and marine certifications across 120+ ports worldwide.",
  applicationName: "GR Class",
  authors: [{ name: "GR Class", url: "https://grclass.com" }],
  generator: "Next.js",
  keywords: [
    "GR Class",
    "gr class",
    "grclass",
    "GR class",
    "GRClass",
    "Girik Class",
    "Ship Classification Society",
    "Classification Society",
    "Maritime Classification Society",
    "Marine Service Society",
    "Marine Services Society",
    "Marine Classification",
    "Vessel Classification",
    "Recognized Organization",
    "RO",
    "RSO",
    "Flag Statutory Services",
    "Statutory Vessel Surveys",
    "Marine Survey and Certification",
    "Ship Surveyors",
    "Maritime Safety Compliance",
    "SOLAS Compliance",
    "MARPOL Compliance",
    "Load Line Certification",
    "Tonnage Measurement",
    "IMO Approved Classification",
    "Transfer of Class",
    "New Ship Construction Survey",
    "Plan Approval Maritime",
    "Maritime Society",
    "Ship Inspection Society",
    "Yacht Classification",
    "Offshore MODU Classification",
  ],
  creator: "GR Class",
  publisher: "GR Class Maritime Classification Society",
  metadataBase: new URL("https://grclass.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://grclass.com",
    siteName: "GR Class - Ship Classification Society",
    title: "GR Class | Ship Classification Society & Statutory Marine Services",
    description:
      "Official website of GR Class (grclass). Recognized Organization (RO) & Classification Society providing worldwide ship classification, statutory vessel surveys, and marine certification.",
    images: [
      {
        url: "https://grclass.com/grclass-logo.webp",
        width: 800,
        height: 600,
        alt: "GR Class - Classified for Standards",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GR Class | Ship Classification Society",
    description:
      "GR Class (grclass) delivers international ship classification, statutory surveys, and maritime certification worldwide.",
    site: "@grclassofficial",
    creator: "@grclassofficial",
    images: ["https://grclass.com/grclass-logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Maritime & Shipping",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "Corporation"],
      "@id": "https://grclass.com/#organization",
      "name": "GR Class",
      "alternateName": [
        "grclass",
        "gr class",
        "GR class",
        "GRClass",
        "Girik Class",
        "GR Class Maritime",
        "GR Classification Society",
        "GR Class Ship Classification Society",
        "Marine Service Society GR Class"
      ],
      "legalName": "GR Class",
      "url": "https://grclass.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://grclass.com/grclass-logo.webp",
        "caption": "GR Class Logo"
      },
      "description":
        "Recognized Organization (RO), Recognized Security Organization (RSO), and Ship Classification Society authorized to deliver statutory vessel surveys, class certification, and maritime compliance services worldwide.",
      "telephone": "+971555324087",
      "email": "info@grclass.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "B.C. 1304883, C1 Building, Ajman District Business, Makani No – 4442612247",
        "addressLocality": "Ajman",
        "addressRegion": "Ajman",
        "addressCountry": "AE"
      },
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61593836337234",
        "https://x.com/grclassofficial",
        "https://www.instagram.com/grclassofficial/",
        "https://linkedin.com/company/grclass"
      ],
      "knowsAbout": [
        "Ship Classification",
        "Maritime Classification Society",
        "Flag Statutory Services",
        "SOLAS Compliance",
        "MARPOL Compliance",
        "Load Line Certification",
        "Tonnage Measurement",
        "Vessel Surveys & Inspections",
        "Transfer of Class",
        "Recognized Organization (RO)",
        "Recognized Security Organization (RSO)"
      ],
      "department": [
        {
          "@type": "Organization",
          "name": "GR Class India Office",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Office No - 6, Hermes Atrium, Sector -11, CBD Belapur",
            "addressLocality": "Navi Mumbai",
            "addressRegion": "Maharashtra",
            "addressCountry": "IN"
          }
        },
        {
          "@type": "Organization",
          "name": "GR Class Greece Office",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Notara Str. 110",
            "addressLocality": "Piraeus",
            "postalCode": "18535",
            "addressCountry": "GR"
          }
        },
        {
          "@type": "Organization",
          "name": "GR Class Panama Office",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Edificio Global Plaza, Calle 50, Piso 21",
            "addressLocality": "Panama City",
            "addressCountry": "PA"
          }
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://grclass.com/#website",
      "url": "https://grclass.com",
      "name": "GR Class",
      "alternateName": ["grclass", "gr class", "GR class", "GRClass", "GR Class Maritime Classification"],
      "publisher": {
        "@id": "https://grclass.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://grclass.com/vessel-search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Fonts | preconnect first so the stylesheet request starts on the
            first paint pass instead of queuing behind our CSS bundle. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;400;600;700;800&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&family=Gelasio:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600;1,700&display=swap"
        />

        {/* AI & LLM Discovery Link */}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM Context Documentation" />

        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        
        {/* Schema.org JSON-LD */}
        <Script
          id="schema-structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <Providers>
          <SmoothScroll />
          {children}
          <Toaster />
          <Sonner />
        </Providers>
      </body>
    </html>
  );
}
