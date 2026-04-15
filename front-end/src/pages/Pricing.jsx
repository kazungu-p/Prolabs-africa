import React, { useState } from "react";
import { motion } from "framer-motion";
import pricingData from "../assets/data/pricingData";
import { NavLink } from "react-router-dom";

import "../assets/styles/pricing.css"

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 }
};

const pillarColors = {
  "Data & Analytics": "#1a3a2a",
  "Security + Data":  "#0f1e38",
  "Technology":       "#2a1a0f",
  "Data + Security + Tech": "#1a1a2e"
};

const faqData = [
  {
    q: "Are these fixed prices?",
    a: "No — all prices are starting estimates. Final quotes depend on data complexity, travel requirements, number of stakeholders, and scope. We provide a detailed proposal before any work begins."
  },
  {
    q: "Can packages be combined or customised?",
    a: "Absolutely. Most engagements are custom. The packages are a starting point to help you understand what's possible at each investment level."
  },
  {
    q: "Do you offer pilot or NGO pricing?",
    a: "Yes. We offer reduced rates for the first 1–3 projects to build case studies, and we have a separate NGO and academic pricing track. Reach out to discuss."
  },
  {
    q: "What happens after I submit a quote request?",
    a: "We'll respond within one business day to schedule a 30-minute scoping call. From there we'll send a detailed proposal with timeline, deliverables, and a fixed price."
  }
];

function Pricing() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className="pricing-page">
      {/* Header */}
      <motion.div className="pricing-hero"
        variants={fadeUp} initial="hidden" animate="visible"
        transition={{ duration: 0.6 }}>
        <span className="section-label">Pricing</span>
        <h1 className="section-title">Transparent Scope,<br /><em style={{ fontStyle:"italic", color:"var(--gold)" }}>Custom Quotes.</em></h1>
        <div className="accent-line" />
        <p className="pricing-sub">
          Every engagement is scoped individually — these packages show you what's possible
          at each level. All prices are starting estimates in KES. We'll send a fixed quote after a
          free 30-minute scoping call.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="pricing-grid">
        {pricingData.map((pkg, index) => (
          <motion.div
            className={`pricing-card ${pkg.highlight ? "highlight" : ""}`}
            key={pkg.id}
            style={pkg.highlight ? {} : { "--card-accent": pillarColors[pkg.pillar] }}
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            {pkg.note && <span className="pkg-badge">{pkg.note}</span>}

            <div className="pkg-top">
              <span className="pkg-pillar">{pkg.pillar}</span>
              <h3>{pkg.tier}</h3>
              <p className="pkg-tagline">{pkg.tagline}</p>
            </div>

            <div className="pkg-price">
              <span className="from-label">Starting from</span>
              <strong>{pkg.from}</strong>
              <span className="timeline-label">⏱ {pkg.timeline}</span>
            </div>

            <ul className="pkg-features">
              {pkg.features.map((f, i) => (
                <li key={i}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  {f}
                </li>
              ))}
            </ul>

            <NavLink to="/contact" className={`pkg-cta ${pkg.highlight ? "cta-highlight" : ""}`}>
              {pkg.cta} →
            </NavLink>
          </motion.div>
        ))}
      </div>

      {/* Custom band */}
      <motion.div className="custom-band"
        variants={fadeUp} initial="hidden" whileInView="visible"
        viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <div className="custom-left">
          <span className="custom-icon">◈</span>
          <div>
            <h3>Need something custom?</h3>
            <p>Multi-phase programmes, retainer arrangements, or long-term partnerships — let's scope it together.</p>
          </div>
        </div>
        <NavLink to="/contact" className="custom-cta">Talk to Us →</NavLink>
      </motion.div>

      {/* FAQ */}
      <motion.div className="faq-section"
        variants={fadeUp} initial="hidden" whileInView="visible"
        viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <span className="section-label">Common Questions</span>
        <h2 className="section-title" style={{ marginBottom: "36px" }}>Pricing FAQs</h2>

        <div className="faq-list">
          {faqData.map((item, i) => (
            <div
              className={`faq-item ${openFaq === i ? "open" : ""}`}
              key={i}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            >
              <div className="faq-q">
                <span>{item.q}</span>
                <span className="faq-icon">{openFaq === i ? "−" : "+"}</span>
              </div>
              <div className="faq-a">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Pricing;
