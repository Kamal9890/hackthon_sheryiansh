import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import laysHero from '../assets/lay1.png';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const chipRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );

  


    gsap.fromTo(
      chipRef.current,
      { opacity: 0, y: 60, rotate: -10 },
      {
        opacity: 1,
        y: 0,
        rotate: 0,
        duration: 1.5,
        ease: 'elastic.out(1, 0.6)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  const scrollToNext = () => {
    const next = document.getElementById('testimonial');
    if (next) {
      next.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id ="about"
      ref={sectionRef}
      className="relative bg-[#fff4c2] py-24 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
       
        <div ref={textRef} className="md:w-1/2 text-center md:text-left z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-900 mb-6">
            About Lays Crunch
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            At Lays Crunch, we’re more than just chips. We’re bold bites of flavor,
            hand-crafted to match every mood. Whether you're into spicy, tangy, cheesy,
            or something classic — we’ve got the perfect crunch for you.
          </p>
          <p className="text-md text-gray-700 mb-6">
            We believe snacking should be exciting, delicious, and never boring. That’s
            why we keep pushing the limits of flavor.
          </p>

          <button
            onClick={scrollToNext}
            className="bg-yellow-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-700 transition duration-300"
          >
            Learn More
          </button>
        </div>

       
        <div className="md:w-1/2 flex justify-center relative z-0">
          <img
            ref={chipRef}
            src={laysHero}
            alt="Lays Chip"
            className="w-72 md:w-[380px] xl:w-[450px] object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
