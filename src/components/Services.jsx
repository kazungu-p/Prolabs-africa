import React from "react";
import { motion } from "framer-motion";
import servicesData from "../assets/data/ServicesData";

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

      <style>{`
        .services-section {
          padding: 80px 0;
          background: var(--navy);
          margin: 0 -5.56%;
          padding-left: 5.56%;
          padding-right: 5.56%;
        }
        .services-header { max-width: 600px; margin-bottom: 56px; }
        .services-header .section-label { color: var(--gold); }
        .services-header .section-title { color: var(--white); }
        .services-lead {
          font-size: 1rem;
          color: rgba(248,246,241,0.6);
          line-height: 1.75;
          max-width: 520px;
        }
        .services-section .accent-line {
          background: linear-gradient(90deg, var(--gold), transparent);
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .service-card {
          background: var(--card-bg, var(--navy-light));
          border: 1px solid rgba(201,151,58,0.15);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: transform 0.3s, border-color 0.3s;
          cursor: default;
        }
        .service-card:hover {
          transform: translateY(-6px);
          border-color: rgba(201,151,58,0.4);
        }
        .service-card-inner { padding: 36px 28px; }
        .service-number {
          display: block;
          font-family: var(--font-display);
          font-size: 2.5rem;
          font-weight: 900;
          color: rgba(201,151,58,0.15);
          line-height: 1;
          margin-bottom: 8px;
        }
        .service-icon {
          display: block;
          font-size: 1.4rem;
          color: var(--gold);
          margin-bottom: 16px;
        }
        .service-card h3 {
          font-family: var(--font-display);
          font-size: 1.18rem;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 10px;
          line-height: 1.3;
        }
        .service-card > .service-card-inner > p {
          font-size: 0.85rem;
          color: rgba(248,246,241,0.55);
          margin-bottom: 20px;
          line-height: 1.6;
        }
        .service-card ul { list-style: none; }
        .service-card ul li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.83rem;
          color: rgba(248,246,241,0.7);
          padding: 6px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          line-height: 1.5;
        }
        .service-card ul li:last-child { border-bottom: none; }
        .bullet {
          display: inline-block;
          width: 4px; height: 4px;
          background: var(--gold);
          border-radius: 50%;
          margin-top: 7px;
          flex-shrink: 0;
        }
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

export default Services;
