import React, { useState } from "react";
import { Search, Plus, X, FileCode } from "lucide-react";
import { useNavigate } from "react-router-dom";

const templatesData = [
  { name: "Yumna", devices: "1 Device", hardware: "ESP32", connection: "WiFi", description: "Main template" },
  { name: "YumnaCopy", devices: "No devices", hardware: "ESP8266", connection: "WiFi", description: "Backup template" },
];

export default function Templates() {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize navigation

  const filteredTemplates = templatesData.filter((template) =>
    template.name.toLowerCase().includes(search.toLowerCase())
  );

  // Navigate to /info with selected template details

  const handleSubmit = () => {
    if (!name.trim()) {
      setError("Field is required");
      return;
    }
    setError("");
    setShowModal(false);
  
    // Navigate to the new route with template details
    navigate("/Adminpanel/developerzone/my-templates/info", {
      state: {
        name,
        description,
        hardware: "ESP32",  // Assuming hardcoded value, or you can get it dynamically
        connection: "WiFi",  // Same for connection type
      },
    });
  };
  

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Templates</h1>
        <button
          className="flex items-center gap-1 bg-[#00667C] text-white text-xs px-3 py-1.5 rounded-md shadow hover:bg-[#00657c71]"
          onClick={() => setShowModal(true)}
        >
          <Plus size={14} /> New Template
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search Templates"
          className="w-full p-1 pl-8 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00667C]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search className="absolute left-2 top-3 text-gray-500" size={14} />
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-4 gap-3">
        {filteredTemplates.length > 0 ? (
          filteredTemplates.map((template, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-sm overflow-hidden text-sm cursor-pointer"
              onClick={() => handleTemplateClick(template)}
            >
              <div className="flex justify-center items-center h-40 bg-gray-100">
                <div className="w-10 h-10 text-[#00667C]">
                  <FileCode />
                </div>
              </div>
              <div className="bg-[#00667C] text-white px-2 py-1">
                <p className="font-medium">{template.name}</p>
                <p className="text-xs">{template.devices}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm col-span-2">No templates found.</p>
        )}
      </div>

      {/* Modal (Create New Template Form) */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[100]">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Create New Template</h3>
              <button onClick={() => setShowModal(false)}>
                <X size={18} />
              </button>
            </div>

            {/* Name Field */}
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              className={`w-full p-2 border rounded-md ${error ? "border-red-500" : "border-gray-300"}`}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}

            {/* Hardware & Connection Type */}
            <div className="flex gap-2 mt-3">
              <div className="w-1/2">
                <label className="block text-sm font-medium">Hardware</label>
                <select className="w-full p-2 border rounded-md">
                  <option>ESP32</option>
                  <option>ESP8266</option>
                </select>
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium">Connection Type</label>
                <input type="text" value="WiFi" readOnly className="w-full p-2 border rounded-md bg-gray-100" />
              </div>
            </div>

            {/* Description Field */}
            <label className="block text-sm font-medium mt-3">Description</label>
            <textarea
              className="w-full p-2 border rounded-md"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="2"
              placeholder="Description"
            />

            {/* Buttons */}
            <div className="flex justify-end gap-2 mt-4">
              <button
                className="px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded-md"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 text-sm text-white bg-[#00667C] rounded-md hover:bg-[#00657c71]"
                onClick={handleSubmit}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
