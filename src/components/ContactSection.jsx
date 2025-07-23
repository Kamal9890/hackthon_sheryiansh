import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const inputRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    inputRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2 + i * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-gradient-to-r from-yellow-100 to-yellow-100 py-24 px-6 overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="space-y-6">
          <h2 className="text-5xl font-extrabold text-yellow-700 leading-tight">
            Let’s Crunch Some Ideas!
          </h2>
          <p className="text-gray-700 text-lg">
            Whether you want to give feedback, collab, or just say hi — we’re
            all ears. Just drop your details and we’ll get back faster than you
            can open a chips pack. 😄
          </p>
        </div>

        {/* Right Side Form */}
        <form
          ref={formRef}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Crunch sent! 🍟 We'll get back to you soon.");
          }}
          className="bg-white rounded-3xl shadow-xl p-8 space-y-6"
        >
          {["Name", "Email", "Message"].map((label, i) => (
            <div key={label}>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                {label}
              </label>
              {label !== "Message" ? (
                <input
                  type={label === "Email" ? "email" : "text"}
                  placeholder={label === "Email" ? "you@lays.com" : "Your Name"}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                  required
                  ref={(el) => (inputRefs.current[i] = el)}
                />
              ) : (
                <textarea
                  placeholder="Type your message..."
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                  required
                  ref={(el) => (inputRefs.current[i] = el)}
                ></textarea>
              )}
            </div>
          ))}

          <button
            type="submit"
            className="relative overflow-hidden bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-lg transition-all duration-300 w-full glow-button"
          >
            <span className="z-10 relative">Send Crunch 💌</span>
            <span className="absolute inset-0 bg-yellow-400 opacity-0 hover:opacity-20 transition-opacity duration-500 rounded-lg pointer-events-none"></span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
