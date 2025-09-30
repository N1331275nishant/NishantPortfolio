import React from 'react';
import { FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen px-6 py-16 bg-white text-center">
      <h2 className="text-4xl font-bold mb-12">Contact</h2>
      <motion.div
        className="flex flex-col md:flex-row justify-center gap-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <a href="mailto:landagenishant25@gmail.com" className="px-6 py-3 border-2 border-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
          <FaEnvelope /> Email
        </a>
        <a href="tel:+447818920485" className="px-6 py-3 border-2 border-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
          <FaPhone /> +44 7818920485
        </a>
      </motion.div>
      <motion.div
        className="flex justify-center gap-6 text-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <a href="https://github.com/N1331275nishant" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors"><FaGithub /></a>
        <a href="https://leetcode.com/u/nishant1-1/" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors"><SiLeetcode /></a>
      </motion.div>
    </section>
  );
};

export default Contact;
