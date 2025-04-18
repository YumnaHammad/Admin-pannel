// BlueprintCard.jsx
import React, { useState } from "react";

export default function BlueprintCard({ title, image, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative h-64 rounded-xl overflow-hidden shadow-lg cursor-pointer group"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={image}
        alt={title}
        className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105`}
      />
      <div className={`absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`} />
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className={`text-white text-xl font-semibold transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}>
          Open "{title}"
        </h2>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 px-4 py-2">
        <p className="text-white text-sm">{title}</p>
      </div>
    </div>
  );
}
