import { useEffect, useState } from "react";
import { MdOutlineWbSunny, MdOutlineDarkMode } from "react-icons/md";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className={`flex items-center w-14 h-6 rounded-[5px] bg-gray-200 dark:bg-gray-100  cursor-pointer transition-all`}
      onClick={() => setDarkMode(!darkMode)}
    >
      <div
        className={` flex items-center justify-center w-8 h-6 rounded-[5px] bg-white dark:bg-gray-500 transition-all ${
          darkMode ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {darkMode ? (
          <MdOutlineDarkMode size={16} className="text-gray-600 " />
        ) : (
          <MdOutlineWbSunny size={16} className="text-yellow-500" />
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;
