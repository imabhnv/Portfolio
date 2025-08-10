import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
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
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
            I'm Abhinav Varshney, B.Tech CSE student with a passion for developing AI-based applications.
            I've worked as remote intern in Data Science positions, and developed apps from astrology websites to AI career guides.
            I'm currently working as Advisor after serving as Deputy Secretary of Bitwise Club, guiding juniors in DSA and Data Science.
            Let's do something great together✌️ 
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
