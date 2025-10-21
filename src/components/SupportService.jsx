"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Server,
  MonitorSmartphone,
  PhoneCall,
  Mail,
  ShieldCheck,
  Headphones,
} from "lucide-react";
import { motion } from "framer-motion";

const SupportService = () => {
  const services = [
    {
      icon: <MonitorSmartphone className="w-10 h-10 text-indigo-600" />,
      title: "Desain Responsif",
      desc: "Akses mudah di semua perangkat: PC, HP, Tablet, dan TV!",
    },

    {
      icon: <Mail className="w-10 h-10 text-indigo-600" />,
      title: "Email Bisnis",
      desc: "Email profesional dengan domain Anda untuk kesan terpercaya.",
    },
    {
      icon: <Server className="w-10 h-10 text-indigo-600" />,
      title: "Dashboard Admin",
      desc: "Kelola konten website dengan mudah melalui dashboard.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-indigo-600" />,
      title: "Security",
      desc: "Lindungi website dari hacker dengan sertifikat SSL.",
    },
    {
      icon: <Headphones className="w-10 h-10 text-indigo-600" />,
      title: "Support 24/7",
      desc: "Bantuan penuh kapan saja untuk masalah mendesak.",
    },
    {
      icon: <PhoneCall className="w-10 h-10 text-indigo-600" />,
      title: "Form & Peta",
      desc: "Kontak langsung via form dan peta lokasi.",
    },
  ];

  return (
    <section className="py-10 text-center px-0">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-black-600 mb-6">
            Fitur Unggulan untuk Sukses Bisnis Anda
          </h2>
          <p className="text-lg text-grey-600 max-w-3xl mx-auto leading-relaxed">
            Dapatkan layanan website profesional di Surabaya dan Jakarta. Dari desain modern hingga support andal, kami bantu optimalkan kehadiran online bisnis Anda dengan fitur-fitur esensial yang powerful.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          {services.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 260, damping: 15 }}
              className="flex flex-col items-start space-y-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-green-200 cursor-default"
            >
              <div className="p-4 rounded-xl">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild className="text-white bg-black px-6 py-2 rounded-full mx-2 my-1 hover:scale-110
                      transform transition duration-300
                      hover:border-black
                      hover:text-white
                      hover:shadow-lg
                      hover:bg-black text-white transition-all duration-300">
                    <a href={`https://wa.me/628988025033?text=
                      ${encodeURIComponent(
                        `Halo StarDev, saya tertarik dengan jasa pembuatan website.`)
                        }`} target="_blank" rel="noopener noreferrer">
                     Konsultasi Kebutuhan Anda Sekarang!!
                    </a>
                  </Button>
          <p className="text-lg text-center text-muted-foreground mt-5">
            Kami siap membantu Anda mewujudkan website impian dengan kualitas terbaik dan harga terjangkau.
            <br />
            Konsultasikan kebutuhan Anda sekarang juga!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SupportService;
