import React, { useState } from "react";
import { motion } from "framer-motion";

import "../assets/styles/contactus.css"

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

function ContactUs() {
  const [form, setForm] = useState({ name: "", org: "", email: "", phone: "", message: "", method: "Email" });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="contact-page">
      <motion.div className="contact-hero"
        variants={fadeUp} initial="hidden" animate="visible"
        transition={{ duration: 0.6 }}>
        <span className="section-label">Contact</span>
        <h1 className="section-title">Let's Build Something<br /><em style={{ fontStyle:"italic", color:"var(--gold)" }}>Together.</em></h1>
        <div className="accent-line" />
        <p className="contact-sub">
          Tell us about your challenge. We'll respond within one business day.
        </p>
      </motion.div>

      <div className="contact-layout">
        {/* Form */}
        <motion.div className="contact-form-wrap"
          variants={fadeUp} initial="hidden" animate="visible"
          transition={{ duration: 0.6, delay: 0.15 }}>
          {sent ? (
            <div className="success-state">
              <span className="success-icon">✓</span>
              <h3>Message Sent</h3>
              <p>Thank you! We'll be in touch within one business day.</p>
              <button className="reset-btn" onClick={() => setSent(false)}>Send another message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="field">
                  <label>Full Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Jane Mwende" required />
                </div>
                <div className="field">
                  <label>Organisation</label>
                  <input name="org" value={form.org} onChange={handleChange} placeholder="Your Organisation" />
                </div>
              </div>
              <div className="form-row">
                <div className="field">
                  <label>Email Address *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="jane@example.com" required />
                </div>
                <div className="field">
                  <label>Phone Number</label>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="+254 7XX XXX XXX" />
                </div>
              </div>
              <div className="field">
                <label>Project Description *</label>
                <textarea name="message" rows={5} value={form.message} onChange={handleChange} placeholder="Tell us about your challenge, goals, and timeline..." required />
              </div>
              <div className="field">
                <label>Preferred Contact Method</label>
                <div className="method-pills">
                  {["Email", "WhatsApp", "Phone"].map(m => (
                    <button type="button" key={m}
                      className={`pill ${form.method === m ? "active" : ""}`}
                      onClick={() => setForm({ ...form, method: m })}>
                      {m}
                    </button>
                  ))}
                </div>
              </div>
              <button type="submit" className="submit-btn">Send Message →</button>
            </form>
          )}
        </motion.div>

        {/* Info panel */}
        <motion.div className="contact-info"
          variants={fadeUp} initial="hidden" animate="visible"
          transition={{ duration: 0.6, delay: 0.25 }}>
          <div className="info-card">
            <h4>Contact Details</h4>
            <ul className="info-list">
              <li>
                <div className="info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.96-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div><strong>Phone</strong><br />+254 7XX XXX XXX</div>
              </li>
              <li>
                <div className="info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div><strong>Email</strong><br />info@prolabs-africa.com</div>
              </li>
              <li>
                <div className="info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div><strong>Location</strong><br />Nairobi, Kenya</div>
              </li>
              <li>
                <div className="info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div><strong>Working Hours</strong><br />Mon – Fri, 9AM – 5PM EAT</div>
              </li>
            </ul>
          </div>

          <div className="map-wrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.3239005673!2d36.68258122879488!3d-1.303203560041261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1766097092410!5m2!1sen!2ske"
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nairobi Map"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactUs;
