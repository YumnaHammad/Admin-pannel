import React, { useState } from "react";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div className="flex w-full h-[520px]">
      {/* Sidebar */}
      <div className="w-64 pt-6 justify-between flex flex-col">
        <div>
          <h2 className="text-sm flex items-center gap-2 font-normal">
            DASHBOARDS{" "}
            <span className="text-green-600 py-0.5 border border-green-600 px-3 font-medium text-xs rounded-full">
              BETA
            </span>
          </h2>
          <div className="mt-4 dark:bg-gray-900  dark:text-white">
            <button className="w-full text-left px-4 py-4 bg-gray-100 rounded-md text-sm font-medium text-[#167655] dark:bg-gray-700 ">
              New Dashboard
            </button>
          </div>
        </div>
        <div className="mt-6 pb-2 rounded-md">
          <p className="text-sm/6 font-medium mb-2">Add more Dashboards!</p>
          <p className=" text-gray-600 text-sm font-normal">
            Create up to 5 dashboards and share them with users in
            sub-organizations.
          </p>
          <button className="w-full mt-4 bg-gradient-to-r from-red-500 to-orange-400 text-white py-2 rounded-md flex items-center justify-center gap-2 text-sm font-normal">
            <HiOutlineRocketLaunch size={20} className="font-medium" /> Upgrade
            to PRO
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 pt-6 pl-6 w-full ">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-2xl font-semibold">New Dashboard</h1>
          <button className="p-2 rounded-md hover:bg-[#E1F6EF] bg-[#b6ebd9]">
            <PiDotsThreeOutlineDuotone className="text-[#167655]" />
          </button>
        </div>

        {/* Time Filters */}
        <div className="flex justify-between ">
          <div className="mt-4 flex px-1 py-1  relative items-center dark:bg-gray-700">
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
            <button
              className={`flex items-center gap-2 px-4 py-1 rounded-md border ${
                showDatePicker
                  ? "bg-white shadow-md border-gray-400"
                  : "hover:bg-gray-100"
              }`}
            >
              <PiSlidersLight
                size={20}
                onClick={() => setShowDatePicker(!showDatePicker)}
                className="cursor-pointer"
              />
              {showDatePicker && (
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
            </button>
            {/* Date Picker Modal */}
            {showDatePicker && (
              <div className="absolute top-12 right-0 z-10 bg-white shadow-lg rounded-md p-2">
                <DateRange
                  ranges={dateRange}
                  onChange={(item) => setDateRange([item.selection])}
                  moveRangeOnFirstSelection={false}
                />
              </div>
            )}{" "}
          </div>
          {/* Dashboard Actions */}
          <div className=" flex gap-2">
            <button className=" px-6 bg-gray-200 rounded-md flex items-center gap-1 py-[-10px] text-xs font-medium  dark:text-gray-100 dark:hover:bg-gray-700 dark:bg-gray-700 ">
              <CgOrganisation className="text-[20px] text-[#56575D]  dark:text-gray-100" size={17}/>All organi...
            </button>
            <button className="px-6 bg-[#b6ebd9] text-green-700 rounded-md flex items-center gap-2 font-semibold text-sm pt-[-100px]">
            <FaFilter /> Filter
            </button>
          </div>
        </div>

        {/* No Widgets Section */}
        <div className="mt-10 text-center">
          <p className="text-xl font-medium">No widgets</p>
          <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-md flex items-center mx-auto gap-2">
            🛠 Edit Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
