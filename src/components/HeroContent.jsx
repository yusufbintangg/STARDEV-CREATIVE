"use client";

import Silk from '@/components/ui/Silk';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
export default function HeroContent() {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="text-1xl text-white min-h-[80px] flex justify-center">
      {/* Background animasi */}
      <div className="absolute top-0 inset-0 -z-10">
        <Silk
          speed={5}
          scale={1}
          color="#9c39ffff"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
       {/* Konten utama */}
      <div className="relative w-[90%] z-10 flex items-center justify-center h-screen overflow-hidden">
        <motion.div
          className="w-full px-4 text-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 drop-shadow-2xl">
            Jasa Pembuatan Website Profesional Untuk Bisnis Yang Lebih Kredibel.
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 opacity-90">
            Kami bantu Anda naikan omset dan bangun website Bisnis Anda. Bukan cuma tampil — tapi <span className="text-blue-300">bekerja dan menghasilkan</span>.
          </h2>

          <div className="flex flex-col justify-center items-center gap-4 px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Button
                asChild
                className="text-white bg-gradient-to-r from-blue-600 to-indigo-600 px-6 md:px-8 py-3 rounded-full mx-2 my-1 hover:scale-110
                  transform transition duration-300 hover:shadow-xl
                  hover:from-blue-700 hover:to-indigo-700 font-semibold text-base md:text-lg"
              >
                <a
                  href={`https://api.whatsapp.com/send?phone=+6289616869977&text=${encodeURIComponent(
                    `Halo StarDev, saya tertarik dengan jasa pembuatan website profesional untuk bisnis saya.`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Konsultasi Gratis Sekarang!
                </a>
              </Button>
            </motion.div>
          </div>

          <p className="text-base md:text-lg mt-4 opacity-90">
            Garansi Kepuasan • Harga Mulai Dari Rp 800.000 • Website Siap Online
          </p>
        </motion.div>
      </div>
    </div>
  );
}