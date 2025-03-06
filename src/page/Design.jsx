import React from 'react';
import { motion } from 'framer-motion';

function Design() {
  const designs = [
    {
      title: "Poster Sumpah Pemuda",
      date: "27th Oct 2023",
      description: "Poster untuk memperingati Hari Sumpah Pemuda.",
      image: "./src/image/poster sumpah pemuda.png",
    },
    {
      title: "Poster Iklan",
      date: "29th May 2024",
      description: "Poster iklan kacamata untuk tugas Bahasa Inggris.",
      image: "./src/image/poster iklan.png",
    },
    {
      title: "Tipografi Asomatif",
      date: "17th Oct 2024",
      description: "Tipografi foto divisi HID Asomatif 2024.",
      image: "./src/image/hid aso.jpg",
    },
    {
      title: "Tipografi Ramadan",
      date: "28th Feb 2025",
      description: "Tipografi menyambut bulan puasa 1446 H.",
      image: "./src/image/ramadan.jpg",
    },
    {
      title: "Infografis SDG",
      date: "11th Jun 2024",
      description: "Infografis mengenai SDG untuk lomba porseni.",
      image: "./src/image/infografis.png",
    },
  ];

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center p-8 bg-black"
      style={{ backgroundImage: "url('/src/image/home bg.png')" }}
    >

      <motion.h1
        className="text-3xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Design
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.5, duration: 1 },
          },
        }}
      >
        {designs.map((item, index) => (
          <motion.article
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1 }}
          >
            <motion.img
              alt={item.title}
              src={item.image}
              className="absolute inset-0 h-full w-full object-cover"
              whileHover={{ scale: 1.05 }}
            />
            <div className="relative bg-gradient-to-t from-gray-900/60 to-gray-900/20 pt-32 sm:pt-48 lg:pt-64">
              <div className="p-4 sm:p-6">
                <motion.time
                  className="block text-xs text-white/90"
                  whileHover={{ color: "#ffcc00" }}
                >
                  {item.date}
                </motion.time>
                <a href="#">
                  <motion.h3
                    className="mt-0.5 text-lg text-white"
                    whileHover={{ color: "#ffcc00" }}
                  >
                    {item.title}
                  </motion.h3>
                </a>
                <motion.p className="mt-2 text-sm text-white/95">{item.description}</motion.p>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}

export default Design;
