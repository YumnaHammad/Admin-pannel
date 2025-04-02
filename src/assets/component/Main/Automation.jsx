import React from "react";
import { Clock, Tablet, Sun, Bell, Play } from "lucide-react";

function Automation() {
  const handleClick = (label) => {
    if (label === "Device State" || label === "Event") return;
    alert(`${label} clicked!`);
  };

  const options = [
    { label: "Schedule", description: "Automation will start at a specific time of day", icon: <Clock size={30} />, disabled: false },
    { label: "Device State", description: "Trigger automation by a certain state of the device", icon: <Tablet size={30} />, disabled: true },
    { label: "Sunset/Sunrise", description: "Automation will start based on the sun", icon: <Sun size={30} />, disabled: false },
    { label: "Event", description: "Trigger automation when a certain event is logged on selected devices", icon: <Bell size={45} />, disabled: true  },
    { label: "Scene", description: "Trigger automation manually", icon: <Play size={23} />, disabled: false },
  ];

  return (
    <>
      <div className="flex items-center justify-center h-[530px] bg-white rounded-[5px] text-center">
        <div className="p-6 max-w-xl mx-auto">
          <h2 className="text-2xl font-bold">Create Automations</h2>
          <p className="text-gray-600 mb-4">Automations let you set up actions that start when a certain trigger happens.</p>
          <div className="grid grid-cols-2 gap-4">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleClick(option.label)}
                disabled={option.disabled}
                className={`flex items-center gap-2 p-4 border rounded-lg text-left ${
                  option.disabled ? "bg-gray-300 cursor-not-allowed" : "bg-white hover:bg-gray-100"
                }`}
              >
                {option.icon}
                <div className="ms-2">
                  <h3 className="font-semibold">{option.label}</h3>
                  <p className="text-sm text-gray-600 ">{option.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Automation;