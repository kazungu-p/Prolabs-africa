import React, { useState } from "react";
import { motion } from "framer-motion";
import TeamData from "../assets/data/teamData";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 }
};

const roles = ["Head of Security & Strategy", "Head of Data Science", "Head of Engineering"];
const initials = (name) => name.split(" ").map(n => n[0]).join("").slice(0,2);

function Team() {
  const [active, setActive] = useState(null);

  return (
    <section className="team-section" id="team">
      <motion.div className="team-header"
        variants={fadeUp} initial="hidden" whileInView="visible"
        viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <span className="section-label">The Team</span>
        <h2 className="section-title">Meet the Minds<br />Behind ProLabs.</h2>
        <div className="accent-line" />
        <p className="team-lead">
          A tightly-knit trio of specialists — criminologist, data scientist, and engineer —
          working in concert to deliver solutions that are rigorous, practical, and built for Africa.
        </p>
      </motion.div>

      <div className="team-grid">
        {TeamData.map((member, index) => (
          <motion.div
            className={`team-card ${active === member.id ? "expanded" : ""}`}
            key={member.id}
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true }} transition={{ delay: index * 0.13, duration: 0.55 }}
            onClick={() => setActive(active === member.id ? null : member.id)}
          >
            <div className="team-card-top">
              <div className="avatar">
                {member.image
                  ? <img src={member.image} alt={member.name} onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />
                  : null}
                <div className="avatar-fallback" style={{ display: member.image ? 'none' : 'flex' }}>
                  {initials(member.name)}
                </div>
              </div>
              <div className="team-meta">
                <h3>{member.name}</h3>
                <span className="role-tag">{roles[index]}</span>
              </div>
              <span className="expand-icon">{active === member.id ? "−" : "+"}</span>
            </div>

            <div className="team-bio">
              <p>{member.bio}</p>
              <div className="responsibilities">
                <p className="resp-label">Key Responsibilities</p>
                <ul>
                  {member.responsibilities.map((item, i) => (
                    <li key={i}><span className="resp-bullet" />{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .team-section { padding: 96px 0 80px; }
        .team-header { max-width: 560px; margin-bottom: 56px; }
        .team-lead {
          font-size: 1rem;
          color: #4a5568;
          line-height: 1.75;
          max-width: 520px;
        }
        .team-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 860px;
        }
        .team-card {
          background: var(--white);
          border: 1px solid rgba(10,15,30,0.08);
          border-left: 4px solid var(--gold);
          border-radius: var(--radius-lg);
          padding: 28px 32px;
          cursor: pointer;
          transition: box-shadow 0.3s, border-color 0.3s;
          overflow: hidden;
        }
        .team-card:hover { box-shadow: var(--shadow-gold); }
        .team-card.expanded {
          border-left-color: var(--navy);
          box-shadow: var(--shadow);
        }
        .team-card-top {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .avatar {
          width: 64px; height: 64px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
          border: 2px solid var(--border);
          position: relative;
          background: var(--navy-light);
        }
        .avatar img {
          width: 100%; height: 100%;
          object-fit: cover;
        }
        .avatar-fallback {
          width: 100%; height: 100%;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--gold);
          background: var(--navy-light);
        }
        .team-meta { flex: 1; }
        .team-meta h3 {
          font-family: var(--font-display);
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 4px;
        }
        .role-tag {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gold);
        }
        .expand-icon {
          font-size: 1.5rem;
          color: var(--muted);
          font-weight: 300;
          width: 32px;
          text-align: center;
          transition: color 0.2s;
        }
        .team-card:hover .expand-icon { color: var(--navy); }
        .team-bio {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.45s ease, padding 0.3s ease;
          padding-top: 0;
        }
        .team-card.expanded .team-bio {
          max-height: 400px;
          padding-top: 24px;
        }
        .team-bio > p {
          font-size: 0.92rem;
          color: #4a5568;
          line-height: 1.75;
          padding-top: 16px;
          border-top: 1px solid rgba(10,15,30,0.07);
          margin-bottom: 20px;
        }
        .responsibilities {}
        .resp-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--navy);
          margin-bottom: 10px;
        }
        .responsibilities ul { list-style: none; }
        .responsibilities ul li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.88rem;
          color: #4a5568;
          padding: 6px 0;
        }
        .resp-bullet {
          display: inline-block;
          width: 5px; height: 5px;
          background: var(--gold);
          border-radius: 50%;
          margin-top: 7px;
          flex-shrink: 0;
        }
        @media (max-width: 600px) {
          .team-card { padding: 22px 20px; }
          .team-card-top { gap: 14px; }
        }
      `}</style>
    </section>
  );
}

export default Team;
