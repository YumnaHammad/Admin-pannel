import React from 'react'
import { useState } from "react";
import { IoIosInformationCircle } from "react-icons/io";
const Info = ({ onClose }) => {

  const [isOpen] = useState(false); 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 z-20">

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white p-6 w-[400px] rounded-lg shadow-lg">
            {/* Close Button */}
            <button
               onClick={onClose}
              className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full p-2"
            >
              ❌
            </button>

            {/* Popup Content */}
            <h2 className="text-xl font-bold">Basic App Widgets</h2>
            <ul className="mt-2 text-gray-600 list-disc pl-5">
              <li>Button</li>
              <li>Styled Button</li>
              <li>Icon Button</li>
              <li>Image Button</li>
              <li>Sliders: Vertical and Horizontal</li>
              <li>Step Sliders: Vertical and Horizontal</li>
              <li>Joystick</li>
              <li>ZeRGBa</li>
              <li>RGB Lights Control</li>
              <li>Step Control</li>
              <li>Slope Control</li>
              <li>Switch</li>
            </ul>

            {/* Close Button Below */}
            <button
            onClick={onClose}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Info