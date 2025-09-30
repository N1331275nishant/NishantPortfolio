import React from 'react';
import { FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Name */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Nishant Navanth Landage
      </motion.h1>

      {/* Typewriter Role */}
      <motion.div
        className="text-2xl md:text-3xl text-white mb-6 drop-shadow-md"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Typewriter
          options={{
            strings: [
              'MSc Softwaree Engineering Student',
              'Fullstack & Software Engineer',
              'AI & Cloud Enthusiast'
            ],
            autoStart: true,
            loop: true,
            pauseFor: 2000,
          }}
        />
      </motion.div>

      {/* Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <a
          href="mailto:landagenishant25@gmail.com"
          className="px-6 py-3 border-2 border-white rounded-full text-white font-semibold hover:bg-white hover:text-indigo-600 transition-transform transform hover:scale-105 shadow-lg"
        >
          <FaEnvelope className="inline mr-2" /> Email
        </a>
        <a
          href="tel:+447818920485"
          className="px-6 py-3 border-2 border-white rounded-full text-white font-semibold hover:bg-white hover:text-indigo-600 transition-transform transform hover:scale-105 shadow-lg"
        >
          <FaPhone className="inline mr-2" /> +44 7818920485
        </a>
        <a
          href="/Nishant_CV.pdf"
          className="px-6 py-3 border-2 border-white rounded-full text-white font-semibold hover:bg-white hover:text-indigo-600 transition-transform transform hover:scale-105 shadow-lg"
        >
          Download CV
        </a>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="flex gap-6 text-3xl text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <a
          href="https://github.com/N1331275nishant"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gray-200 transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://leetcode.com/u/nishant1-1/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gray-200 transition-colors"
        >
          <SiLeetcode />
        </a>
      </motion.div>

      {/* Optional Animated Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div
          className="absolute w-72 h-72 bg-white rounded-full opacity-10 top-10 left-10"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror' }}
        />
        <motion.div
          className="absolute w-56 h-56 bg-white rounded-full opacity-10 bottom-20 right-20"
          animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: 'mirror' }}
        />
      </div>
    </motion.section>
  );
};

export default Hero;
