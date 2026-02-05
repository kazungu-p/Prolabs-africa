import React from "react";
import { motion } from "framer-motion";
import TeamData from "../assets/data/teamData";
import "../assets/styles/team.css"

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: { opacity: 1, scale: 1, y: 0 }
};

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

function Team() {
  return (
    <section className="prolabs-team">
      <motion.h2
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        Meet The Prolabs Team
      </motion.h2>

      <div className="team-grid">
        {TeamData.map((member, index) => (
          <motion.div
            className={`team-card ${index % 2 !== 0 ? "card-2" : ""}`}
            key={member.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="team-photo"
            />

            <div className="profile-info">
              <h3>{member.name}</h3>
              <p>{member.bio}</p>

              <p className="role-title">Responsibilities</p>
              <ul>
                {member.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Team;