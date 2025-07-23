import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';
import { chipsData } from '../data/flavorData';

const ChipVarieties = ({ id = "flavors" }) => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.chip-card');
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.2,
        delay: 0.3,
      }
    );
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className="py-20 px-6 bg-[#fff9db] text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-yellow-800 mb-12 tracking-tight">
        Our Crunchy Lineup
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {chipsData.map((chip) => (
          <div
            key={chip.id}
            onClick={() => navigate(`/flavor/${chip.id}`)}
            className="chip-card bg-yellow-100 p-6 rounded-3xl shadow-[0_8px_20px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img
              src={chip.img}
              alt={chip.name}
              className="w-28 h-28 mx-auto object-contain mb-5 transition-transform hover:rotate-6"
            />
            <h3 className="text-lg font-semibold text-yellow-900">
              {chip.name}
            </h3>
            <button className="mt-4 px-5 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors duration-200">
              Taste Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChipVarieties;
