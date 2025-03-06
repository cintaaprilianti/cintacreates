import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center h-screen bg-cover bg-center bg-black"
      style={{ backgroundImage: "url('/src/image/home bg.png')" }}
    >

      <motion.div
        className="flex-shrink-0 mb-4 md:mb-0 md:mr-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src="/src/image/myself.png"
          alt="My Pic"
          className="h-80 w-80 md:h-130 md:w-80 object-cover rounded-lg shadow-lg"
        />
      </motion.div>

      <motion.div
        className="p-6 w-full max-w-md md:max-w-2xl bg-gray-400 shadow-lg rounded-lg flex-grow"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <h1 className="text-3xl font-bold text-white mb-4">About Me</h1>
        <p className="text-white mb-2 text-justify">
          Saya adalah mahasiswi Teknik Informatika di UIN Sultan Syarif Kasim Riau. 
          Saya memiliki minat dalam desain grafis, seperti desain poster, infografis, dan tipografi.
          Selain itu, saya juga tertarik dengan fotografi dan terus belajar dalam bidang ini.
        </p>

        <div className="mt-4">
          <h2 className="text-white text-xl font-semibold mb-2">Tools yang Saya Gunakan:</h2>
          <ul className="list-disc list-inside text-white">
            <li>Canva</li>
            <li>Figma</li>
            <li>PicsArt</li>
            <li>Phonto</li>
            <li>Lightroom</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
