import { useState, useEffect } from 'react';
import header1 from "../images/header1.jpg";
import header2 from "../images/header2.jpg";
import header3 from "../images/header3.jpg";

const Header = () => {
  const [images] = useState([header1, header2, header3]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [contentIndex, setContentIndex] = useState(0);
  const contents = [
    {
      title: '"Exclusive: The Best Exporter Furniture Collection for Your Modern Home"',
      description: 'Explore our unrivaled collection, designed to reflect the modern lifestyle with exclusive details. Each of our pieces of furniture is an expression of beauty in your space. Our range includes sofas, tables, and accessories meticulously crafted to enhance your home.',
    },
    {
      title: '"Show Off Your Style: Exclusive Furniture for International Export"',
      description: 'Dari kursi mewah hingga meja elegan, pilih koleksi kami yang menampilkan kemewahan dengan keindahan unik. Setiap furnitur adalah karya indah yang menceritakan tentang ruang modern Anda. Buatlah ruang tamu Anda menjadi sorotan dengan gaya eksklusif kami yang diimpor dari berbagai negara.',
    },
    {
      title: 'Furniture Exporter: Selected Elegance for Modern Interiors',
      description: 'Crafted by leading exporters, our collection features elegant furniture that combines elegance with functional design to enhance your modern interior space. Explore our wide selection of chairs, cabinets, and decor to elevate your home interiors.',
    },
   
  ];

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    const contentInterval = setInterval(() => {
      setContentIndex((prevIndex) =>
        prevIndex === contents.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);

    return () => {
      clearInterval(imageInterval);
      clearInterval(contentInterval);
    };
  }, [images.length, contents.length]);

  return (
    <div className="relative blockss h-auto">
    <div className="w-full h-[100vh] md:h-screen overflow-hidden relative"> {/* Memperhatikan penambahan 'relative' di sini */}
      <div className="bg-black/30 top-0 left-0 w-full h-full absolute"></div>
      {images.map((image, index) => (
        <div
          key={index}
          className="w-full h-full inset-0 bg-cover bg-center absolute"
          style={{
            backgroundImage: `url(${image})`,
            opacity: currentImageIndex === index ? 1 : 0,
            transition: 'opacity 0.8s ease-in-out',
            mixBlendMode: 'overlay',
          }}
        />
      ))}
      <div className="relative container text-center md:text-left h-full"> {/* Menambahkan 'h-full' di sini */}
        <div className="z-10 flex items-center h-full"> {/* Mengubah 'h-screen' menjadi 'h-full' */}
          <div className="max-w-2xl text-white transition-opacity duration-500"> {/* Mengatur warna teks menjadi putih */}
            <h1 className="md:text-5xl text-3xl font-bold mb-4">
              {contents[contentIndex].title}
            </h1>
            <p className="text-slate-100 text-[.9rem] md:text-[1rem]">{contents[contentIndex].description}</p>
            <a href="#about" className='bg-[#f9b82b] px-5 py-3 rounded-lg text-white mt-7 inline-block max-w-max'>Get Started</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
};

export default Header;
