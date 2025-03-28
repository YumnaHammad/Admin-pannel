import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import Navbar from "./assets/component/Navbar/Navbar";
import Sidebar from "./assets/component/Siderbar/Sidebar";
import Main from "./assets/component/Main/Main";
import Setting from "./assets/component/Setting/Setting";
import Login from "./assets/component/Login/Login";
import Signup from "./assets/component/Login/SignUp";
import SetPassword from "./assets/component/Login/SetPassword";
import ProtectedRoute from "./assets/component/Login/ProtectedRoute";

// Function to check authentication status
const checkAuth = () => localStorage.getItem("auth") === "true";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => checkAuth());

  const handleAuthChange = useCallback(() => {
    setIsAuthenticated(checkAuth());
  }, []);

  useEffect(() => {
    window.addEventListener("storage", handleAuthChange);
    return () => window.removeEventListener("storage", handleAuthChange);
  }, [handleAuthChange]);

  return (
    <Router>
      <Routes>
        {/* Redirect "/" to Login */}
        <Route path="/" element={<Navigate to="/Adminpanel/login" replace />} />

        {/* Authentication Pages */}
        <Route path="/Adminpanel/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/Adminpanel/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/Adminpanel/set-password" element={<SetPassword setIsAuthenticated={setIsAuthenticated} />} />

        {/* Protected Routes - Block Unauthorized Access */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/Adminpanel/dashboard" element={<Layout><Main /></Layout>} />
          <Route path="/Adminpanel/setting" element={<Layout><Setting /></Layout>} />
        </Route>

        {/* Redirect unknown routes to login */}
        <Route path="*" element={<Navigate to="/Adminpanel/login" replace />} />
      </Routes>
    </Router>
  );
}

// Layout for Dashboard & Settings
const Layout = ({ children }) => (
  <div className="flex bg-lightBg dark:bg-gray-800 h-screen text-lightText dark:text-darkText">
    <Sidebar />
    <div className="flex-1 flex flex-col mt-1">
      <Navbar />
      {children}
    </div>
  </div>
);

export default App;
