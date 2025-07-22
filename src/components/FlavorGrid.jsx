import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import lays1 from '../assets/chip1.png';
import lays2 from '../assets/chip2.png';
import lays3 from '../assets/chip3.png';
import lays4 from '../assets/lays5.png';

gsap.registerPlugin(ScrollTrigger);

const flavors = [
  {
    title: 'Classic Salted',
    desc: 'A timeless favorite with the perfect pinch of salt.',
    image: lays1,
  },
  {
    title: 'Masala Magic',
    desc: 'Spicy, tangy, and totally irresistible.',
    image: lays2,
  },
  {
    title: 'Cream & Onion',
    desc: 'Smooth cream and sharp onion combined.',
    image: lays3,
  },
  {
    title: 'Hot Chilli',
    desc: 'Bold flavors for the brave-hearted.',
    image: lays4,
  },
];

const FlavorGrid = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 80,
      stagger: 0.2,
      duration: 1.2,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: '#flavors',
        start: 'top 80%',
      },
    });
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
              <p className="text-yellow-700 text-sm">{flavor.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlavorGrid;
