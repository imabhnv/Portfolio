import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
  {
    role: 'Data Science Intern',
    company: 'Unified Mentor',
    duration: 'Mar 2025 - Apr 2025',
    details: 'Worked on ML pipelines, data visualization, and model optimization.'
  },
  {
    role: 'Data Science Intern',
    company: 'NullClass',
    duration: 'Apr 2025 - May 2025',
    details: 'Built end-to-end ML workflows using Python & best practices.'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <motion.div
        className="glass-card"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <motion.div
              className="experience-item"
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3>{exp.role} @ {exp.company}</h3>
              <p className="duration">{exp.duration}</p>
              <p>{exp.details}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
