import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PRIME FRAME - Agenție de Publicitate AI pentru iGaming",
  description:
    "Creativități video și statice de impact, generate cu AI, special pentru branduri de iGaming și performance marketing.",
  generator: "v0.app",
  keywords: [
    "AI advertising",
    "iGaming marketing",
    "video ads AI",
    "creative agency",
    "Prime Frame",
  ],
  authors: [{ name: "PRIME FRAME" }],
  openGraph: {
    title: "PRIME FRAME - Reclame AI de Impact",
    description:
      "Portofoliu de creativități generate cu AI pentru branduri competitive.",
    url: "https://primeframe.ro",
    siteName: "PRIME FRAME",
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PRIME FRAME - Agenție AI",
    description: "Reclame AI de impact pentru iGaming.",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="dark scroll-smooth">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
