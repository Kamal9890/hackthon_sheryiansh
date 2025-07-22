import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FlavorGrid from "./components/FlavorGrid";
import FlavorDetail from "./components/FlavourDetail";


function MainContent() {
  const location = useLocation();
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      // Only show loader on home
      const timer = setTimeout(() => {
        setShowMain(true);
      }, 4000); // optional: delay matching your Loader timing
      return () => clearTimeout(timer);
    } else {
      setShowMain(true);
    }
  }, [location.pathname]);

  return (
    <>
      {location.pathname === "/" && !showMain && <Loader onComplete={() => setShowMain(true)} />}

      {showMain && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <FlavorGrid />
              </>
            } />
            <Route path="/flavor/:id" element={<FlavorDetail />} />
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
