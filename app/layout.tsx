import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Montserrat, Lora } from "next/font/google";
import { SITE } from "@/lib/constants";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  applicationName: SITE.name,
  authors: [{ name: "Steve Camp" }],
  keywords: [
    "Steve Camp",
    "San Clemente City Council",
    "District 1",
    "San Clemente election 2026",
    "city council candidate",
    "San Clemente",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE.url}/#steve-camp`,
        name: "Steve Camp",
        jobTitle: "Candidate for San Clemente City Council, District 1",
        description: SITE.description,
        url: SITE.url,
        image: `${SITE.url}/images/headshot.jpg`,
        sameAs: [SITE.socialMedia.facebook, SITE.socialMedia.instagram],
        address: {
          "@type": "PostalAddress",
          addressLocality: "San Clemente",
          addressRegion: "CA",
          addressCountry: "US",
        },
      },
      {
        "@type": "WebSite",
        name: SITE.name,
        url: SITE.url,
        description: SITE.description,
        about: { "@id": `${SITE.url}/#steve-camp` },
      },
    ],
  };

  return (
    <html lang="en" className={`${montserrat.variable} ${lora.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
