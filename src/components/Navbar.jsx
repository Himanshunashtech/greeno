import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Shield,
  Phone,
  Mail,
  Menu,
  X,
  ArrowRight
} from "lucide-react";
import { logoWebp } from "../data/relocationData";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Top Banner Strip */}
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-badge">
            <Shield className="w-3.5 h-3.5" />
            <span>Govt. Registered &amp; ISO 9001:2015 Certified Relocation Partner</span>
          </div>
          <div className="topbar-contacts">
            <a href="tel:+918860511502">
              <Phone className="w-3.5 h-3.5" /> +91-8860511502 / +91-8742907859
            </a>
            <span className="divider">|</span>
            <a href="mailto:info@greenopackers.com">
              <Mail className="w-3.5 h-3.5" /> info@greenopackers.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container nav-wrap">
          <Link to="/" className="brand-link-btn" onClick={closeMenu} aria-label="Greeno Home">
            <img
              className="logo"
              src={logoWebp}
              alt="Greeno Packers and Movers"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/favicon.svg";
              }}
            />
          </Link>

          <nav
            className={menuOpen ? "nav-menu is-open" : "nav-menu"}
            aria-label="Main navigation"
          >
            <NavLink
              to="/"
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              onClick={closeMenu}
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              onClick={closeMenu}
            >
              About Us
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              onClick={closeMenu}
            >
              Our Services
            </NavLink>
            <NavLink
              to="/pricing"
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              onClick={closeMenu}
            >
              Pricing &amp; Calculator
            </NavLink>
            <NavLink
              to="/reviews"
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              onClick={closeMenu}
            >
              Reviews &amp; FAQs
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              onClick={closeMenu}
            >
              Contact Us
            </NavLink>

            <Link to="/contact" className="nav-cta" onClick={closeMenu}>
              Get Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </nav>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
    </>
  );
}
