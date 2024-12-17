// app/services/server-setup/page.tsx
import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Layanan Setup Server & Cloud | ITNOTEZS",
  description:
    "Layanan profesional untuk setup dan konfigurasi server/cloud. Solusi infrastruktur IT yang aman dan skalabel untuk bisnis Anda.",
  openGraph: {
    title: "Setup Server & Cloud Professional | ITNOTEZS",
    description:
      "Optimalkan infrastruktur IT Anda dengan solusi server dan cloud terbaik. Didukung tim ahli berpengalaman.",
    images: [{ url: "/setting_server.jpg" }],
  },
  keywords: [
    "setup server",
    "konfigurasi cloud",
    "cloud computing",
    "server management",
    "cloud migration",
    "managed server",
    "AWS setup",
    "server maintenance",
  ],
};

export default function ServerSetupPage() {
  const description = (
    <div className="space-y-6">
      <p className="text-lg">
        Optimalkan Infrastruktur IT Anda dengan Solusi Server dan Cloud Terbaik!
        Kami menyediakan layanan setup, konfigurasi, dan manajemen server/cloud
        untuk mendukung kebutuhan bisnis Anda. Dengan tenaga ahli yang
        berpengalaman, kami memastikan server Anda berjalan cepat, aman, dan
        stabil.
      </p>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Mengapa Memilih Layanan Kami?</h3>

        <div>
          <h4 className="font-semibold">
            ✅ Solusi Server dan Cloud Terintegrasi
          </h4>
          <p>
            Instalasi dan konfigurasi server fisik, virtual, atau cloud seperti
            AWS, Google Cloud, Azure, dan DigitalOcean.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">✅ Keamanan Data Terjamin</h4>
          <p>
            Implementasi sistem keamanan seperti firewall, enkripsi data, dan
            backup otomatis.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">✅ Performa Optimal dan Skalabel</h4>
          <p>
            Pengaturan infrastruktur yang dapat disesuaikan untuk mendukung
            pertumbuhan bisnis Anda.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">✅ Pengalaman dan Keahlian</h4>
          <p>
            Didukung oleh tim profesional berpengalaman dalam teknologi server
            seperti Linux, Windows Server, VPS, dan Container.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">✅ Dukungan Teknis 24/7</h4>
          <p>
            Bantuan cepat kapan saja untuk menjaga server tetap berjalan stabil
            tanpa gangguan.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Layanan yang Kami Tawarkan</h3>

        <div className="space-y-2">
          <p>
            🔹 <strong>Setup dan Konfigurasi Server Fisik</strong>
          </p>
          <p className="pl-6">
            Instalasi server untuk bisnis, data center, dan sistem internal.
          </p>

          <p>
            🔹 <strong>Setup Cloud Computing</strong>
          </p>
          <p className="pl-6">
            Migrasi, setup, dan optimasi layanan cloud (AWS, Azure, Google
            Cloud).
          </p>

          <p>
            🔹 <strong>Manajemen dan Pemeliharaan Server</strong>
          </p>
          <p className="pl-6">
            Monitoring performa, update berkala, serta backup dan recovery data.
          </p>

          <p>
            🔹 <strong>Implementasi Virtualisasi</strong>
          </p>
          <p className="pl-6">
            Konfigurasi VMware, Proxmox, Hyper-V, dan teknologi virtualisasi
            lainnya.
          </p>

          <p>
            🔹 <strong>Optimasi Keamanan dan Kinerja</strong>
          </p>
          <p className="pl-6">
            Instalasi firewall, VPN, SSL, dan tools keamanan lainnya untuk
            menjaga server aman.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <ServicePageTemplate
      title="Layanan Setup dan Konfigurasi Server/Cloud Profesional 🚀"
      description={description}
      heroImage="/setting_server.jpg"
    />
  );
}
