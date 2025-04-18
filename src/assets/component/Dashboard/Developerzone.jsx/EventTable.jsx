import React from "react";
import { Trash2 } from "lucide-react";

const EventTable = ({ data, onDelete }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <p className="text-center text-gray-500">No events added yet.</p>;
  }

  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">#</th>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Description</th> {/* ✅ Added */}
            <th className="px-4 py-2 border">Type</th>
            <th className="px-4 py-2 border">Limit</th>
            <th className="px-4 py-2 border">Interval</th>
            <th className="px-4 py-2 border">Device Page</th>
            <th className="px-4 py-2 border">Home Screen</th>
            <th className="px-4 py-2 border">Tag</th>
            <th className="px-4 py-2 border">Push</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Message</th>
            <th className="px-4 py-2 border">Exposed</th>
            <th className="px-4 py-2 border">Trigger</th>
            <th className="px-4 py-2 border">Action</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((event, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-2 border">{index + 1}</td>
              <td className="px-4 py-2 border">{event.name}</td>
              <td className="px-4 py-2 border">{event.description}</td> {/* ✅ Added */}
              <td className="px-4 py-2 border">{event.type}</td>
              <td className="px-4 py-2 border">{event.limit}</td>
              <td className="px-4 py-2 border">{event.interval}</td>
              <td className="px-4 py-2 border">{event.devicePage ? "Yes" : "No"}</td>
              <td className="px-4 py-2 border">{event.homeScreen ? "Yes" : "No"}</td>
              <td className="px-4 py-2 border">{event.tag}</td>
              <td className="px-4 py-2 border">{event.push ? "✔️" : "❌"}</td>
              <td className="px-4 py-2 border">{event.email ? "✔️" : "❌"}</td>
              <td className="px-4 py-2 border">{event.message}</td>
              <td className="px-4 py-2 border">{event.exposedToAutomations ? "Yes" : "No"}</td>
              <td className="px-4 py-2 border">{event.triggerCondition}</td>
              <td className="px-4 py-2 border">{event.actionToPerform}</td>
              <td className="px-4 py-2 border text-red-600">
                <button onClick={() => onDelete(index)} className="hover:text-red-800">
                  <Trash2 size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventTable;
