import { useState } from "react";

import { Dialog } from "@headlessui/react";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function UserProfileModal({ isOpen, setIsOpen }) {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "Yumna",
    email: "yumnahammad4884@gmail.com",
    role: "Admin",
    phone: "",
    zip: "",
    logoutInterval: "30 min",
  });

  const logoutOptions = ["10 min", "30 min", "1 hour", "2 hours"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(false); // Close only the modal
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <Dialog.Panel className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-lg">
          <Dialog.Title className="text-xl font-semibold">User Profile</Dialog.Title>

          <form onSubmit={handleSubmit} className="mt-4 space-y-3">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                disabled
                className="w-full px-3 py-2 border rounded-lg bg-gray-200 cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Role</label>
              <input
                type="text"
                name="role"
                value={formData.role}
                disabled
                className="w-full px-3 py-2 border rounded-lg bg-gray-200 cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="+1 (222) 333-4455"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Zip Code</label>
              <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="12345"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Logout Interval</label>
              <select
                name="logoutInterval"
                value={formData.logoutInterval}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
              >
                {logoutOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-3 mt-4">
              <button
                type="button"
                className="px-4 py-2 bg-gray-300 rounded-lg"
                onClick={() => setIsOpen(false)} // Close only the modal
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-lg"
              >
                Save
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </Dialog>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed bottom-10 right-10 bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 shadow-lg">
          <AiOutlineCheckCircle size={20} />
          <span>Changes Saved Successfully!</span>
        </div>
      )}
    </>
  );
}
