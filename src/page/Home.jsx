import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

function Home() {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-20 bg-black bg-no-repeat bg-center bg-cover pt-16"
      style={{ backgroundImage: "url('home bg.png')" }}
    >

      <motion.div
        className="text-center md:text-left text-white max-w-lg"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-2xl md:text-3xl font-normal font-sans">Hello Everyone!</h1>
        <h1 className="text-5xl md:text-7xl font-bold font-sans mt-2">I'm Cinta Aprilianti</h1>

        <div className="flex justify-center md:justify-start mt-6 space-x-4">
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
        className="relative flex justify-center items-center mt-10 md:mt-0 w-full md:w-[30%]"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
 
        <div className="absolute bg-gray-400 rounded-t-full w-[250px] md:w-[320px] h-[400px] md:h-[500px]">

        </div>

        <img
          src="foto.png"
          alt="Cinta Aprilianti"
          className="relative w-[250px] md:w-[320px] h-[400px] md:h-[500px] object-cover"
        />
      </motion.div>
    </div>
  );
}

export default Home;
