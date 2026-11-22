import React, { useState } from "react";
import { Star, ChevronDown } from "lucide-react";
import { testimonialsData, faqsData } from "../data/relocationData";

export default function Reviews() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="page-content">
      <section className="page-hero">
        <div className="container text-center">
          <span className="kicker">Real Customer Experiences &amp; Guidance</span>
          <h1>Testimonials &amp; Frequently Asked Questions</h1>
          <p className="page-hero-subtitle">
            Read authentic reviews from homeowners and businesses who trusted Greeno, plus find answers to common relocation questions.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Testimonials Showcase */}
          <div className="testimonial-showcase-header">
            <div className="rating-badge-large">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
              <strong>4.9 / 5.0 Star Average Rating</strong>
              <span>Based on 100+ Verified Customer Relocation Feedbacks</span>
            </div>
          </div>

          <div className="testimonial-grid">
            {testimonialsData.map(([quote, initials, name, city, stars]) => (
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

          {/* Comprehensive FAQs Accordion */}
          <div className="faq-expanded-section">
            <div className="section-heading center">
              <span className="kicker">Common Inquiries</span>
              <h2>Everything You Need to Know Before Booking Your Move</h2>
              <p>Clear, direct answers regarding insurance, packing protocols, transit times, and payment terms.</p>
            </div>

            <div className="faq-list">
              {faqsData.map(([q, a], i) => (
                <div
                  className={`faq-item ${openFaq === i ? "open" : ""}`}
                  key={q}
                >
                  <button
                    type="button"
                    aria-expanded={openFaq === i}
                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  >
                    <span>{q}</span>
                    <ChevronDown className="faq-chevron" size={20} />
                  </button>
                  {openFaq === i && (
                    <div className="faq-answer">
                      <p>{a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
