import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaInstagram, FaYoutube, FaTwitter, FaArrowUp } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const FooterSection = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <footer ref={footerRef} className="relative bg-yellow-100 text-yellow-900 pt-24 pb-10 overflow-hidden shadow-inner">
      {/* Wave Top */}
      <div className="absolute top-0 left-0 w-full -mt-1">
        <svg viewBox="0 0 1440 120" className="w-full h-20" preserveAspectRatio="none">
          <path d="M0,60 C360,120 1080,0 1440,60 L1440,0 L0,0 Z" fill="#fffde7" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 z-10 relative">
       
        <div>
          <h2 className="text-4xl font-extrabold mb-3 text-yellow-700">LaysLand 🍟</h2>
          <p className="text-sm text-gray-700">
            Where crunch meets fun. Dive into the world of flavors and fun-packed snacks.
          </p>
        </div>

        
        <div>
          <h3 className="font-semibold text-lg mb-4">Explore</h3>
          <ul className="space-y-2 text-sm text-gray-800">
            <li><Link to="/" className="hover:text-yellow-600">🏠 Home</Link></li>
            <li><Link to="/flavors" className="hover:text-yellow-600">🥔 Chip Varieties</Link></li>
            <li><Link to="/about" className="hover:text-yellow-600">📖 About Us</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-600">📬 Contact</Link></li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
          <div className="flex gap-5 text-2xl text-yellow-700">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              className="hover:text-pink-500 hover:scale-125 transition duration-300 ease-in-out">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
              className="hover:text-red-600 hover:scale-125 transition duration-300 ease-in-out">
              <FaYoutube />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
              className="hover:text-blue-400 hover:scale-125 transition duration-300 ease-in-out">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

    
      <div className="border-t mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} LaysLand. All rights reserved. Built with 💛 by Kamal.
      </div>


      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute right-5 bottom-5 bg-yellow-400 hover:bg-yellow-500 text-white p-3 rounded-full shadow-md transition-all duration-300"
        title="Back to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default FooterSection;
