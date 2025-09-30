import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    degree: 'MSc Software Engineering',
    school: 'Nottingham Trent University, UK',
    duration: 'Expected Sept 2025 | Current CGPA: A / First Class',
    modules: 'Advanced Algorithms, Machine Learning, Distributed Systems, Cloud Computing, Software Engineering',
  },
  {
    degree: 'B.Tech Computer Science Engineering',
    school: 'Walchand Institute of Technology, Solapur, India',
    duration: 'Graduated 2024 | CGPA: 8.91 / A+ Grade',
    modules: 'Core Computer Science Engineering Curriculum',
  },
];

const Education = () => {
  return (
    <section id="education" className="min-h-screen px-6 py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            className="border-l-4 border-indigo-600 pl-4"
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold">{edu.degree}</h3>
            <p className="text-gray-600 mb-1">{edu.school} | {edu.duration}</p>
            <p className="text-gray-700 italic">{edu.modules}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
