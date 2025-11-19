import { memo } from "react";
import { motion } from "framer-motion";

// ServiceCard dengan style mirip contoh gambar (dark card, image on top, bold title, clean lists)

const ServiceCard = memo(({ item, index }) => {
  return (
    <motion.div
      className=" p-4 h-full flex flex-col transition duration-300 hover:-translate-y-3"
      initial={{
        opacity: 0,
        x: index % 3 === 0 ? -30 : index % 3 === 2 ? 30 : 0,
        y: index % 3 === 1 ? 20 : 0,
      }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Gambar */}
      <img
        src={item.img}
        className="w-full object-cover mb-5"
      />
      {/* Title + Number */}
         <div className="flex justify-between items-center mb-3">
            <h3 className=" h-16 text-2xl font-semibold text-black">{item.title}</h3>
         </div>
      {/* Short Description */}
        <p className="text-black-400 h-18 leading-relaxed mb-4">{item.desc}</p>
      {/* Main Text */}
        <p className="text-black-300 h-18 leading-relaxed mt-auto">{item.text}</p>
    </motion.div>
  );
});

export default ServiceCard;
