// components/WebsiteSection.jsx

import Image from 'next/image';
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="container mx-auto px-4 py-16">
        {/* Bagian 1: Website yang Bekerja, Bukan Sekadar Ada */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="md:w-1/2 order-1 md:order-1">
            <motion.h2
              className="text-4xl font-bold mb-6 leading-snug"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Website Boleh Ada di Mana-Mana. Tapi, Apakah Website Anda Benar-Benar Bekerja?
            </motion.h2>
            <motion.p
              className="text-black-700 leading-relaxed mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Banyak bisnis punya website — tapi tidak semuanya mampu menarik pelanggan.
              Tanpa strategi dan desain yang tepat, website Anda hanya akan jadi pajangan digital,
              bukan alat penggerak bisnis yang sesungguhnya.
            </motion.p>
            <motion.p
              className="text-black-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <strong>StarDev Creative</strong> membantu Anda membangun website yang tampil menarik,
              mudah diakses, dan dirancang untuk <span className="font-semibold">menghasilkan kepercayaan serta konversi nyata</span>.
              Kami tidak sekadar membuat website, tapi menghadirkan solusi digital yang benar-benar bekerja untuk bisnis Anda.
            </motion.p>
            <motion.button
              onClick={() => document.getElementById('layanan').scrollIntoView({ behavior: 'smooth' })}
              className="text-white bg-black px-6 py-2 rounded-full mx-2 my-6 hover:scale-110 transform transition duration-300 hover:shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Bahas Website yang Menghasilkan!
            </motion.button>
          </div>

          <motion.div
            className="md:w-1/2 order-2 md:order-2 flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Image
              src="/group-diverse-people-having-business-meeting.jpg"
              alt="Website yang bekerja untuk bisnis Anda"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Bagian 2: Website Profesional untuk Kepercayaan Bisnis */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/CTA2.jpg"
              alt="Website profesional yang membangun kepercayaan"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </motion.div>

          <div className="md:w-1/2">
            <motion.h2
              className="text-4xl font-bold mb-6 leading-snug"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Kesan Pertama di Dunia Digital Datang dari Website Anda.
            </motion.h2>
            <motion.p
              className="text-black-700 leading-relaxed mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Di dunia digital, tampilan website Anda menentukan bagaimana calon pelanggan menilai bisnis Anda.
              Desain yang asal-asalan bisa membuat mereka ragu — bahkan pergi tanpa memberi kesempatan kedua.
            </motion.p>
            <motion.p
              className="text-black-700 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <strong>StarDev Creative</strong> menghadirkan website profesional yang tidak hanya enak dilihat,
              tapi juga <span className="font-semibold">dibangun dengan strategi konversi dan pengalaman pengguna yang matang</span>.
              Karena di dunia digital, kredibilitas dimulai dari kesan pertama.
            </motion.p>
            <motion.button
              onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
              className="text-white bg-black px-6 py-2 rounded-full mx-2 my-1 hover:scale-110 transform transition duration-300 hover:shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              Bangun Website Profesionalmu Sekarang!
            </motion.button>
          </div>
        </motion.div>
      </section>

  );
};

export default CallToAction;