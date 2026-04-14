import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

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

      <style>{`
        .hero {
          position: relative;
          min-height: 88vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          margin: 0 -5.56%;
          padding: 0 5.56%;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 60%, #1a2a1a 100%);
          z-index: 0;
        }
        .hero-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 70% 30%, rgba(201,151,58,0.12) 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(201,151,58,0.06) 0%, transparent 40%);
        }
        .hero-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9973a' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 680px;
          padding: 80px 0;
        }
        .hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 24px;
        }
        .dot {
          width: 6px; height: 6px;
          background: var(--gold);
          border-radius: 50%;
          display: inline-block;
        }
        .hero-content h1 {
          font-family: var(--font-display);
          font-size: clamp(2.4rem, 5.5vw, 4.2rem);
          font-weight: 700;
          color: var(--white);
          line-height: 1.1;
          margin-bottom: 24px;
        }
        .hero-content h1 em {
          font-style: italic;
          color: var(--gold-light);
        }
        .hero-content p {
          font-size: clamp(1rem, 1.5vw, 1.15rem);
          color: rgba(248,246,241,0.68);
          max-width: 520px;
          margin-bottom: 36px;
          line-height: 1.7;
        }
        .hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 60px;
        }
        .btn-primary {
          padding: 14px 32px;
          background: var(--gold);
          color: var(--navy);
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border-radius: var(--radius);
          transition: background 0.2s, transform 0.2s;
          display: inline-block;
        }
        .btn-primary:hover { background: var(--gold-light); transform: translateY(-2px); }
        .btn-ghost {
          padding: 14px 24px;
          border: 1px solid rgba(201,151,58,0.45);
          color: var(--gold-pale);
          font-size: 0.85rem;
          letter-spacing: 0.04em;
          border-radius: var(--radius);
          transition: border-color 0.2s, color 0.2s;
          display: inline-block;
        }
        .btn-ghost:hover { border-color: var(--gold); color: var(--gold-light); }
        .hero-stats {
          display: flex;
          gap: 40px;
          border-top: 1px solid rgba(201,151,58,0.2);
          padding-top: 32px;
        }
        .stat strong {
          display: block;
          font-family: var(--font-display);
          font-size: 1.4rem;
          color: var(--gold-light);
          font-weight: 700;
        }
        .stat span {
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(248,246,241,0.5);
        }
        @media (max-width: 600px) {
          .hero-stats { gap: 24px; flex-wrap: wrap; }
        }
      `}</style>
    </section>
  );
}

export default Hero;
