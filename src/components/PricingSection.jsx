"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pricingData } from "@/data/pricingData";
import { Button } from "@/components/ui/button";
import PricingCard from "@/components/ui/PricingCard";

export default function PricingSection() {
  const categories = Object.keys(pricingData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section className="py-10 text-center mr-0 ml-0">
      <h2 className="text-6xl font-bold mb-10 text-black">Paket Harga Jasa Pembuatan Website</h2>
      <h3 className="text-xl mb-4 text-black mb-10">
        Pilih paket yang sesuai dengan kebutuhan Anda, mulai dari paket dasar hingga paket lengkap dengan fitur premium. Kami menawarkan harga transparan tanpa biaya tersembunyi.
      </h3>
      {/* Note */}
      <div className="mt-8 px-4 max-w-4xl mx-auto mb-10 text-center">
        <p className="text-gray-600 text-sm">
          *Harga di bawah adalah estimasi awal dan bisa berubah tergantung kompleksitas project, fitur tambahan, dan kebutuhan spesifik klien. Untuk penawaran yang lebih akurat, silakan hubungi kami untuk diskusi lebih lanjut.
        </p>
      </div>
      {/* Tabs */}
      <div className="flex justify-center mb-8 flex-wrap grid-cols-3 gap-1">
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
      </div>

      {/* Cards */}  
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-0 md:h-[670px]">

        <AnimatePresence>
          {pricingData[activeCategory].map((pkg) => (
            <motion.div
              key={`${activeCategory}-${pkg.id}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
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
