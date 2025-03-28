import { createContext, useContext, useState, useEffect, useMemo } from "react";

// Create Developer Mode Context
const DeveloperModeContext = createContext(null);

// Custom Hook for Accessing Developer Mode
export const useDeveloperMode = () => {
  const context = useContext(DeveloperModeContext);
  if (!context) {
    throw new Error("useDeveloperMode must be used within a DeveloperModeProvider");
  }
  return context;
};

// Context Provider Component
export const DeveloperModeProvider = ({ children }) => {
  // Load developer mode from localStorage safely
  const [developerMode, setDeveloperMode] = useState(() => {
    try {
      const storedValue = localStorage.getItem("developerMode");
      return storedValue !== null ? JSON.parse(storedValue) : true; // Default to true
    } catch (error) {
      console.error("Error parsing developerMode from localStorage:", error);
      return true;
    }
  });

  // Sync localStorage when developerMode changes
  useEffect(() => {
    localStorage.setItem("developerMode", JSON.stringify(developerMode));
  }, [developerMode]);

  // Memoize the context value to avoid unnecessary re-renders
  const value = useMemo(() => ({ developerMode, setDeveloperMode }), [developerMode]);

  return <DeveloperModeContext.Provider value={value}>{children}</DeveloperModeContext.Provider>;
};
