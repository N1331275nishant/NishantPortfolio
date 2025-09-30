import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold mb-6">About Me</h2>
      <motion.p
        className="max-w-3xl text-lg mb-4"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Motivated MSc Software Engineering candidate at Nottingham Trent University (expected Sept 2025),
        with a strong background in software development, algorithms, and scalable system design.
      </motion.p>
      <motion.p
        className="max-w-3xl text-lg"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Experienced in developing advanced web and mobile applications, cloud solutions, and intelligent systems
        integrating machine learning and natural language processing. Skilled in multiple programming languages
        and frameworks, with practical experience from freelance projects and academic research.
      </motion.p>
    </motion.section>
  );
};

export default About;
