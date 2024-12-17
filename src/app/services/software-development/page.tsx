// app/services/software-development/page.tsx
import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Jasa Pengembangan Perangkat Lunak | ITNOTEZS",
  description:
    "Layanan pengembangan software profesional dan inovatif. Solusi custom untuk kebutuhan bisnis Anda dengan teknologi terkini.",
  openGraph: {
    title: "Jasa Pengembangan Software Profesional | ITNOTEZS",
    description:
      "Transformasikan ide Anda menjadi solusi digital unggulan dengan layanan pengembangan perangkat lunak custom kami.",
    images: [{ url: "/bikin_aplikasi.jpg" }],
  },
  keywords: [
    "pengembangan software",
    "jasa pembuatan aplikasi",
    "software development",
    "pembuatan website",
    "aplikasi custom",
    "web development",
    "mobile app development",
    "jasa IT",
  ],
};

export default function SoftwareDevelopmentPage() {
  const description = (
    <div className="space-y-6">
      <p className="text-lg">
        Transformasikan Ide Anda Menjadi Solusi Digital Unggulan! Kami
        menyediakan layanan pengembangan perangkat lunak custom sesuai kebutuhan
        bisnis Anda. Dari aplikasi sederhana hingga sistem kompleks, kami hadir
        untuk membantu bisnis Anda tumbuh melalui teknologi canggih.
      </p>

      <h3 className="text-xl font-semibold">Mengapa Memilih Kami?</h3>

      <div className="space-y-4">
        <div>
          <h4 className="font-semibold">✅ Pengembangan Custom:</h4>
          <p>Solusi perangkat lunak dirancang khusus sesuai kebutuhan Anda.</p>
        </div>

        <div>
          <h4 className="font-semibold">✅ Teknologi Terkini:</h4>
          <p>
            Menggunakan teknologi modern seperti Java, Python, PHP, .NET, React,
            dan lainnya.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">✅ Desain Fleksibel dan Responsif:</h4>
          <p>
            Antarmuka yang user-friendly dan responsif untuk semua perangkat.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">✅ Proses Cepat dan Tepat:</h4>
          <p>
            Pengerjaan profesional dengan metode Agile dan dukungan penuh hingga
            proyek selesai.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">✅ Skalabilitas dan Keamanan:</h4>
          <p>
            Dibangun untuk tumbuh bersama bisnis Anda dengan sistem keamanan
            terjamin.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <ServicePageTemplate
      title="Layanan Pengembangan Perangkat Lunak Profesional dan Inovatif 🚀"
      description={description}
      heroImage="/bikin_aplikasi.jpg"
    />
  );
}
