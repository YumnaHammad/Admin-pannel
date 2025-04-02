import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function UserProfileModal({ isOpen, setIsOpen }) {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Admin",
    phone: "",
    zip: "",
    logoutInterval: "30 min",
  });

  const logoutOptions = ["10 min", "30 min", "1 hour", "2 hours"];

  // Fetch current user data when modal opens
  useEffect(() => {
    if (isOpen) {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser) {
        setFormData((prevData) => ({
          ...prevData,
          name: storedUser.name || "",
          email: storedUser.email || "",
        }));
      }
    }
  }, [isOpen]); // Runs when modal opens

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(false);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <Dialog.Panel className="bg-white rounded-[5px] p-6 w-[90%] max-w-md shadow-lg">
          <Dialog.Title className="text-2xl font-bold text-center text-[#00667C] dark:text-blue-400">User Profile</Dialog.Title>

          <form onSubmit={handleSubmit} className="mt-4 space-y-3">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                disabled
className="w-full px-3 py-2 border rounded-lg bg-gray-200 cursor-not-allowed"
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
                onClick={() => setIsOpen(false)}
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
