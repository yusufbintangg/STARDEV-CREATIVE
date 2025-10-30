import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Target, Palette, Zap, Search, Headphones, DollarSign } from "lucide-react";

const reasons = [
  {
    icon: <Target className="w-10 h-10 text-indigo-600" />,
    title: "Berorientasi pada Hasil Bisnis",
    desc: "Kami tidak hanya membuat website yang indah, tapi juga yang mampu menarik pelanggan dan meningkatkan kepercayaan terhadap brand Anda.",
  },
  {
    icon: <Palette className="w-10 h-10 text-indigo-600" />,
    title: "Desain Modern & Responsif",
    desc: "Setiap website kami rancang agar terlihat sempurna di semua perangkat — dari desktop hingga smartphone.",
  },
  {
    icon: <Zap className="w-10 h-10 text-indigo-600" />,
    title: "Proses Cepat & Efisien",
    desc: "Kami memahami pentingnya waktu dalam bisnis. Karena itu, setiap proyek kami kelola dengan sistem kerja yang rapi dan terukur.",
  },
  {
    icon: <Search className="w-10 h-10 text-indigo-600" />,
    title: "SEO & Kecepatan Optimal",
    desc: "Website Anda kami optimalkan agar mudah ditemukan di mesin pencari dan memiliki waktu muat yang cepat.",
  },
  {
    icon: <Headphones className="w-10 h-10 text-indigo-600" />,
    title: "Dukungan Penuh Setelah Website Selesai",
    desc: "Kami tidak berhenti di saat website selesai dibuat. StarDev Creative tetap mendampingi Anda dengan dukungan teknis dan pembaruan jika dibutuhkan.",
  },
  {
    icon: <DollarSign className="w-10 h-10 text-indigo-600" />,
    title: "Solusi yang Disesuaikan dengan Anggaran Anda",
    desc: "Kami menghadirkan solusi yang disesuaikan dengan skala dan prioritas bisnis Anda, dengan standar kualitas terbaik.",
  },
];

export default function AboutUs() {
  // Animation variants for fade in from sides
  const fadeFromLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeFromRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="text-gray-800 mt-1 mb-0">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 py-15 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={fadeFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-7xl font-semibold leading-tight text-gray-900">
            Tentang StarDev Creative
          </h2>
        </motion.div>
        <motion.p
          className="text-gray-900 text-lg leading-relaxed"
          variants={fadeFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          StarDev Creative adalah Agency pengembangan website yang berfokus pada solusi digital yang efektif, strategis, dan berorientasi pada hasil.
          Kami membantu bisnis membangun kehadiran online yang profesional melalui website yang tidak hanya menarik secara visual,
          tetapi juga berfungsi optimal untuk mendukung pertumbuhan penjualan dan reputasi merek.
          <br /><br />
          </motion.p>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 p-8 rounded-2xl shadow-lx hover:shadow-md transition duration-300 flex flex-col hover:scale-105"
              variants={i % 2 === 0 ? fadeFromLeft : fadeFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="mb-4">{reason.icon}</div>
              <h4 className="text-xl font-semibold mb-3">{reason.title}</h4>
              <p className="text-gray-600 leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
