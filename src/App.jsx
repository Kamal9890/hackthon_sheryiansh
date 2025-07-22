import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FlavorGrid from "./components/FlavorGrid";
import FlavorDetail from "./components/FlavourDetail";
import Login from "./page/Login";
import Signup from "./page/SignUp";


function MainContent() {
  const location = useLocation();
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      const timer = setTimeout(() => {
        setShowMain(true);
      }, 4000);
      return () => clearTimeout(timer);
    } else {
      setShowMain(true);
    }
  }, [location.pathname]);

  return (
    <>
      {location.pathname === "/" && !showMain && (
        <Loader onComplete={() => setShowMain(true)} />
      )}

      {showMain && (
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

function App() {
  return (
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
  );
}

export default App;
