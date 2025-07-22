import React, { useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FlavorGrid from "./components/FlavorGrid";


function App() {
  const [showMain, setShowMain] = useState(false);

  return (
    <>
      <Loader onComplete={() => setShowMain(true)} />
      {showMain && (
        <>
          <Navbar />
          <HeroSection />
          <FlavorGrid />
        </>
      )}
    </>
  );
}

export default App;
