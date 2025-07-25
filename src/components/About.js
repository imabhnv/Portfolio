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
          I'm Abhinav Varshney, a B.Tech CSE student passionate about building AI-powered applications.
          I've interned remotely in Data Science roles, and built apps ranging from astrology platforms to AI career coaches.
          I'm currently serving as Deputy Secretary at Bitwise Club, mentoring juniors in DSA and Data Science.
          Let's create something awesome together. 🚀
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
