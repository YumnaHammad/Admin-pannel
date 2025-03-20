import { StrictMode } from 'react'

import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DeveloperModeProvider } from "./assets/component/Siderbar/useDeveloperMode.jsx"; 

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DeveloperModeProvider>
      <App />
    </DeveloperModeProvider>
  </React.StrictMode>
)


