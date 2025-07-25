import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <motion.div
        className="glass-card"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          Contact Me
        </motion.h2>
        <p>Feel free to reach out via any of the platforms below 👇</p>
        <div className="contact-links">
          <a href="mailto:varshneyabhinav66@gmail.com">Mail</a>
          <a href="https://www.linkedin.com/in/abhinav-varshney">LinkedIn</a>
          <a href="https://github.com/abhinavvarshney">GitHub</a>
          <a href="/My_Resume.pdf" download>Download Resume</a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
