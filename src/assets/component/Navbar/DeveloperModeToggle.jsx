import { useState, useEffect } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { MdInfo } from "react-icons/md";

const DeveloperModeToggle = ({ setDeveloperMode }) => {
  const [developerMode, setLocalDeveloperMode] = useState(() => {
    return localStorage.getItem("developerMode") !== "false";
  });

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    localStorage.setItem("developerMode", developerMode);
    setDeveloperMode(developerMode);
  }, [developerMode, setDeveloperMode]);

  const handleToggleDeveloperMode = () => {
    if (!developerMode) {
      setLocalDeveloperMode(true);
      setShowCongrats(true);
      setTimeout(() => setShowCongrats(false), 3000);
    } else {
      setShowConfirmModal(true);
    }
  };

  const confirmDisableDeveloperMode = () => {
    setLocalDeveloperMode(false);
    setShowConfirmModal(false);
  };

  return (
    <>
      <div
        className="relative flex justify-between items-center py-2"
        onMouseEnter={() => !developerMode && setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <span className="cursor-pointer">Developer Mode</span>

        {/* Toggle Button */}
        <div
          className={`relative w-8 h-4 flex items-center rounded-full p-1 transition cursor-pointer ${
            developerMode ? "bg-green-500" : "bg-gray-300"
          }`}
          onClick={handleToggleDeveloperMode}
        >
          <div
            className={`w-3 h-3 bg-white rounded-full shadow-md transform transition ${
              developerMode ? "translate-x-3.5" : "translate-x-0"
            }`}
          ></div>
        </div>

        {/* Tooltip - Better positioning */}
        {showTooltip && !developerMode && (
          <div className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 w-[250px] text-[16px] bg-white text-black rounded px-4 py-2 shadow-md border border-gray-300">
            Want to create your own IoT templates with Blynk?
            Turn it on and follow guides on{" "}
            <span className="text-blue-500">blynk.io/en/developers</span>
          </div>
        )}
      </div>

      {/* Success Message */}
      {showCongrats && (
        <div
          className="absolute right-10 mt-[-200px] bg-white px-4 py-4 shadow-xl border border-gray-300 transition-all duration-300 w-[450px] z-50"
          style={{
            opacity: showCongrats ? 1 : 0,
            transform: showCongrats ? "translateY(0)" : "translateY(-10px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          <div className="flex items-center gap-3">
            <BsCheckCircle className="text-green-500 text-2xl" />
            <span className="text-lg font-semibold text-gray-800">Success!</span>
          </div>
          <p className="text-gray-600 mt-2 text-sm leading-relaxed ms-9">
            Now you can build your own IoT devices with ease.
          </p>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white py-3 px-4 shadow-lg rounded-lg w-[350px]">
            <div className="flex items-center gap-2">
              <MdInfo size={18} className="text-orange-400" />
              <p className="text-gray-700 text-sm font-medium">Disable Developer Mode?</p>
            </div>
            <p className="text-gray-600 mt-2 text-sm ms-6">
              You will lose access to all developer features, but you will still have access to your devices.
            </p>
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="bg-gray-200 px-3 py-1 rounded font-semibold text-sm text-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={confirmDisableDeveloperMode}
                className="bg-red-500 text-white px-3 py-1 rounded font-semibold text-sm"
              >
                Disable
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeveloperModeToggle;
