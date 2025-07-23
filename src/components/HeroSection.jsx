import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import laysHero from '../assets/lay1.png'; 

const HeroSection = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    tl.fromTo(
      heroRef.current,
      { autoAlpha: 0, y: 50 },
      { autoAlpha: 1, y: 0, duration: 1 }
    );

    tl.fromTo(
      textRef.current,
      { x: -50, autoAlpha: 0 },
      { x: 0, autoAlpha: 1, duration: 1 },
      '-=0.5'
    );

    tl.fromTo(
      imageRef.current,
      { scale: 0.8, autoAlpha: 0 },
      { scale: 1, autoAlpha: 1, duration: 1.2 },
      '-=0.8'
    );
  }, []);

  return (
    <section id="home"
      ref={heroRef}
      className="relative pt-28 md:pt-32 pb-16 bg-gradient-to-br from-yellow-50 to-yellow-100 overflow-hidden"
    >
     
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-10 h-10 top-[-60px] bg-[url('/lays.png')] bg-contain bg-no-repeat animate-fall"
          style={{
            left: `${8 + i * 7}%`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${3 + i * 0.3}s`
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 relative z-10">
       
        <div ref={textRef} className="text-center lg:text-left space-y-6 max-w-2xl">
          <h1 className="text-6xl sm:text-4xl font-bold text-yellow-800 leading-tight">
            Welcome to the Crunchverse
          </h1>
          <p className="text-base sm:text-lg text-yellow-700">
            Discover a world where every chip is a burst of flavor, a wave of crispiness, and an explosion of joy. Crafted with care and packed with bold taste, Lays brings snack-time to life — one bite at a time.
          </p>
          <button className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold rounded-full shadow-md transition duration-300 text-base">
            Explore Flavors
          </button>
        </div>

       
        <div className="w-[240px] sm:w-[300px] md:w-[360px] perspective-1000">
          <img
            ref={imageRef}
            src={laysHero}
            alt="Lays Hero"
            className="w-full animate-3d-spin drop-shadow-[0_5px_20px_rgba(255,215,0,0.6)]"
            style={{ transformStyle: 'preserve-3d' }}
          />
        </div>
      </div>

      
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-100px) rotate(0deg); opacity: 0; }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 1; }
        }
        .animate-fall {
          animation: fall linear infinite;
        }

        @keyframes spin3d {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        .animate-3d-spin {
          animation: spin3d 6s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
