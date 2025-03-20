import { createContext, useContext, useState, useEffect } from "react";

// Create context
const DeveloperModeContext = createContext(null);

// Custom hook for easy access
export const useDeveloperMode = () => {
  const context = useContext(DeveloperModeContext);
  if (!context) {
    throw new Error("useDeveloperMode must be used within a DeveloperModeProvider");
  }
  return context;
};

// Context provider component
export const DeveloperModeProvider = ({ children }) => {
  // Load developer mode from localStorage (if available)
  const [developerMode, setDeveloperMode] = useState(() => {
    const storedValue = localStorage.getItem("developerMode");
    return storedValue ? JSON.parse(storedValue) : true; // Default to true
  });

  // Update localStorage whenever developerMode changes
  useEffect(() => {
    localStorage.setItem("developerMode", JSON.stringify(developerMode));
  }, [developerMode]);

  return (
    <DeveloperModeContext.Provider value={{ developerMode, setDeveloperMode }}>
      {children}
    </DeveloperModeContext.Provider>
  );
};
