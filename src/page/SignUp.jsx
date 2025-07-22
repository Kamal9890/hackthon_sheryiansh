// src/pages/auth/Signup.jsx
import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 60,
      duration: 1.2,
      ease: 'power2.out',
    });
  }, []);

  const onSubmit = (data) => {
    console.log('Signup Data:', data);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center px-4">
      <div
        ref={containerRef}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-yellow-800 mb-6 text-center">Create Your Account 🥔</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-yellow-900 mb-1">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full border border-yellow-300 px-4 py-2 rounded-lg focus:outline-yellow-500"
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-yellow-900 mb-1">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full border border-yellow-300 px-4 py-2 rounded-lg focus:outline-yellow-500"
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-yellow-900 mb-1">Password</label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="w-full border border-yellow-300 px-4 py-2 rounded-lg focus:outline-yellow-500"
            />
            {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>}
          </div>

          <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded-lg transition-all duration-300">
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-yellow-700">
          Already have an account?{" "}
          <span onClick={() => navigate('/login')} className="text-yellow-800 underline cursor-pointer">
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
