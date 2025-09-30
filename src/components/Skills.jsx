import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'C++', level: 90 },
  { name: 'C#', level: 85 },
  { name: 'Java', level: 85 },
  { name: 'JavaScript', level: 95 },
  { name: 'TypeScript', level: 80 },
  { name: 'Go', level: 70 },
  { name: 'HTML5/CSS3', level: 95 },
  { name: 'React.js/Angular', level: 90 },
  { name: 'Flutter/React Native', level: 85 },
  { name: '.NET/Spring Boot', level: 80 },
  { name: 'SQL/MySQL/MongoDB', level: 90 },
  { name: 'Firebase/Azure', level: 85 },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen px-6 py-16 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {skills.map((skill, idx) => (
          <div key={idx}>
            <h3 className="text-lg font-semibold mb-1">{skill.name}</h3>
            <div className="w-full bg-gray-200 h-4 rounded">
              <motion.div
                className="h-4 rounded bg-indigo-600"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: idx * 0.1 }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
