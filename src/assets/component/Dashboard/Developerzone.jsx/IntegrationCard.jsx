import React from "react";

export default function IntegrationCard({ title, description, logo, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white p-4 rounded-lg shadow hover:shadow-md transition"
    >
      <img src={logo} alt={title} className="w-12 h-12 mb-2" />
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
}
