import React from "react";
import { motion } from "framer-motion";
import techData from "../assets/data/techData";
import "../assets/styles/techstack.css";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0 }
};

const headingVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 }
};

function TechStack() {
  return (
    <section className="tech-stack">
      <motion.h2
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        Our Tech Stack
      </motion.h2>

      <div className="tech-grid">
        {techData.map((tech, index) => (
          <motion.div
            className="tech-card"
            key={tech.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <img src={tech.icon} alt={tech.name} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
