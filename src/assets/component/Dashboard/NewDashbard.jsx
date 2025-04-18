import React, { useState } from "react";
import { Blocks } from "lucide-react";
import LineChart from "./LineChart";
import { CgOrganisation } from "react-icons/cg";
import BarChart from "./Barchart";
import SimpleLineCharts from "./SimpleLineChart";
import { Lock } from "lucide-react";
import { Info } from "lucide-react";
import HorizontalBarChart from "./HorizontalBarChart";
import NoAxisLine from "./NoAxisLine";
const NewDashboard = () => {
  const [droppedWidgets, setDroppedWidgets] = useState([]);

  const handleDragStart = (e, widgetType) => {
    e.dataTransfer.setData("widgetType", widgetType);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const widgetType = e.dataTransfer.getData("widgetType");
    if (widgetType) {
      setDroppedWidgets((prev) => [...prev, widgetType]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Necessary to allow drop
  };
  const events = [
    {
      time: "Today, 00:08",
      title: "Event name",
      organization: "Organization...",
      color: "bg-gray-300",
    },
    {
      time: "Today, 00:08",
      title: "Event name",
      organization: "Organization...",
      color: "bg-red-600",
    },
  ];
  const chartData1 = [
    { name: "Jan", value: 10 },
    { name: "Feb", value: 30 },
    { name: "Mar", value: 20 },
  ];

  const chartData2 = [
    { name: "Jan", value: 25 },
    { name: "Feb", value: 40 },
    { name: "Mar", value: 19 },
  ];
  return (
    <div className="flex h-screen bg-white w-full">
      {/* Left Panel - Widget Box */}
      <div className="bg-white p-2 w-[45%]">
        <div className=" bg-gray-100 p-3 flex flex-col rounded-xl h-screen overflow-y-auto custom-scrollbar">
          <h2 className="text-xl font-semibold mb-4 flex">
            {" "}
            <Blocks className="mr-2" /> Widget Box
          </h2>

          <div className="overflow-auto pr-4">
            {/* Controls*/}
            <div>
              <p className="text-gray-600 mb-2 text-base font-medium">
                Device metrics
              </p>
              <label className="text-gray-500">Controls</label>

              <div
                className="draggable-widget bg-white rounded-lg p-4 shadow cursor-move h-[136px]"
                draggable
                onDragStart={(e) => handleDragStart(e, "Switch")}
              >
                <p className="font-medium">Switch</p>
                <div className="mt-10">
                  <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div class="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>

              {/* Slider */}
              <div
                className="draggable-widget bg-white rounded-md p-4 shadow cursor-move h-[136px] mt-3"
                draggable
                onDragStart={(e) => handleDragStart(e, "Slider")}
              >
                <p className="font-medium">Slider</p>
                <div className=" flex items-center space-x-2 mt-10">
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value="1"
                    readOnly
                    className="w-full"
                  />
                  <span>1</span>
                </div>
              </div>
            </div>
            {/* Tiles*/}
            <div>
              <label className="text-gray-500">Tiles</label>
              <div
                className="draggable-widget bg-white p-4  cursor-move h-[136px] mt-2"
                draggable
                onDragStart={(e) => handleDragStart(e, "Label")}
              >
                <p className="font-semibold text-gray-700">Label</p>
                <div className="mt-6 text-3xl font-mono text-gray-800">111</div>
              </div>
            </div>
            {/* Charts*/}
            <div>
              <label className="text-gray-500">Charts</label>
              <div
                className="draggable-widget bg-white rounded-2xl p-4 shadow-md cursor-move h-[220px]"
                draggable
                onDragStart={(e) => handleDragStart(e, "MetricsOverTime")}
              >
                <p className="font-semibold text-gray-700 mb-2">
                  Metrics over time, agg.
                </p>
                <div className="h-[300px] overflow-hidden">
                  <LineChart />
                </div>
              </div>
              <div
                className="draggable-widget bg-white rounded-2xl p-4 shadow-md cursor-move h-[220px] mt-3"
                draggable
                onDragStart={(e) => handleDragStart(e, "MetricsOverTime")}
              >
                <p className="font-semibold text-gray-700 mb-2">
                  Metrics by devices
                </p>
                <div className="h-[300px] overflow-hidden">
                  <LineChart />
                </div>
              </div>
              <div>
                <p className="text-gray-600 mb-2 text-base font-medium">
                  Events
                </p>
                <label>Tiles</label>
                <div
                  className="draggable-widget bg-white p-4  cursor-move h-[136px] mt-2"
                  draggable
                  onDragStart={(e) => handleDragStart(e, "Label")}
                >
                  <p className="font-semibold text-gray-700">All Events</p>
                  <div className="mt-6 text-3xl font-mono text-gray-800">
                    112
                  </div>
                </div>
                <div
                  className="draggable-widget bg-white p-4  cursor-move h-[136px] mt-2"
                  draggable
                  onDragStart={(e) => handleDragStart(e, "Label")}
                >
                  <p className="font-semibold text-gray-700">Critical Events</p>
                  <div className="mt-6 text-3xl font-mono text-gray-800">
                    112
                  </div>
                </div>
                <div
                  className="draggable-widget bg-white p-4  cursor-move h-[136px] mt-2"
                  draggable
                  onDragStart={(e) => handleDragStart(e, "Label")}
                >
                  <p className="font-semibold text-gray-700">Warning Events</p>
                  <div className="mt-6 text-3xl font-mono text-gray-800">
                    112
                  </div>
                </div>
                <div
                  className="draggable-widget bg-white rounded-2xl p-4 shadow-md cursor-move  mt-3"
                  draggable
                  onDragStart={(e) => handleDragStart(e, "LatestEvents")}
                >
                  <p className="font-semibold text-gray-800 mb-4">
                    Latest events
                  </p>
                  <div className="space-y-4">
                    {events.map((event, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div
                          className={`w-2 h-4 rounded-full mt-1 ${event.color}`}
                        ></div>
                        <div>
                          <p className="text-xs text-gray-500">{event.time}</p>
                          <p className="font-semibold text-sm text-gray-800 leading-snug">
                            {event.title}
                          </p>
                          <p className="text-xs text-gray-400 mt-0.5 flex">
                            <CgOrganisation className="mr-2" />
                            {event.organization}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <label className="my-3">Charts</label>
                <div
                  className="draggable-widget bg-white rounded-2xl p-4 shadow-md cursor-move h-[250px] mt-3"
                  draggable
                  onDragStart={(e) => handleDragStart(e, "MetricsOverTime")}
                >
                  <p className="font-semibold text-gray-700 mb-2">All evants</p>
                  <div className="h-[200px] overflow-hidden">
                    <BarChart />
                  </div>
                </div>
                <div
                  className="draggable-widget bg-white rounded-2xl p-4 shadow-md cursor-move h-[220px] mt-3"
                  draggable
                  onDragStart={(e) => handleDragStart(e, "MetricsOverTime")}
                >
                  <p className="font-semibold text-gray-700 mb-2">
                    All events over time
                  </p>
                  <div className="h-[300px] overflow-hidden">
                    <SimpleLineCharts />
                  </div>
                </div>
                <div
                  className="draggable-widget bg-white rounded-2xl p-4 shadow-md cursor-move h-[250px] mt-3"
                  draggable
                  onDragStart={(e) => handleDragStart(e, "MetricsOverTime")}
                >
                  <p className="font-semibold text-gray-700 mb-2">
                    Events by organization
                  </p>
                  <div className="h-[300px] overflow-hidden">
                    <HorizontalBarChart />
                  </div>
                </div>
                <div
                  className="draggable-widget bg-white rounded-2xl p-4 shadow-md cursor-move h-[250px] mt-3"
                  draggable
                  onDragStart={(e) => handleDragStart(e, "MetricsOverTime")}
                >
                  <p className="font-semibold text-gray-700 mb-2">
                    Events by devices
                  </p>
                  <div className="h-[300px] overflow-hidden">
                    <HorizontalBarChart />
                  </div>
                </div>
                <div
                  className="draggable-widget bg-white rounded-2xl p-4 shadow-md cursor-move h-[250px] mt-3"
                  draggable
                  onDragStart={(e) => handleDragStart(e, "MetricsOverTime")}
                >
                  <p className="font-semibold text-gray-700 mb-2">
                    Critical Events
                  </p>
                  <div className="h-[200px] overflow-hidden">
                    <BarChart />
                  </div>
                </div>
                <div
                  className="draggable-widget bg-white rounded-2xl p-4 shadow-md cursor-move h-[220px] mt-3"
                  draggable
                  onDragStart={(e) => handleDragStart(e, "MetricsOverTime")}
                >
                  <p className="font-semibold text-gray-700 mb-2">
                    Critical Events over time
                  </p>
                  <div className="h-[300px] overflow-hidden">
                    <SimpleLineCharts />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <p className="font-semibold text-gray-700">Platform Data</p>
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-all">
                  Enterprise
                </button>
              </div>

              <label>charts</label>
              <div
                className="draggable-widget bg-white rounded-2xl p-4 shadow-md cursor-move h-[220px] mt-2"
                draggable
                onDragStart={(e) => handleDragStart(e, "MetricsOverTime")}
              >
                {/* Make parent relative for absolute positioning */}
                <div className="relative mb-2">
                  <p className="font-semibold text-gray-700">
                    Devices connection status
                  </p>

                  {/* Upgrade button positioned at top right */}
                  <div className="absolute top-0 right-0 group w-fit">
                    <button className="relative flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full shadow-md transition-all duration-300 overflow-hidden w-10 group-hover:w-28">
                      <Lock className="absolute transition-opacity duration-300 group-hover:opacity-0 h-4 w-4" />
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        Upgrade
                      </span>
                    </button>
                  </div>
                </div>

                <div className="h-[300px] overflow-hidden">
                  <LineChart />
                </div>
              </div>
              <div
                className="draggable-widget bg-white rounded-2xl p-4 shadow-md cursor-move h-[220px] mt-3"
                draggable
                onDragStart={(e) => handleDragStart(e, "MetricsOverTime")}
              >
                {/* Make parent relative for absolute positioning */}
                <div className="mb-2 flex justify-between">
                  <p className="font-semibold text-gray-700">Total devices</p>
                  <Info className=" h-4 w-4" />
                </div>

                <div className="h-[300px] overflow-hidden">
                  <LineChart />
                </div>
              </div>
              <div
                className="draggable-widget bg-white rounded-2xl p-4 shadow-md cursor-move h-[220px] mt-3"
                draggable
                onDragStart={(e) => handleDragStart(e, "MetricsOverTime")}
              >
                {/* Make parent relative for absolute positioning */}
                <div className="mb-2 flex justify-between">
                  <p className="font-semibold text-gray-700">Active devices</p>
                  <Info className=" h-4 w-4" />
                </div>

                <div className="h-[300px] overflow-hidden">
                  <LineChart />
                </div>
              </div>
              <div
                className="draggable-widget bg-white rounded-2xl p-4 shadow-md cursor-move h-[220px] mt-3"
                draggable
                onDragStart={(e) => handleDragStart(e, "MetricsOverTime")}
              >
                {/* Make parent relative for absolute positioning */}
                <div className="mb-2 flex justify-between">
                  <p className="font-semibold text-gray-700">Activations</p>
                </div>

                <div className="h-[300px] overflow-hidden">
                  <LineChart />
                </div>
              </div>
              <div
                className="draggable-widget bg-white rounded-2xl p-4 shadow-md cursor-move h-[220px] mt-3"
                draggable
                onDragStart={(e) => handleDragStart(e, "MetricsOverTime")}
              >
                {/* Make parent relative for absolute positioning */}
                <div className="mb-2 flex justify-between">
                  <p className="font-semibold text-gray-700">
                    Total devices by devplates
                  </p>
                  <Info className=" h-4 w-4" />
                </div>

                <div className="h-[300px] overflow-hidden">
                  <LineChart />
                </div>
              </div>
              <div
                className="draggable-widget bg-white rounded-2xl p-4 shadow-md cursor-move h-[220px] mt-3"
                draggable
                onDragStart={(e) => handleDragStart(e, "MetricsOverTime")}
              >
                {/* Make parent relative for absolute positioning */}
                <div className="mb-2 flex justify-between">
                  <p className="font-semibold text-gray-700">
                    Active devices by templates
                  </p>
                  <Info className=" h-4 w-4" />
                </div>
                  <div className="grid grid-cols-2 gap-4">
      <NoAxisLine data={chartData1} />
      <NoAxisLine data={chartData2} />
    </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Dashboard */}
      <div className="w-full p-6">
        {/* Header */}
        <div className="mb-4 flex justify-between items-center">
          <input
            type="text"
            placeholder="New Dashboard"
            className="text-2xl font-bold border-none focus:outline-none bg-transparent"
          />
          <div className="space-x-2">
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
              Apply changes
            </button>
            <button className="bg-green-100 text-green-700 px-4 py-2 rounded-md hover:bg-green-200">
              Cancel
            </button>
          </div>
        </div>

        {/* Options */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-100 rounded-md p-4">
            <p className="text-sm text-gray-600">Data Source</p>
            <button className="mt-2 bg-green-100 text-green-700 px-3 py-1 rounded-md">
              Change...
            </button>
          </div>
          <div className="bg-gray-100 rounded-md p-4">
            <p className="text-sm text-gray-600">Access</p>
            <button className="mt-2 bg-green-100 text-green-700 px-3 py-1 rounded-md">
              Manage...
            </button>
          </div>
          <div className="bg-gray-100 rounded-md p-4">
            <p className="text-sm text-gray-600">Default Date Range</p>
            <div className="mt-2 space-x-2">
              <button className="bg-white px-2 py-1 border rounded-md">
                1d
              </button>
              <button className="bg-white px-2 py-1 border rounded-md">
                1w
              </button>
              <button className="bg-white px-2 py-1 border rounded-md">
                1mo
              </button>
            </div>
          </div>
        </div>

        {/* Drop Zone */}
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="border-2 border-dashed border-gray-400 h-[400px] rounded-md p-4 flex flex-wrap content-start gap-4"
        >
          {droppedWidgets.length === 0 ? (
            <p className="text-center text-gray-500 w-full self-center">
              <strong>Add new widget</strong>
              <br />
              <span className="text-sm">
                Double click the widget on the left or <strong>drag</strong> it
                to the canvas
              </span>
            </p>
          ) : (
            droppedWidgets.map((widget, index) => (
              <div
                key={index}
                className="w-40 h-24 bg-white shadow rounded-md flex items-center justify-center text-sm font-medium"
              >
                {widget}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default NewDashboard;
