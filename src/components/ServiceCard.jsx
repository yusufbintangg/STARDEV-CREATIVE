import { memo } from "react";

const ServiceCard = memo(({ item }) => {
  return (
        // Card wrapper harus h-full dan menggunakan flex/grid
        <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col justify-between">
            <div>
                {/* 1. Judul */}
                <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>

                {/* 2. Deskripsi Singkat */}
                <p className="text-sm text-gray-600 mb-4">{item.desc}</p>

                {/* 3. Gambar */}
                <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 object-top object-cover mb-4 rounded-lg shadow-lg"
                    loading="lazy"
                />
            </div>

            {/* 4. Teks Utama (dibuat terpisah agar bisa didorong ke bawah) */}
            <p className="text-gray-800 mt-4">
                {item.text}
            </p>
        </div>
    );
});

export default ServiceCard;
