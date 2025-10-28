"use client";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

export default function Service() {
  // Animation variants for fade in from sides
  const fadeFromLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeFromRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };
  const layananList = [
    {
      "title": "Creative Portfolio & Personal Branding",
      "desc": "Galeri digital eksklusif untuk fotografer, desainer, atau freelancer. Tampilkan karya, case studies, testimoni, dan skill Anda dengan tata letak yang profesional.",
      "img": "/servicepage/personalbrand.png",
      "text": "Bangun Personal Branding yang kuat dan tarik klien potensial. Website dirancang loading cepat dan fokus pada visual untuk membuat karya Anda lebih menonjol."
    },
    {
      "title": "Professional Company Profile (Website Korporat Profesional)",
      "desc": "Website resmi untuk meningkatkan kredibilitas dan branding perusahaan. Menyajikan informasi Visi-Misi, Portofolio, dan layanan dengan desain premium.",
      "img": "/servicepage/comprob.png",
      "text": "Landasan digital yang kuat. Dilengkapi Formulir Kontak Terintegrasi dan desain responsif, memastikan citra perusahaan Anda terlihat meyakinkan di semua perangkat."
    },
    {
      "title": "Hotel & Homestay (Sistem Pemesanan Online)",
      "desc": "Website pemesanan hotel dan homestay lengkap dengan sistem booking online, integrasi WhatsApp & payment gateway, serta dashboard admin untuk kelola kamar, harga, dan reservasi.",
      "img": "/servicepage/hotel-homestay.png",
      "text": "Solusi ideal untuk pemilik hotel dan homestay yang ingin meningkatkan reservasi langsung tanpa komisi OTA. Desain profesional, mobile-friendly, dan mudah digunakan oleh tamu maupun pengelola."
    },
    {
      "title": "Tour & Travel Management System (Sistem Manajemen Wisata)",
      "desc": "Solusi terintegrasi yang dirancang khusus untuk membantu bisnis tour & travel dalam mengelola seluruh proses operasional — mulai dari pemesanan paket wisata, pengelolaan jadwal penerbangan dan hotel, data pelanggan, hingga pelaporan keuangan dan komisi agen secara otomatis dan akurat.",
      "img": "/servicepage/travel.png",
      "text": "Sistem terpadu ini memudahkan pengelolaan seluruh aktivitas agen perjalanan dalam satu platform. Mulai dari pembuatan dan pengaturan paket wisata, alokasi kursi penerbangan dan kamar hotel, manajemen pemesanan serta pembayaran pelanggan, hingga pembuatan laporan penjualan dan komisi agen secara real-time."
      },
    {
      "title": "Furniture & Clothing E-Commerce Solution (Sistem Penjualan Online Produk Fisik)",
      "desc": "Platform e-commerce khusus untuk bisnis furniture dan clothing dengan tampilan katalog profesional, sistem varian produk, dan integrasi pembayaran online.",
      "img": "/servicepage/catalog-ecommerce.png",
      "text": "Solusi ini dirancang untuk menampilkan katalog produk yang menarik dan mudah dijelajahi pelanggan. Setiap produk dapat memiliki varian ukuran, warna, dan stok tersinkron otomatis ke dashboard admin. Cocok untuk brand yang ingin meningkatkan penjualan online dengan tampilan modern dan pengalaman belanja yang lancar."
    },
    {
      "title": "Smart F&B System (Sistem Digital Bisnis Makanan & Minuman)",
      "desc": "Sistem digital terintegrasi untuk berbagai jenis bisnis F&B seperti restoran, coffee shop, burjo, bakery, catering, bar, hingga franchise kuliner. Dilengkapi dengan fitur scan QR menu, pemesanan otomatis, dan dashboard manajemen operasional.",
      "img": "/servicepage/SmartRestoSystem.png",
      "text": "Solusi all-in-one yang membantu bisnis makanan dan minuman beroperasi lebih efisien. Pelanggan dapat scan QR untuk melihat menu digital, melakukan pemesanan, dan membayar langsung tanpa antre. Semua pesanan otomatis terhubung ke dapur, kasir, dan dashboard admin untuk memudahkan pengelolaan harian hingga pelaporan penjualan."
    },
  ];


  return (
      <section className="py-20 px-0">
        <motion.h2
          className="text-5xl font-bold text-center text-foreground mt-2 mb-14"
          variants={fadeFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Price list dan Paket Layanan Kami
        </motion.h2>
        <motion.div
          className="text-xl text-center text-foreground mb-7 grid-cols-ound min-h-[90px]"
          variants={fadeFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="bg-gradient-to-r bg-clip-text text-grey font-semibold">
            Kami menyediakan berbagai paket layanan pembuatan website sesuai dengan kebutuhan bisnis Anda. Dengan harga terjangkau dan kualitas premium. Dipercaya oleh lebih dari 100+ klien di seluruh Indonesia. Dapatkan penawaran terbaik hari ini juga!
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {layananList.map((item, i) => (
            <motion.div
              className="h-full"
              key={i}
              variants={i % 2 === 0 ? fadeFromLeft : fadeFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <ServiceCard key={item.title} item={item} />
            </motion.div>
          ))}
        </div>
      </section>
  );
}
