import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import "../assets/styles/hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-content">
        <motion.div
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="dot" />
          Data · Security · Technology
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Smart Solutions
          <br />
          <em>for a Smarter Africa.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Intelligence-driven data science, security consulting, and technology
          built for Africa's real-world challenges.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <NavLink to="/contact" className="btn-primary">Work With Us</NavLink>
          <a href="#services" className="btn-ghost">Explore Services ↓</a>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          {[["3", "Core Pillars"], ["NGOs + Gov.", "Sectors Served"], ["Africa-First", "Approach"]].map(([val, label]) => (
            <div className="stat" key={label}>
              <strong>{val}</strong>
              <span>{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
