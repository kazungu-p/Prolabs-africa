import React from "react";
import "../assets/styles/footer.css"

function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <div className="footer-container">
            <div className="footer-container-information">
                <div className="company-info">
                    <h2>ProLabs <span>Africa</span></h2>
                    <p>Prolab Africa is a modern intelligence and technology consultancy delivering data-driven security insights, software solutions, and automation for Africa’s most complex challenges.</p>
                    <div className="social-platforms">
                        <img src="/images/facebook.svg" alt="facbook icon" />
                        <img src="/images/linkedin.svg" alt="linkedin icon" />
                        <img src="/images/x.svg" alt="x icon" />
                    </div>
                </div>
                <div className="company-links">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="contact-company">
                    <h2>Get in touch</h2>
                    <div className="contact-tab">
                        <img src="images/phone-solid-full.svg" alt="phone icon" />
                        <p>+254712345678</p>
                    </div>
                    <div className="contact-tab">
                        <img src="images/envelope-solid-full.svg" alt="email icon" />
                        <p>info.example@gmail.com</p>
                    </div>
                </div>
            </div>
            <hr />
            <p className="copyright">Copyright © {currentYear} prolabs-africa.com - All Rights Reserved</p>
        </div>
    )
}
export default Footer;