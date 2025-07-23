

import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out',
    });
  }, []);

  const onSubmit = (data) => {
    console.log('Login Data:', data);
    navigate('/');
  };

  return (
    <div id ="home" className="min-h-screen bg-yellow-100 flex items-center justify-center px-4">
      <div
        ref={containerRef}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-yellow-800 mb-6 text-center">Welcome Back 👋</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-yellow-700">
          Don't have an account?{" "}
          <span onClick={() => navigate('/signup')} className="text-yellow-800 underline cursor-pointer">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
