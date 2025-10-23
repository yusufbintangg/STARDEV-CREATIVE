export default function Footer() {
  return (
    <footer className="bg-light text-black-300 text-sm px-6 md:px-24 pt-16 pb-8">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 border-b border-black-700 pb-10">
        {/* Logo */}
        <div className="col-span-1 flex flex-col items-start">
          <img src="/og-image-stardev.jpg" alt="Logo" className="mr-2 h-14 w-auto mb-4" />
        </div>

        {/* Services */}
        <div>
          <h4 className="text-black font-semibold mb-3">Services</h4>
          <ul className="space-y-2">
            <li>Website Company Profile</li>
            <li>Landing Page Bisnis</li>
            <li>Toko Online / E-Commerce</li>
            <li>Website Restoran</li>
            <li>Website Portofolio</li>
            <li>Custom Web App</li>
          </ul>
        </div>

        {/* Teknologi */}
        <div>
         <h4 className="text-black font-semibold mb-3">Teknologi</h4>
          <ul className="space-y-2">
            <li>Next.js & Tailwind CSS</li>
            <li>Integrasi API (Midtrans, WhatsApp, dll)</li>
            <li>Optimasi SEO</li>
            <li>Desain Responsif</li>
          </ul>
        </div>

        {/* About us */}
        <div>
          <h4 className="text-black font-semibold mb-3">Perusahaan</h4>
            <ul className="space-y-2">
              <li>Tentang Kami</li>
              <li>Kontak</li>
              <li>Portofolio</li>
              <li>FAQ</li>
            </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-black">
        {/* Social Icons */}
        <div className="flex space-x-4 mb-4 md:mb-0 ">
          <a href="https://github.com/yusufbintangg" className="hover:text-black">
            <i className="fab fa-github text-xl"></i>
          </a>
          <a href="https://web.facebook.com/stardevcreative/" className="hover:text-black">
            <i className="fab fa-facebook text-xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/yusuf-bintang-32b7a1319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="hover:text-black">
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a href="https://www.instagram.com/yusufbintangg?igsh=Y21uOTBwOGVzdmYz" className="hover:text-black">
            <i className="fab fa-instagram text-xl"></i>
          </a>
           <a href="https://www.threads.com/yusufbintangg?igsh=Y21uOTBwOGVzdmYz" className="hover:text-black">
            <i className="fab fa-threads text-xl"></i>
          </a>
          <a href="https://www.tiktok.com/@yusufbintanggg?_t=ZS-90QAyAwztys&_r=1" className="hover:text-black">
            <i className="fab fa-tiktok text-xl"></i>
          </a>
          <a href={`https://api.whatsapp.com/send?phone=+6289616869977&text=${encodeURIComponent(
                    `Halo StarDev, saya tertarik dengan jasa pembuatan website profesional untuk bisnis saya.`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer" className="hover:text-black">
            <i className="fab fa-whatsapp text-xl"></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs">
          © {new Date().getFullYear()} StarDevCreative. All rights reserved.{" "}
          <a href="#" className="underline hover:text-black">Privacy Policy</a>,{" "}
          <a href="#" className="underline hover:text-black">Terms of Use</a>.
        </p>
      </div>
    </footer>
  );
}
