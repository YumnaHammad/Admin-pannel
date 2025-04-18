import React, { useState } from "react";
import IntegrationCard from "../Developerzone.jsx/IntegrationCard";
import BluesForm from "../../Dashboard/Developerzone.jsx/BluesForm";
import AwsForm from "../Developerzone.jsx/AwsForm";
import TtsForm from "../Developerzone.jsx/TtsForm";

const integrations = [
  {
    id: "blues",
    title: "Blues",
    description: "Connect Blues Project to Blynk",
    logo: "/images/blues.png",
  },
  {
    id: "aws",
    title: "AWS IoT Core",
    description: "Connect AWS to Blynk",
    logo: "/images/aws.png",
  },
  {
    id: "tts",
    title: "The Things Stack",
    description: "Connect TTS to Blynk",
    logo: "/images/tts.png",
  },
];

export default function Integrations() {
  const [selectedForm, setSelectedForm] = useState(null);

  const renderForm = () => {
    switch (selectedForm) {
      case "blues":
        return <BluesForm onClose={() => setSelectedForm(null)} />;
      case "aws":
        return <AwsForm onClose={() => setSelectedForm(null)} />;
      case "tts":
        return <TtsForm onClose={() => setSelectedForm(null)} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Integrations</h1>

      {selectedForm ? (
        renderForm()
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((item) => (
            <IntegrationCard
              key={item.id}
              title={item.title}
              description={item.description}
              logo={item.logo}
              onClick={() => setSelectedForm(item.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
