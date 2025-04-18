import React from "react";

export default function BluesForm({ onClose }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md mx-auto border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Blues</h2>
      <p className="text-sm text-gray-500 mb-6">Connect Blues Project to Blynk</p>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Client ID</label>
        <input
          type="text"
          placeholder="Enter Client ID"
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">Client Secret</label>
        <input
          type="password"
          placeholder="Enter Client Secret"
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex justify-end space-x-3">
        <button
          onClick={onClose}
          className="text-sm text-gray-600 hover:text-gray-900 hover:underline"
        >
          Cancel
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
          Connect
        </button>
      </div>
    </div>
  );
}
