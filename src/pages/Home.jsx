import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Truck,
  Box,
  ShieldCheck,
  Clock3,
  FileText,
  PackageCheck,
  Users,
  DollarSign,
  Navigation,
  Headphones,
  Shield,
  Sparkles,
  Star,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import {
  logoWebp,
  servicesList,
  testimonialsData,
  galleryItems
} from "../data/relocationData";
import { Camera, ZoomIn, Eye, X } from "lucide-react";

export default function Home() {
  const [distance, setDistance] = useState(250);
  const [homeType, setHomeType] = useState("2 BHK");
  const [reviewPage, setReviewPage] = useState(0);
  const [galleryFilter, setGalleryFilter] = useState("All");
  const [activePhoto, setActivePhoto] = useState(null);

  const bhkBase = {
    "1 RK / Studio": 3500,
    "1 BHK": 4800,
    "2 BHK": 7500,
    "3 BHK": 11500,
    "4+ BHK / Villa": 16500,
    "Office / Commercial": 14000
  };

  const calculatedPrice = Math.round((bhkBase[homeType] || 7500) + distance * 14);

  return (
    <main>
      {/* SECTION 1: Hero Section */}
      <section className="hero">
        <div className="hero-glow-bg"></div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow-pill">
              <span className="dot-pulse"></span>
              <span>100+ Moves Completed with 99.8% Safety Record</span>
            </div>
            <h1 className="hero-title">
              Move with confidence.<br />
              <em>Move with Greeno.</em>
            </h1>
            <p className="hero-description">
              Welcome to Greeno Packers and Movers, North India's foremost professional relocation company. We specialize in household moving, corporate office transfers, car and bike carrier transport, safe warehouse storage, and end-to-end packing across Delhi NCR and India.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/services" className="btn btn-outline btn-lg">
                Explore Services
              </Link>
            </div>
            <div className="hero-checks">
              <div className="check-item">
                <div className="check-icon"><Check size={14} /></div>
                <span>100% Zero-Damage Guarantee</span>
              </div>
              <div className="check-item">
                <div className="check-icon"><Check size={14} /></div>
                <span>Verified &amp; Insured Moving Crew</span>
              </div>
              <div className="check-item">
                <div className="check-icon"><Check size={14} /></div>
                <span>On-Time GPS Tracked Delivery</span>
              </div>
            </div>
          </div>

          {/* Moving Route Visualization Card */}
          <div className="move-visual">
            <div className="visual-card-inner">
              <div className="visual-head">
                <div className="brand-badge">
                  <img src={logoWebp} alt="Greeno logo" />
                </div>
                <div>
                  <span className="badge-tag">Pan-India Express Moving</span>
                  <h3>Your move, <b>handled with perfection.</b></h3>
                </div>
              </div>

              <div className="route-container">
                <div className="route-line-track">
                  <div className="route-progress-bar"></div>
                  <span className="route-dot start"></span>
                  <div className="route-truck-wrapper">
                    <Truck className="route-truck" />
                  </div>
                  <span className="route-dot end"></span>
                </div>

                <div className="route-labels">
                  <div className="loc-card">
                    <small>PICKUP POINT</small>
                    <strong>Your Current Home</strong>
                    <span>5-Layer Packaging</span>
                  </div>
                  <div className="loc-card text-right">
                    <small>DESTINATION</small>
                    <strong>Your New Address</strong>
                    <span>Unpacking &amp; Setup</span>
                  </div>
                </div>
              </div>

              <div className="visual-features">
                <div className="vf-item">
                  <Box className="w-4 h-4" /> <span>5-Ply Boxes</span>
                </div>
                <div className="vf-item">
                  <ShieldCheck className="w-4 h-4" /> <span>Transit Cover</span>
                </div>
                <div className="vf-item">
                  <Clock3 className="w-4 h-4" /> <span>Live Updates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA Strip */}
      <section className="quote-strip">
        <div className="container quote-inner">
          <div className="strip-text">
            <h2>Planning a residential or commercial move this month?</h2>
            <p>Speak with our relocation specialist for a free on-site survey and lock the best discounted quote.</p>
          </div>
          <div className="strip-action">
            <Link to="/pricing" className="btn btn-light">
              Calculate Moving Cost <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: Service Highlights with WebP Images */}
      <section className="section">
        <div className="container">
          <div className="section-heading center">
            <span className="kicker">Core Specializations</span>
            <h2>Comprehensive relocation solutions engineered for safety.</h2>
            <p>
              Greeno Packers and Movers delivers tailored shifting packages suited to your specific volume, timing, and destination requirements. Every move is executed with precision, quality packing supplies, and experienced handlers.
            </p>
          </div>

          <div className="services-grid">
            {servicesList.slice(0, 6).map((s) => (
              <article className="service-card" key={s.title}>
                <div className="service-img-wrap">
                  <img src={s.image} alt={s.title} loading="lazy" />
                </div>
                <div className="card-top">
                  <div className="icon-box">
                    <s.icon size={22} />
                  </div>
                  <span className="service-tag">Verified</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <Link to="/services" className="service-link-btn">
                  <span>Read full service details</span>
                  <ArrowRight size={15} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Real Relocation Gallery (Live Photos with Parrot Green Uniforms & Trucks) */}
      <section className="section gallery-section">
        <div className="container">
          <div className="section-heading center">
            <span className="kicker">Real Relocation in Action</span>
            <h2>On-ground moving operations &amp; trained crew gallery.</h2>
            <p>
              Take a look at our permanent moving crew in signature parrot green uniforms executing packing, truck loading, vehicle strapping, and doorstep delivery across NCR and India.
            </p>
          </div>

          {/* Clean Photo Grid - Pure Images */}
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <div
                className="gallery-card"
                key={item.id}
                onClick={() => setActivePhoto(item)}
              >
                <div className="gallery-img-holder">
                  <img
                    src={item.image}
                    alt={item.title || "Greeno relocation operation"}
                    loading="lazy"
                  />
                  <div className="gallery-overlay">
                    <div className="gallery-zoom-icon">
                      <ZoomIn size={24} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Photo Lightbox Modal */}
      {activePhoto && (
        <div className="gallery-modal-backdrop" onClick={() => setActivePhoto(null)}>
          <div className="gallery-modal-content pure-image-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="gallery-modal-close"
              type="button"
              onClick={() => setActivePhoto(null)}
              aria-label="Close image preview"
            >
              <X size={24} />
            </button>
            <div className="gallery-modal-img-wrap">
              <img src={activePhoto.image} alt={activePhoto.title || "Greeno live relocation"} />
            </div>
          </div>
        </div>
      )}

      {/* SECTION 4: Why Choose Greeno (Key Value Pillars) */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-heading center">
            <span className="kicker">Why Choose Greeno</span>
            <h2>The moving partner trusted by 100+ happy families.</h2>
            <p>
              From virgin 5-ply packing boxes to permanent verified moving crews, here is why Greeno stands out in the relocation industry.
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon"><ShieldCheck size={28} /></div>
              <h4>100% Zero-Damage Promise</h4>
              <p>
                Multi-layer protective packing with 5-ply cartons, virgin air bubble cushioning, and custom wooden crating for delicate glass and artwork.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon"><Users size={28} /></div>
              <h4>Trained Permanent Moving Crew</h4>
              <p>
                Background-verified, uniform-wearing full-time professionals skilled in manual ergonomics and delicate furniture dismantling.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon"><DollarSign size={28} /></div>
              <h4>Transparent Fixed Pricing</h4>
              <p>
                Clear, itemized quotes with zero hidden charges, unexpected elevator fees, or last-minute packing surcharges.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon"><Navigation size={28} /></div>
              <h4>GPS Live Fleet Tracking</h4>
              <p>
                Modern weather-proof, sealed container trucks equipped with 24/7 telematics providing real-time milestones across India.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon"><Headphones size={28} /></div>
              <h4>Dedicated Move Coordinator</h4>
              <p>
                A single point of contact assigned to supervise your relocation from the initial survey through final room setup.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon"><Shield size={28} /></div>
              <h4>Comprehensive Transit Insurance</h4>
              <p>
                Full financial indemnity coverage underwritten by leading national insurers for ultimate peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Interactive Price Calculator on Home */}
      <section className="section">
        <div className="container">
          <div className="section-heading center">
            <span className="kicker">Instant Cost Estimate</span>
            <h2>Calculate your estimated relocation price in seconds.</h2>
            <p>
              Select your home size and transit distance for a fast, indicative price baseline.
            </p>
          </div>

          <div className="calc-layout-grid">
            <div className="calc-card">
              <div className="calc-header">
                <Sparkles className="w-5 h-5 text-emerald-500" />
                <h3>Instant Moving Cost Estimator</h3>
              </div>
              <p className="calc-intro">
                Adjust your home configuration and estimated distance to get an instant baseline estimate.
              </p>

              <div className="calc-field">
                <label>Select Size / Move Type:</label>
                <div className="bhk-selector">
                  {["1 RK / Studio", "1 BHK", "2 BHK", "3 BHK", "4+ BHK / Villa", "Office / Commercial"].map((t) => (
                    <button
                      key={t}
                      type="button"
                      className={`bhk-btn ${homeType === t ? "active" : ""}`}
                      onClick={() => setHomeType(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="calc-field">
                <div className="slider-label-row">
                  <label>Approximate Moving Distance (km):</label>
                  <span className="slider-value-pill">{distance} km</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="2000"
                  step="10"
                  value={distance}
                  onChange={(e) => setDistance(Number(e.target.value))}
                  className="calc-range-slider"
                />
                <div className="slider-hints">
                  <span>Local Move (10-50 km)</span>
                  <span>NCR Interstate (250 km)</span>
                  <span>Pan-India (1000+ km)</span>
                </div>
              </div>

              <div className="calc-result-box">
                <div className="calc-result-left">
                  <span>Indicative Starting Price:</span>
                  <strong>₹ {calculatedPrice.toLocaleString("en-IN")} - ₹ {Math.round(calculatedPrice * 1.18).toLocaleString("en-IN")}</strong>
                  <small>*Includes standard 5-ply packing, labor, vehicle transit, and loading/unloading.</small>
                </div>
                <Link to="/contact" className="btn btn-primary">
                  Book Free Survey <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="pricing-guide-card">
              <h3>What's Included in Your Greeno Package?</h3>
              <p>
                We deliver an all-inclusive moving experience so you don't have to worry about any logistical detail.
              </p>
              <ul className="factors-list">
                <li>
                  <strong>Heavy-Duty 5-Ply Packing Boxes:</strong> Strong corrugated cartons that protect fragile and heavy items.
                </li>
                <li>
                  <strong>Skilled Moving &amp; Loading Team:</strong> Experienced professionals handling every piece with care.
                </li>
                <li>
                  <strong>GPS Container Truck Freight:</strong> Sealed, waterproof transit vehicles for local and long-distance routes.
                </li>
                <li>
                  <strong>Unloading &amp; Furniture Placement:</strong> Helping place major appliances and heavy beds in your new home.
                </li>
                <li>
                  <strong>Safe Packing &amp; Unpacking:</strong> Professional packing before the move and careful unpacking at your new destination.
                </li>
                <li>
                  <strong>Furniture Dismantling &amp; Assembly:</strong> Safe dismantling and reassembly of beds, wardrobes, tables, and other furniture at your new location.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: 4-Step Process Section */}
      <section className="section process-section">
        <div className="container">
          <div className="section-heading center light">
            <span className="kicker">Standardized 4-Step Execution</span>
            <h2>How Greeno delivers hassle-free relocation every single time.</h2>
            <p>
              We have refined our logistics pipeline over a decade to eliminate delays, prevent damage, and maintain transparent communication with our clients.
            </p>
          </div>

          <div className="process-grid">
            {[
              {
                title: "Free Pre-Move Survey & Quote",
                text: "Our moving consultant reviews your inventory either in person or via video call to evaluate volume, fragile items, and route logistics to provide a transparent fixed estimate.",
                icon: FileText
              },
              {
                title: "Systematic Multi-Layer Packing",
                text: "On moving day, our uniform-wearing packing crew arrives punctually with heavy-duty 5-ply cartons, bubble wrap, edge guards, and crating materials to wrap every belonging safely.",
                icon: Box
              },
              {
                title: "GPS-Tracked Safe Transit",
                text: "Your goods are secured in clean, waterproof, closed-container vehicles equipped with real-time GPS tracking and driven by experienced highway drivers.",
                icon: Truck
              },
              {
                title: "Delivery, Unpacking & Assembly",
                text: "Upon reaching your new home or commercial facility, we unload, unbox, reassemble furniture, and assist in arranging heavy appliances in designated rooms.",
                icon: PackageCheck
              }
            ].map((step, i) => (
              <article className="process-step" key={step.title}>
                <div className="step-header">
                  <span className="step-number">0{i + 1}</span>
                  <div className="process-icon">
                    <step.icon size={24} />
                  </div>
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Customer Testimonials Carousel & Ratings */}
      <section className="section section-testimonials">
        <div className="container">
          <div className="testimonial-top">
            <div className="section-heading">
              <span className="kicker">Verified Client Reviews</span>
              <h2>What our <em>happy customers</em> say across India.</h2>
              <p>Real experiences from families and corporations who trusted Greeno Packers and Movers.</p>
            </div>

            <div className="carousel-buttons">
              <button
                type="button"
                className="carousel-nav-btn prev"
                aria-label="Previous testimonials"
                onClick={() =>
                  setReviewPage((prev) =>
                    prev === 0 ? Math.ceil(testimonialsData.length / 3) - 1 : prev - 1
                  )
                }
              >
                <ArrowLeft size={20} strokeWidth={2.2} />
              </button>
              <button
                type="button"
                className="carousel-nav-btn next"
                aria-label="Next testimonials"
                onClick={() =>
                  setReviewPage((prev) =>
                    (prev + 1) % Math.ceil(testimonialsData.length / 3)
                  )
                }
              >
                <ArrowRight size={20} strokeWidth={2.2} />
              </button>
            </div>
          </div>

          <div className="testimonial-grid">
            {testimonialsData
              .slice(reviewPage * 3, reviewPage * 3 + 3)
              .map(([quote, initials, name, city, stars]) => (
                <article className="testimonial-card" key={name}>
                  <div className="testimonial-header">
                    <div className="stars">
                      {[...Array(stars)].map((_, idx) => (
                        <Star key={idx} size={16} fill="#F59E0B" color="#F59E0B" />
                      ))}
                    </div>
                    <span className="quote-mark">“</span>
                  </div>
                  <p className="testimonial-text">{quote}</p>
                  <div className="reviewer">
                    <div className="avatar">{initials}</div>
                    <div>
                      <strong>{name}</strong>
                      <small>{city}</small>
                    </div>
                  </div>
                </article>
              ))}
          </div>

          <div className="testimonial-dots">
            {Array.from({ length: Math.ceil(testimonialsData.length / 3) }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Go to page ${idx + 1}`}
                className={`testimonial-dot ${reviewPage === idx ? "active" : ""}`}
                onClick={() => setReviewPage(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats">
        <div className="container stats-grid">
          {[
            ["100+", "Relocations Completed"],
            ["99.8%", "Zero-Damage Delivery Rate"],
            ["100+", "Cities Covered Nationwide"],
            ["24/7", "Dedicated Customer Support"]
          ].map(([n, l]) => (
            <div className="stat-card" key={l}>
              <strong>{n}</strong>
              <span>{l}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
