import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const isAuthenticated = JSON.parse(localStorage.getItem("auth")) || false;
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
