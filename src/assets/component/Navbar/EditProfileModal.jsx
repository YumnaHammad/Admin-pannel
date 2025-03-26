import React, { useState } from "react";
import { X } from "lucide-react";

const EditProfileModal = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  const [name, setName] = useState("Yumna Hammad");
  const [email, setEmail] = useState("yumnahammad4884@gmail.com");
  const [role, setRole] = useState("Admin");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, role });
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 flex justify-end bg-black bg-opacity-30 z-50">
      <div className="bg-white dark:bg-gray-800 w-96 h-full shadow-lg p-6">
        <button className="absolute top-4 right-4" onClick={() => setIsOpen(false)}>
          <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </button>

        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Edit Profile</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 p-2 border rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-2 border rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">Role</label>
            <input
              type="text"
              value={role}
              disabled
              className="w-full mt-1 p-2 border rounded-md bg-gray-200 dark:bg-gray-600 dark:text-white cursor-not-allowed"
            />
          </div>

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
