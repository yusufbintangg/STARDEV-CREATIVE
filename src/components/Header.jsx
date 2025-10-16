'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['Home', 'layanan', 'pricing', 'Support', 'portfolio', 'kontak'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", id: "Home" },
    { name: "Layanan", id: "layanan" },
    { name: "Pricing", id: "pricing" },
    { name: "Support", id: "Support" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Kontak", id: "kontak" },
  ];

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] bg-white/60 backdrop-blur-lg border border-white/30 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] z-50 transition-all duration-300">
      <div className="container mx-auto px-6 flex justify-between items-center py-3">
        {/* Logo */}
        <section>
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer flex items-center"
          >
          <img src="/og-image-stardev.jpg" alt="Logo" className="mr-2 h-10 w-auto rounded-lg logo-glow" />
            <span className="font-semibold text-lg text-black/80"></span>
          </div>
        </section>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  onClick={() => handleScrollToSection(item.id)}
                  className={`px-5 py-2 rounded-xl text-sm font-medium cursor-pointer transition-all duration-300
                    ${
                      activeSection === item.id
                        ? "bg-black/80 text-white shadow-md"
                        : "text-black hover:bg-white/40 hover:text-black"
                    }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none text-black/70"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden bg-white/60 backdrop-blur-md border-t border-white/30 rounded-b-2xl shadow-md">
          <ul className="flex flex-col items-center space-y-3 py-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  onClick={() => handleScrollToSection(item.id)}
                  className={`block px-4 py-2 rounded-lg text-black/80 ${
                    activeSection === item.id ? 'bg-black/80 text-white' : 'hover:bg-white/70'
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
