import { useState, useEffect } from "react";
import { BsCheckCircle } from "react-icons/bs";

const DeveloperModeToggle = ({ setDeveloperMode }) => {
  const [developerMode, setLocalDeveloperMode] = useState(() => {
    return localStorage.getItem("developerMode") === "false" ? false : true;
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
        {/* Developer Mode Text */}
        <span className="cursor-pointer">Developer Mode</span>

        {/* Toggle Button */}
        <div
          className={`relative w-12 h-6 flex items-center rounded-full p-1 transition cursor-pointer ${
            developerMode ? "bg-green-500" : "bg-gray-300"
          }`}
          onClick={handleToggleDeveloperMode}
        >
          <div
            className={`w-5 h-5 bg-white rounded-full shadow-md transform transition ${
              developerMode ? "translate-x-6" : "translate-x-0"
            }`}
          ></div>
        </div>

        {/* Tooltip - Only One, Positioned on the Left Outside the Dropdown */}
        {showTooltip && !developerMode && (
          <div className="absolute left-[-275px] top-1/2 transform -translate-y-1/2 w-[250px] text-[16px] bg-white text-black rounded px-4 py-2 shadow-md border border-gray-300">
           Want to create your own IoT templates with Blynk?
           Turn it on and follow guides on <span className="text-blue-500">blynk.io/en/developers</span>
          </div>
        )}
      </div>

      {/* Congratulations Message */}
      {showCongrats && (
        <div className="absolute right-10 mt-[-100px]  bg-white p-4  shadow-xl border border-gray-300 transition-all duration-300 w-[450px] z-100"
        style={{ opacity: showCongrats ? 1 : 0, transform: showCongrats ? 'translateY(0)' : 'translateY(-10px)', transition: 'opacity 0.3s ease, transform 0.3s ease' }}>
     <div className="flex items-center gap-3">
       <BsCheckCircle className="text-green-500 text-2xl" />
       <span className="text-lg font-semibold text-gray-800">Success!</span>
     </div>
     <p className="text-gray-600 mt-2 text-sm leading-relaxed">
       Now you can build your own IoT devices with ease.
     </p>
   </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <p className="text-gray-800 mb-4">
              Are you sure you want to disable Developer Mode? You will lose access to all developer features.
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="bg-gray-300 px-3 py-1 rounded"
              >
                Cancel
              </button>
              <button
                onClick={confirmDisableDeveloperMode}
                className="bg-red-500 text-white px-3 py-1 rounded"
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
