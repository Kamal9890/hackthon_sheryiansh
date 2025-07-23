// src/MainContent.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FlavorDetail from "./components/ChipDetail";
import Login from "./page/Login";
import Signup from "./page/SignUp";
import ChipVarieties from "./components/ChipVarieties";
import TestimonialSection from "./components/TestimonialSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

function MainContent() {
  const location = useLocation();
  const [showLoader, setShowLoader] = useState(location.pathname === "/");

  useEffect(() => {
    if (location.pathname === "/") {
      setShowLoader(true);
      const timer = setTimeout(() => setShowLoader(false), 4000);
      return () => clearTimeout(timer);
    } else {
      setShowLoader(false);
    }
  }, [location.pathname]);


useEffect(() => {
  if (location.pathname === '/' && location.state?.scrollToId) {
    const scrollToId = location.state.scrollToId;

    setTimeout(() => {
      const targetEl = document.getElementById(scrollToId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500); // Delay to ensure all sections are mounted

    // ✅ Clear the scroll state so back button doesn't re-scroll
    window.history.replaceState({}, document.title);
  }
}, [location]);


  return (
    <>
      {showLoader ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* ✅ Make sure each of these sections has a matching ID */}
                  <HeroSection />         {/* id="home" inside */}
                  <ChipVarieties />       {/* id="flavors" inside */}
                  <TestimonialSection />
                  <AboutSection />        {/* id="about" inside */}
                  <ContactSection />      {/* id="contact" inside */}
                  <FooterSection />
                </>
              }
            />
            <Route path="/varieties" element={<ChipVarieties />} />
            <Route path="/flavor/:id" element={<FlavorDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="*"
              element={
                <div className="p-10 text-center text-red-600">
                  404 - Page Not Found
                </div>
              }
            />
          </Routes>
        </>
      )}
    </>
  );
}

export default MainContent;
