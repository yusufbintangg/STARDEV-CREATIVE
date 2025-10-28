"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pricingData } from "@/data/pricingData";
import { Button } from "@/components/ui/button";
import PricingCard from "@/components/ui/PricingCard";

export default function PricingSection() {
  // Animation variants for fade in from sides
  const fadeFromLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeFromRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const categories = Object.keys(pricingData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section className="py-10 text-center mr-0 ml-0">
      <motion.h2
        className="text-6xl font-bold mb-10 text-black"
        variants={fadeFromLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Paket Harga Jasa Pembuatan Website
      </motion.h2>
      <motion.h3
        className="text-xl mb-4 text-black mb-10"
        variants={fadeFromRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Pilih paket yang sesuai dengan kebutuhan Anda, mulai dari paket dasar hingga paket lengkap dengan fitur premium. Kami menawarkan harga transparan tanpa biaya tersembunyi.
      </motion.h3>
      {/* Note */}
      <motion.div
        className="mt-8 px-4 max-w-4xl mx-auto mb-10 text-center"
        variants={fadeFromLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="text-gray-600 text-sm">
          *Harga di bawah adalah estimasi awal dan bisa berubah tergantung kompleksitas project, fitur tambahan, dan kebutuhan spesifik klien. Untuk penawaran yang lebih akurat, silakan hubungi kami untuk diskusi lebih lanjut.
        </p>
      </motion.div>
      {/* Tabs */}
      <motion.div
        className="flex justify-center mb-8 flex-wrap grid-cols-3 gap-1"
        variants={fadeFromRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {categories.map((cat) => (
          <Button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`${activeCategory === cat
                ? "bg-white text-black border border-black"
                : "bg-white text-white"
              } text-white px-6 py-2 rounded-full mx-2 my-1 hover:scale-110
              transform transition duration-300
              hover:border-black
              hover:text-black
              hover:shadow-lg
              hover:bg-white/80 text-black transition-all duration-300 `}
          >
            {cat}
          </Button>
        ))}
      </motion.div>

      {/* Cards */}  
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-0 md:h-[800px]">

        <AnimatePresence>
          {pricingData[activeCategory].map((pkg, index) => (
            <motion.div
              key={`${activeCategory}-${pkg.id}`}
              variants={index % 2 === 0 ? fadeFromLeft : fadeFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <PricingCard pkg={pkg} activeCategory={activeCategory} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

    </section>
  );
}
