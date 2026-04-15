import React from "react";
import { motion } from "framer-motion";
import AboutUsData from "../assets/data/AboutUsData";

import "../assets/styles/aboutUs.css"

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 }
};

const icons = { Mission: "◎", Vision: "◈", "Our Values": "◆" };

function AboutUs() {
  return (
    <section className="about-section" id="about">
      <motion.div className="about-header"
        variants={fadeUp} initial="hidden" whileInView="visible"
        viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <span className="section-label">Who We Are</span>
        <h2 className="section-title">African Intelligence,<br />Global Standards.</h2>
        <div className="accent-line" />
        <p className="about-lead">
          Prolabs Africa bridges a critical gap — organisations need insight, security guidance,
          and systems that actually work in African contexts. We take a human-centred, African-first
          approach that values practicality, speed, and measurable outcomes.
        </p>
      </motion.div>

      <div className="about-grid">
        {AboutUsData.map((item, i) => (
          <motion.div className="about-card" key={item.id}
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.55 }}>
            <span className="card-icon">{icons[item.heading] || "◉"}</span>
            <h3>{item.heading}</h3>
            {item.list ? (
              <ul>
                {item.list.map((v, j) => (
                  <li key={j}><span className="check">—</span>{v}</li>
                ))}
              </ul>
            ) : (
              <p>{item.description}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default AboutUs;
