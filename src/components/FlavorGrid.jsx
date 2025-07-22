import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import { flavors } from '../data/flavorData';

gsap.registerPlugin(ScrollTrigger);

const FlavorGrid = () => {
  const cardsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
  const elements = gsap.utils.toArray(cardsRef.current);

  if (elements.length > 0) {
    gsap.from(elements, {
      opacity: 0,
      y: 80,
      stagger: 0.2,
      duration: 1.2,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: '#flavors',
        start: 'top 80%',
        once: true, // Optional: only animate once
      },
    });
  }
}, []);


  return (
    <section id="flavors" className="py-20 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-yellow-800 mb-12">
          Explore Our Bold Flavors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {flavors.map((flavor, idx) => (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="bg-white p-6 rounded-3xl border-4 border-yellow-300 shadow-md hover:shadow-2xl transition duration-300 transform hover:scale-105"
            >
              <img
                src={flavor.image}
                alt={flavor.title}
                className="w-24 h-24 mx-auto mb-5 transition-transform duration-300 ease-in-out hover:rotate-12 drop-shadow-xl"
              />
              <h3 className="text-xl font-bold text-yellow-800 mb-2">{flavor.title}</h3>
              <p className="text-yellow-700 text-sm mb-4">{flavor.desc}</p>
              <button
                onClick={() => navigate(`/flavor/${flavor.id}`)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-5 rounded-full shadow-lg transition duration-300"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlavorGrid;
