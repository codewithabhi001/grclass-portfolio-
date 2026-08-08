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
  title: "Ship Classification Society & Statutory Surveys | GR Class",
  description: "GR Class is a Recognized Organization delivering ship classification, statutory certification & compliance surveys across 120+ ports worldwide.",
  metadataBase: new URL("https://grclass.com"),
  alternates: {
    canonical: "/", // This will result in https://grclass.com/ (trailing slash logic applied by Next.js or config)
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "GR Class",
  "url": "https://grclass.com",
  "description": "Recognized Organization (RO) & Classification Society delivering statutory vessel surveys, digital certification & maritime compliance.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "YOUR STREET ADDRESS",
    "addressLocality": "YOUR CITY",
    "addressCountry": "YOUR COUNTRY"
  },
  "sameAs": [
    "https://facebook.com/grclass",
    "https://x.com/grclass",
    "https://instagram.com/grclass",
    "https://linkedin.com/company/grclass",
    "https://youtube.com/@grclass"
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
          id="schema-local-business"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
