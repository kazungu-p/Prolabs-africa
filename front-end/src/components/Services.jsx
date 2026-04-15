import React from "react";
import { motion } from "framer-motion";
import servicesData from "../assets/data/ServicesData";

import "../assets/styles/services.css"

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 }
};

const serviceIcons = ["◈", "◉", "◎"];
const serviceColors = ["#1a3a2a", "#0f1e38", "#2a1a0f"];

function Services() {
  return (
    <section className="services-section" id="services">
      <motion.div className="services-header"
        variants={fadeUp} initial="hidden" whileInView="visible"
        viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <span className="section-label">What We Do</span>
        <h2 className="section-title">Three Pillars.<br />One Integrated Vision.</h2>
        <div className="accent-line" />
        <p className="services-lead">
          We deliver analytical, security, and technology solutions tailored to real African
          organisational needs — blending data science, evidence-based security, and practical engineering.
        </p>
      </motion.div>

      <div className="services-grid">
        {servicesData.map((item, index) => (
          <motion.div
            className="service-card"
            key={item.id}
            style={{ "--card-bg": serviceColors[index] }}
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true }} transition={{ delay: index * 0.13, duration: 0.55 }}
          >
            <div className="service-card-inner">
              <span className="service-number">0{item.id}</span>
              <span className="service-icon">{serviceIcons[index]}</span>
              <h3>{item.heading}</h3>
              <p>{item.description}</p>
              <ul>
                {item.list.map((point, i) => (
                  <li key={i}><span className="bullet" />  {point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;
