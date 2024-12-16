import { ParticleBackground } from "@/components/particle-background";
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
import Link from "next/link";

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
                Professional IT services and consulting for all your technology
                needs. From hardware to software, we&apos;ve got you covered.
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
    </main>
  );
}
