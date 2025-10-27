import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Briefcase, FileText, Code, CheckCircle, Globe, Handshake, CodeXml } from "lucide-react";

const steps = [
  {
    icon: <Briefcase className="w-10 h-10 text-indigo-600" />,
    title: "Penawaran",
    desc: "Kami mulai dengan mendengarkan visi Anda secara mendalam, kemudian menyusun proposal inovatif yang mencakup ide-ide kreatif untuk mengangkat brand Anda ke level berikutnya.",
  },
  {
    icon: <FileText className="w-10 h-10 text-indigo-600" />,
    title: "Persiapan Konten",
    desc: "Bersama-sama, kita kumpulkan bahan baku digital seperti gambar inspiratif, teks yang menggugah, dan elemen visual yang unik untuk membentuk identitas online yang kuat.",
  },
  {
    icon: <CodeXml className="w-10 h-10 text-indigo-600" />,
    title: "Pengembangan",
    desc: "Para ahli coding kami menghidupkan desain dengan teknologi terkini, memastikan setiap baris kode berkontribusi pada pengalaman pengguna yang luar biasa dan interaktif.",
  },
  {
    icon: <CheckCircle className="w-10 h-10 text-indigo-600" />,
    title: "Optimasi & Pengujian",
    desc: "Kami lakukan audit komprehensif dan simulasi skenario nyata untuk mengeliminasi segala kemungkinan kesalahan, memberikan jaminan kualitas tertinggi sebelum peluncuran.",
  },
  {
    icon: <Globe className="w-10 h-10 text-indigo-600" />,
    title: "Publish",
    desc: "Dengan satu klik, situs Anda hidup di dunia maya. Kami berikan panduan lengkap untuk mengelola dan memperluas jangkauan Anda secara global.",
  },
  {
    icon: <Handshake className="w-10 h-10 text-indigo-600" />,
    title: "Selesai",
    desc: "Perjalanan digital Anda dimulai. Kami siap sebagai mitra jangka panjang untuk evolusi bisnis Anda di era online yang terus berkembang.",
  },
];

export default function WorkFlow() {
  return (
    <section className="text-gray-800 mt-1 mb-0">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 py-15 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-6xl font-semibold leading-tight text-gray-900">
            Bagaimana cara tim kami
            <br />
            membangun <span className="text-gray-800">website Anda</span>
          </h2>
        </motion.div>
        <motion.p
          className="text-gray-900 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
            Kami fokus pada pengalaman pengguna dan hasil akhir yang berdampak.
            Proses pembuatan website kami dimulai dengan memahami arah bisnis,
            lalu kami kembangkan strategi desain dan fungsionalitas yang paling sesuai agar 
            situs Anda tampil profesional dan efektif sejak hari pertama.
        </motion.p>
      </div>


      {/* Workflow Section */}
      <div className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 p-8 rounded-2xl shadow-lx hover:shadow-md transition duration-300 flex flex-col items-center text-center
              hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{step.icon}</div>
              <h4 className="text-xl font-semibold mb-3">{step.title}</h4>
              <p className="text-gray-600 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-22">
                  <Button asChild className="text-white bg-black px-6 py-2 rounded-full mx-2 my-1 hover:scale-110
                              transform transition duration-300
                              hover:border-black
                              hover:text-white
                              hover:shadow-lg
                              hover:bg-black text-white transition-all duration-300">
                            <a href={`https://api.whatsapp.com/send?phone=+628988025033&text=
                              ${encodeURIComponent(
                                `Halo StarDev, saya tertarik dengan jasa pembuatan website.`)
                                }`} target="_blank" rel="noopener noreferrer">
                             Konsultasi Kebutuhan Anda Sekarang!!
                            </a>
                          </Button>
                  <p className="text-lg text-center text-gray mt-5">
                    Kami siap membantu Anda mewujudkan website impian dengan kualitas terbaik dan harga terjangkau.
                    <br />
                    Konsultasikan kebutuhan Anda sekarang juga!
                  </p>
                </div>
      </div>
    </section>
  );
}
