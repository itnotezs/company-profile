// app/layout.tsx
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata, Viewport } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://itnotezs.com"),
  title: {
    default: "ITNOTEZS - Solusi IT Profesional",
    template: "%s | ITNOTEZS",
  },
  description: "Solusi teknologi terpercaya untuk kebutuhan IT bisnis Anda",
  applicationName: "ITNOTEZS",
  authors: [{ name: "ITNOTEZS" }],
  generator: "Next.js",
  keywords: ["IT Solutions", "Jasa IT", "IT Service"],
  referrer: "origin-when-cross-origin",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
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
  alternates: {
    canonical: "https://itnotezs.com",
  },
};

export const viewport: Viewport = {
  themeColor: "#1B365D",
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://itnotezs.com",
  name: "ITNOTEZS",
  url: "https://itnotezs.com",
  logo: "https://itnotezs.com/LOGO.jpg",
  description: "Penyedia layanan IT profesional untuk bisnis di Indonesia",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jakarta",
    addressRegion: "DKI Jakarta",
    addressCountry: "ID",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "08980056345",
    contactType: "customer service",
    areaServed: "ID",
    availableLanguage: ["id", "en"],
  },
  sameAs: ["https://facebook.com/itnotezs", "https://instagram.com/itnotezs"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
