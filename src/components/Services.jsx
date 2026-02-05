import React from "react";
import { motion } from "framer-motion";

import "../assets/styles/services.css";

import servicesData from "../assets/data/ServicesData";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: { opacity: 1, scale: 1, y: 0 }
};

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

function Services() {
  return (
    <section className="service-pillars">
      <motion.h2
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        What We Do
      </motion.h2>

      <motion.p
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="services-intro"
      >
        We deliver integrated analytical, security, and technology solutions tailored to the real needs of organizations and research teams.
        Our work blends data science, evidence-based security strategy, and practical software engineering.
        We help clients turn complex information into clear, actionable insight.
        We design systems that reduce risk, improve efficiency, and support sound decision-making.
        Every solution is built for real-world environments, not just theory.
      </motion.p>

      <div className="service-card">
        {servicesData.map((item, index) => (
          <motion.div
            className="services-item"
            key={item.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
          >
            <h3>{item.heading}</h3>
            <p>{item.description}</p>

            <ul className="list-class">
              {item.list.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;
