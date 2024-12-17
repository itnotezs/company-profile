// app/services/network-setup/page.tsx
import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Layanan Setup Jaringan Komputer Profesional | ITNOTEZS",
  description:
    "Layanan setup dan konfigurasi jaringan profesional untuk bisnis. Solusi jaringan LAN, WAN, WiFi dengan teknisi berpengalaman.",
  openGraph: {
    title: "Setup dan Konfigurasi Jaringan Profesional | ITNOTEZS",
    description:
      "Optimalkan koneksi jaringan bisnis Anda dengan solusi jaringan komputer profesional dan terpercaya.",
    images: [{ url: "/pasang_jaringan.jpg" }],
  },
  keywords: [
    "setup jaringan",
    "instalasi LAN",
    "konfigurasi jaringan",
    "jaringan komputer",
    "setup wifi kantor",
    "instalasi jaringan kantor",
    "network configuration",
    "setup router",
  ],
};

export default function NetworkSetupPage() {
  const description = (
    <div className="space-y-6">
      <p className="text-lg">
        Optimalkan Koneksi Jaringan Anda dengan Solusi Terbaik! Kami menyediakan
        layanan setup dan konfigurasi jaringan untuk bisnis maupun perorangan
        dengan tenaga ahli yang berpengalaman dan terpercaya.
      </p>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">
          ✅ Layanan yang Kami Tawarkan:
        </h3>
        <ul className="list-none space-y-2 pl-6">
          <li>• Instalasi Jaringan LAN/WAN/Wi-Fi</li>
          <li>• Konfigurasi Router, Switch, dan Access Point</li>
          <li>• Setup Jaringan untuk Perkantoran dan Rumah</li>
          <li>• Pengamanan Jaringan (Firewall & Keamanan Data)</li>
          <li>• Optimasi Koneksi untuk Performa Maksimal</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">🚀 Keunggulan Layanan Kami:</h3>
        <ul className="list-none space-y-2 pl-6">
          <li>• Pengerjaan Cepat dan Tepat</li>
          <li>• Dukungan Teknis Berkelanjutan</li>
          <li>• Teknisi Berpengalaman dan Bersertifikat</li>
          <li>• Harga Terjangkau dengan Kualitas Premium</li>
        </ul>
      </div>

      <p className="text-lg font-medium">
        📞 Konsultasi GRATIS dan penanganan cepat hanya dalam beberapa jam!
      </p>
    </div>
  );

  return (
    <ServicePageTemplate
      title="Layanan Setup dan Konfigurasi Jaringan Profesional 🌐"
      description={description}
      heroImage="/pasang_jaringan.jpg"
    />
  );
}
