// app/services/computer-repair/page.tsx
import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Layanan Servis Komputer dan Laptop | ITNOTEZS",
  description:
    "Layanan servis komputer dan laptop profesional dengan teknisi berpengalaman. Perbaikan software & hardware, instalasi sistem, dan optimasi kinerja.",
  openGraph: {
    title: "Layanan Servis Komputer dan Laptop Profesional | ITNOTEZS",
    description:
      "Solusi terpercaya untuk perbaikan dan maintenance komputer & laptop Anda. Ditangani teknisi berpengalaman dengan garansi layanan.",
    images: [{ url: "/servis_komputer.jpg" }],
  },
  keywords: [
    "servis komputer",
    "service laptop",
    "perbaikan komputer",
    "teknisi komputer",
    "upgrade komputer",
    "instalasi windows",
    "optimasi laptop",
    "jasa service komputer",
  ],
};

export default function ComputerRepairPage() {
  const description = (
    <div className="space-y-6">
      <p className="text-lg">
        Kami siap membantu segala kebutuhan perbaikan komputer dan laptop Anda!
        Dengan tenaga ahli profesional, harga bersahabat, dan pengerjaan cepat,
        kami menawarkan:
      </p>
      <ul className="space-y-2">
        <li className="flex items-start">
          <span className="mr-2">✅</span>
          <span>Perbaikan Software & Hardware</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">✅</span>
          <span>Instalasi Sistem Operasi & Aplikasi</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">✅</span>
          <span>Upgrade Performa Komputer/Laptop</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">✅</span>
          <span>Pembersihan Virus & Optimasi Kinerja</span>
        </li>
      </ul>
    </div>
  );

  return (
    <ServicePageTemplate
      title="Layanan Servis Komputer dan Laptop Terpercaya"
      description={description}
      heroImage="/servis_komputer.jpg"
    />
  );
}
