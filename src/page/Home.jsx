import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

function Home() {
  return (
    <div
      className="flex flex-row items-center justify-between h-screen px-20 bg-cover bg-center bg-black"
      style={{ backgroundImage: "url('/src/image/home bg.png')" }}
    >

      <motion.div
        className="text-left text-white"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl font-normal font-sans">Hello Everyone!</h1>
        <h1 className="text-7xl font-bold font-sans mt-2">I'm Cinta Aprilianti</h1>

        <div className="flex mt-6 space-x-6">
          <a href="https://www.instagram.com/cfnta" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/CintaAprilianti" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/cintaaprilianti" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="relative w-[30%] flex justify-center items-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute bg-gray-400 rounded-t-full w-[320px] h-[500px]"></div>

        <img
          src="/src/image/foto.png"
          alt="Cinta Aprilianti"
          className="relative w-[320px] h-[500px] object-cover"
        />
      </motion.div>
    </div>
  );
}

export default Home;
