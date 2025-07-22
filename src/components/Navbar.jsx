import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { Menu, X } from 'lucide-react';
import laysLogo from '../assets/laysLogo.png';

const Navbar = () => {
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Infinite logo rotation
    gsap.to(logoRef.current, {
      rotate: 360,
      duration: 20,
      repeat: -1,
      ease: 'linear',
    });

    // Navbar fade and slide animation
    gsap.fromTo(
      navRef.current,
      { y: -40, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 1, ease: 'power3.out' }
    );
  }, []);

  const navItems = [
    { label: 'Home', type: 'scroll' },
    { label: 'Flavors', type: 'scroll' },
    { label: 'About', type: 'scroll' },
    { label: 'Contact', type: 'scroll' },
    { label: 'Login', type: 'route', path: '/login' },
    { label: 'Sign Up', type: 'route', path: '/signup' },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      ref={navRef}
      role="navigation"
      aria-label="Main Navigation"
      className="fixed top-0 left-0 w-full z-[9999] bg-gradient-to-r from-yellow-100 to-yellow-50 shadow-md px-4 md:px-8 py-3"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            ref={logoRef}
            src={laysLogo}
            alt="Lays Logo"
            className="w-10 h-10 md:w-14 md:h-14 drop-shadow-[0_0_10px_rgba(255,255,0,0.7)]"
          />
          <span className="text-yellow-800 font-extrabold text-xl md:text-2xl tracking-wide">
            Lays World
          </span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-yellow-900 font-medium text-base md:text-lg">
          {navItems.map((item) =>
            item.type === 'scroll' ? (
              <li
                key={item.label}
                className="cursor-pointer hover:text-yellow-600 transition duration-300"
                onClick={() => scrollToSection(item.label)}
              >
                {item.label}
              </li>
            ) : (
              <li
                key={item.label}
                className="cursor-pointer hover:text-yellow-600 transition duration-300"
                onClick={() => navigate(item.path)}
              >
                {item.label}
              </li>
            )
          )}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-[60]">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="text-yellow-800"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide Nav */}
      <div
        className={`md:hidden fixed top-[60px] left-0 w-full bg-yellow-100 transition-all duration-300 ease-in-out z-[9998] ${
          mobileOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
        }`}
      >
        <ul className="flex flex-col items-center gap-5 py-6 text-yellow-900 font-medium text-lg">
          {navItems.map((item) =>
            item.type === 'scroll' ? (
              <li
                key={item.label}
                className="cursor-pointer hover:text-yellow-600"
                onClick={() => {
                  scrollToSection(item.label);
                  setMobileOpen(false);
                }}
              >
                {item.label}
              </li>
            ) : (
              <li
                key={item.label}
                className="cursor-pointer hover:text-yellow-600"
                onClick={() => {
                  navigate(item.path);
                  setMobileOpen(false);
                }}
              >
                {item.label}
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
