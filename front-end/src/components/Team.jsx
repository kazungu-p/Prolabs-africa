import React, { useState } from "react";
import { motion } from "framer-motion";
import TeamData from "../assets/data/teamData";

import "../assets/styles/team.css";

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
    </section>
  );
}

export default Team;
