import React, { useState } from "react";
import { motion } from "framer-motion";

function Design() {
  const [selectedImage, setSelectedImage] = useState(null);

  const designs = [
    {
      title: "Poster Sumpah Pemuda",
      date: "27th Oct 2023",
      description: "Poster untuk memperingati Hari Sumpah Pemuda.",
      image: "poster sumpah pemuda.png",
    },
    {
      title: "Poster Iklan",
      date: "29th May 2024",
      description: "Poster iklan kacamata untuk tugas Bahasa Inggris.",
      image: "poster iklan.png",
    },
    {
      title: "Tipografi Asomatif",
      date: "17th Oct 2024",
      description: "Tipografi foto divisi HID Asomatif 2024.",
      image: "hid aso.jpg",
    },
    {
      title: "Tipografi Ramadan",
      date: "28th Feb 2025",
      description: "Tipografi menyambut bulan puasa 1446 H.",
      image: "ramadan.jpg",
    },
    {
      title: "Infografis SDG",
      date: "11th Jun 2024",
      description: "Infografis mengenai SDG untuk lomba porseni.",
      image: "infografis.png",
    },
    {
      title: "Flyer Sobat HIMATIF",
      date: "22th Feb 2024",
      description: "Flyer pendataan mahasiswa berprestasi.",
      image: "sobat himatif.png",
    },
    {
      title: "Banner Kurmatif",
      date: "19th Mar 2024",
      description: "Desain banner untuk acara kurmatif 2024.",
      image: "kurmatif.png",
    },
    {
      title: "Feed Asomatif",
      date: "26th Aug 2024",
      description: "Poster mengenai coming soon, teaser, dan apa itu asomatif.",
      image: "asomatif.png",
    },
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-black p-4 md:p-8 pt-20"
      style={{ backgroundImage: "url('home bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
 
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8 mt-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Design
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl w-full px-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3, duration: 1 } },
        }}
      >
        {designs.map((item, index) => (
          <motion.article
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl bg-gray-800 cursor-pointer"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            onClick={() => setSelectedImage(item.image)}
          >
            <motion.img
              alt={item.title}
              src={item.image}
              className="w-full h-60 object-cover"
              whileHover={{ scale: 1.05 }}
            />
            <div className="relative bg-gradient-to-t from-gray-900/80 to-gray-900/20 p-4">
              <motion.time className="block text-xs text-white/90">{item.date}</motion.time>
              <motion.h3 className="mt-1 text-lg text-white font-semibold hover:text-yellow-400">
                {item.title}
              </motion.h3>
              <motion.p className="mt-2 text-sm text-white/80">{item.description}</motion.p>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="relative p-4 max-w-4xl w-full">
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-red-500"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <motion.img
              src={selectedImage}
              alt="Full View"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Design;
