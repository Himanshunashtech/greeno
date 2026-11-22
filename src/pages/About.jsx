import React from "react";
import { Link } from "react-router-dom";
import {
  Award,
  Check,
  ShieldCheck,
  Users,
  DollarSign,
  Navigation,
  ArrowRight,
  Calendar,
  Building,
  Shield,
  Clock,
  Truck,
  PackageCheck
} from "lucide-react";
import { aboutWebp, happyCustomersWebp } from "../data/relocationData";

export default function About() {
  return (
    <main className="page-content">
      {/* HERO SECTION: Image and Data in Parallel (Side-by-Side 2-Column Grid) */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-grid">
            {/* Left Column: Data & Content */}
            <div className="about-hero-copy">
              <div className="eyebrow-pill">
                <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                <span>Est. 2016 • 10+ Years of Relocation Excellence</span>
              </div>
              
              <h1 className="about-hero-title">
                Reliable moving solutions, <em>built on care &amp; integrity.</em>
              </h1>
              
              <p className="about-hero-lead">
                Founded in Greater Noida, Uttar Pradesh, Greeno Packers and Movers is an ISO 9001:2015 certified relocation leader dedicated to delivering 100% stress-free residential household moves, corporate office shifting, vehicle carriers, and secure storage across India.
              </p>

              <div className="about-hero-stats">
                <div className="ah-stat">
                  <strong>2016</strong>
                  <span>Founded in NCR</span>
                </div>
                <div className="ah-stat">
                  <strong>100+</strong>
                  <span>Successful Moves</span>
                </div>
                <div className="ah-stat">
                  <strong>100%</strong>
                  <span>Verified Crew</span>
                </div>
              </div>

              <div className="hero-actions">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Get a Free Moving Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/services" className="btn btn-outline btn-lg">
                  Explore Services
                </Link>
              </div>

              <div className="hero-checks">
                <div className="check-item">
                  <div className="check-icon"><Check size={14} /></div>
                  <span>ISO 9001:2015 Certified</span>
                </div>
                <div className="check-item">
                  <div className="check-icon"><Check size={14} /></div>
                  <span>Govt. Registered Company</span>
                </div>
                <div className="check-item">
                  <div className="check-icon"><Check size={14} /></div>
                  <span>Transit Insurance Assured</span>
                </div>
              </div>
            </div>

            {/* Right Column: Parallel Image Frame with Badges */}
            <div className="about-hero-media">
              <div className="image-frame">
                <img
                  src={aboutWebp}
                  alt="Greeno moving truck and professional crew"
                  className="about-hero-img"
                />
                <div className="care-badge">
                  <Award className="w-6 h-6 text-emerald-400" />
                  <div>
                    <strong>ISO 9001:2015</strong>
                    <span>Quality Certified Relocation</span>
                  </div>
                </div>
                <div className="exp-badge">
                  <strong>10+</strong>
                  <span>Years of Relocation Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Section: Story, Quality Checklist & 4 Pillars (500+ Words) */}
      <section className="section">
        <div className="container">
          <div className="about-story-block">
            <div className="section-heading">
              <span className="kicker">Our Story &amp; Purpose</span>
              <h2>Transforming relocation into a predictable, zero-stress experience.</h2>
              <p>
                Relocating a home or enterprise represents an important new chapter. At Greeno, our objective is to remove the uncertainty, hidden costs, and rough handling common in the moving sector by adhering to stringent quality frameworks, permanent background-checked crew members, and modern GPS logistics.
              </p>
            </div>

            <div className="check-grid">
              {[
                "Govt. Registered & ISO 9001:2015 Certified",
                "Strict 100% Background-Checked Crew",
                "Exclusive High-Grade 5-Ply Packaging",
                "Hydraulic Car & Covered Bike Carriers",
                "Real-Time Live GPS Vehicle Movement",
                "Comprehensive Transit Insurance Coverage",
                "Zero Hidden Charges & Transparent Pricing",
                "Dedicated Single-Point Move Coordinator"
              ].map((item) => (
                <div className="feature-pill" key={item}>
                  <div className="pill-check"><Check size={14} /></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4 Core Safety Pillars */}
          <div className="about-deep-content">
            <div className="section-heading center">
              <span className="kicker">Our Core Pillars</span>
              <h2>Why Discerning Families &amp; Businesses Choose Greeno</h2>
            </div>

            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon"><ShieldCheck size={28} /></div>
                <h4>1. Uncompromising Safety Protocols</h4>
                <p>
                  Safety is engineered into every stage of our workflow. We do not use substandard recycled cardboard or thin single-ply tape. Our standard operating procedure requires heavy-duty 5-ply corrugated cartons, virgin air-bubble sheets, high-density polyethylene edge guards, waterproof stretch film, and custom wooden crates for glass dining tables, marble statues, and premium audio-visual equipment.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon"><Users size={28} /></div>
                <h4>2. Extensively Trained, Professional Crew</h4>
                <p>
                  Unlike unorganized operators who hire casual daily laborers, Greeno maintains a permanent, trained, and background-verified moving staff. Our team members undergo rigorous training in manual handling ergonomics, antique furniture dismantling, fragile glassware packaging, and courteous customer communication.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon"><DollarSign size={28} /></div>
                <h4>3. Transparent Pricing with Zero Hidden Surprises</h4>
                <p>
                  Hidden toll fees, surprise elevator charges, and packing surcharges are the biggest complaints in the moving industry. At Greeno, we provide an itemized written quote covering packing supplies, labor handling, freight transit, tolls, and insurance up front. What we quote is what you pay—guaranteed.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon"><Navigation size={28} /></div>
                <h4>4. Modern GPS Fleet &amp; Nationwide Reach</h4>
                <p>
                  Our fleet consists of modern, weather-proof, sealed container trucks equipped with 24/7 telematics. Whether moving locally across Greater Noida, Noida, Delhi, Gurugram, and Ghaziabad, or inter-state to Bangalore, Mumbai, Pune, Chennai, Kolkata, or Hyderabad, you receive timely tracking milestones.
                </p>
              </div>
            </div>

            {/* Bottom CTA Banner */}
            <div className="about-cta-banner">
              <div>
                <h3>Ready to experience a truly hassle-free move?</h3>
                <p>Contact our Greater Noida headquarters for a complimentary moving assessment today.</p>
              </div>
              <Link to="/contact" className="btn btn-primary">
                Speak with Our Team <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
