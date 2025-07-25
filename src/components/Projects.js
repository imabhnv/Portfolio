import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    title: 'Kundali Summarizer',
    description: 'A full-stack AI astrology platform web-application that simplifies the usage of Astrosage.com',
    link: 'https://github.com/imabhnv/Kundali-Summarizer'
  },
  {
    title: 'AI-powered Career Coach',
    description: 'Interactive system offering career roadmaps and many more stuff along with a chatBot.',
    link: 'https://github.com/imabhnv/AI-Career-Coach'
  },
  {
    title: 'Fitness AI',
    description: 'An AI-powered fitness trainer that analyzes posture and counts reps for key exercises via video or webcam.',
    link: 'https://github.com/imabhnv/Fitness-AI'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <motion.div
        className="glass-card"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          Projects
        </motion.h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <motion.div
              className="project-item"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h3>
              <p>{project.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
