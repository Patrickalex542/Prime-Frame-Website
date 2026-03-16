import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { MobileStabilizer } from "@/components/features/mobile-stabilizer";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Agency",
  "name": "PRIME FRAME",
  "url": "https://primeframe.ro",
  "logo": "https://primeframe.ro/images/logo-icon.jpg",
  "sameAs": [
    "https://www.instagram.com/primeframe.ro",
    "https://www.tiktok.com/@primeframe.ro"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Strada ANGHEL MOLDOVEANU, Nr. 59",
    "addressLocality": "București",
    "addressRegion": "București",
    "postalCode": "041697",
    "addressCountry": "RO"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+40-763-481-568",
    "contactType": "sales",
    "email": "contact@primeframe.ro",
    "areaServed": "RO",
    "availableLanguage": ["Romanian", "English"]
  },
  "description": "Studio de creație AI specializat în conținut video și static cinematic pentru performance marketing."
}

export const metadata: Metadata = {
  title: "PRIME FRAME | AI Studio",
  description:
    "Transformăm viziunea ta în realitate vizuală. Studio specializat în creativități video și statice de impact, generate cu AI, pentru branduri care vor să domine piața digitală.",
  keywords: [
    "AI advertising agency",
    "video production AI",
    "digital marketing assets",
    "creative studio Romania",
  ],
  authors: [{ name: "PRIME FRAME", url: "https://primeframe.ro" }],
  creator: "PRIME FRAME",
  publisher: "PRIME FRAME",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://primeframe.ro'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "PRIME FRAME | AI Creative Studio",
    description: "Creativitate fără limite. Descoperă portofoliul nostru de vizualuri generate cu AI pentru campanii de succes.",
    url: "https://primeframe.ro",
    siteName: "PRIME FRAME",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "/images/logo-icon.jpg", 
        width: 800,
        height: 600,
        alt: "PRIME FRAME - AI Creative Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PRIME FRAME - Agenție AI",
    description: "Reclame Video & Foto AI de impact pentru campanii digitale.",
    images: ["/images/logo-icon.jpg"], 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/assets/icons/fara_baground.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/assets/icons/fara_baground.svg", // Use the same SVGs or generate a PNG if needed later
  },
};

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, // Prevent zoom on mobile
  userScalable: false, // Disable pinch-to-zoom
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="dark scroll-smooth">
      <body className={`font-sans antialiased`}>
        <MobileStabilizer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
