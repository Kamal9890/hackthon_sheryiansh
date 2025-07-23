import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'Riya Mehta',
    text: 'I can’t stop eating Magic Masala — it’s literally addictive!',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Aditya Singh',
    text: 'Cream & Onion is my go-to binge snack. Crunch is perfection!',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Tanvi Sharma',
    text: 'BBQ Blast has such a smoky bold flavor — loved every bite!',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'Karan Patel',
    text: 'Tangy Tomato is a burst of nostalgia in every chip. Love it!',
    img: 'https://randomuser.me/api/portraits/men/55.jpg',
  },
  {
    name: 'Sneha Roy',
    text: 'The crunch, the flavor, the vibe — Lays never disappoints!',
    img: 'https://randomuser.me/api/portraits/women/21.jpg',
  },
  {
    name: 'Aman Verma',
    text: 'I munch on Lays daily — it’s my snack-time ritual now!',
    img: 'https://randomuser.me/api/portraits/men/90.jpg',
  },
  {
    name: 'Nisha Kapoor',
    text: 'Love how crispy and fresh each bite feels. Total win!',
    img: 'https://randomuser.me/api/portraits/women/30.jpg',
  },
  {
    name: 'Rohit Sharma',
    text: 'Every new Lays flavor blows my mind. Waiting for more!',
    img: 'https://randomuser.me/api/portraits/men/77.jpg',
  },
];

const TestimonialSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.batch('.testimonial-card', {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.9,
          ease: 'power2.out',
        }),
      start: 'top 90%',
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-yellow-100 px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-yellow-800 text-center mb-12">
        What Crunch Lovers Say
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        grabCursor={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto cursor-grab"
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="testimonial-card bg-white p-8 rounded-3xl shadow-xl text-center opacity-0 transform translate-y-10 hover:scale-105 transition-all duration-300">
              <img
                src={item.img}
                alt={item.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-gray-700 mb-3">"{item.text}"</p>
              <h4 className="text-yellow-800 font-semibold">{item.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialSection;
