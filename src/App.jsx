import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Page Components
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import ChatWidget from "./components/ChatWidget";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="site-shell">
        <ScrollToTop />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/calculator" element={<Pricing />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/faqs" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          {/* Fallback to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
        <ChatWidget />
      </div>
    </BrowserRouter>
  );
}
