"use client";

import { useEffect, useRef, useState } from "react";
import Globe from "@/components/motion/Globe";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reveals = section.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `NUICC Contact: ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\n${formData.message}`;
    window.location.href = `mailto:info@nuicc.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    border: "1px solid rgba(217,179,109,.24)",
    borderRadius: "var(--radius)",
    background: "rgba(255,250,240,.95)",
    color: "var(--ink)",
    padding: "15px 16px",
    outline: "none",
    fontSize: 15,
  };

  return (
    <section ref={sectionRef} id="contact" className="section" style={{ background: "var(--night)", paddingBottom: 50 }}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow reveal">Contact Us</div>
            <h2 className="section-title reveal">Ready to take your business global?</h2>
          </div>
          <p className="lead reveal" style={{ color: "var(--muted)" }}>
            Connect with 9,200+ members across industries and begin building a cross-border strategy with NUICC.
          </p>
        </div>

        <div
          className="contact-grid"
          style={{ display: "grid", gridTemplateColumns: ".85fr 1.15fr", gap: 34, alignItems: "start" }}
        >
          {/* Contact Info Card */}
          <div
            className="reveal"
            style={{
              padding: 28,
              border: "1px solid rgba(217,179,109,.24)",
              borderRadius: "var(--radius)",
              background: "rgba(255,250,240,.07)",
              backdropFilter: "blur(20px)",
              boxShadow: "var(--shadow)",
            }}
          >
            <p style={{ color: "rgba(248,242,231,.72)", lineHeight: 1.8 }}>
              <strong>Address</strong><br />
              1099 17th St, Suite 2150<br />
              Denver, CO 80202 United States
            </p>
            <p style={{ color: "rgba(248,242,231,.72)", lineHeight: 1.8 }}>
              <strong>Phone</strong><br />
              <a href="tel:+17203233728" style={{ color: "var(--champagne)" }}>+1 (720) 323-3728</a>
            </p>
            <p style={{ color: "rgba(248,242,231,.72)", lineHeight: 1.8 }}>
              <strong>Email</strong><br />
              <a href="mailto:info@nuicc.org" style={{ color: "var(--champagne)" }}>info@nuicc.org</a>
            </p>
            {/* Interactive globe — U.S.–India trade reach */}
            <div
              style={{
                marginTop: 22,
                overflow: "hidden",
                borderRadius: "var(--radius)",
                border: "1px solid rgba(217,179,109,.2)",
                background: "radial-gradient(circle at 50% 40%, rgba(12,31,53,.6), rgba(7,17,29,.9))",
              }}
            >
              <Globe height={250} />
            </div>
          </div>

          {/* Contact Form */}
          <form
            className="reveal"
            onSubmit={handleSubmit}
            style={{
              display: "grid", gap: 14, padding: 24,
              border: "1px solid rgba(217,179,109,.24)",
              borderRadius: "var(--radius)",
              background: "rgba(255,250,240,.07)",
              backdropFilter: "blur(20px)",
              boxShadow: "var(--shadow)",
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              aria-label="Name"
              style={inputStyle}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              aria-label="Email"
              style={inputStyle}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              aria-label="Company"
              style={inputStyle}
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
            <textarea
              name="message"
              placeholder="Tell us about your U.S.-India business goals"
              aria-label="Message"
              style={{ ...inputStyle, minHeight: 150, resize: "vertical" }}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
            <button type="submit" className="btn btn-light" style={{ width: "100%", fontSize: 14 }}>
              Send Message
            </button>
          </form>
        </div>

        {/* Rebuilt Premium Footer */}
        <footer
          className="reveal"
          style={{
            marginTop: 80,
            paddingTop: 0,
            width: "100%",
            color: "rgba(248, 242, 231, 0.72)",
            fontFamily: "var(--font-body)",
            zIndex: 10,
          }}
        >
          {/* Footer CTA Bar */}
          <div
            className="footer-cta-bar"
            style={{
              borderTop: "1px solid rgba(217, 179, 109, 0.22)",
              borderBottom: "1px solid rgba(217, 179, 109, 0.22)",
              padding: "32px 0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 24,
              flexWrap: "wrap",
              marginBottom: 48,
            }}
          >
            <div>
              <h3
                style={{
                  margin: 0,
                  fontFamily: "var(--font-display)",
                  fontSize: 24,
                  fontWeight: 700,
                  color: "var(--ivory)",
                  letterSpacing: "0.02em",
                }}
              >
                Ready to take your Business Global?
              </h3>
              <p style={{ margin: "6px 0 0", fontSize: 14, color: "rgba(248, 242, 231, 0.6)" }}>
                Connect with 9,200+ members across industries
              </p>
            </div>
            <a
              href="https://nuicc.org/membership"
              className="btn"
              style={{
                background: "linear-gradient(135deg, var(--saffron) 0%, var(--gold) 100%)",
                color: "var(--white)",
                border: "none",
                padding: "0 28px",
                fontSize: 12.5,
                boxShadow: "0 8px 20px rgba(224, 124, 35, 0.25)",
              }}
            >
              Become a Member
            </a>
          </div>

          {/* Footer Main Columns */}
          <div
            className="footer-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 0.8fr 0.8fr 1.2fr",
              gap: 40,
              paddingBottom: 48,
            }}
          >
            {/* Column 1: Branding & Description */}
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <img
                  src="/assets/img/home/nicuu-page.png"
                  alt="NUICC Logo"
                  style={{
                    width: 52,
                    height: 52,
                    objectFit: "contain",
                    background: "var(--white)",
                    padding: 4,
                    borderRadius: "50%",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                  }}
                />
                <h4
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-display)",
                    fontSize: 15,
                    fontWeight: 700,
                    color: "var(--ivory)",
                    lineHeight: 1.2,
                    letterSpacing: "0.02em",
                    textTransform: "uppercase",
                  }}
                >
                  National US-India
                  <br />
                  Chamber of Commerce
                </h4>
              </div>
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: "rgba(248, 242, 231, 0.58)" }}>
                NUICC is a 501(c)(6) organization whose mission is to promote bilateral trade between the United States and India, cultivating business relationships that will result in business deals.
              </p>
              {/* Social Icons */}
              <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
                <a
                  href="https://www.facebook.com/www.nuicc.info/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="social-btn facebook-btn"
                >
                  f
                </a>
                <a
                  href="https://www.instagram.com/reel/DPE_Z7SE5pR/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="social-btn instagram-btn"
                >
                  ig
                </a>
                <a
                  href="https://x.com/NUICC"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="social-btn x-btn"
                >
                  𝕏
                </a>
                <a
                  href="https://www.linkedin.com/in/purnimavoria/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="social-btn linkedin-btn"
                >
                  in
                </a>
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div>
              <h4 className="footer-title">Navigation</h4>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#membership">Membership</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#leaders">Leaders</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h4 className="footer-title">Services</h4>
              <ul className="footer-links">
                <li><a href="#services">Business Matchmaking</a></li>
                <li><a href="#services">Trade Missions</a></li>
                <li><a href="#services">Policy Advocacy</a></li>
                <li><a href="#services">Business Opportunities</a></li>
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div>
              <h4 className="footer-title">Contact Us</h4>
              <ul className="footer-contact-list" style={{ padding: 0, margin: 0, listStyle: "none" }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 14 }}>
                  <span style={{ color: "var(--champagne)", fontSize: 16, marginTop: 2 }}>📍</span>
                  <span style={{ fontSize: 13, lineHeight: 1.5, color: "rgba(248, 242, 231, 0.6)" }}>
                    1099 17th St, Suite 2150,
                    <br />
                    Denver, CO 80202
                    <br />
                    United States
                  </span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <span style={{ color: "var(--champagne)", fontSize: 16 }}>📞</span>
                  <a href="tel:+17203233728" style={{ fontSize: 13, color: "rgba(248, 242, 231, 0.6)" }}>
                    +1 (720) 323-3728
                  </a>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ color: "var(--champagne)", fontSize: 16 }}>✉️</span>
                  <a href="mailto:info@nuicc.org" style={{ fontSize: 13, color: "rgba(248, 242, 231, 0.6)" }}>
                    info@nuicc.org
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Copyright */}
          <div
            style={{
              borderTop: "1px solid rgba(217, 179, 109, 0.15)",
              padding: "24px 0",
              textAlign: "center",
              fontSize: 13,
              color: "rgba(248, 242, 231, 0.45)",
            }}
          >
            &copy; {new Date().getFullYear()} NUICC. All rights reserved.
          </div>
        </footer>
      </div>

      <style jsx>{`
        /* Contact layout responsiveness */
        @media (max-width: 1040px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 680px) {
          footer {
            flex-direction: column !important;
          }
        }

        /* Footer styling */
        .footer-title {
          font-family: var(--font-display);
          font-size: 16px;
          color: var(--ivory);
          margin-top: 0;
          margin-bottom: 20px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer-links a {
          font-size: 13px;
          color: rgba(248, 242, 231, 0.6);
          transition: color 0.25s ease, padding-left 0.25s ease;
        }
        .footer-links a:hover {
          color: var(--champagne);
          padding-left: 4px;
        }
        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          color: var(--white) !important;
          font-size: 13.5px;
          font-weight: bold;
          transition: transform 0.25s ease, opacity 0.25s ease;
        }
        .social-btn:hover {
          transform: translateY(-3px);
          opacity: 0.9;
        }
        .facebook-btn { background: #3b5998; }
        .instagram-btn { background: #e1306c; }
        .x-btn { background: #000000; border: 1px solid rgba(255, 255, 255, 0.15); }
        .linkedin-btn { background: #0077b5; }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 580px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .footer-cta-bar {
            flex-direction: column !important;
            align-items: flex-start !important;
            text-align: left !important;
          }
          .footer-cta-bar a {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
