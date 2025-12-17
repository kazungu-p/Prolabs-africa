import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/navbar.css"

function Navbar(){
    const [menuOpen, setMenuOpen] =useState(false);

    function toggleMenu(){
        setMenuOpen(!menuOpen);
    }
    function closeMenu(){
        setMenuOpen(false);
    }
    return(
        <header>
            <nav>
                <div className="navbar-container">
                    <h1>ProLabs <span>Africa</span></h1>
                    <div className={`nav-right ${menuOpen? "active": ""}`}>
                        <ul className="nav-links">
                            <li><NavLink to="/" className={({isActive})=>isActive? "nav-link active": "nav-link"} onClick={closeMenu}>Home</NavLink></li>
                            <li><NavLink to="/portfolio" className={({isActive})=>isActive? "nav-link active": "nav-link"} onClick={closeMenu}>Porfolio</NavLink></li>
                            <li><NavLink to="/contact" className={({isActive})=>isActive? "nav-link active": "nav-link"} onClick={closeMenu}>Contact</NavLink></li>
                        </ul>
                        <div className="btn-container">
                            <button className="call-btn">Call: +254712345678</button>
                            <button className="quote-btn">Get a Quote</button>
                        </div>
                    </div>
                    <div className="hamburger" onClick={toggleMenu}>
                        {menuOpen? "\u2715" : "\u2630"}
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;