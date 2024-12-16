import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/LOGO.jpg"
            alt="ITNOTEZS"
            width={120}
            height={120}
            className="h-20 w-auto"
          />
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link
            href="#services"
            className="text-sm font-medium hover:text-primary"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-primary"
          >
            Contact
          </Link>
        </nav>
        <Button
          asChild
          variant="default"
          className="bg-primary hover:bg-primary/90"
        >
          <Link href="/contact">Get Started</Link>
        </Button>
      </div>
    </header>
  );
}
