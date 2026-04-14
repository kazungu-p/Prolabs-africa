import React from "react";
import { motion } from "framer-motion";
import techData from "../assets/data/techData";

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

      <style>{`
        .tech-section {
          padding: 72px 0 80px;
          border-top: 1px solid rgba(10,15,30,0.07);
        }
        .tech-header {
          display: flex;
          align-items: baseline;
          gap: 24px;
          margin-bottom: 40px;
        }
        .tech-sub {
          font-size: 0.88rem;
          color: var(--muted);
        }
        .tech-strip {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .tech-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          padding: 20px 24px;
          border: 1px solid rgba(10,15,30,0.08);
          border-radius: var(--radius-lg);
          background: #fff;
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
          flex: 1;
          min-width: 100px;
        }
        .tech-item:hover {
          border-color: var(--gold);
          box-shadow: var(--shadow-gold);
          transform: translateY(-4px);
        }
        .tech-logo-wrap {
          width: 56px; height: 56px;
          display: flex; align-items: center; justify-content: center;
        }
        .tech-logo-wrap img {
          max-width: 100%; max-height: 100%;
          object-fit: contain;
        }
        .tech-name {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--muted);
          text-align: center;
        }
        @media (max-width: 600px) {
          .tech-strip { gap: 10px; }
          .tech-item { min-width: 80px; padding: 16px 12px; }
        }
      `}</style>
    </section>
  );
}

export default TechStack;
