import { useState } from 'react';
import { Phone, MessageCircle, Mail } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Pesan berhasil dikirim!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
          <div className="text-center mb-15">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-10">
            Konsultasikan kebutuhan Anda sekarang.{' '}
            <span className="text-yellow-400">Gratis!</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-base">
StarDev Creative membantu Anda membangun website yang tampil menarik, mudah diakses, dan dirancang untuk menghasilkan kepercayaan serta konversi nyata. Kami tidak sekadar membuat website, tapi menghadirkan solusi digital yang benar-benar bekerja untuk bisnis Anda.          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Section */}
          <div>
            <h1 className="text-5xl font-bold mb-8">
              Let's talk with the <span className="text-purple-800">StarDe</span>
              <span className="text-yellow-500">v Creative</span> team.
            </h1>

            <div className="mb-12">
              <div className="inline-block bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-8 flex items-center gap-2">
                Experience by the Best
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 mb-12">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Telepon :</p>
                  <p className="text-gray-600">08988025033</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fab fa-whatsapp text-white text-xl"></i>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">WhatsApp :</p>
                  <p className="text-gray-600">089616869977</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Email :</p>
                  <p className="text-gray-600">yusufpamungkas7@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <p className="font-semibold text-gray-800 mb-4">Follow us on :</p>
              <div className="flex gap-4">
                <a href="https://github.com/yusufbintangg" className="hover:text-black">
            <i className="fab fa-github text-3xl"></i>
                </a>
                <a href="https://web.facebook.com/stardevcreative/" className="hover:text-black">
                  <i className="fab fa-facebook text-3xl"></i>
                </a>
                <a href="https://www.linkedin.com/in/yusuf-bintang-32b7a1319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="hover:text-black">
                  <i className="fab fa-linkedin text-3xl"></i>
                </a>
                <a href="https://www.instagram.com/yusufbintangg?igsh=Y21uOTBwOGVzdmYz" className="hover:text-black">
                  <i className="fab fa-instagram text-3xl"></i>
                </a>
                <a href="https://www.threads.com/yusufbintangg?igsh=Y21uOTBwOGVzdmYz" className="hover:text-black">
                  <i className="fab fa-threads text-3xl"></i>
                </a>
                <a href="https://www.tiktok.com/@yusufbintanggg?_t=ZS-90QAyAwztys&_r=1" className="hover:text-black">
                  <i className="fab fa-tiktok text-3xl"></i>
                </a>
                <a href={`https://api.whatsapp.com/send?phone=+6289616869977&text=${encodeURIComponent(
                    `Halo StarDev, saya tertarik dengan jasa pembuatan website profesional untuk bisnis saya.`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer" className="hover:text-black">
            <i className="fab fa-whatsapp text-3xl"></i>
          </a>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Send Us a Message!</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Your name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Your email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Your message (optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-full transition-colors"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}