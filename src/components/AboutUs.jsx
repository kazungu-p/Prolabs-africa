import React from "react";
import AboutUsData from "../assets/data/AboutUsData";
import "../assets/styles/aboutus.css";

function AboutUs() {
  return (
    <div className="about-us">
        <h2>Who We Are</h2>
        <p className="about-text">Prolab Africa was founded to bridge a yawning gap: organisations need insight, security guidance, and systems that actually work in African contexts. We take a human-centred, African-first approach that values practicality, speed, and measurable outcomes. Our team blends criminology, applied statistics, and software engineering — meaning every solution is both evidence-based and technically robust.</p>
      <div className="about-card">
        {AboutUsData.map((item) => {
          return (
            <div className="about-item" key={item.id}>
              <h3>{item.heading}</h3>

              {item.list ? (
                <ul className="list-class">
                  {item.list.map((value, index) => (
                    <li key={index}>{value}</li>
                  ))}
                </ul>
              ) : (
                <p>{item.description}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AboutUs;
