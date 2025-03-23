import { useEffect, useState } from "react";
import { MdOutlineWbSunny, MdOutlineDarkMode } from "react-icons/md";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []); // Runs once on mount

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
    <button
      aria-label="Toggle Dark Mode"
      className="flex items-center w-14 h-6 rounded-[5px] bg-gray-200 dark:bg-gray-800 cursor-pointer transition-all"
      onClick={() => setDarkMode(!darkMode)}
    >
      <div
        className={`flex items-center justify-center w-8 h-6 rounded-[5px] bg-white dark:bg-gray-500 transition-all ${
          darkMode ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {darkMode ? (
          <MdOutlineDarkMode size={16} className="text-gray-300" />
        ) : (
          <MdOutlineWbSunny size={16} className="text-yellow-500" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
