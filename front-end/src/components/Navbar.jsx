import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "../assets/styles/navbar.css"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar-inner app">
        <NavLink to="/" className="nav-brand">
          ProLabs<span>&nbsp;Africa</span>
        </NavLink>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><NavLink to="/" onClick={() => setMenuOpen(false)} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink></li>
          <li><NavLink to="/portfolio" onClick={() => setMenuOpen(false)} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Portfolio</NavLink></li>
          <li><NavLink to="/pricing" onClick={() => setMenuOpen(false)} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Pricing</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setMenuOpen(false)} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink></li>
        </ul>

        <div className="nav-right">
          <NavLink to="/contact" className="nav-cta-btn">Get a Quote</NavLink>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
