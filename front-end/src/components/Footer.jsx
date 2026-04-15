import React from "react";
import { NavLink } from "react-router-dom";

import "../assets/styles/footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner app">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <h2 className="brand-name">ProLabs<span> Africa</span></h2>
            <p>
              Intelligence-driven consultancy delivering data science, security insight,
              and technology solutions for Africa's most complex challenges.
            </p>
            <div className="socials">
              <a href="#" aria-label="Facebook" className="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" aria-label="X / Twitter" className="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><a href="#about">About Us</a></li>
              <li><NavLink to="/portfolio">Portfolio</NavLink></li>
              <li><NavLink to="/pricing">Pricing</NavLink></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#team">Team</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Get in Touch</h4>
            <ul className="contact-list">
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.96-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +254 7XX XXX XXX
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                info@prolabs-africa.com
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Nairobi, Kenya
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} ProLabs Africa — All Rights Reserved</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
