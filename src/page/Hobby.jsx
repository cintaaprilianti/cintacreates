import React from 'react';
import { motion } from 'framer-motion';

function Hobby() {
  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center bg-black"
      style={{ backgroundImage: "url('/src/image/home bg.png')" }}
    >
      <motion.div
        className="p-4 w-full max-w-7xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-bold text-white text-center mb-8">My Hobbies</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          <motion.article
            className="group bg-gray-700 rounded-xl shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <motion.img
              src="/src/image/desain.png"
              alt="Desain Grafis"
              className="h-56 w-full object-cover"
              whileHover={{ scale: 1.1 }}
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-white">Desain Grafis</h3>
              <p className="mt-2 mb-4 text-sm text-white">
                Saya suka membuat desain yang menarik dan kreatif menggunakan Canva, PicsArt, dan Phonto.
              </p>
            </div>
          </motion.article>

          <motion.article
            className="group bg-gray-700 rounded-xl shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            <motion.img
              src="/src/image/fotografi.png"
              alt="Fotografi"
              className="h-56 w-full object-cover"
              whileHover={{ scale: 1.1 }}
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-white">Fotografi</h3>
              <p className="mt-2 mb-4 text-sm text-white">
                Fotografi adalah cara saya untuk menangkap momen indah dan berbagi cerita melalui gambar. 
                Lightroom adalah aplikasi yang saya gunakan untuk editing.
              </p>
            </div>
          </motion.article>

          <motion.article
            className="group bg-gray-700 rounded-xl shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          >
            <motion.img
              src="/src/image/movie.png"
              alt="Nonton Film"
              className="h-56 w-full object-cover"
              whileHover={{ scale: 1.1 }}
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-white">Nonton Film</h3>
              <p className="mt-2 mb-4 text-sm text-white">
                Saya suka menonton film dari berbagai genre dan menganalisis cerita serta sinematografi.
              </p>
            </div>
          </motion.article>

        </div>
      </motion.div>
    </div>
  );
}

export default Hobby;
