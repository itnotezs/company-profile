// components/service-page-template.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface ServicePageProps {
  title: string;
  description: React.ReactNode;
  heroImage: string;
}

export function ServicePageTemplate({
  title,
  description,
  heroImage,
}: ServicePageProps) {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px]">
        <Image
          src={heroImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50">
          <div className="container h-full px-4 md:px-6">
            <div className="flex items-center justify-center h-full">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center max-w-4xl">
                {title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="prose prose-lg max-w-4xl mx-auto">{description}</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Kami Siap Membantu
            </h2>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
