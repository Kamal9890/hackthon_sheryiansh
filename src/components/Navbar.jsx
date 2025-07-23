import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { Menu, X } from 'lucide-react';
import laysLogo from '../assets/laysLogo.png';

const Navbar = () => {
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    

    gsap.to(logoRef.current, {
      rotate: 360,
      duration: 20,
      repeat: -1,
      ease: 'linear',
    });

  
    gsap.fromTo(
      navRef.current,
      { y: -40, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 1, ease: 'power3.out' }
    );
  }, []);

  const navItems = [
    { label: 'Home', type: 'scroll', id: 'home' },
    { label: 'Flavors', type: 'scroll', id: 'flavors' },
    { label: 'About', type: 'scroll', id: 'about' },
    { label: 'Contact', type: 'scroll', id: 'contact' },
    { label: 'Login', type: 'route', path: '/login' },
    { label: 'Sign Up', type: 'route', path: '/signup' },
  ];

  const handleScrollOrNavigate = (item) => {
    if (item.type === 'scroll') {
      if (location.pathname !== '/') {
       
       navigate('/', { replace: false, state: { scrollToId: item.id } });
      } else {
        const el = document.getElementById(item.id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(item.path);
    }
  };

  return (
    <nav
      ref={navRef}
      role="navigation"
      aria-label="Main Navigation"
      className="fixed top-0 left-0 w-full z-[9999] bg-gradient-to-r from-yellow-100 to-yellow-50 shadow-md px-4 md:px-8 py-3"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
       
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
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

       
        <ul className="hidden md:flex gap-8 text-yellow-900 font-medium text-base md:text-lg">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="cursor-pointer hover:text-yellow-600 transition duration-300"
              onClick={() => handleScrollOrNavigate(item)}
            >
              {item.label}
            </li>
          ))}
        </ul>

       
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

     
      <div
        className={`md:hidden fixed top-[60px] left-0 w-full bg-yellow-100 transition-all duration-300 ease-in-out z-[9998] ${
          mobileOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
        }`}
      >
        <ul className="flex flex-col items-center gap-5 py-6 text-yellow-900 font-medium text-lg">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="cursor-pointer hover:text-yellow-600"
              onClick={() => {
                handleScrollOrNavigate(item);
                setMobileOpen(false);
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
