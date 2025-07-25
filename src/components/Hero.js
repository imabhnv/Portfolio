import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <motion.div
        className="glass-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          Abhinav Varshney
        </motion.h1>
        <motion.div
          className="typewriter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Typewriter
            options={{
              strings: ['AI Developer', 'Tech Enthusiast', 'Data Science'],
              autoStart: true,
              loop: true,
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
