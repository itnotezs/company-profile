// app/contact/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact ITNOTEZS - Professional IT Solutions & Services",
  description:
    "Get in touch with ITNOTEZS for all your IT needs. From hardware solutions to web development, our expert team is ready to help transform your technology challenges into success.",
  openGraph: {
    title: "Contact ITNOTEZS - Professional IT Solutions & Services",
    description:
      "Get in touch with ITNOTEZS for all your IT needs. From hardware solutions to web development, our expert team is ready to help transform your technology challenges into success.",
    type: "website",
  },
  keywords: [
    "IT services",
    "contact form",
    "technical support",
    "IT solutions",
    "professional IT services",
    "web development",
    "hardware solutions",
  ],
};

import { ContactForm } from "./contact-form";

export default function ContactPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Let&apos;s Work Together
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Ready to transform your IT infrastructure or start a new
                project? We&apos;re here to help you succeed.
              </p>
              <p className="mx-auto max-w-[800px] text-gray-500 mt-4 md:text-lg dark:text-gray-400">
                Please fill out the contact form below to discuss your
                requirements. Whether you need hardware solutions, web
                development, or IT consulting, our team of experts is ready to
                assist you in achieving your technology goals.
              </p>
            </div>
          </div>

          <ContactForm />

          <div className="mt-12 text-center">
            <p className="text-gray-500 dark:text-gray-400">
              Your information is secure and encrypted. We typically respond
              within 24 business hours.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
