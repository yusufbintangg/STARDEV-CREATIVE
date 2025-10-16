'use client';

const WhatsAppButton = () => {
  return (
    <a
      onClick={() => {
        window.open('https://wa.me/628988025033?text=' + encodeURIComponent('Halo StarDev, saya tertarik dengan jasa pembuatan website.'), '_blank');
      }}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-7 right-7 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 animate-pulse-whatsapp"
    >
      <i className="fab fa-whatsapp text-2xl"></i>
    </a>
  );
};

export default WhatsAppButton;
