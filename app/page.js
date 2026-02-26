"use client";

import { useState } from 'react';
import Image from 'next/image';
import { dictionary } from './dictionary';

export default function Home() {
  const [lang, setLang] = useState('ru');
  const [menuOpen, setMenuOpen] = useState(false);
  const t = dictionary[lang];

  return (
    <div className={`wrapper lang-${lang}`}>
      {/* Background Layer */}
      <div className="bg-mesh"></div>

      {/* Navigation */}
      <nav className={`navbar glass-premium ${menuOpen ? 'menu-open' : ''}`}>
        <div className="container nav-content">
          <div className="logo" onClick={() => window.scrollTo(0, 0)}>
            <span className="logo-icon">◆</span>
            <span className="logo-name">SIA</span>
          </div>

          <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <a href="#about" onClick={() => setMenuOpen(false)}>{t.nav.about}</a>
            <a href="#products" onClick={() => setMenuOpen(false)}>{t.nav.products}</a>
            <a href="#impact" onClick={() => setMenuOpen(false)}>{t.nav.metrics}</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>{t.nav.contact}</a>
            <div className="lang-switcher">
              {['en', 'uz', 'ru'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={lang === l ? 'active' : ''}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <a href="#contact" className="btn-primary" onClick={() => setMenuOpen(false)}>{t.nav.access}</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Redesigned for Impact */}
      <header className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="pulse"></span> {t.nav.metrics} 88.4%
            </div>
            <h1>
              {t.hero.title1}<br />
              <span className="text-glow-blue">{t.hero.title2}</span><br />
              <span className="text-glow-teal">{t.hero.title3}</span>
            </h1>
            <p className="hero-subtitle">
              {t.hero.subtitle}
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">{t.nav.access}</a>
              <a href="#products" className="btn-outline">{t.nav.products}</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card glass-premium">
              <div className="img-desktop">
                <Image
                  src="/hero-ai.png"
                  alt="SIA AI Diagnostics"
                  width={700}
                  height={450}
                  className="hero-image"
                  priority
                />
              </div>
              <div className="img-mobile">
                <Image
                  src="/hero-mobile-v2.png"
                  alt="SIA AI Diagnostics Mobile"
                  width={320}
                  height={400}
                  className="hero-image mobile-asset-v2"
                  priority
                />
              </div>
              <div className="card-overlay">
                <div className="scanner"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section - "Who We Are" */}
      <section id="about" className="section about">
        <div className="container about-grid">
          <div className="about-visual">
            <div className="about-frame glass-premium">
              <div className="img-desktop">
                <Image
                  src="/about-us.png"
                  alt="About SIA"
                  width={600}
                  height={600}
                  className="about-image"
                />
              </div>
              <div className="img-mobile">
                <Image
                  src="/about-mobile.png"
                  alt="About SIA Mobile"
                  width={390}
                  height={520}
                  className="about-image mobile-asset"
                />
              </div>
            </div>
          </div>
          <div className="about-content">
            <h2 className="section-title">{t.about.title}</h2>
            <p className="intro-text">{t.about.text1}</p>
            <p className="body-text">{t.about.text2}</p>
            <div className="quote-card glass-premium">
              <div className="quote-icon">“</div>
              <p className="quote-text">{t.about.quote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section products">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title">{t.products.title}</h2>
          </div>
          <div className="product-grid">
            {Object.keys(t.products).filter(k => k !== 'title').map((key) => {
              const p = t.products[key];
              return (
                <div key={key} className="p-card glass-premium" style={{ '--accent': `var(--sia-${key})` }}>
                  <div className="p-header">
                    <div className="p-status">
                      <span className="p-dot"></span>
                      {p.phase}
                    </div>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="p-footer">
                    <a href="#contact" className="p-link">{t.nav.access} →</a>
                  </div>
                  <div className="p-accent-bar" style={{ backgroundColor: `var(--sia-${key})` }}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact/Metrics Section */}
      <section id="impact" className="section metrics">
        <div className="container">
          <div className="metrics-card glass-premium">
            <div className="metrics-grid">
              <div className="metric-item">
                <div className="metric-num text-glow-teal">{t.metrics.recall.startsWith('88') ? '88.4%' : '88.4%'}</div>
                <div className="metric-label">{t.metrics.recall}</div>
              </div>
              <div className="metric-item">
                <div className="metric-num text-glow-blue">&lt; 3S</div>
                <div className="metric-label">{t.metrics.latency}</div>
              </div>
              <div className="metric-item">
                <div className="metric-num">99.5%</div>
                <div className="metric-label">{t.metrics.uptime}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Redesigned Form */}
      <section id="contact" className="section contact">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2 className="section-title">{t.contact.title}</h2>
            <p className="contact-subtitle">{t.contact.subtitle}</p>
            <div className="contact-details">
              <div className="detail-item">
                <strong>📍 {t.nav.contact}</strong>
                <p>{t.footer.location}</p>
              </div>
              <div className="detail-item">
                <strong>✉️ Email</strong>
                <p>info@sia-medical.ai</p>
              </div>
            </div>
          </div>
          <div className="contact-form-container">
            <form className="contact-form glass-premium" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>{t.contact.name}</label>
                <input type="text" placeholder={t.contact.namePlaceholder} required />
              </div>
              <div className="form-group">
                <label>{t.contact.email}</label>
                <input type="email" placeholder={t.contact.emailPlaceholder} required />
              </div>
              <div className="form-group">
                <label>{t.contact.message}</label>
                <textarea placeholder={t.contact.messagePlaceholder}></textarea>
              </div>
              <button type="submit" className="btn-primary full-width">{t.contact.submit}</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="f-info">
            <div className="f-logo">
              <span className="logo-icon">◆</span> SIA
            </div>
            <p className="f-copyright">{t.footer.copyright}</p>
          </div>
          <div className="f-social">
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
            <a href="#">Facebook</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .wrapper {
          position: relative;
        }

        .bg-mesh {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: -1;
          background-color: var(--sia-deep);
          background-image: 
            radial-gradient(at 0% 0%, rgba(0, 112, 224, 0.15) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(0, 191, 168, 0.1) 0px, transparent 50%);
        }

        .img-mobile { 
          display: none; 
          width: 100%;
          max-width: 100%;
          overflow: hidden;
        }
        .img-desktop { display: block; }

        .mobile-asset-v2 {
          width: 80%;
          max-width: 280px;
          height: auto;
          max-height: 35vh; /* Even shorter as requested */
          object-fit: contain;
          border-radius: 20px;
          margin: 0 auto;
          display: block;
        }

        @media (max-width: 1250px) {
          .img-mobile { display: block; text-align: center; }
          .img-desktop { display: none; }
        }

        @media (max-width: 480px) {
          .navbar { margin: 12px !important; } /* More space from wall */
          .logo { font-size: 20px !important; gap: 8px !important; }
          .hero { padding-top: 100px !important; }
        }

        /* Navigation */
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          height: 80px;
          display: flex;
          align-items: center;
          z-index: 1000;
          margin: 20px; /* Increased margin from wall */
          border-radius: 16px;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 24px; /* Inner padding for navbar content */
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 900;
          font-size: 26px;
          letter-spacing: 0.12em;
          cursor: pointer;
        }

        .logo-icon { color: var(--sia-teal); }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-links a {
          text-decoration: none;
          color: rgba(255, 255, 255, 0.6);
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: 0.3s;
        }

        .nav-links a:hover { color: #fff; }

        .lang-switcher {
          display: flex;
          background: rgba(255, 255, 255, 0.05);
          padding: 4px;
          border-radius: 8px;
          gap: 4px;
        }

        .lang-switcher button {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.4);
          padding: 6px 10px;
          font-size: 10px;
          font-weight: 800;
          cursor: pointer;
          border-radius: 6px;
          transition: 0.2s;
        }

        .lang-switcher button.active {
          background: var(--sia-brand-blue);
          color: #fff;
        }

        .mobile-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 5px;
        }

        .mobile-toggle .bar {
          width: 24px;
          height: 2px;
          background: #fff;
          border-radius: 4px;
          transition: 0.3s;
        }

        /* Hero Redesign */
        .hero {
          padding-top: 180px;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 16px;
          background: rgba(0, 191, 168, 0.1);
          border: 1px solid rgba(0, 191, 168, 0.2);
          border-radius: 100px;
          color: var(--sia-teal);
          font-size: 12px;
          font-weight: 800;
          margin-bottom: 30px;
          letter-spacing: 0.05em;
        }

        .pulse {
          width: 8px;
          height: 8px;
          background: var(--sia-teal);
          border-radius: 50%;
          animation: pulse-anim 2s infinite;
        }

        @keyframes pulse-anim {
          0% { box-shadow: 0 0 0 0 rgba(0, 191, 168, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(0, 191, 168, 0); }
          100% { box-shadow: 0 0 0 0 rgba(0, 191, 168, 0); }
        }

        .hero-subtitle {
          font-size: 20px;
          line-height: 1.6;
          margin: 30px 0 50px;
          color: rgba(255, 255, 255, 0.5);
        }

        .hero-actions {
          display: flex;
          gap: 20px;
        }

        .btn-outline {
          padding: 16px 36px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #fff;
          text-decoration: none;
          font-weight: 800;
          font-size: 14px;
          text-transform: uppercase;
          transition: 0.3s;
        }

        .btn-outline:hover { background: rgba(255, 255, 255, 0.05); border-color: #fff; }

        .hero-card {
          border-radius: 32px;
          padding: 12px;
          position: relative;
        }

        .hero-image {
          width: 100%;
          height: auto;
          border-radius: 20px;
          display: block;
        }

        .card-overlay {
          position: absolute;
          inset: 12px;
          overflow: hidden;
          border-radius: 20px;
          pointer-events: none;
        }

        .scanner {
          width: 100%;
          height: 2px;
          background: var(--sia-teal);
          box-shadow: 0 0 15px var(--sia-teal);
          position: absolute;
          top: 0;
          animation: scan-anim 4s infinite linear;
        }

        @keyframes scan-anim {
          0% { top: 0; }
          50% { top: 100%; }
          100% { top: 0; }
        }

        /* About Section */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: center;
        }

        .about-frame {
          padding: 12px;
          border-radius: 32px;
        }

        .about-image {
          width: 100%;
          height: auto;
          border-radius: 20px;
          display: block;
        }

        .intro-text {
          font-size: 26px;
          font-weight: 700;
          line-height: 1.4;
          margin-bottom: 24px;
          color: #fff;
        }

        .body-text {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 40px;
        }

        .quote-card {
          padding: 40px;
          border-radius: 24px;
          position: relative;
        }

        @media (max-width: 768px) {
          .quote-card { padding: 30px 20px; }
          .quote-text { font-size: 18px; }
        }

        .quote-icon {
          font-size: 60px;
          position: absolute;
          top: 10px;
          left: 20px;
          opacity: 0.1;
          font-family: serif;
        }

        .quote-text {
          font-size: 20px;
          font-style: italic;
          color: var(--sia-teal);
          line-height: 1.5;
        }

        /* Products Section */
        .center { text-align: center; }
        .product-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          margin-top: 60px;
        }

        .p-card {
          padding: 50px;
          border-radius: 32px;
          position: relative;
          overflow: hidden;
          transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        @media (max-width: 768px) {
          .p-card { padding: 30px; }
          .p-card h3 { font-size: 24px; }
        }

        .p-card:hover { 
          transform: translateY(-12px);
          background: rgba(10, 30, 56, 0.6);
        }

        .p-status {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-metrics);
          font-size: 12px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.4);
          margin-bottom: 24px;
        }

        .p-dot {
          width: 8px;
          height: 8px;
          background: var(--accent);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--accent);
        }

        .p-card h3 { font-size: 28px; margin-bottom: 16px; }

        .p-card p {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.4);
          margin-bottom: 40px;
          min-height: 60px;
        }

        .p-link {
          text-decoration: none;
          color: #fff;
          font-weight: 800;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .p-accent-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          opacity: 0.3;
        }

        /* Metrics Section */
        .metrics-card {
          padding: 100px 50px;
          border-radius: 40px;
          text-align: center;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .metric-num {
          font-family: var(--font-metrics);
          font-size: 72px;
          font-weight: 900;
          margin-bottom: 10px;
        }

        .metric-label {
          font-size: 12px;
          letter-spacing: 0.2em;
          color: rgba(255, 255, 255, 0.4);
          font-weight: 800;
        }

        /* Contact Section */
        .contact-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 100px;
          align-items: center;
        }

        .contact-subtitle {
          font-size: 24px;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 60px;
        }

        .detail-item {
          margin-bottom: 30px;
        }

        .detail-item strong {
          display: block;
          margin-bottom: 8px;
          color: #fff;
          font-size: 18px;
        }

        .contact-form {
          padding: 60px;
          border-radius: 32px;
        }

        @media (max-width: 768px) {
          .contact-form { padding: 30px 20px; border-radius: 24px; }
        }

        .form-group {
          margin-bottom: 30px;
        }

        .full-width { width: 100%; border-radius: 12px; }

        /* Footer */
        .footer {
          padding: 100px 0 60px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .f-logo {
          font-weight: 900;
          font-size: 24px;
          margin-bottom: 12px;
        }

        .f-copyright {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.3);
        }

        .f-social {
          display: flex;
          gap: 30px;
        }

        .f-social a {
          color: rgba(255, 255, 255, 0.4);
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          transition: 0.3s;
        }

        .f-social a:hover { color: #fff; }

        /* Responsive */
        @media (max-width: 1200px) {
          .hero-grid, .about-grid, .contact-grid { gap: 60px; }
        }

        @media (max-width: 1250px) {
          .navbar { margin: 10px; }
          .mobile-toggle { display: flex; }
          
          .nav-links {
            display: none;
            position: absolute;
            top: 100%; left: 0; right: 0;
            flex-direction: column;
            background: rgba(4, 14, 28, 0.98);
            padding: 50px 20px;
            gap: 25px;
            text-align: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
          }

          .nav-links.active { display: flex; }

          .hero-grid, .about-grid, .product-grid, .metrics-grid, .contact-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero { padding-top: 140px; }
          .hero-content { order: 2; }
          .hero-visual { order: 1; }
          .hero-actions { justify-content: center; flex-direction: column; gap: 12px; }
          .btn-primary, .btn-outline { width: 100%; }
          .hero-subtitle { margin-left: auto; margin-right: auto; }

          .about-visual { order: 2; }
          .about-content { order: 1; }

          .metric-num { font-size: 54px; }
          .contact-form { padding: 40px; }
        }
      `}</style>
    </div>
  );
}
