// ChipDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { chipsData } from "../data/flavorData";
import { motion } from "framer-motion";

const ChipDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const chip = chipsData.find((item) => item.id === id);

  if (!chip) {
    return <div className="pt-20 text-center text-red-600">Chip not found</div>;
  }

  return (
    <motion.div
      className="pt-20 min-h-screen bg-yellow-100 flex items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="max-w-6xl flex flex-col md:flex-row items-center gap-10 p-8 rounded-xl shadow-2xl bg-yellow-100 border border-yellow-300 mx-4"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Image Left */}
        <img
          src={chip.img}
          alt={chip.name}
          className="w-72 h-auto object-contain hover:scale-105 transition-transform duration-300"
        />

        {/* Text Right */}
        <div className="flex flex-col gap-5 text-left">
          <h2 className="text-4xl font-extrabold text-yellow-600">{chip.name}</h2>
          <p className="text-gray-700 text-lg max-w-xl leading-relaxed">
            {chip.description} {chip.description} {chip.description} {chip.description}
          </p>

          <div className="flex gap-4 mt-4">
            <button
              onClick={() => navigate("/varieties")}
              className="px-5 py-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold transition"
            >
              🔙 Back to Varieties
            </button>
            <button className="px-6 py-2 rounded-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold transition">
              🛒 Buy Now
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ChipDetail;
