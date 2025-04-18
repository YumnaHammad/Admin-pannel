import React, { useState, useRef, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import * as Tooltip from "@radix-ui/react-tooltip";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { FaBuilding } from "react-icons/fa";
import UpgradeButton from "../UpgradeButton";
import { SlidersVertical } from "lucide-react";
import { Ellipsis } from 'lucide-react';
import { MdFilterAlt } from "react-icons/md";
import ClenderPicker from "./Calender/ClenderPicker";
import { FaThLarge } from "react-icons/fa";
import Menu from "./Menu";
import NewDashboard from "./NewDashbard";

const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState("Funnel");
  const datePickerRef = useRef(null);
  const ranges = ["1d", "1w", "1mo", "3mo", "1y", "filter"];
  const [selected, setSelected] = useState('1d');
  const [showMenu, setShowMenu] = useState(false);
  const [DashboardOpen,setdashboardOpen] = useState(false);
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(event.target)
      ) {
        setShowDatePicker(false);
      }
    }
    if (showDatePicker) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showDatePicker]);

  return (
    <>
      {DashboardOpen ? (
      <NewDashboard onClose={() => setdashboardOpen(false)} />
    ) : (
      <div className="flex w-full h-[530px]">
        {/* Sidebar */}
        <div
          className={`transition-all duration-300 px-4 ${
            isCollapsed ? "w-20" : "w-[30%]"
          } pt-6 pr-4 justify-between flex flex-col border-r-[1px]`}
        >
          <div
            className={`flex justify-between flex-col ${
              isCollapsed ? "items-center" : ""
            }`}
          >
            <div className="flex justify-between items-center">
              {!isCollapsed && (
                <h2 className="text-sm flex items-center gap-2 font-normal">
                  DASHBOARDS{" "}
                  <div className="relative group inline-block">
                    <span className="text-xs bg-white text-green-600 px-3 py-1 rounded-full cursor-pointer border-[1px] border-green-400">
                      BETA
                    </span>
                    <div className="absolute z-10 hidden group-hover:block bg-white text-black text-sm border border-gray-300 rounded shadow-md w-72 p-3 left-1/2 -translate-x-1/2 mt-2">
                      <p className="font-bold mb-1">Beta Feature</p>
                      <p className="text-gray-700">
                        This feature is not yet finalized and you may experience
                        issues when using it. It can be changed or even removed.
                        Availability of this feature in specific subscription
                        plans is subject to change. Please report any issues you
                        may find.
                      </p>
                      <a
                        href="#"
                        className="text-blue-500 underline text-sm mt-2 inline-block"
                      >
                        Report An Issue
                      </a>
                    </div>
                  </div>
                </h2>
              )}
              <Tooltip.Provider>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <RxHamburgerMenu
                      onClick={() => setIsCollapsed(!isCollapsed)}
                      className="cursor-pointer text-lg flex"
                    />
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content
                      side="right"
                      sideOffset={5}
                      className="bg-white text-black px-3 py-1 text-sm rounded shadow-md z-50"
                    >
                      {isCollapsed ? "Expand" : "Collapse"}
                      <Tooltip.Arrow className="fill-white" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              </Tooltip.Provider>
            </div>

            {!isCollapsed && (
              <div>
                <div className="mt-4 dark:bg-gray-900 dark:text-white">
                  <button className="w-full text-left px-4 py-4 bg-gray-100 rounded-xl text-sm font-medium text-[#00667C] dark:text-[#0b2d35] dark:bg-gray-700">
                    New Dashboard
                  </button>
                </div>

                <div className="pb-2 rounded-md mt-60">
                  <p className="text-sm/6 font-medium mb-2">
                    Add more Dashboards!
                  </p>
                  <p className="text-gray-600 text-sm font-normal">
                    Create up to 5 dashboards and share them with users in
                    sub-organizations.
                  </p>
                  <UpgradeButton className="px-3 py-2 mt-6 w-full">
                    Upgrade to PRO
                  </UpgradeButton>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6 w-full bg-white relative">
            {/* Title & Date Filters */}
            <div>
            <div className="flex justify-between">
              <h1 className="text-2xl font-semibold mb-4">New Dashboard</h1>
              <div className="relative">
      <button
        className="bg-green-100 text-green-700 px-2 rounded-lg h-7"
        onClick={() => setShowMenu(!showMenu)}
      >
        <Ellipsis size={18} />
      </button>

      {showMenu && <Menu onClose={() => setShowMenu(false)} />}
    </div>
            </div>
            {/* Right-side Controls */}
            <div className="flex justify-between w-full">
            <div className="inline-flex items-center bg-gray-100 rounded-md p-1 space-x-1 relative">
  {ranges.map((range) => (
    <button
      key={range}
      onClick={() => {
        if (range === "filter") {
          setCalendarOpen(!calendarOpen);
        } else {
          setSelected(range);
        }
      }}
      className={`text-sm px-4 py-1 rounded flex items-center justify-center ${
        (range === selected || (range === "filter" && calendarOpen))
          ? "bg-white shadow text-black"
          : "text-gray-700 hover:bg-gray-200"
      }`}
    >
      {range === "filter" ? <SlidersVertical size={16} /> : range}
    </button>
  ))}

  {calendarOpen && (
    <div className="absolute top-10 right-0 z-50  border border-gray-400" style={{marginRight:"-65%"}}>
      <ClenderPicker onClose={() => setCalendarOpen(false)} />
    </div>
  )}
</div>

    <div className="flex items-center gap-2">
              <p className="flex items-center gap-2 text-sm px-3 py-1 rounded-md bg-gray-100 text-gray-700">
                <FaBuilding />
                All organizations
              </p>
              <button className="flex items-center gap-2 text-sm px-3 py-1 rounded-md bg-green-100 text-green-700">
                <MdFilterAlt />
                Filter
              </button>
            </div>
            </div>  
            </div>
            <div className="flex flex-col justify-center items-center bg-white text-center py-36">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">No widgets</h2>
      <button className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold py-2 px-4 rounded" onClick={()=>setdashboardOpen(true)}>
        <FaThLarge />
        Edit Dashboard
      </button>
    </div>
          </div>
      </div>   )}
    </>
  );
};

export default Dashboard;
