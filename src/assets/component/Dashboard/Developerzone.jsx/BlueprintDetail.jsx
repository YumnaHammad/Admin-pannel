import React, { useState } from "react";

export default function BlueprintDetail({ blueprint, onBack }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  return (
    <div className="relative min-h-screen bg-white p-6 overflow-y-auto">
      <button onClick={onBack} className="mb-4 text-blue-600 hover:underline">
        ← Back to Blueprints
      </button>

      <h1 className="text-3xl font-bold mb-4">{blueprint.title}</h1>

      {/* Main HD Image */}
      <img
        src={blueprint.image}
        alt={blueprint.title}
        className="w-full max-h-[500px] object-cover rounded-xl shadow mb-6"
      />

      {/* Description */}
      <p className="text-gray-700 mb-6">{blueprint.description}</p>

      {/* Related Images Grid */}
      <h2 className="text-xl font-semibold mb-2">Related Images</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {blueprint.relatedImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Related ${i}`}
            className="rounded-lg cursor-pointer hover:scale-105 transition-transform"
            onClick={() => handleImageClick(img)}
          />
        ))}
      </div>

      {/* Modal Slider Overlay */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 backdrop-blur-md flex items-center justify-center">
          <button
            className="absolute top-6 right-6 text-white text-2xl z-50"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
          <img
            src={selectedImage}
            alt="Zoom"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl"
          />
        </div>
      )}
    </div>
  );
}
