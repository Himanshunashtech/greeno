import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Pricing() {
  const [distance, setDistance] = useState(250);
  const [homeType, setHomeType] = useState("2 BHK");

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
    <main className="page-content">
      <section className="page-hero">
        <div className="container text-center">
          <span className="kicker">Transparent Relocation Estimates</span>
          <h1>Interactive Cost Calculator &amp; Pricing Guide</h1>
          <p className="page-hero-subtitle">
            Plan your relocation budget with complete confidence. Use our interactive price calculator and review our detailed cost breakdown.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Interactive Calculator Section */}
          <div className="calc-layout-grid">
            <div className="calc-card">
              <div className="calc-header">
                <Sparkles className="w-5 h-5 text-emerald-500" />
                <h3>Instant Relocation Price Estimator</h3>
              </div>
              <p className="calc-intro">
                Adjust your home size and estimated moving distance below to view an indicative starting price estimate for your upcoming relocation.
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
                  <label>Approximate Transit Distance (km):</label>
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
                  <span>Estimated Indicative Price Range:</span>
                  <strong>₹ {calculatedPrice.toLocaleString("en-IN")} - ₹ {Math.round(calculatedPrice * 1.18).toLocaleString("en-IN")}</strong>
                  <small>*Includes standard 5-ply packing, labor handling, vehicle freight, and loading/unloading.</small>
                </div>
                <Link to="/contact" className="btn btn-primary">
                  Book at This Rate <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right Side Guide Information */}
            <div className="pricing-guide-card">
              <h3>What Factors Determine Your Final Quote?</h3>
              <p>
                Every move is unique. While our calculator gives an accurate starting baseline, your final written quote depends on:
              </p>
              <ul className="factors-list">
                <li>
                  <strong>Volume of Inventory:</strong> The exact quantity of cartons, large furniture items, and appliances.
                </li>
                <li>
                  <strong>Packing Material Tier:</strong> Standard corrugated wrapping vs. premium multi-layer bubble wrap and wooden crates.
                </li>
                <li>
                  <strong>Floor Level &amp; Elevator Access:</strong> Ground floor vs. multi-story apartments with or without service lifts.
                </li>
                <li>
                  <strong>Vehicle Shifting Needs:</strong> Whether cars or two-wheelers are being moved simultaneously in dedicated carriers.
                </li>
                <li>
                  <strong>Transit Distance &amp; Tolls:</strong> Inter-city toll charges, state entry taxes, and total road mileage.
                </li>
              </ul>
            </div>
          </div>

          {/* Standard Price Reference Table (500+ words depth) */}
          <div className="pricing-table-section">
            <div className="section-heading center">
              <span className="kicker">Reference Rate Chart</span>
              <h2>Estimated Local &amp; Interstate Moving Rates in India</h2>
              <p>A helpful baseline guide for budgeting your residential relocation.</p>
            </div>

            <div className="table-responsive">
              <table className="price-table">
                <thead>
                  <tr>
                    <th>Move Type</th>
                    <th>Local Shifting (Within City)</th>
                    <th>Interstate (300-750 km)</th>
                    <th>Long Distance (1000+ km)</th>
                    <th>Packing Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>1 BHK Apartment</strong></td>
                    <td>₹ 4,500 - ₹ 7,500</td>
                    <td>₹ 10,500 - ₹ 16,500</td>
                    <td>₹ 15,500 - ₹ 24,000</td>
                    <td>3 - 4 Hours</td>
                  </tr>
                  <tr>
                    <td><strong>2 BHK Apartment</strong></td>
                    <td>₹ 7,000 - ₹ 11,500</td>
                    <td>₹ 15,000 - ₹ 23,500</td>
                    <td>₹ 22,000 - ₹ 34,000</td>
                    <td>4 - 6 Hours</td>
                  </tr>
                  <tr>
                    <td><strong>3 BHK Apartment / House</strong></td>
                    <td>₹ 10,500 - ₹ 16,000</td>
                    <td>₹ 21,000 - ₹ 32,000</td>
                    <td>₹ 28,000 - ₹ 45,000</td>
                    <td>5 - 8 Hours</td>
                  </tr>
                  <tr>
                    <td><strong>4+ BHK / Villa</strong></td>
                    <td>₹ 15,000 - ₹ 24,000</td>
                    <td>₹ 28,000 - ₹ 45,000</td>
                    <td>₹ 38,000 - ₹ 65,000</td>
                    <td>1 - 2 Days</td>
                  </tr>
                  <tr>
                    <td><strong>Bike Transportation</strong></td>
                    <td>₹ 1,800 - ₹ 3,000</td>
                    <td>₹ 3,500 - ₹ 6,000</td>
                    <td>₹ 5,500 - ₹ 9,500</td>
                    <td>1 Hour</td>
                  </tr>
                  <tr>
                    <td><strong>Car Transportation</strong></td>
                    <td>₹ 3,500 - ₹ 6,000</td>
                    <td>₹ 8,500 - ₹ 16,000</td>
                    <td>₹ 14,000 - ₹ 24,000</td>
                    <td>1 - 2 Hours</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="money-saving-tips">
              <h3>Pro Moving Tips to Lower Your Moving Cost:</h3>
              <div className="tips-grid">
                <div className="tip-box">
                  <strong>1. Declutter Before Moving</strong>
                  <p>Sell, donate, or discard old furniture and clothes you no longer use. Less weight means lower transportation freight costs.</p>
                </div>
                <div className="tip-box">
                  <strong>2. Book in Advance</strong>
                  <p>Booking 5 to 7 days ahead allows optimal vehicle routing and saves you from last-minute weekend surge premiums.</p>
                </div>
                <div className="tip-box">
                  <strong>3. Move Mid-Week if Possible</strong>
                  <p>Relocating on Tuesday through Thursday often comes with greater crew flexibility and discounted rates compared to month-ends.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
