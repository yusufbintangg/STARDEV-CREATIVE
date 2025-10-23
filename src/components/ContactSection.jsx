"use client";
import { Button } from '@/components/ui/button';
export default function ContactSection() {
  return (
    <section className="text-gray py-10 px-0 relative overflow-hidden">
      {/* Background Pattern */}
      <h2 className="text-4xl md:text-5xl font-bold mb-9 text-center relative z-10">
        Let's collaborate
      </h2>
      <div className="text-xl text-center m-10 text-gray min-h-[90px] relative z-10">
            <p>
              Jangan buang waktu dan trafik berharga! Website Anda adalah aset utama, bukan sekadar brosur online. Kami akan memastikan kecepatan, navigasi, dan desain website Anda bekerja secara optimum sehingga konversi meroket dan Anda bisa fokus pada pertumbuhan bisnis.
            </p>
          </div>
        <div className="md:col-span-2 text-center mt-8 relative z-10">
           <Button asChild className="text-white bg-black px-6 py-2 rounded-full mx-2 my-1 hover:scale-110
              transform transition duration-300
              hover:border-black
              hover:text-white
              hover:shadow-lg
              hover:bg-black text-white transition-all duration-300">
            <a href={`https://api.whatsapp.com/send?phone=+6289616869977&text=
              ${encodeURIComponent(
                `Halo StarDev, saya tertarik dengan jasa pembuatan website.`)}`}
                target="_blank"
                rel="noopener noreferrer">
              Konsultasi Kebutuhan Anda Sekarang!!
            </a>
          </Button>
        </div>
    </section>
  );
}
