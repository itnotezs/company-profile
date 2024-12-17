// components/service-bento.tsx
import Image from "next/image";
import Link from "next/link";
import { FlipWords } from "./ui/flip-words";

interface ServiceCard {
  title: string;
  description: string;
  image: string;
  link: string;
}

const services: ServiceCard[] = [
  {
    title: "Layanan Servis Komputer dan Laptop",
    description:
      "Solusi profesional untuk perbaikan dan maintenance komputer & laptop. Ditangani teknisi berpengalaman dengan garansi layanan.",
    image: "/servis_komputer.jpg",
    link: "/services/computer-repair",
  },
  {
    title: "Layanan Setup Konfigurasi Jaringan",
    description:
      "Instalasi dan konfigurasi jaringan komputer untuk bisnis. Optimasi performa dengan solusi keamanan terbaik.",
    image: "/pasang_jaringan.jpg",
    link: "/services/network-setup",
  },
  {
    title: "Layanan Pengembangan Perangkat Lunak",
    description:
      "Pengembangan aplikasi dan software custom sesuai kebutuhan bisnis Anda. Dari web apps hingga sistem enterprise.",
    image: "/bikin_aplikasi.jpg",
    link: "/services/software-development",
  },
  {
    title: "Layanan Setup Konfigurasi Server/Cloud",
    description:
      "Setup dan konfigurasi server lokal atau cloud. Solusi infrastruktur IT yang aman dan scalable.",
    image: "/setting_server.jpg",
    link: "/services/server-setup",
  },
];

const words = ["Profesional", "Terpecaya", "Handal", "Modern"];

export function ServiceBento() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center mb-12 bg-secondary text-white py-4 rounded-lg">
          Solusi IT <FlipWords words={words} className="text-white" /> di
          Indonesia 🇮🇩
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {services.map((service, index) => (
            <Link
              href={service.link}
              key={index}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/20 z-10" />
              <Image
                src={service.image}
                alt={service.title}
                width={800}
                height={800}
                className="object-cover w-full h-[400px] transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
