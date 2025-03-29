import React, { useState , useRef, useEffect} from "react";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import * as Tooltip from "@radix-ui/react-tooltip";
import {
  PiDotsThreeOutlineDuotone,
  PiSlidersLight,
  PiCalendarBlankLight,
} from "react-icons/pi";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { CgOrganisation } from "react-icons/cg";

import { FaFilter } from "react-icons/fa";
const Dashboard = () => {
  const timeOptions = ["1d", "1w", "1mo", "3mo", "1y"];
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showDateRangePicker, setShowDateRangePicker] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const datePickerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
        setShowDatePicker(false);
      }
    }
    if (showDatePicker) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showDatePicker]);

  return (
    <div className="flex w-full h-[535px]">
      {/* Sidebar */}
<<<<<<< HEAD
      <div className="w-64 pt-6 justify-between flex flex-col">
        <div>
          <h2 className="text-sm flex items-center gap-2 font-normal">
            DASHBOARDS{" "}
            <span className="text-[#00667C] dark:bg-gray-900  dark:text-white py-0.5 border border-[#00667C]  dark:border-gray-100  px-3 font-medium text-xs rounded-full">
              BETA
            </span>
          </h2>
          <div className="mt-4 dark:bg-gray-900  dark:text-white">
            <button className="w-full text-left px-4 py-4 bg-gray-100 rounded-md text-sm font-medium text-[#00667C]  dark:text-[#0b2d35]  dark:bg-gray-700 ">
              New 
            </button>
=======
      <aside
        className={`h-screen transition-all duration-300 bg-white border-e-[1px] ${
          isCollapsed ? "w-16" : "w-64"
        }`}
      >
        <div className="pt-6 flex flex-col justify-between h-full pr-3">
          <div>
            {/* Header with Hamburger & Tooltip */}
            <div className="flex justify-between gap-2 items-center">
              <div className="flex gap-2">
              {!isCollapsed && (
                <>
                  <h2 className="text-sm  text-start font-normal">
                    DASHBOARDS{" "}
                  </h2>
                  <Tooltip.Provider>
                    <Tooltip.Root>
                      <Tooltip.Trigger asChild>
                        <span className="text-green-600 py-0.5 border border-green-600 px-3 font-medium text-xs rounded-full cursor-pointer">
                          BETA
                        </span>
                      </Tooltip.Trigger>
                      <Tooltip.Portal>
                        <Tooltip.Content
                          className="bg-white text-black p-2 rounded-md text-xs max-w-xs shadow-lg"
                          side="top"
                          align="start"
                          sideOffset={6}
                        >
                          <h2 className="text-sm font-medium">Beta Feature</h2>
                          <p className="text-sm font-normal">
                            This feature is not yet finalized and you may
                            experience issues when using it. It can be changed
                            or even removed. Availability of this feature in
                            specific subscription plans is subject to change.
                            Please report any issues you may find.Report An
                            Issue
                          </p>
                          <p>
                            <a
                              href="YOUR_ISSUE_REPORT_LINK"
                              className=" text-[#7a92df] hover:text-[#6275b2] text-sm font-normal no-underline"
                            >
                              Report An Issue
                            </a>
                          </p>
                          <Tooltip.Arrow className="fill-white" />
                        </Tooltip.Content>
                      </Tooltip.Portal>
                    </Tooltip.Root>
                  </Tooltip.Provider>
                </>
              )}
              </div>  
              <div>
              <Tooltip.Provider>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <button onClick={() => setIsCollapsed(!isCollapsed)}>
                      <RxHamburgerMenu size={24} />
                    </button>
                  </Tooltip.Trigger>
                  {isCollapsed ? (
                    <Tooltip.Portal>
                      <Tooltip.Content
                        className="bg-white text-black  p-2 rounded-md"
                        side="bottom"
                        align="center"
                        sideOffset={8}
                      >
                        Expand
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  ) : (
                    <Tooltip.Portal>
                      <Tooltip.Content
                        side="bottom"
                        align="center"
                        sideOffset={8}
                        className="bg-white text-black p-2 rounded-md"
                      >
                        collapse
                        <Tooltip.Arrow className="fill-white" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  )}
                </Tooltip.Root>
              </Tooltip.Provider>
              </div>
            </div>

            {!isCollapsed && (
              <button className="w-full mt-2 px-4 py-4 bg-gray-100 rounded-md text-sm font-medium text-[#167655] text-left">
                New Dashboard
              </button>
            )}
          </div>

          {/* Upgrade Section */}
          <div className="mt-6 pb-2">
            {!isCollapsed && (
              <>
                <p className="text-sm font-medium mb-2">Add more Dashboards!</p>
                <p className="text-gray-600 text-sm">
                  Create up to 5 dashboards and share them with users in
                  sub-organizations.
                </p>
              </>
            )}
            {!isCollapsed && (
              <button class=" w-full flex items-center justify-center gap-2 text-sm font-medium text-red mt-4 rounded-md hover:before:bg-redborder-red-500 relative h-[35px] overflow-hidden border border-none bg-orange-400 px-3 text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full">
                <span class="relative flex z-10">
                  {" "}
                  <HiOutlineRocketLaunch size={20} />
                  Upgrade to PRO
                </span>
              </button>
            )}
>>>>>>> bf80129 (RoleAndPermission tab)
          </div>
        </div>
      </aside>

      {/* Main Content */}
<<<<<<< HEAD
      <div className="flex-1 pt-6 pl-6 w-full ">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-2xl font-semibold">New Dashboard</h1>
          <button className="px-2 py-[2px] rounded-md hover:bg-[#E1F6EF] text-[#00667C] dark:bg-gray-300">
            <PiDotsThreeOutlineDuotone className="text-[#00667C]" />
          </button>
        </div>

        {/* Time Filters */}
        <div className="flex justify-between ">
          <div className="mt-4 flex px-1 py-1  relative items-center dark:bg-gray-700">
            {timeOptions.map((item, index) => (
=======
      <main className="w-full">
        <div className="flex-1 pt-6 pl-6 w-full ">
          <div className="flex justify-between items-center w-full">
            <h1 className="text-2xl font-semibold">New Dashboard</h1>
            <button className="p-2 rounded-md hover:bg-[#E1F6EF] bg-[#b6ebd9]">
              <PiDotsThreeOutlineDuotone className="text-[#167655]" />
            </button>
          </div>

          {/* Time Filters */}
          <div className="flex justify-between h-14">
            <div className="mt-4 flex px-1 py-1 bg-gray-200 relative items-center">
              {timeOptions.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`px-4 py-1 rounded-md transition ${
                    activeIndex === index
                      ? "bg-white border border-gray-300 shadow-md"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {item}
                </button>
              ))}
              {/* Date Range Button */}
>>>>>>> bf80129 (RoleAndPermission tab)
              <button
                className={`flex items-center gap-2 px-4 py-1 rounded-md border ${
                  showDatePicker
                    ? "bg-white shadow-md border-gray-400"
                    : "hover:bg-gray-100"
                }`}
              >
                <PiSlidersLight
                  size={20}
                  onClick={() => setShowDatePicker(!showDateRangePicker)}
                  className="cursor-pointer"
                />
                {showDateRangePicker && (
                  <>
                    {format(dateRange[0].startDate, "yyyy-MM-dd")} →{" "}
                    {format(dateRange[0].endDate, "yyyy-MM-dd")}
                    <PiCalendarBlankLight
                      size={20}
                      className="cursor-pointer"
                      onClick={() => setShowDatePicker(!showDatePicker)}
                    />
                  </>
                )}
                {showDatePicker && (
                <div  ref={datePickerRef} className="absolute top-12 right-0 z-10 bg-white shadow-lg rounded-md p-2">
                  <DateRange
                    ranges={dateRange}
                    onChange={(item) => setDateRange([item.selection])}
                    moveRangeOnFirstSelection={false}
                  />
                </div>
              )}{" "} 
              </button>
              {/* Date Picker Modal */}
              {/* {showDatePicker && (
                <div className="absolute top-12 right-0 z-10 bg-white shadow-lg rounded-md p-2">
                  <DateRange
                    ranges={dateRange}
                    onChange={(item) => setDateRange([item.selection])}
                    moveRangeOnFirstSelection={false}
                  />
                </div>
              )}{" "} */}
            </div>
            {/* Dashboard Actions */}
            <div className=" flex gap-2 mt-4">
              <button className="h-8 px-6 bg-gray-200 rounded-md flex items-center gap-1 py-1 text-xs font-medium">
                <CgOrganisation
                  className="text-[20px] text-[#56575D]"
                  size={17}
                />
                All organi...
              </button>
              <button className="h-8 px-6 bg-[#b6ebd9] text-green-700 rounded-md flex items-center gap-2 font-semibold text-sm">
                <FaFilter /> Filter
              </button>
            </div>
          </div>
<<<<<<< HEAD
          {/* Dashboard Actions */}
          <div className=" flex gap-2">
            <button className=" px-6 bg-gray-200 rounded-md flex items-center text-xs font-medium  dark:text-gray-100 dark:hover:bg-gray-700 dark:bg-gray-700 ">
              <CgOrganisation className="text-[20px] text-[#56575D]  dark:text-gray-100 me-2" size={17}/>All organi...
            </button>
            <button className="px-6 bg-[#00657c3f] text-[#00667C] dark:bg-gray-300 rounded-md flex items-center gap-2 font-semibold text-sm ">
            <FaFilter /> Filter
            </button>
          </div>
        </div>

        {/* No Widgets Section */}
        <div className="mt-10 text-center">
          <p className="text-xl font-medium">No widgets</p>
          <button className="mt-4 px-6 py-2 bg-[#00667C] dark:bg-gray-600 text-white rounded-md flex items-center mx-auto gap-2">
            🛠 Edit Dashboard
          </button>
=======

          {/* No Widgets Section */}
          <div className="mt-10 text-center">
            <p className="text-xl font-medium">No widgets</p>
            <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-md flex items-center mx-auto gap-2">
              🛠 Edit Dashboard
            </button>
          </div>
>>>>>>> bf80129 (RoleAndPermission tab)
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
