import React from "react";

export default function TtsForm({ onClose }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">The Things Stack</h2>
      <p className="mb-2 text-sm text-gray-600">Connect The Things Stack to Blynk</p>

      <input
        type="text"
        placeholder="Enter App ID"
        className="w-full border p-2 rounded mb-3"
      />
      <input
        type="password"
        placeholder="Enter Access Key"
        className="w-full border p-2 rounded mb-4"
      />

      <div className="flex justify-between">
        <button className="bg-green-500 text-white px-4 py-2 rounded">Connect</button>
        <button onClick={onClose} className="text-gray-600 hover:underline">Close</button>
      </div>
    </div>
  );
}
