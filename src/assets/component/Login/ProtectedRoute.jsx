import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("auth") === "true"
  );

  useEffect(() => {
    console.log("Auth Check:", isAuthenticated);

    const handleStorageChange = () => {
      const newAuthState = localStorage.getItem("auth") === "true";
      console.log("Storage Changed! New Auth:", newAuthState);
      setIsAuthenticated(newAuthState);
    };

    // Listen for storage changes (useful for login/logout)
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return isAuthenticated ? <Outlet /> : <Navigate to="/Adminpanel/login" replace />;
};

export default ProtectedRoute;
