import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Freelance Software Developer',
    company: 'Remote – India & UK | 2022 – Present',
    details: [
      'Designed scalable web applications for international clients on Upwork.',
      'Built mobile-first solutions using React Native and Flutter.',
      'Optimized backend performance and API response times.',
      'Deployed projects using Docker and cloud environments (Azure, Firebase).',
    ],
  },
  {
    title: 'Web Development Intern',
    company: 'InnovateSoft | July 2024 – Sept 2024',
    details: [
      'Developed interactive dashboards using React.js and Chart.js.',
      'Integrated third-party APIs for authentication and payment systems.',
      'Optimized SQL Server & Firebase queries, reducing load time.',
      'Documented features and collaborated with senior developers.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen px-6 py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="border-l-4 border-indigo-600 pl-4"
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold">{exp.title}</h3>
            <p className="text-gray-600 mb-2">{exp.company}</p>
            <ul className="list-disc list-inside space-y-1">
              {exp.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
