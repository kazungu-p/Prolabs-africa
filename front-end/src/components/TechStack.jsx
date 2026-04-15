import React from "react";
import { motion } from "framer-motion";
import techData from "../assets/data/techData";

import "../assets/styles/techstack.css"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

function TechStack() {
  return (
    <section className="tech-section">
      <motion.div
        variants={fadeUp} initial="hidden" whileInView="visible"
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="tech-header"
      >
        <span className="section-label">Our Tech Stack</span>
        <p className="tech-sub">Tools we trust to deliver results</p>
      </motion.div>

      <div className="tech-strip">
        {techData.map((tech, index) => (
          <motion.div
            className="tech-item"
            key={tech.id}
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.4 }}
          >
            <div className="tech-logo-wrap">
              <img src={tech.icon} alt={tech.name} />
            </div>
            <span className="tech-name">{tech.name.replace(" logo", "").replace(" Logo", "")}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
