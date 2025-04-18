import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import Navbar from "./assets/component/Navbar/Navbar";
import Sidebar from "./assets/component/Siderbar/Sidebar";
import Main from "./assets/component/Main/Main";
import Setting from "./assets/component/Setting/Setting";
import Login from "./assets/component/Login/Login";
import Signup from "./assets/component/Login/SignUp";
import SetPassword from "./assets/component/Login/SetPassword";
import ProtectedRoute from "./assets/component/Login/ProtectedRoute";
import DemandResponse from "./assets/component/Main/DemandResponse";
import BlynkEnterpriseForm from "./assets/component/Main/BlynkEnterpriseForm";
import Fleet from "./assets/component/Main/Fleet";
import Inapp from "./assets/component/Main/Inapp";
import Organ from "./assets/component/Main/Organ";
import DeveloperZone from "./assets/component/Main/DeveloperZone";
import Automation from "./assets/component/Main/Automation";
import Devices from "./assets/component/Main/Devices";
import User from "./assets/component/Main/User";
import Location from "./assets/component/Main/Location";
import Zonesidebar from "./assets/component/Dashboard/Developerzone.jsx/Zonesidebar";
import Templates from "./assets/component/Dashboard/Developerzone.jsx/Templates";
import InfoPage from "./assets/component/Dashboard/Developerzone.jsx/InfoPage";

// Function to check authentication status
const checkAuth = () => localStorage.getItem("auth") === "true";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => checkAuth());

  const handleAuthChange = useCallback(() => {
    setIsAuthenticated(checkAuth());
  }, []);

  useEffect(() => {
    // Listen for authentication changes
    window.addEventListener("storage", handleAuthChange);
    return () => window.removeEventListener("storage", handleAuthChange);
  }, [handleAuthChange]);

  return (
    <Router>
      <Routes>
        {/* Redirect "/" to Login */}
        <Route path="/" element={<Navigate to="/Adminpanel/login" replace />} />

        {/* Authentication Pages */}
        <Route
          path="/Adminpanel/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/Adminpanel/signup"
          element={<Signup setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/Adminpanel/set-password"
          element={<SetPassword setIsAuthenticated={setIsAuthenticated} />}
        />

        {/* Protected Routes - Block Unauthorized Access */}
        <Route element={<ProtectedRoute />}>

        <Route path="/Adminpanel/setting/:tab?" element={<Layout><Setting /> </Layout>} />
        {/* Redirect to General if no tab is specified */}
        <Route path="*" element={<Navigate to="/Adminpanel/setting/general" replace />} />
      
            <Route path="/Adminpanel/developerzone/:tab?" element={<Layout><DeveloperZone/></Layout>} />
            <Route path="/Adminpanel/developerzone/my-templates/info" element={<Layout><InfoPage /></Layout>} />
            <Route path="/Adminpanel/developerzone/my-templates/info/:tab" element={<Layout><InfoPage /></Layout>} />

       
         
          <Route
            path="/Adminpanel/dashboard"
            element={
              <Layout>
                <Main />
              </Layout>
            }
          />
          <Route
            path="/Adminpanel/setting"
            element={
              <Layout>
                <Setting />
              </Layout>
            }
          />
          <Route
            path="/Adminpanel/demandresponse"
            element={
              <Layout>
                <DemandResponse />
              </Layout>
            }
          />
          <Route
            path="/Adminpanel/fleet"
            element={
              <Layout>
                <Fleet />
              </Layout>
            }
          />
          <Route
            path="/Adminpanel/inapp"
            element={
              <Layout>
                <Inapp />
              </Layout>
            }
          />
          <Route
            path="/Adminpanel/Organization"
            element={
              <Layout>
                <Organ />
              </Layout>
            }
          />
          <Route
            path="/Adminpanel/blynk-enterprise-form"
            element={<BlynkEnterpriseForm />}
          />

          
           <Route
            path="/Adminpanel/developerzone"
            element={
              <Layout>
                <DeveloperZone />
              </Layout>
            }
          />
          
          <Route
            path="/Adminpanel/automation"
            element={
              <Layout>
                <Automation />
              </Layout>
            }
          />
          <Route
            path="/Adminpanel/device"
            element={
              <Layout>
                <Devices />
              </Layout>
            }
          />
          <Route
            path="/Adminpanel/user"
            element={
              <Layout>
                <User />
              </Layout>
            }
          />
          <Route
            path="/Adminpanel/location"
            element={
              <Layout>
                <Location />
              </Layout>
            }
          />
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
