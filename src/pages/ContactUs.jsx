import React from "react";
import "../assets/styles/contactus.css"

function ContactUs() {
    return (
        <div className="contact-us">
            <h2>Contact Us</h2>
            <p>We'd love to hear from you! Get in touch with us via the form below, or reach out using the contact details provided.</p>

            <div className="contact-us-container">
                <div className="form-container">
                    <form >
                        <input type="text" placeholder="Full Name" required />
                        <input type="email" placeholder="Email Address" required />
                        <input type="number" placeholder="Phone Number" required />
                        <textarea rows={7} placeholder="Type your message here" required></textarea>
                        <button>Send Message</button>
                    </form>
                </div>
                <div className="physical-address">
                    <div className="address">
                        <h3>Contact Details</h3>
                        <div className="place">
                            <img src="/images/location.svg" />
                            <p>Nairobi, Kenya</p>
                        </div>
                        <div className="phone">
                            <img src="/images/phone.svg" />
                            <p>+254712345678</p>
                        </div>
                        <div className="email">
                            <img src="/images/mail.svg" />
                            <p>info.example@gmail.com</p>
                        </div>
                        <div className="hours">
                            <h3>Working Hours: Mon - Fri, 9AM - 5PM</h3>
                        </div>
                    </div>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.3239005673!2d36.68258122879488!3d-1.303203560041261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1766097092410!5m2!1sen!2ske" style={{ border: 0 }} allowFullscreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;