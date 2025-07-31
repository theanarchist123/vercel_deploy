import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About <span className="text-gradient">Us</span></h2>
          <p className="section-subtitle">Learn more about our mission and values</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="/webstorm-logo.svg" alt="About Us" />
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>Our Story</h3>
            <p>
              Founded in 2025, TechLanding has been at the forefront of technological innovation, 
              helping businesses transform their digital presence and achieve their goals.
            </p>
            
            <h3>Our Mission</h3>
            <p>
              We are committed to delivering exceptional digital experiences that drive growth, 
              enhance user engagement, and provide measurable results for our clients.
            </p>
            
            <h3>Our Values</h3>
            <ul className="values-list">
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span className="value-icon">🎯</span>
                <span className="value-text">Excellence in everything we do</span>
              </motion.li>
              
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <span className="value-icon">🤝</span>
                <span className="value-text">Collaborative partnerships with our clients</span>
              </motion.li>
              
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <span className="value-icon">💡</span>
                <span className="value-text">Innovative solutions to complex problems</span>
              </motion.li>
              
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <span className="value-icon">🔄</span>
                <span className="value-text">Continuous improvement and learning</span>
              </motion.li>
            </ul>
            
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;