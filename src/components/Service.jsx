"use client";
import ServiceCard from "./ServiceCard";

export default function Service() {
  const layananList = [
    {
      "title": "Modern E-Commerce Solution (Toko Online Terpadu)",
      "desc": "Toko online siap pakai dengan integrasi payment gateway, keranjang belanja, dashboard admin untuk manajemen stok real-time, dan laporan penjualan.",
      "img": "/servicepage/ecomerce.png",
      "text": "Solusi lengkap untuk bisnis ritel dan UKM yang ingin go digital. Desain Mobile-First dan SEO-Friendly untuk menjangkau pasar lebih luas dan meningkatkan konversi penjualan."
    },
    {
      "title": "Professional Company Profile (Website Korporat Profesional)",
      "desc": "Website resmi untuk meningkatkan kredibilitas dan branding perusahaan. Menyajikan informasi Visi-Misi, Portofolio, dan layanan dengan desain premium.",
      "img": "/servicepage/comprob.png",
      "text": "Landasan digital yang kuat. Dilengkapi Formulir Kontak Terintegrasi dan desain responsif, memastikan citra perusahaan Anda terlihat meyakinkan di semua perangkat."
    },
    {
      "title": "Creative Portfolio & Personal Branding",
      "desc": "Galeri digital eksklusif untuk fotografer, desainer, atau freelancer. Tampilkan karya, case studies, testimoni, dan skill Anda dengan tata letak yang profesional.",
      "img": "/servicepage/personalbrand.png",
      "text": "Bangun Personal Branding yang kuat dan tarik klien potensial. Website dirancang loading cepat dan fokus pada visual untuk membuat karya Anda lebih menonjol."
    },
    {
      "title": "Tour & Travel Management System (Sistem Manajemen Wisata)",
      "desc": "Solusi terintegrasi untuk mengelola pemesanan paket wisata, inventaris jadwal penerbangan/hotel, data pelanggan, hingga laporan keuangan dan komisi agen.",
      "img": "/servicepage/travel.png",
      "text": "Sistem terpadu untuk mengelola seluruh operasional agen perjalanan: inventaris paket, alokasi kursi/kamar, booking, pembayaran, dan laporan real-time untuk efisiensi bisnis."
    },
    {
      "title": "Digital Menu & E-Commerce F&B (Sistem Menu Digital dan E-Dagang Makanan & Minuman)",
      "desc": "Platform terintegrasi yang berfungsi sebagai menu digital dan toko online untuk restoran. Memungkinkan pelanggan melihat katalog interaktif, kustomisasi pesanan, dan checkout.",
      "img": "/servicepage/F&BMenuQR.png",
      "text": "Sistem ini secara otomatis menghubungkan pesanan (dine-in, take-away, delivery) ke POS, dapur (KDS), dan pembayaran."
    },
    {
      "title": "Custom Software & Internal System (Sistem Bisnis Kustom)",
      "desc": "Pengembangan Sistem Manajemen Internal sesuai kebutuhan unik perusahaan Anda. Ideal untuk HRIS, ERP, SCM, dashboard monitoring, atau aplikasi B2B kompleks.",
      "img": "/servicepage/ERPSimple.png",
      "text": "Solusi software yang dirancang end-to-end untuk mengotomatisasi dan mengintegrasikan proses bisnis Anda, dari pengelolaan sumber daya hingga pelaporan data strategis."
    }
  ];


  return (
      <section className="py-20 px-0">
        <h2 className="text-5xl font-bold text-center text-foreground mt-2 mb-10">
          Price list dan Paket Layanan Kami
            </h2>
                <div className="text-xl text-center text-foregr grid-cols-ound min-h-[90px]">
                  <p className="bg-gradient-to-r bg-clip-text text-grey font-semibold">
                    Kami menyediakan berbagai paket layanan pembuatan website sesuai dengan kebutuhan bisnis Anda. Dengan harga terjangkau dan kualitas premium. Dipercaya oleh lebih dari 100+ klien di seluruh Indonesia. Dapatkan penawaran terbaik hari ini juga!
                  </p>
                </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {layananList.map((item, i) => (
            <div className="h-full" key={i}>
              <ServiceCard key={item.title} item={item} />
            </div>
          ))}
        </div>
      </section>
  );
}
