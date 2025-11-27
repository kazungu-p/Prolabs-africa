import React, { useState } from "react";
import "../assets/styles/navbar.css"

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <header>
            <nav>
                <div className="logo">
                    <img src="images/image.png" alt="prolabs-africa logo" />
                </div>
                <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Portfolio</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
                <div className="nav-btn">
                    <button>Request a Quote</button>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    {menuOpen ? "\u2715" : "\u2630"}
                </div>
            </nav>
        </header>
    )
}

export default Navbar;