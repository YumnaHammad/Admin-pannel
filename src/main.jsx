import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DeveloperModeProvider } from "./assets/component/Siderbar/useDeveloperMode";
import { UserProfileProvider } from "./assets/component/Navbar/UserProfileContext";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DeveloperModeProvider>
    <UserProfileProvider>
  <App />
</UserProfileProvider>

    </DeveloperModeProvider>
  </React.StrictMode>
);
