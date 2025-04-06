import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
} from "@material-tailwind/react";
import EditTag from "./EditTag";
import { VscBlank } from "react-icons/vsc";
import {
  ChartArea,
  ChartColumnBig,
  ChartLine,
  Info,
  BatteryLow,
  Equal,
  QrCode,
  Cast,
  Webhook,
  House,
  HousePlug,
  HouseWifi,
  Bath,
  Paintbrush,
  PaintbrushVertical,
  Bed,
  Sofa,
  RockingChair,
  Building,
  Hospital,
  Pencil,
  Search,
  Home,
  Star,
  Heart,
  Folder,
} from "lucide-react";
const ICONS = {
  VscBlank,
  ChartArea,
  ChartColumnBig,
  ChartLine,
  Info,
  BatteryLow,
  Equal,
  QrCode,
  Cast,
  Webhook,
  House,
  HousePlug,
  HouseWifi,
  Bath,
  Paintbrush,
  PaintbrushVertical,
  Bed,
  Sofa,
  RockingChair,
  Building,
  Hospital,
  Pencil,
  Search,
  Home,
  Star,
  Heart,
  Folder,
};
import { Keyboard } from "lucide-react";
import { Trash } from "lucide-react";
import NoTag from "./NoTag";
import AddTag from "./AddTag";
const TABLE_HEAD = ["", "Id", "Tag Name", "Color", "Owner", "Actions"];

