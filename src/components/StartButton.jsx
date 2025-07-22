import React from "react";

const StartButton = ({ onClick }) => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-yellow-100">
      <button
        className="px-6 py-3 text-xl font-bold bg-yellow-400 text-white rounded-lg shadow-lg hover:bg-yellow-500 transition-all"
        onClick={onClick}
      >
        Start Experience
      </button>
    </div>
  );
};

export default StartButton;
