import { ParticleBackground } from "@/components/particle-background";
import { ServiceBento } from "@/components/service-bento";
import { Button } from "@/components/ui/button";
import { HoverEffect } from "@/components/ui/card-hover-effects";
import {
  Laptop,
  Server,
  Network,
  Globe,
  PenToolIcon as Tool,
  HeadphonesIcon,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ITNOTEZS - Solusi IT Profesional | Jasa IT Service Terpercaya",
  description:
    "Layanan IT profesional terpercaya meliputi service komputer & laptop, setup jaringan, pengembangan software, dan konfigurasi server/cloud. Solusi teknologi lengkap untuk kebutuhan bisnis Anda.",
  keywords: [
    "jasa service laptop Jakarta",
    "service komputer panggilan",
    "teknisi komputer profesional",
    "perbaikan laptop Jakarta",
    "instalasi jaringan komputer",
    "setup wifi kantor",
    "konfigurasi jaringan bisnis",
    "pasang LAN Jakarta",
    "jasa pembuatan software",
    "pengembangan aplikasi bisnis",
    "pembuatan website perusahaan",
    "jasa pembuatan sistem",
    "jasa konfigurasi server",
    "setup cloud server",
    "instalasi server Jakarta",
    "maintenance server",
    "jasa IT profesional Jakarta",
    "konsultan IT Jakarta",
    "solusi IT bisnis",
    "layanan IT terpercaya",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://itnotezs.com",
    title: "ITNOTEZS - Solusi IT Profesional | Jasa IT Service Terpercaya",
    description:
      "Layanan IT profesional terpercaya untuk kebutuhan bisnis Anda. Service komputer, jaringan, software, dan server dengan tenaga ahli berpengalaman.",
    siteName: "ITNOTEZS",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ITNOTEZS - Solusi IT Profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ITNOTEZS - Solusi IT Profesional",
    description:
      "Layanan IT profesional terpercaya untuk kebutuhan bisnis Anda. Service komputer, jaringan, software, dan server.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://itnotezs.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://itnotezs.com/#webpage",
  name: "ITNOTEZS - Solusi IT Profesional",
  description: "Layanan IT profesional terpercaya untuk kebutuhan bisnis Anda",
  url: "https://itnotezs.com",
  provider: {
    "@type": "Organization",
    name: "ITNOTEZS",
    "@id": "https://itnotezs.com",
  },
  offers: {
    "@type": "AggregateOffer",
    offers: [
      {
        "@type": "Offer",
        name: "Service Komputer dan Laptop",
        description:
          "Layanan perbaikan dan maintenance komputer & laptop profesional",
      },
      {
        "@type": "Offer",
        name: "Setup Jaringan",
        description: "Instalasi dan konfigurasi jaringan untuk bisnis",
      },
      {
        "@type": "Offer",
        name: "Pengembangan Software",
        description: "Pembuatan aplikasi dan sistem sesuai kebutuhan",
      },
      {
        "@type": "Offer",
        name: "Konfigurasi Server",
        description: "Setup dan maintenance server/cloud",
      },
    ],
  },
};

export default function Home() {
  const services = [
    {
      title: "OS Setup & Installation",
      description:
        "Professional operating system installation and configuration services",
      icon: Laptop,
    },
    {
      title: "Hardware Replacement",
      description: "Expert laptop and PC spare parts replacement services",
      icon: Tool,
    },
    {
      title: "Web Development",
      description:
        "Custom website development including landing pages, company profiles, and web applications",
      icon: Globe,
    },
    {
      title: "Server Setup",
      description: "Complete server setup and configuration services",
      icon: Server,
    },
    {
      title: "Network Configuration",
      description: "Professional network setup and configuration services",
      icon: Network,
    },
    {
      title: "Remote Support",
      description: "Comprehensive remote IT support services",
      icon: HeadphonesIcon,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <main className="flex-1">
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <ParticleBackground />
          <div className="container px-4 md:px-6 relative z-10">
            {" "}
            {/* Added relative z-10 */}
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Your Complete IT Solutions Partner
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Professional IT services and consulting for all your
                  technology needs. From hardware to software, we&apos;ve got
                  you covered.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="#services">Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Services
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Comprehensive IT solutions tailored to your needs
                </p>
              </div>
            </div>

            <HoverEffect
              items={services.map((service) => ({
                title: (
                  <div className="flex items-center gap-2">
                    <service.icon className="h-8 w-8 text-primary" />
                    <span>{service.title}</span>
                  </div>
                ),
                description: service.description,
              }))}
              className="pt-8"
            />
          </div>
        </section>
        <ServiceBento />
      </main>
    </>
  );
}