export function Table({ rows, onUpdateTags, onRefresh }) {
  const [search, setSearch] = useState("");
  const [isTagOpen, setIsTagOpen] = useState(false);
  const [tableRows, setTableRows] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);
  const [hoveredRowId, setHoveredRowId] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [rowToDelete, setRowToDelete] = useState(null);
  const [tags, setTags] = useState([]);
  const filteredRows = tableRows.filter((row) =>
    row.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSaveTag = (updatedTag) => {
    const storedTags = JSON.parse(localStorage.getItem("tags")) || [];
    const updatedTags = storedTags.map((tag) =>
      tag.id === updatedTag.id ? { ...tag, ...updatedTag } : tag
    );
    localStorage.setItem("tags", JSON.stringify(updatedTags));
  
    setIsTagOpen(false);
    setSelectedRow(null);
    setRefreshKey((prev) => prev + 1); // ✅ will re-trigger useEffect
  };
  const handleAddTagModalClose = () => {
    setShowAddModal(false);  // This will close the modal
  };
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedTags = JSON.parse(localStorage.getItem("tags")) || [];

    if (storedUser?.name) {
      const userTags = storedTags.filter(
        (tag) => tag.owner === storedUser.name
      );
      setTableRows(userTags);
    }
  }, [refreshKey]);
  const [showAddModal, setShowAddModal] = useState(false);
  const handleDelete = (id) => {
    const updatedRows = tableRows.filter((row) => row.id !== id);
    setTableRows(updatedRows);

    const storedTags = JSON.parse(localStorage.getItem("tags")) || [];
    const updatedTags = storedTags.filter((tag) => tag.id !== id);
    localStorage.setItem("tags", JSON.stringify(updatedTags));
    onRefresh();
  };
  const handleRefresh = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedTags = JSON.parse(localStorage.getItem("tags")) || [];
    if (storedUser?.name) {
      const userTags = storedTags.filter(
        (tag) => tag.owner === storedUser.name
      );
      setTableRows(userTags);
    }
  };
  const handleTagCreated = () => {
    setRefreshKey((prev) => prev + 1);
    handleRefresh();  // Call the refresh function here
  };
  
  return (
    <>
    {tableRows.length === 0 ? (
      <NoTag onTagCreated={() => setRefreshKey((prev) => prev + 1)} />
    ) : (
    <>
          <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-4">Tags</h2>
        <button
          className="bg-green-300 text-black font-bold px-6 rounded-md hover:bg-green-400 transition h-9"
          onClick={() => setShowAddModal(true)}
        >
          <span className="text-lg">+</span>
          <span>Add Tag</span>
        </button>
      </div>
      <Card className="h-full w-full" shadow={false}>
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search tag"
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded-md focus:outline-none"
            />
            <MagnifyingGlassIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </CardHeader>
        <CardBody className="px-0">
        
              <table className="mt-4 w-full min-w-max table-auto text-left">
                <thead className="bg-gray-100">
                  <tr>
                    {TABLE_HEAD.map((head) => (
                      <th key={head} className="cursor-pointer p-4">
                        <Typography
                          variant="small"
                          className="text-black opacity-70"
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredRows.map((row) => {
                    const IconComponent = ICONS[row.icon]
                      ? ICONS[row.icon]
                      : VscBlank;

                    return (
                      <tr
                        key={row.id}
                        className="hover:bg-gray-100 cursor-pointer"
                        onClick={(e) => {
                          // Prevent opening edit modal if the click is from inside the actions menu
                          if (!e.target.closest(".dropdown-actions")) {
                            setSelectedRow(row);
                            setIsTagOpen(true);
                          }
                        }}
                      >
                        <td className="p-4">
                          <IconComponent className="w-6 h-6 text-gray-700" />
                        </td>
                        <td className="p-4">{row.id}</td>
                        <td className="p-4">{row.name}</td>
                        <td className="p-4">
                          <div
                            className={`w-8 h-8 rounded ${row.colour}`}
                          ></div>
                        </td>
                        <td className="p-4">{row.owner}</td>
                        <td className="p-4">
                          <div
                            className="relative group dropdown-actions"
                            onMouseEnter={() => setHoveredRowId(row.id)}
                            onMouseLeave={() => setHoveredRowId(null)}
                          >
                            <button className="bg-green-100 p-2 rounded-md">
                              <HiOutlineDotsHorizontal size={18} />
                            </button>

                            {hoveredRowId === row.id && (
                              <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-10">
                                <ul className="text-sm text-gray-700 py-1">
                                  <li
                                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => {
                                      setSelectedRow(row);
                                      setIsTagOpen(true);
                                    }}
                                  >
                                    <Keyboard size={14} />
                                    Edit
                                  </li>
                                  <li
                                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-red-600 cursor-pointer"
                                    onClick={() => {
                                      setRowToDelete(row);
                                      setShowDeleteConfirm(true);
                                    }}
                                  >
                                    <Trash size={14} />
                                    Delete
                                  </li>
                                  {showDeleteConfirm && (
                                    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
                                      <div className="bg-white rounded-lg shadow-lg p-6 w-[300px]">
                                        <div className="flex items-center mb-4">
                                          <div className="text-red-600 mr-2">
                                            ❗
                                          </div>
                                          <p className="text-gray-800">
                                            Are you sure you want to delete
                                            this?
                                          </p>
                                        </div>
                                        <div className="flex justify-end gap-2">
                                          <button
                                            onClick={() =>
                                              setShowDeleteConfirm(false)
                                            }
                                            className="px-4 py-2 text-green-700 bg-green-100 rounded hover:bg-green-200"
                                          >
                                            Cancel
                                          </button>
                                          <button
                                            onClick={() => {
                                              handleDelete(rowToDelete.id);
                                              setShowDeleteConfirm(false);
                                              setRowToDelete(null);
                                            }}
                                            className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                                          >
                                            Delete
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </ul>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>{" "}
        </CardBody>
      </Card>
      {isTagOpen && (
        <EditTag
          onSave={handleSaveTag}
          onClose={() => setIsTagOpen(false)}
          initialData={selectedRow}
        />
      )}
    </>   )}  {showAddModal && (
        <AddTag className="z-[90]"
          onClose={() => setShowAddModal(false)}
          onSave={() => {
            handleTagCreated();
            setShowAddModal(false);
            
          }}
          onRefresh={handleRefresh} 
        />
      )}</>
  );
}
