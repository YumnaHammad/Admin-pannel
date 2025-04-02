import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import DeveloperModeToggle from "./DeveloperModeToggle";
import { useDeveloperMode } from "../Siderbar/useDeveloperMode";

const EditProfileModal = ({ isOpen, setIsOpen }) => {
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    role: "",
    lastLogin: "",
    registrationDate: "",
    country: "",
    timezone: "",
    locale: "",
  });

  const { developerMode, setDeveloperMode } = useDeveloperMode();

  useEffect(() => {
    if (isOpen) {
      const storedUser = JSON.parse(localStorage.getItem("user")) || {};
      setProfileData({
        name: storedUser.name || "John Doe",
        email: storedUser.email || "johndoe@example.com",
        role: storedUser.role || "Admin",
        lastLogin: storedUser.lastLogin || "N/A",
        registrationDate: storedUser.registrationDate || "N/A",
        country: storedUser.country || "Unknown",
        timezone: storedUser.timezone || "Unknown",
        locale: storedUser.locale || "Unknown",
      });
    }
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 flex justify-end transition-all ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      } bg-black bg-opacity-50  z-50`}
      onClick={() => setIsOpen(false)}
    >
      {/* Right Sidebar Modal */}
      <div
        className={`bg-white dark:bg-gray-800 w-96 h-full shadow-lg p-6 transform transition-all ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full p-2 transition"
          onClick={() => setIsOpen(false)}
        >
          <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>

        {/* Styled Heading */}
        <h2 className="text-2xl font-bold text-center text-[#00667C] dark:text-blue-400  py-10">
         Your Profile
        </h2>

        {/* Profile Info */}
        <div className="space-y-3 text-gray-700 dark:text-gray-300">
          <ProfileField label="👤 Name" value={profileData.name} />
          <ProfileField label="📧 Email" value={profileData.email} />
          <ProfileField label="🔰 Role" value={profileData.role} />
          <ProfileField label="📅 Last Login" value={profileData.lastLogin} />
          <ProfileField label="🗓 Registration Date" value={profileData.registrationDate} />
          <ProfileField label="🌍 Country" value={profileData.country} />
          <ProfileField label="⏳ Timezone" value={profileData.timezone} />
          <ProfileField label="🌐 Locale" value={profileData.locale} />
        </div>

        {/* Developer Mode Toggle */}
        <div className="flex justify-center mt-6">
          <DeveloperModeToggle developerMode={developerMode} setDeveloperMode={setDeveloperMode} />
        </div>
      </div>
    </div>
  );
};

// Reusable Profile Field Component
const ProfileField = ({ label, value }) => (
  <div className="flex justify-between bg-gray-100 dark:bg-gray-700 p-2 rounded-md shadow-sm">
    <span className="text-sm font-semibold">{label}</span>
    <span className="text-sm">{value}</span>
  </div>
);

export default EditProfileModal;
