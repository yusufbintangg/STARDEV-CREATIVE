"use client";
import ServiceCard from "./ui/ServiceCard";
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
  title: "Creative Portfolio & Personal Branding",
  desc: "Galeri digital untuk menampilkan karya, testimoni, dan profil Anda secara profesional.",
  img: "/servicepage/personalbrand.png",
  text: "Bangun personal branding yang kuat dengan website cepat, rapi, dan fokus pada visual."
},
{
  title: "Professional company profile website",
  desc: "Website resmi untuk meningkatkan citra dan kredibilitas bisnis Anda.",
  img: "/servicepage/comprob.png",
  text: "Desain premium, responsif, dan dilengkapi formulir kontak untuk tampilan perusahaan yang lebih profesional."
},
{
  title: "Hotel & Homestay – Sistem Booking Online",
  desc: "Website dengan fitur booking, WhatsApp, payment gateway, dan dashboard manajemen.",
  img: "/servicepage/hotel-homestay.png",
  text: "Solusi lengkap untuk meningkatkan reservasi langsung tanpa komisi OTA."
},
{
  title: "Tour & Travel Management System",
  desc: "Sistem untuk mengelola paket wisata, jadwal, pelanggan, hingga laporan keuangan.",
  img: "/servicepage/travel.png",
  text: "Platform all-in-one untuk operasional tour & travel yang otomatis dan efisien."
},
{
  title: "Furniture & Clothing E-Commerce",
  desc: "E-commerce khusus untuk produk fisik lengkap dengan varian, katalog profesional, dan pembayaran online.",
  img: "/servicepage/catalog-ecommerce.png",
  text: "Tampilkan produk dengan rapi, kelola stok otomatis, dan tingkatkan penjualan online."
},
{
  title: "Smart F&B System Pemesanan Online",
  desc: "Sistem digital untuk restoran, cafe, burjo, bakery, catering, dan bisnis kuliner lainnya.",
  img: "/servicepage/SmartRestoSystem.png",
  text: "Menu QR, pemesanan otomatis, pembayaran digital, dan dashboard manajemen dalam satu sistem."
}

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
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
