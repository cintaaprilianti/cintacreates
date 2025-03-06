import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_47d8nqk", "template_66nf2gh", formData, "mrVW28BhrOvGzMeo7")
      .then(() => {
        alert("Pesan berhasil dikirim!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Terjadi kesalahan, coba lagi.");
      });
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center p-6 bg-black"
      style={{ backgroundImage: "url('/src/image/home bg.png')" }}
    >
      <motion.div
        className="p-6 w-full max-w-md bg-gray-700 shadow-lg rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-white text-2xl font-bold text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Contact
        </motion.h1>

        <form className="mt-4" onSubmit={handleSubmit}>
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <label className="text-white block text-sm font-medium">Nama</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="text-white mt-1 block w-full border border-gray-600 rounded-md p-2 bg-gray-800"
              placeholder="Masukkan nama Anda"
              required
            />
          </motion.div>

          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <label className="text-white block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="text-white mt-1 block w-full border border-gray-600 rounded-md p-2 bg-gray-800"
              placeholder="Masukkan email Anda"
              required
            />
          </motion.div>

          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <label className="text-white block text-sm font-medium">Pesan</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="text-white mt-1 block w-full border border-gray-600 rounded-md p-2 bg-gray-800"
              rows="4"
              placeholder="Tulis pesan Anda di sini"
              required
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Kirim
          </motion.button>
        </form>
      </motion.div>

      <motion.footer
        className="w-full text-center text-white mt-6 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <p className="text-sm">© {new Date().getFullYear()} Cinta Aprilianti. All rights reserved.</p>
        <p className="text-sm">
          Email:{" "}
          <a href="mailto:cintaapriliantii@gmail.com" className="underline">
            cintaapriliantii@gmail.com
          </a>
        </p>
      </motion.footer>
    </div>
  );
}

export default Contact;
