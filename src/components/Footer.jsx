import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="h-16 bg-indigo-600 text-white flex items-center justify-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <p>© 2025 Nishant Navanth Landage. All Rights Reserved.</p>
    </motion.footer>
  );
};

export default Footer;
