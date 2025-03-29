import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ isAuthenticated }) {
  if (!isAuthenticated) {
    return <Navigate to="/Adminpanel/login" replace />;
  }
  return <Outlet />;
}

export default ProtectedRoute;
