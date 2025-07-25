import React from 'react';
import { motion } from 'framer-motion';
import './ExtraCurricular.css';

const interests = [
  'Love to compose music and write songs 🎵✍️',
  'Playing Mario Forever 🕹️',
  'Tekken warrior since childhood 🎮🔥'
];

const ExtraCurricular = () => {
  return (
    <section id="extra" className="extra">
      <motion.div
        className="glass-card"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          Extra Curricular
        </motion.h2>
        <ul className="interest-list">
          {interests.map((item, index) => (
            <motion.li
              key={index}
              className="interest-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default ExtraCurricular;