// components/WebsiteSection.jsx

import Image from 'next/image';

const CallToAction = () => {
  return (
    <section className="container mx-auto px-4 py-16">
        {/* Bagian 1: Website yang Bekerja, Bukan Sekadar Ada */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
          <div className="md:w-1/2 order-1 md:order-1">
            <h2 className="text-4xl font-bold mb-6 leading-snug">
              Website Boleh Ada di Mana-Mana. Tapi, Apakah Website Anda Benar-Benar Bekerja?
            </h2>
            <p className="text-black-700 leading-relaxed mb-4">
              Banyak bisnis punya website — tapi tidak semuanya mampu menarik pelanggan.
              Tanpa strategi dan desain yang tepat, website Anda hanya akan jadi pajangan digital,
              bukan alat penggerak bisnis yang sesungguhnya.
            </p>
            <p className="text-black-700 leading-relaxed">
              <strong>StarDev Creative</strong> membantu Anda membangun website yang tampil menarik,
              mudah diakses, dan dirancang untuk <span className="font-semibold">menghasilkan kepercayaan serta konversi nyata</span>.
              Kami tidak sekadar membuat website, tapi menghadirkan solusi digital yang benar-benar bekerja untuk bisnis Anda.
            </p>
            <button
              onClick={() => document.getElementById('layanan').scrollIntoView({ behavior: 'smooth' })}
              className="text-white bg-black px-6 py-2 rounded-full mx-2 my-6 hover:scale-110 transform transition duration-300 hover:shadow-lg"
            >
              Bahas Website yang Menghasilkan!
            </button>
          </div>

          <div className="md:w-1/2 order-2 md:order-2 flex justify-center">
            <Image
              src="/group-diverse-people-having-business-meeting.jpg"
              alt="Website yang bekerja untuk bisnis Anda"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Bagian 2: Website Profesional untuk Kepercayaan Bisnis */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/CTA2.jpg"
              alt="Website profesional yang membangun kepercayaan"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>

          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6 leading-snug">
              Kesan Pertama di Dunia Digital Datang dari Website Anda.
            </h2>
            <p className="text-black-700 leading-relaxed mb-4">
              Di dunia digital, tampilan website Anda menentukan bagaimana calon pelanggan menilai bisnis Anda.
              Desain yang asal-asalan bisa membuat mereka ragu — bahkan pergi tanpa memberi kesempatan kedua.
            </p>
            <p className="text-black-700 leading-relaxed mb-8">
              <strong>StarDev Creative</strong> menghadirkan website profesional yang tidak hanya enak dilihat,
              tapi juga <span className="font-semibold">dibangun dengan strategi konversi dan pengalaman pengguna yang matang</span>.
              Karena di dunia digital, kredibilitas dimulai dari kesan pertama.
            </p>
            <button
              onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
              className="text-white bg-black px-6 py-2 rounded-full mx-2 my-1 hover:scale-110 transform transition duration-300 hover:shadow-lg"
            >
              Bangun Website Profesionalmu Sekarang!
            </button>
          </div>
        </div>
      </section>

  );
};

export default CallToAction;