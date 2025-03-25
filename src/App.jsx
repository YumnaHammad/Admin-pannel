import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./assets/component/Navbar/Navbar";
import Sidebar from "./assets/component/Siderbar/Sidebar";
import Main from "./assets/component/Main/Main";
import Setting from "./assets/component/Setting/Setting";
import Login from "./assets/component/Login/Login";
import Signup from "./assets/component/Login/Signup";
import SetPassword from "./assets/component/Login/SetPassword";

// Protected Route Wrapper
const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem("auth");
  return isAuthenticated ? (
    <div className="flex bg-lightBg dark:bg-gray-800 h-screen text-lightText dark:text-darkText">
      <Sidebar />
      <div className="flex-1 flex flex-col mt-1">
        <Navbar />
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to="/login" replace />
  );
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("auth"));

  useEffect(() => {
    const handleAuthChange = () => {
      setIsAuthenticated(!!localStorage.getItem("auth"));
    };

    window.addEventListener("storage", handleAuthChange);
    return () => window.removeEventListener("storage", handleAuthChange);
  }, []);

  return (
    <Router>
      <Routes>
        {/* Redirect to login if not authenticated */}
        <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />} />

        {/* Authentication Pages */}
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/set-password" element={<SetPassword setIsAuthenticated={setIsAuthenticated} />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Main />} />
          <Route path="/setting" element={<Setting />} />
        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />} />
      </Routes>
    </Router>
  );
}

export default App;
