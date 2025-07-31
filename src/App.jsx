import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <motion.header
        className="header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src="/webstorm-icon-logo.svg" alt="Logo" />
            <span>TechLanding</span>
          </motion.div>
          <nav className="nav">
            <motion.a 
              href="#hero"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Home
            </motion.a>
            <motion.a 
              href="#features"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Features
            </motion.a>
            <motion.a 
              href="#about"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              About
            </motion.a>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Contact
            </motion.a>
          </nav>
        </div>
      </motion.header>

      <main>
        <Hero />
        <Features />
        <About />
        <Contact />
      </main>

      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="container">
          <p>&copy; {new Date().getFullYear()} TechLanding. All rights reserved.</p>
          <div className="social-links">
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-twitter"></i>
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-facebook"></i>
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-instagram"></i>
            </motion.a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default App;