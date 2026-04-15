import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import portfolioData from "../assets/data/portfolioData";
import { NavLink } from "react-router-dom";

import "../assets/styles/portfolio.css"

const categories = ["All", "Data Science", "Data & Security", "Machine Learning", "Security", "Web Development"];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? portfolioData
    : portfolioData.filter(p => p.category === active);

  return (
    <section className="portfolio-page">
      {/* Header */}
      <motion.div className="portfolio-hero"
        variants={fadeUp} initial="hidden" animate="visible"
        transition={{ duration: 0.6 }}>
        <span className="section-label">Our Work</span>
        <h1 className="section-title">Projects That<br /><em style={{ fontStyle: "italic", color: "var(--gold)" }}>Prove the Point.</em></h1>
        <div className="accent-line" />
        <p className="portfolio-sub">
          These are projects built by our team — personal, academic, and pro-bono work that
          demonstrates the craft behind ProLabs. Client case studies coming soon.
        </p>
      </motion.div>

      {/* Filter pills */}
      <motion.div className="filter-row"
        variants={fadeUp} initial="hidden" animate="visible"
        transition={{ duration: 0.5, delay: 0.15 }}>
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-pill ${active === cat ? "active" : ""}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      <div className="portfolio-grid">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => (
            <motion.div
              className={`project-card ${project.featured ? "featured" : ""}`}
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
            >
              <div className="card-top">
                <span className="project-icon">{project.icon}</span>
                <span className="category-badge">{project.category}</span>
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tag-row">
                {project.tags.map(tag => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>

              <div className="card-actions">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="card-link">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                    View Code
                  </a>
                )}
                {project.live && (
                  <a href={project.live} className="card-link live">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Live Site
                  </a>
                )}
              </div>

              {project.featured && <span className="featured-badge">Featured</span>}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* CTA band */}
      <motion.div className="portfolio-cta"
        variants={fadeUp} initial="hidden" whileInView="visible"
        viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <div className="cta-content">
          <h2>Have a project in mind?</h2>
          <p>Let's talk about what we can build for you.</p>
        </div>
        <NavLink to="/contact" className="cta-btn">Start a Conversation →</NavLink>
      </motion.div>
    </section>
  );
}

export default Portfolio;
