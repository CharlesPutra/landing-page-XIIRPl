"use client";
import { useState } from "react";

export default function FlipCard({ front, back }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-72 h-48 perspective"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full duration-500 transform-style-preserve-3d cursor-pointer ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden bg-blue-500 text-white rounded-xl shadow-lg flex items-center justify-center text-2xl font-bold">
          {front}
        </div>

        {/* Back */}
        <div className="absolute w-full h-full rotate-y-180 backface-hidden bg-white text-gray-800 rounded-xl shadow-lg p-4 flex flex-col justify-center">
          {back}
        </div>
      </div>
    </div>
  );
}
