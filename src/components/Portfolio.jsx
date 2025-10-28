"use client";
import { motion, useMotionValue, animate } from "framer-motion";
import { useRef, useState, useEffect, memo } from "react";
import Image from "next/image";

export default function PortfolioSection() {

  const projects = [
    { image: "/portfolio/compro.png", title: "Website Company Profile" },
    { image: "/portfolio/hotel.png", title: "Website Hotel" },
    { image: "/portfolio/personalbrand.png", title: "Website Personal Brand" },
    { image: "/portfolio/rentalmobil.png", title: "Website Rental Mobil" },
    { image: "/portfolio/rentalmobil2.png", title: "Website Rental Mobil" },
    { image: "/portfolio/rentalmobil3.png", title: "Website Rental Mobil" },
    { image: "/portfolio/restaurant.png", title: "Website Restaurant" },
    { image: "/portfolio/restaurant2.png", title: "Website Restaurant" },
    { image: "/portfolio/travel.png", title: "Website Travel" },
    { image: "/portfolio/coffe shop.png", title: "Website Coffee Shop" },
    { image: "/portfolio/ecommerceclothing.png", title: "Website Ecommerce Clothing" },
    { image: "/portfolio/furniture 1.png", title: "Website Furniture" },
    { image: "/portfolio/furniture2.png", title: "Website Furniture" },
    { image: "/portfolio/traveler.png", title: "Website Travel" },
  ];

  const carouselRef = useRef(null);
  const x = useMotionValue(0);
  const [dimensions, setDimensions] = useState({ loopWidth: 0, totalWidth: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const duplicatedProjects = [...projects, ...projects]; // Duplikasi 2x untuk seamless infinite loop bidirectional

  // Effect untuk mengukur lebar carousel secara dinamis (otomatis hitung berdasarkan items & gap)
  useEffect(() => {
    const timeoutId = setTimeout(() => { // Delay kecil agar DOM siap
      if (carouselRef.current) {
        const scrollWidth = carouselRef.current.scrollWidth;
        const loopWidth = scrollWidth / 2; // Lebar satu set projects (duplikasi 2x)
        const totalWidth = loopWidth * 2; // Untuk constraints (boleh drag 2 loops)
        setDimensions({ loopWidth, totalWidth });
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [projects]);

  // Effect untuk handle infinite looping (reset posisi saat mencapai akhir)
  useEffect(() => {
    if (dimensions.loopWidth === 0) return; // Tunggu ukuran siap

    const unsubscribe = x.on("change", (latest) => {
      if (latest <= -dimensions.loopWidth) {
        x.set(latest + dimensions.loopWidth); // Reset ke awal loop (loop ke gambar pertama)
      } else if (latest >= 0) {
        x.set(latest - dimensions.loopWidth); // Reset ke akhir loop (loop ke gambar terakhir)
      }
    });

    return () => unsubscribe(); // Cleanup
  }, [x, dimensions.loopWidth]);

  // Update currentIndex based on x position
  useEffect(() => {
    if (dimensions.loopWidth === 0) return;

    const unsubscribe = x.on("change", (latest) => {
      const itemWidth = dimensions.loopWidth / projects.length;
      let index = Math.round(Math.abs(latest) / itemWidth) % projects.length;
      // Adjust for bidirectional scrolling
      if (latest > 0) {
        index = (projects.length - index) % projects.length;
      }
      setCurrentIndex(index);
    });

    return () => unsubscribe();
  }, [x, dimensions.loopWidth, projects.length]);

  return (
    <section id="portfolio" className="py-20 text-black">
      <div className="container mx-auto px-8 text-center">
        <h2 className="text-7xl font-bold mb-12">Portfolio Kami</h2>
        <p className="text-2lg text-4xl text-black-300 mb-14 max-w-6xl mx-auto">
          Jelajahi koleksi karya terbaik kami yang telah membantu berbagai bisnis berkembang dan sukses di dunia digital
        </p>

        {/* Wadah utama carousel */}
        <div className="relative overflow-hidden rounded-2xl max-w-6xl mx-auto">
          <motion.div
            ref={carouselRef}
            style={{ x }} // Bind posisi ke motion value untuk tracking & reset infinite
            drag="x"
            dragConstraints={{
              left: dimensions.totalWidth > 0 ? -dimensions.totalWidth : 0, // Drag ke kiri sampai 2 loops
              right: dimensions.loopWidth > 0 ? dimensions.loopWidth : 0, // Boleh drag ke kanan sampai 1 loop
            }}
            className="flex gap-6 cursor-grab active:cursor-grabbing" // Gap antar card
          >
            {duplicatedProjects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </motion.div>

        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                x.set(-index * (dimensions.loopWidth / projects.length));
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-black scale-125' : 'bg-blue-600 hover:bg-purple-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
    
  );
}

const ProjectCard = memo(({ project }) => (
  <motion.div
    className="flex-shrink-0 rounded-2xl w-[360px] h-120px" // Fixed width card
  >
    <Image
      src={project.image}
      alt={project.title}
      width={360}
      height={120}
      className="w-full h-120 rounded-2xl object-top object-cover pointer-events-none" // Fixed height
      loading="lazy"
    />
    <div className="p-4 text-center font-medium pointer-events-none">
      {project.title}
    </div>
  </motion.div>
));
