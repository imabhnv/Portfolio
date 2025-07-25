import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skills = [
  'Python', 'C++', 'TensorFlow', 'Scikit-learn', 'MySQL', 'Selenium', 'Web Scraping', 'NLP'
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
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
          Skills
        </motion.h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
