import React, { useState } from "react";
import { SlidersVertical } from 'lucide-react';
import { Dot } from 'lucide-react';
import UpgradeButton from "@/assets/component/UpgradeButton";
import { ChevronUp, ChevronDown, Filter } from "lucide-react";
import TableUser from "./TableUser";
const UserAction = () => {
  const [timeFilter, setTimeFilter] = useState("1h");

  // const logs = [
  //   { time: "11:08:56 AM", user: "Yumna", client: "WEB-0...", action: "Web get org a...", status: 299, ip: "144.48.13..." },
  //   { time: "11:08:55 AM", user: "Yumna", client: "WEB-0...", action: "Web get org a...", status: 299, ip: "144.48.13..." },
  //   { time: "11:08:54 AM", user: "Yumna", client: "WEB-0...", action: "Web get org a...", status: 299, ip: "144.48.13..." },
  //   { time: "11:08:49 AM", user: "Yumna", client: "WEB-0...", action: "Web get org a...", status: 299, ip: "144.48.13..." },
  // ];
  const filters = ["1h", "6h", "1d", "1w", "1mo", "3mo"];
  const filtersWithDot = ["1mo", "3mo"]; 
  
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">User actions log</h2>
      <div className="flex mb-4 bg-gray-100 rounded py-1 px-1 w-[67%]">
  {[...filters, "slider"].map((filterKey) => {
    const isSlider = filterKey === "slider";
    const filter = isSlider ? <SlidersVertical /> : filterKey;
    const showDot = isSlider || filtersWithDot.includes(filterKey);
    const isDisabled = ["1mo", "3mo", "slider"].includes(filterKey);
    const tooltipText =
      filterKey === "1mo" || filterKey === "3mo" || filterKey === "slider"
        ? "Upgrade to unlock up to 1 month data storage"
        : "";

    return (
      <div key={filterKey} className="relative group overflow-x-auto">
        <button
          className={`px-5 py-1 flex items-center gap-2 ${
            timeFilter === filterKey ? "bg-white text-black" : ""
          } ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={() => {
            if (!isSlider && !isDisabled) setTimeFilter(filterKey);
          }}
          disabled={isDisabled}
        >
          <div className="flex items-center gap-1">
            {filter}
            {showDot && (
              <Dot className="w-2 h-2 bg-orange-500 rounded-full inline-block border-white border" />
            )}
          </div>
        </button>

        {/* Tooltip */}
        {isDisabled && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 bg-white text-black text-base rounded px-2 py-1  opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-[900] w-52">
          <div className="flex flex-col items-center">
            <p>{tooltipText}</p>
           <UpgradeButton className="px-4 py-1">Upgrade</UpgradeButton>
          </div>
        </div>
        )}
      </div>
    );
  })}
</div>
     <div><TableUser/></div>
    </div>
  );
};

export default UserAction;