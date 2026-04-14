import React, { useState } from "react";
import { motion } from "framer-motion";

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

      <style>{`
        .contact-page { padding: 72px 0 80px; }
        .contact-hero { max-width: 560px; margin-bottom: 56px; }
        .contact-sub {
          font-size: 1rem;
          color: #4a5568;
          line-height: 1.7;
        }
        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: start;
        }
        /* Form */
        .contact-form-wrap {
          background: #fff;
          border: 1px solid rgba(10,15,30,0.08);
          border-radius: var(--radius-lg);
          padding: 40px;
          box-shadow: var(--shadow);
        }
        form { display: flex; flex-direction: column; gap: 20px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .field { display: flex; flex-direction: column; gap: 6px; }
        label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--navy);
        }
        input, textarea {
          padding: 11px 14px;
          border: 1px solid rgba(10,15,30,0.14);
          border-radius: var(--radius);
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--text);
          background: var(--white);
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          resize: vertical;
        }
        input:focus, textarea:focus {
          border-color: var(--gold);
          box-shadow: 0 0 0 3px rgba(201,151,58,0.1);
        }
        .method-pills { display: flex; gap: 10px; }
        .pill {
          padding: 8px 18px;
          border: 1px solid rgba(10,15,30,0.14);
          border-radius: 20px;
          font-family: var(--font-body);
          font-size: 0.82rem;
          font-weight: 500;
          cursor: pointer;
          background: none;
          color: var(--text);
          transition: all 0.2s;
        }
        .pill.active, .pill:hover {
          background: var(--navy);
          border-color: var(--navy);
          color: var(--gold-pale);
        }
        .submit-btn {
          padding: 14px;
          background: var(--navy);
          color: var(--gold-pale);
          font-family: var(--font-body);
          font-size: 0.88rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          border: none;
          border-radius: var(--radius);
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
        }
        .submit-btn:hover { background: var(--gold); color: var(--navy); transform: translateY(-1px); }
        /* Success */
        .success-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          min-height: 300px;
          text-align: center;
        }
        .success-icon {
          width: 56px; height: 56px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(201,151,58,0.12);
          color: var(--gold);
          font-size: 1.5rem;
          border-radius: 50%;
          border: 2px solid var(--gold);
        }
        .success-state h3 {
          font-family: var(--font-display);
          font-size: 1.4rem;
          color: var(--navy);
        }
        .success-state p { color: #4a5568; font-size: 0.9rem; }
        .reset-btn {
          margin-top: 8px;
          padding: 10px 22px;
          border: 1px solid var(--border);
          border-radius: var(--radius);
          background: none;
          font-family: var(--font-body);
          font-size: 0.82rem;
          cursor: pointer;
          color: var(--navy);
          transition: background 0.2s;
        }
        .reset-btn:hover { background: var(--gold-pale); }
        /* Info */
        .contact-info { display: flex; flex-direction: column; gap: 20px; }
        .info-card {
          background: var(--navy);
          border-radius: var(--radius-lg);
          padding: 32px 28px;
        }
        .info-card h4 {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 24px;
        }
        .info-list { list-style: none; }
        .info-list li {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 14px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          font-size: 0.88rem;
          color: rgba(248,246,241,0.7);
          line-height: 1.5;
        }
        .info-list li:last-child { border-bottom: none; }
        .info-list strong { display: block; color: var(--white); margin-bottom: 2px; }
        .info-icon {
          width: 32px; height: 32px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(201,151,58,0.12);
          border-radius: 8px;
          color: var(--gold);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .map-wrap {
          border-radius: var(--radius-lg);
          overflow: hidden;
          height: 240px;
          border: 1px solid rgba(10,15,30,0.08);
        }
        .map-wrap iframe {
          width: 100%; height: 100%;
          border: 0; display: block;
        }
        @media (max-width: 900px) {
          .contact-layout { grid-template-columns: 1fr; }
          .form-row { grid-template-columns: 1fr; }
          .contact-form-wrap { padding: 28px 22px; }
        }
      `}</style>
    </section>
  );
}

export default ContactUs;
