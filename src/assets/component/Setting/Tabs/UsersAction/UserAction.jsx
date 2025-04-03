import React, { useState } from "react";
import { SlidersVertical } from 'lucide-react';
import { Dot } from 'lucide-react';
const UserAction = () => {
  const [timeFilter, setTimeFilter] = useState("1h");

  const logs = [
    { time: "11:08:56 AM", user: "Yumna", client: "WEB-0...", action: "Web get org a...", status: 299, ip: "144.48.13..." },
    { time: "11:08:55 AM", user: "Yumna", client: "WEB-0...", action: "Web get org a...", status: 299, ip: "144.48.13..." },
    { time: "11:08:54 AM", user: "Yumna", client: "WEB-0...", action: "Web get org a...", status: 299, ip: "144.48.13..." },
    { time: "11:08:49 AM", user: "Yumna", client: "WEB-0...", action: "Web get org a...", status: 299, ip: "144.48.13..." },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">User actions log</h2>
      <div className="flex  mb-4 bg-gray-300 rounded py-1 px-1">
        {["1h", "6h", "1d", "1w", "1mo", "3mo", <SlidersVertical />].map((filter) => (
          <button
            key={filter}
            className={`px-5 py-1  flex ${
              timeFilter === filter ? "bg-white text-black" : ""
            }`}
            onClick={() => setTimeFilter(filter)}
          >
            {filter} 
            {filter > 0 && ( // Show dot for last three rows
                  <span className="w-3 h-3 border-2 border-gray-600 rounded-full inline-block"></span>
                )}
          </button>
        ))}
      </div>
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2">Time</th>
            <th className="border px-4 py-2">User</th>
            <th className="border px-4 py-2">Client</th>
            <th className="border px-4 py-2">Action</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">IP Address</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index} className="border">
              <td className="border px-4 py-2">{log.time}</td>
              <td className="border px-4 py-2">{log.user}</td>
              <td className="border px-4 py-2">{log.client}</td>
              <td className="border px-4 py-2">{log.action}</td>
              <td className="border px-4 py-2">{log.status}</td>
              <td className="border px-4 py-2">{log.ip}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserAction;