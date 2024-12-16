import "@/app/globals.css";
import { Inter } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://itnotezs.com"), // Update with your domain
  title: {
    default: "ITNOTEZS - Your IT Solutions Partner",
    template: "%s | ITNOTEZS",
  },
  description:
    "Professional IT services and consulting for all your technology needs. Expert solutions in hardware, software, web development, and IT infrastructure.",
  keywords: [
    "IT Solutions",
    "Web Development",
    "Hardware Solutions",
    "Network Configuration",
    "IT Services",
    "Technical Support",
  ],
  authors: [{ name: "ITNOTEZS" }],
  creator: "ITNOTEZS",
  publisher: "ITNOTEZS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://itnotezs.com",
    title: "ITNOTEZS - Your IT Solutions Partner",
    description:
      "Professional IT services and consulting for all your technology needs",
    siteName: "ITNOTEZS",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ITNOTEZS - IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ITNOTEZS - Your IT Solutions Partner",
    description:
      "Professional IT services and consulting for all your technology needs",
    images: ["/og-image.jpg"],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
