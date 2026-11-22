import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { logoWebp, servicesList } from "../data/relocationData";

const Facebook = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const Instagram = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedIn = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-logo-btn" aria-label="Greeno Home">
            <img
              src={logoWebp}
              alt="Greeno Packers and Movers"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/favicon.svg";
              }}
            />
          </Link>
          <p>
            Greeno Packers and Movers is an ISO 9001:2015 certified relocation leader delivering verified crew, 5-ply multi-layer packing, GPS fleet tracking, and safe door-to-door delivery across India.
          </p>
          <div className="socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedIn size={18} />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <Link to="/" className="footer-nav-link">Home</Link>
          <Link to="/about" className="footer-nav-link">About Us</Link>
          <Link to="/services" className="footer-nav-link">Our Services</Link>
          <Link to="/pricing" className="footer-nav-link">Pricing &amp; Calculator</Link>
          <Link to="/reviews" className="footer-nav-link">Reviews &amp; FAQs</Link>
          <Link to="/contact" className="footer-nav-link">Contact Us</Link>
        </div>

        <div className="footer-col">
          <h3>Moving Services</h3>
          {servicesList.slice(0, 6).map((s) => (
            <Link key={s.id} to="/services" className="footer-nav-link">
              {s.title}
            </Link>
          ))}
        </div>

        <div className="footer-col footer-contact">
          <h3>Get in Touch</h3>
          <a href="tel:+918860511502">
            <Phone size={16} /> +91-8860511502
          </a>
          <a href="tel:+918742907859">
            <Phone size={16} /> +91-8742907859
          </a>
          <a href="mailto:info@greenopackers.com">
            <Mail size={16} /> info@greenopackers.com
          </a>
          <span>
            <MapPin size={16} /> OM Tower, Alpha-I, Greater Noida, UP - 201310
          </span>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© 2026 Greeno Packers and Movers. All rights reserved. Registered &amp; Certified.</span>
          <span>Clean • Safe • Dependable Relocation</span>
        </div>
      </div>
    </footer>
  );
}
