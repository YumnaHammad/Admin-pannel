import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsGear } from "react-icons/bs";
import { User } from "lucide-react";
import { VscSignOut } from "react-icons/vsc";
import * as Tooltip from "@radix-ui/react-tooltip";
import DeveloperModeToggle from "./DeveloperModeToggle";
import { useDeveloperMode } from "../Siderbar/useDeveloperMode";
import ThemeToggle from "./ThemeToggle";
import { useUserProfile } from "./UserProfileContext";
import UserProfileModal from "./UserProfileModal";
import EditProfileModal from "./EditProfileModal";
import Upgrade from "../Setting/Upgrade";

const countries = [
  { name: "USA", flag: "https://flagcdn.com/w40/us.png" },
  { name: "English", flag: "https://flagcdn.com/w40/gb.png" },
  { name: "Deutsch", flag: "https://flagcdn.com/w40/de.png" },
  { name: "Українська", flag: "https://flagcdn.com/w40/ua.png" },
  { name: "Français", flag: "https://flagcdn.com/w40/fr.png" },
  { name: "Portuguese", flag: "https://flagcdn.com/w40/pt.png" },
];

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocale, setSelectedLocale] = useState("USA");
  const { developerMode, setDeveloperMode } = useDeveloperMode();
  const navigate = useNavigate();
  const { profileOpen, setProfileOpen } = useUserProfile();
  const [editprofileOpen, editsetProfileOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [userInitial, setUserInitial] = useState("");
  const [isUpgradeOpen, setIsUpgradeOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    
  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/Adminpanel/login", { replace: true });
  };
  useEffect(() => {
    const updateUser = () => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
  
      if (storedUser) {
        setUser(storedUser);
        setUserInitial(storedUser.name ? storedUser.name.charAt(0).toUpperCase() : "U"); // Default to 'U' if name missing
      }
    };
  
    // Listen for user updates from storage
    window.addEventListener("storage", updateUser);
  
    // Run once on mount
    updateUser();
  
    return () => window.removeEventListener("storage", updateUser);
  }, []);
  
  useEffect(() => {
    if (isSettingsOpen) setIsOpen(false);
  }, [isSettingsOpen]);

  // Toggle Settings & Close Dropdown
  const handleSettingsClick = () => {
    setIsSettingsOpen(true);
    setIsOpen(false);
    navigate("/Adminpanel/setting/billing");
  };
  return (
    <>
      {/* User Button */}
      <button onClick={() => setIsOpen((prev) => !prev)}>
        <User className="w-8 h-8 text-white bg-orange-400 rounded-full p-1 cursor-pointer mx-2" />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <>
          {/* Background Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Dropdown Menu */}
          <div
            className="fixed top-16 right-4 w-64 bg-white shadow-lg rounded-lg p-4 z-50 dark:bg-gray-700 text-lightText dark:text-darkText"
            onClick={(e) => e.stopPropagation()}
          >
            {/* User Info */}
            <div className="flex border-b pb-2 mb-2 justify-between">
              <div className="flex" onClick={() => editsetProfileOpen(true)}>
                <Tooltip.Provider delayDuration={0}>
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <div className="w-10 h-10 bg-[#00667C] rounded-full flex items-center justify-center text-white text-lg font-bold cursor-pointer">
                        {userInitial}
                      </div>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        className="text-black bg-white p-2 rounded text-sm shadow-lg z-50"
                        side="left"
                        sideOffset={20}
                      >
                        User Profile
                        <Tooltip.Arrow className="fill-white" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </Tooltip.Provider>

                <div className="ml-3">
                  <p className=" font-semibold">{user.name}</p>{" "}
                  {/* Show Name */}
                  {user ? (
                    <p className="text-gray-600 text-[14px]">{user.email}</p>
                  ) : (
                    <p>Guest</p>
                  )}
                </div>

                {/* Settings Button */}
              </div>
              {/* Updated modal file name */}
              <EditProfileModal
                isOpen={editprofileOpen}
                setIsOpen={editsetProfileOpen}
              />
              <div>
                <Tooltip.Provider delayDuration={0}>
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <BsGear
                        className="mt-3 mr-2 dark:text-gray-200 text-gray-600 cursor-pointer "
                        size={18}
                        onClick={(e) => {
                          e.stopPropagation();
                          setProfileOpen(true);
                        }}
                      />
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        className="text-black bg-white p-2 rounded text-sm shadow-lg z-50"
                        side="bottom"
                        sideOffset={7}
                      >
                        Settings
                        <Tooltip.Arrow className="fill-white" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </Tooltip.Provider>
              </div>
            </div>

            {/* Locale Selection */}
            <div className="flex justify-between items-center py-2 relative">
              <Tooltip.Provider delayDuration={0}>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <span className="cursor-pointer">Locale</span>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content
                      className="bg-white shadow-lg rounded-lg px-3 py-4 text-sm text-black w-[180px] z-50 mt-[50px]"
                      side="left"
                      sideOffset={20}
                    >
                      {countries.map((country) => (
                        <button
                          key={country.name}
                          className="flex items-center px-2 py-1 hover:bg-gray-200 cursor-pointer rounded w-full text-left text-[16px]"
                          onClick={() => setSelectedLocale(country.name)}
                        >
                          <img
                            src={country.flag}
                            alt={country.name}
                            className="w-5 h-4 mr-3"
                          />
                          {country.name}
                        </button>
                      ))}
                      <Tooltip.Arrow className="fill-white" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              </Tooltip.Provider>
              <span className="dark:text-gray-200 text-gray-600">
                {selectedLocale}
              </span>
            </div>

            {/* Developer Mode Toggle */}
            <DeveloperModeToggle
              developerMode={developerMode}
              setDeveloperMode={setDeveloperMode}
            />

            <div className="flex justify-between items-center py-2">
              <Tooltip.Provider delayDuration={0}>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <div className="w-full" onClick={handleSettingsClick}>
                      <div className="flex justify-between items-center " >
                        <span className="cursor-pointer">Billing</span>
                        <button
                          className="relative text-white text-xs px-3 py-1 rounded-full overflow-hidden transition-transform duration-200 ease-out group"
                          onClick={() => setIsUpgradeOpen(true)}
                        >
                          <span className="absolute inset-0 bg-gradient-to-r from-[#d3435c] to-[#f3b12f] transition-all duration-500 ease-in-out group-hover:from-[#f3b12f] group-hover:to-[#d3435c]"></span>
                          <span className="relative flex items-center">
                            UPGRADE
                          </span>
                        </button>
                      </div>

                      {isUpgradeOpen && (
                        <Upgrade onClose={() => setIsUpgradeOpen(false)} />
                      )}
                    </div>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content
                      className="text-black bg-white p-2 rounded text-sm shadow-lg z-50"
                      side="left"
                      sideOffset={20}
                    >
                      Open Billing
                      <Tooltip.Arrow className="fill-white" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              </Tooltip.Provider>
            </div>

            {/* Theme Toggle */}
            <div className="flex justify-between items-center py-2">
              <span>Theme</span>
              <ThemeToggle />
            </div>

            {/* Logout */}
            <div
              className="border-t mt-2 pt-2 flex justify-between items-center py-2 cursor-pointer"
              onClick={handleLogout}
            >
              <span>Log out</span>
              <VscSignOut
                size={21}
                className="mt-1 dark:text-gray-200 text-gray-600"
              />
            </div>
          </div>
        </>
      )}

      {/* User Profile Modal */}
      {profileOpen && (
        <UserProfileModal isOpen={profileOpen} setIsOpen={setProfileOpen} />
      )}
    </>
  );
};

export default UserDropdown;
