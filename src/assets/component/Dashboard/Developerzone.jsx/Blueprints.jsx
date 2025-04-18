import React, { useState } from "react";
import BlueprintCard from "./BlueprintCard";
import BlueprintDetail from "./BlueprintDetail";
import cover15 from "../../../img/cover15.png"

// Extended blueprint data
const blueprints = [
  {
    id: 1,
    title: "Smart Garden",
    image: cover15,
    
    description: "An automated smart garden system...",
  },
  {
    id: 2,
    title: "IoT Lighting",
     image: cover15,

    description: "A home automation blueprint using IoT to manage lighting systems via mobile apps and sensors.",
  },
];

export default function Blueprints() {
  const [selectedBlueprint, setSelectedBlueprint] = useState(null);

  const handleCardClick = (blueprint) => {
    setSelectedBlueprint(blueprint);
  };

  const handleBack = () => {
    setSelectedBlueprint(null);
  };

  if (selectedBlueprint) {
    return <BlueprintDetail blueprint={selectedBlueprint} onBack={handleBack} />;
  }

  return (
    <div className="min-h-screen  p-8">
      <h1 className="text-3xl font-bold mb-6">Blueprints</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blueprints.map((bp) => (
          <BlueprintCard
            key={bp.id}
            title={bp.title}
            image={bp.image}
            onClick={() => handleCardClick(bp)}
          />
        ))}
      </div>
    </div>
  );
}
