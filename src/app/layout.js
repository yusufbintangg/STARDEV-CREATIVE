import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] 
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "StarDev Creative - Jasa Pembuatan Website Profesional, Murah & Berkualitas",
  description:
    "Buat website profesional untuk bisnis Anda bersama StarDev Creative. Kami melayani pembuatan website company profile, e-commerce, landing page, dan aplikasi web custom mulai Rp 500.000. Desain modern, SEO-ready, dan cepat online!",
  keywords:
    "jasa pembuatan website profesional, jasa website murah dan cepat, bikin website custom untuk bisnis, jasa pembuatan website company profile, jasa landing page bisnis, jasa pembuatan toko online e-commerce, jasa web developer berpengalaman, pembuatan website UMKM, pembuatan website startup, jasa bikin website personal portfolio, StarDev Creative Indonesia, jasa pembuatan website terpercaya di Indonesia, jasa website untuk brand dan bisnis lokal",
  authors: [{ name: "StarDev Creative" }],
  creator: "StarDev Creative",
  publisher: "StarDev Creative",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  metadataBase: new URL("https://www.stardevcreative.com"),
  alternates: {
    canonical: "https://www.stardevcreative.com/",
  },

  openGraph: {
    title: "StarDev Creative - Jasa Pembuatan Website Profesional & Terjangkau",
    description:
      "Bangun website profesional untuk bisnis Anda dengan harga mulai Rp 500.000. StarDev Creative melayani pembuatan website company profile, e-commerce, dan custom web app di seluruh Indonesia.",
    url: "https://www.stardevcreative.com",
    siteName: "StarDev Creative",
    images: [
      {
        url: "/og-image-stardev.jpg",
        width: 1200,
        height: 630,
        alt: "StarDev Creative - Jasa Pembuatan Website Profesional Indonesia",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "StarDev Creative - Jasa Pembuatan Website Profesional & Murah Mulai Rp 500.000",
    description:
      "Website cepat online, desain modern, dan SEO-friendly. StarDev Creative siap bantu bisnis Anda tampil profesional di dunia digital!",
    images: ["/og-image-stardev.jpg"],
    creator: "@stardevcreative",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "ganti-dengan-google-verification-code-asli",
  },

  category: "Web Development",
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "StarDev Creative",
    "url": "https://www.stardevcreative.com",
    "logo": "https://www.stardevcreative.com/logoStardev.jpg",
    "description": "Jasa pembuatan website profesional untuk bisnis Anda",
    "foundingDate": "2023",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+628988025033",
      "contactType": "Customer Service",
      "availableLanguage": "Indonesian"
    },
    "sameAs": [
      "https://www.facebook.com/share/17WjPAgpLN/?mibextid=wwXIfr",
      "https://www.linkedin.com/in/yusuf-bintang-32b7a1319",
      "https://www.instagram.com/yusufbintangg?igsh=Y21uOTBwOGVzdmYz",
      "https://www.threads.com/yusufbintangg?igsh=Y21uOTBwOGVzdmYz",
      "https://www.tiktok.com/@yusufbintanggg?_t=ZS-90QAyAwztys&_r=1",
      "https://api.whatsapp.com/send?phone=+628988025033"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Layanan Website",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Company Profile",
            "description": "Website resmi perusahaan dengan desain profesional"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-Commerce Website",
            "description": "Toko online dengan sistem pembayaran terintegrasi"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Landing Page",
            "description": "Halaman web untuk promosi produk atau jasa"
          }
        }
      ]
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
