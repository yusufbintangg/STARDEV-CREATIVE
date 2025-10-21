import { memo } from "react";
import { motion } from "framer-motion";
const ServiceCard = memo(({ item, index }) => {
  return (
        // Card wrapper harus h-full dan menggunakan flex/grid
        <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col justify-between">
            <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.6,
                            delay: index * 0.1,
                            ease: "easeOut",
                          }}
                          viewport={{ once: true }}
                        >

            <div>
                {/* 1. Judul */}
                <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>

                {/* 2. Deskripsi Singkat */}
                <p className="text-sm text-gray-600 mb-4">{item.desc}</p>

                {/* 3. Gambar */}
                <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 object-top object-cover mb-4 rounded-lg shadow-lg"
                    loading="lazy"
                />
            </div>

            {/* 4. Teks Utama (dibuat terpisah agar bisa didorong ke bawah) */}
            <p className="text-gray-800 mt-4">
                {item.text}
            </p>
                        </motion.div>
        </div>
    );
});

export default ServiceCard;
