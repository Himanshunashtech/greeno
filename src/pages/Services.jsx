import React from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { servicesList } from "../data/relocationData";

export default function Services() {
  return (
    <main className="page-content">
      <section className="page-hero">
        <div className="container text-center">
          <span className="kicker">Comprehensive Relocation Services</span>
          <h1>Specialized Moving Solutions Tailored to Your Needs</h1>
          <p className="page-hero-subtitle">
            Explore our full suite of residential, corporate, automotive, and warehousing relocation services designed for utmost care, reliability, and speed.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-detailed-list">
            {servicesList.map((service, index) => (
              <div
                className={`service-detail-row ${index % 2 === 1 ? "reverse" : ""}`}
                key={service.title}
              >
                <div className="service-detail-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-image-badge">
                    <service.icon size={20} />
                    <span>Greeno Verified Service</span>
                  </div>
                </div>

                <div className="service-detail-text">
                  <span className="service-number">Service 0{index + 1}</span>
                  <h2>{service.title}</h2>
                  <p className="service-lead">{service.short}</p>
                  <p className="service-body">{service.details}</p>
                  <div className="service-bullets">
                    <div className="sb-item"><Check size={16} /> Full insurance assistance included</div>
                    <div className="sb-item"><Check size={16} /> Dedicated supervisor on site</div>
                    <div className="sb-item"><Check size={16} /> High-grade virgin packing supplies</div>
                  </div>
                  <Link to="/contact" className="btn btn-primary">
                    Book {service.title} <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Service Assurance Matrix */}
          <div className="assurance-section">
            <div className="section-heading center">
              <span className="kicker">Our Service Guarantee</span>
              <h2>Every Greeno Relocation Includes Standard Protections</h2>
            </div>
            <div className="assurance-grid">
              <div className="assurance-card">
                <h4>Multi-Layer Box Shielding</h4>
                <p>Heavy double-wall 5-ply cartons ensure contents inside withstand road bumps and stacking pressure during interstate highway transit.</p>
              </div>
              <div className="assurance-card">
                <h4>Furniture Blanket Padding</h4>
                <p>Thick quilted furniture blankets and stretch film wrap prevent scuffs on polished wood, leather couches, and lacquered wardrobes.</p>
              </div>
              <div className="assurance-card">
                <h4>Electronics Static Protection</h4>
                <p>Specially insulated anti-static bubble cushions for OLED TVs, gaming systems, desktop CPUs, and sensitive office server racks.</p>
              </div>
              <div className="assurance-card">
                <h4>Prompt Unpacking Support</h4>
                <p>Our destination crew doesn't simply drop boxes at the gate; we assist in placing heavy furniture in the proper rooms and clearing packing debris.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
