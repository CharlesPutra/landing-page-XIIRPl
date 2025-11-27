"use client";
import { useState } from "react";

export default function FlipCardPiket({ front, back }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-72 h-48 perspective"
      onClick={() => setIsFlipped(!isFlipped)} // <-- tap/klik mobile
    >
      <div
        className={`
          relative w-full h-full duration-500 transform-style preserve-3d
          cursor-pointer ${isFlipped ? "rotate-y-180" : ""}
          lg:hover:rotate-y-180
        `} // <-- hover untuk desktop
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden bg-yellow-400 text-blue-900 rounded-xl shadow-lg flex items-center justify-center text-2xl font-bold">
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

