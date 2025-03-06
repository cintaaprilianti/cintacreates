import React from 'react';
import { motion } from 'framer-motion';

function Hobby() {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-black px-4 py-8"
      style={{ backgroundImage: "url('home bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <motion.div
        className="w-full max-w-5xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">My Hobbies</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          <motion.article
            className="group bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <motion.img
              src="desain.png"
              alt="Desain Grafis"
              className="w-full h-48 object-cover"
              whileHover={{ scale: 1.1 }}
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-white">Desain Grafis</h3>
              <p className="mt-2 text-sm text-white/80">
                Saya suka membuat desain kreatif menggunakan Canva, PicsArt, dan Phonto.
              </p>
            </div>
          </motion.article>

          <motion.article
            className="group bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            <motion.img
              src="fotografi.png"
              alt="Fotografi"
              className="w-full h-48 object-cover"
              whileHover={{ scale: 1.1 }}
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-white">Fotografi</h3>
              <p className="mt-2 text-sm text-white/80">
                Fotografi adalah cara saya menangkap momen indah. Lightroom adalah aplikasi favorit saya untuk editing.
              </p>
            </div>
          </motion.article>

          <motion.article
            className="group bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          >
            <motion.img
              src="movie.png"
              alt="Nonton Film"
              className="w-full h-48 object-cover"
              whileHover={{ scale: 1.1 }}
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-white">Nonton Film</h3>
              <p className="mt-2 text-sm text-white/80">
                Saya suka menonton film dari berbagai genre dan menganalisis sinematografi.
              </p>
            </div>
          </motion.article>

        </div>
      </motion.div>
    </div>
  );
}

export default Hobby;
