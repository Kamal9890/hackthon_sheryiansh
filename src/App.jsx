import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FlavorGrid from "./components/FlavorGrid";
import FlavorDetail from "./components/FlavourDetail";
import Login from "./page/Login";
import Signup from "./page/SignUp";

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
                  <HeroSection />
                  <FlavorGrid />
                </>
              }
            />
            <Route path="/flavor/:id" element={<FlavorDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<div className="p-10 text-center text-red-600">404 - Page Not Found</div>} />
          </Routes>
        </>
      )}
    </>
  );
}

export default MainContent;
