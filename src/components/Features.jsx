import React from 'react';
import { motion } from 'framer-motion';

const featuresList = [
  {
    id: 1,
    icon: '💡',
    title: 'Innovative Solutions',
    description: 'Cutting-edge technology solutions tailored to your business needs.'
  },
  {
    id: 2,
    icon: '🚀',
    title: 'Rapid Development',
    description: 'Fast and efficient development process to get your product to market quickly.'
  },
  {
    id: 3,
    icon: '🔒',
    title: 'Secure & Reliable',
    description: 'Built with security in mind, ensuring your data is protected at all times.'
  },
  {
    id: 4,
    icon: '📱',
    title: 'Responsive Design',
    description: 'Beautiful interfaces that work seamlessly across all devices and screen sizes.'
  },
  {
    id: 5,
    icon: '⚡',
    title: 'High Performance',
    description: 'Optimized for speed and efficiency, providing the best user experience.'
  },
  {
    id: 6,
    icon: '🔄',
    title: 'Continuous Support',
    description: 'Ongoing maintenance and support to keep your application running smoothly.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our <span className="text-gradient">Features</span></h2>
          <p className="section-subtitle">Discover what makes our solutions stand out from the rest</p>
        </motion.div>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featuresList.map((feature) => (
            <motion.div
              key={feature.id}
              className="feature-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
              }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;