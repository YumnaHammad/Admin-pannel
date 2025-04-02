import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ isAuthenticated }) {
  useEffect(() => {
    console.log("Auth state:", isAuthenticated); // Debugging authentication issues
  }, [isAuthenticated]);

  return isAuthenticated ? <Outlet /> : <Navigate to="/Adminpanel/login" replace />;
}

export default ProtectedRoute;
