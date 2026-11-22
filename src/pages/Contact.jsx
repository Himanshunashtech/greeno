import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  Check
} from "lucide-react";
import { servicesList } from "../data/relocationData";

export default function Contact() {
  const [toast, setToast] = useState(false);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(false), 4000);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setToast(true);
    e.currentTarget.reset();
  };

  return (
    <main className="page-content">
      <section className="page-hero">
        <div className="container text-center">
          <span className="kicker">Connect With Our Team</span>
          <h1>Let's Plan Your Seamless Relocation Today</h1>
          <p className="page-hero-subtitle">
            Get an instant quote, schedule a free pre-move home inspection, or talk with our relocation manager at our Greater Noida office.
          </p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Left Contact Details & Map */}
            <div className="contact-info-panel">
              <h3>Headquarters &amp; Direct Support</h3>
              <p>
                Our customer care and move coordination team is available 24/7 to assist with bookings, quotation inquiries, tracking updates, and special packaging requests.
              </p>

              <div className="contact-list">
                <a href="tel:+918860511502" className="contact-card">
                  <div className="contact-icon">
                    <Phone size={20} />
                  </div>
                  <div>
                    <small>Direct Relocation Helpline</small>
                    <strong>+91-8860511502</strong>
                    <span className="sub-phone">+91-8742907859</span>
                  </div>
                </a>

                <a href="mailto:info@greenopackers.com" className="contact-card">
                  <div className="contact-icon">
                    <Mail size={20} />
                  </div>
                  <div>
                    <small>Email Inquiries</small>
                    <strong>info@greenopackers.com</strong>
                  </div>
                </a>

                <div className="contact-card">
                  <div className="contact-icon">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <small>Registered Office Address</small>
                    <strong>OM Tower, Commercial Belt, Alpha-I</strong>
                    <span>Greater Noida, Uttar Pradesh - 201310</span>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-icon">
                    <Clock size={20} />
                  </div>
                  <div>
                    <small>Working Hours</small>
                    <strong>Monday – Sunday: 8:00 AM – 9:00 PM</strong>
                    <span>24/7 Emergency Relocation &amp; Transit Dispatch</span>
                  </div>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="map-container">
                <iframe
                  title="Greeno office location in OM Tower Alpha 1"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2986.6091754823497!2d77.51310067478003!3d28.47319837575214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea7e06bda285%3A0xf4d155e2811bb25c!2sOm%20Tower%2C%20Alpha-I%20Commercial%20Belt%2C%20Block%20E%2C%20Alpha%20I%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201310!5e1!3m2!1sen!2sin!4v1788629703323!5m2!1sen!2sin"
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Right Side Comprehensive Quote Form */}
            <form className="quote-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h3>Request a Free Moving Quote</h3>
                <p>Guaranteed response within 15 minutes with a transparent cost breakdown.</p>
              </div>

              <div className="form-grid">
                <label>
                  Full Name <span className="req">*</span>
                  <input required name="name" placeholder="e.g. Rajesh Kumar" />
                </label>

                <label>
                  Mobile Phone Number <span className="req">*</span>
                  <input
                    required
                    name="phone"
                    type="tel"
                    placeholder="e.g. +91 98765 43210"
                  />
                </label>

                <label>
                  Email Address
                  <input
                    name="email"
                    type="email"
                    placeholder="e.g. name@example.com"
                  />
                </label>

                <label>
                  Service Required <span className="req">*</span>
                  <select name="service" defaultValue="Household Relocation" required>
                    {servicesList.map((s) => (
                      <option key={s.title} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </label>

                <label>
                  Preferred Moving Date
                  <input name="date" type="date" />
                </label>

                <label>
                  Move Size / BHK
                  <select name="bhk" defaultValue="2 BHK">
                    <option value="1 RK / Studio">1 RK / Studio</option>
                    <option value="1 BHK">1 BHK</option>
                    <option value="2 BHK">2 BHK</option>
                    <option value="3 BHK">3 BHK</option>
                    <option value="4+ BHK / Villa">4+ BHK / Villa</option>
                    <option value="Office / Commercial">Office / Commercial</option>
                  </select>
                </label>

                <label>
                  Moving From (Pickup City / Area) <span className="req">*</span>
                  <input
                    required
                    name="from"
                    placeholder="e.g. Greater Noida Alpha-1"
                  />
                </label>

                <label>
                  Moving To (Destination City / Area) <span className="req">*</span>
                  <input
                    required
                    name="to"
                    placeholder="e.g. Bangalore, Whitefield"
                  />
                </label>

                <label className="full">
                  Inventory Details &amp; Special Instructions
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="e.g. 2 BHK household furniture, 1 double-door fridge, 55-inch OLED TV, 1 Royal Enfield motorcycle"
                  ></textarea>
                </label>
              </div>

              <div className="form-trust-points">
                <span><CheckCircle2 size={15} /> 100% Free &amp; No-Obligation Quote</span>
                <span><CheckCircle2 size={15} /> Zero Spam Guarantee</span>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Submit Relocation Booking Request <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Toast Alert */}
      {toast && (
        <div className="toast">
          <div className="toast-icon">
            <Check size={18} />
          </div>
          <div>
            <strong>Enquiry Received!</strong>
            <p>Our relocation manager will call you within 15 minutes with complete pricing details.</p>
          </div>
        </div>
      )}
    </main>
  );
}
