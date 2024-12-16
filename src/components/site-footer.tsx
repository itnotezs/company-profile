import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ITNOTEZS. All rights reserved.
          </p>
        </div>
        <nav className="flex gap-4">
          <Link
            href="/contact"
            className="text-sm hover:underline underline-offset-4"
          >
            Contact
          </Link>
          <Link
            href="#services"
            className="text-sm hover:underline underline-offset-4"
          >
            Services
          </Link>
        </nav>
      </div>
    </footer>
  );
}
