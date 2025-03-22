import { useState, useEffect } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { MdInfo } from "react-icons/md";

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
        <div className="absolute right-10 mt-[-200px]  bg-white px-4 py-[30px]  shadow-xl border border-gray-300 transition-all duration-300 w-[450px] z-100"
        style={{ opacity: showCongrats ? 1 : 0, transform: showCongrats ? 'translateY(0)' : 'translateY(-10px)', transition: 'opacity 0.3s ease, transform 0.3s ease' }}>
     <div className="flex items-center gap-3">
       <BsCheckCircle className="text-green-500 text-2xl mt-2" />
       <span className="text-lg font-semibold text-gray-800">Success!</span>
     </div>
     <p className="text-gray-600 mt-2 text-sm leading-relaxed ms-9">
       Now you can build your own IoT devices with ease.
     </p>
   </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="absolute w-[350px] ms-[-180px] mt-[-80px] bg-black bg-opacity-40 z-50">
          <div className="bg-white py-3 px-[12.5px] shadow-lg">
            <div className="ms-[10px] mt-[5px]">
              <p className="text-[14px] text-gray-600 mb-3 flex ]"><MdInfo size={18} className="text-orange-400 me-[10px] mt-[2px]"/>Disable Developer Mode?

</p>
          <p className="text-[14px] text-gray-600 mb-3 ms-[30px]">You will loose access to all developer features, but you will still have access to your devices</p>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="bg-green-100 px-3 py-1 text-green-400 rounded font-semibold text-[14px]"
              >
                Cancel
              </button>
              <button
                onClick={confirmDisableDeveloperMode}
                className="bg-green-400 text-black px-2 py-1 rounded font-semibold text-[14px]"
              >
                Disable Developer Mode
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeveloperModeToggle;
