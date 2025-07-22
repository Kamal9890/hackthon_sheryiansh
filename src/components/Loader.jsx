// Loader.jsx
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import crunchSoundFile from '../assets/crunch.mp3';
import chipImg from '../assets/chip1.png';
import laysLogo from '../assets/laysLogo.png';

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const logoRef = useRef(null);
  const chipsContainerRef = useRef(null);
  const [loadingPercent, setLoadingPercent] = useState(0);
  const crunchSound = useRef(null);

  useEffect(() => {
    crunchSound.current = new Audio(crunchSoundFile);

    let interval = setInterval(() => {
      setLoadingPercent(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            if (loaderRef.current) {
              gsap.to(loaderRef.current, {
                opacity: 0,
                duration: 1,
                onComplete,
              });
            }
          }, 1000);
          return prev;
        }
        return prev + 1;
      });
    }, 50);

    // Animate logo with slower rotation
    gsap.fromTo(
      logoRef.current,
      { scale: 0, rotateY: 180 },
      {
        scale: 1,
        rotateY: 0,
        duration: 2,
        ease: 'back.out(1.7)',
        onStart: () => {
          crunchSound.current?.play().catch(() => {});
        },
      }
    );

    // Animate chips
    if (chipsContainerRef.current) {
      const chips = chipsContainerRef.current.querySelectorAll('.chip');
      gsap.fromTo(
        chips,
        { y: -150, opacity: 0, rotate: -90, x: 0 },
        {
          y: '100vh',
          opacity: 1,
          duration: 3,
          stagger: 0.2,
          rotate: 360,
          x: i => (i % 2 === 0 ? -100 : 100),
          ease: 'bounce.out',
        }
      );
    }
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="loader fixed inset-0 bg-yellow-100 flex items-center justify-center flex-col gap-6 z-50 overflow-hidden"
    >
      <div ref={chipsContainerRef} className="absolute inset-0 -z-10">
        {Array.from({ length: 8 }).map((_, i) => (
          <img
            key={i}
            src={chipImg}
            alt="chip"
            className="chip absolute w-10 h-10 object-contain"
            style={{ left: `${10 + i * 10}%`, top: '-50px' }}
          />
        ))}
      </div>

      <img
        src={laysLogo}
        alt="Lays Logo"
        ref={logoRef}
        className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-[0_0_20px_rgba(255,255,0,0.8)] animate-pulse"
      />

      <h2 className="text-2xl md:text-3xl text-yellow-900 font-extrabold animate-fade-in tracking-wide">
        Taste the Crunch!
      </h2>

      <p className="text-lg text-yellow-700 font-mono bg-white/60 px-4 py-1 rounded-lg shadow text-center">
        Getting things crispy... {loadingPercent}%
      </p>
    </div>
  );
};

export default Loader;
