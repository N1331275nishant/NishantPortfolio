import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Smart Traffic Light Control & Simulation App',
    desc: 'AI-driven traffic control system for Nottingham using Python, Flutter, and ML models.',
    tech: 'Python, Flutter, ML',
    link: '#',
  },
  {
    name: 'Advanced AI Chatbot',
    desc: 'Intelligent chatbot with voice, image input, and NLP using Python, TensorFlow, Google Cloud APIs.',
    tech: 'Python, TensorFlow, Google Cloud',
    link: '#',
  },
  {
    name: 'E-commerce Web Platform',
    desc: 'Secure online marketplace with Spring Boot, React, MySQL, including payment integration.',
    tech: 'React, Spring Boot, MySQL',
    link: '#',
  },
  {
    name: 'Expense Analysis & Management App',
    desc: 'Web-based system using OCR & NLP to extract and categorize receipt data efficiently.',
    tech: 'React, OCR, NLP',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen px-6 py-16 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="p-6 border rounded-lg shadow hover:shadow-xl transition transform hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
            <p className="mb-2">{project.desc}</p>
            <p className="text-sm text-gray-600 mb-2">Tech: {project.tech}</p>
            <a href={project.link} target="_blank" className="text-indigo-600 hover:underline">View Project</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
