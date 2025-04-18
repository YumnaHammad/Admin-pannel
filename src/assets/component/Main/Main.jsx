import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation to get current URL
import Dashboard from "../Dashboard/Dashboard";
import DemandResponse from "./DemandResponse";
import Fleet from "./Fleet";
import Inapp from "./Inapp";
import Organ from "./Organ";
import User from "./User";
import Devices from "./Devices";
import DeveloperZone from "./DeveloperZone";
import Location from "./Location";
import Automation from "./Automation";


function Main() {
  const location = useLocation(); // Get the current URL path

  return (
    <div className="bg-white rounded-[5px]">
      <div className="flex items-center justify-between bg-white  shadow-sm border-b rounded-[6px] dark:bg-gray-900 text-gray-700 dark:text-gray-300">
        {/* Conditionally Render Components Based on URL */}
        {location.pathname.includes("/dashboard") && <Dashboard />}
        {location.pathname.includes("/demandresponse") && <DemandResponse />}
        {location.pathname.includes("/fleet") && <Fleet/>}
        {location.pathname.includes("/inapp") && <Inapp/>}
        {location.pathname.includes("/user") && <User/>}
        {location.pathname.includes("/device") && <Devices/>}
        {location.pathname.includes("/developerzone") && <DeveloperZone/>}
        {location.pathname.includes("/location") && <Location/>}
        {location.pathname.includes("/automation") && <Automation/>}


      </div>
    </div>
  );
}

export default Main;
