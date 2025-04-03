import { useState } from "react";
import { MagnifyingGlassIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Card, CardHeader, Typography, CardBody } from "@material-tailwind/react";
import EditTag from "./EditTag"; // Ensure EditTag is correctly imported
import { Search } from "lucide-react"; // Default icon

const ICONS = { Search }
const TABLE_HEAD = ["", "Id", "Tag Name", "Color", "Owner", "Actions"];

const TABLE_ROWS = [
  {
    empty: "",
    ID: "8017",
    name: "Yumna",
    colour: "bg-blue-500",
    owner: "Yumna[You]",
  },
  {
    empty: "",
    ID: "8020",
    name: "ui",
    colour: "bg-purple-500",
    owner: "Yumna[You]",
  },
  {
    empty: "",
    ID: "8024",
    name: "Yumna1",
    colour: "bg-red-500",
    owner: "Yumna[You]",
  },
];

export function Table() {
  const [search, setSearch] = useState("");
  const [isTagOpen, setIsTagOpen] = useState(false);
  const [tableRows, setTableRows] = useState(TABLE_ROWS);
  const [selectedRow, setSelectedRow] = useState(null);
  const [tags, setTags] = useState([
    { name: "Sample Tag", colour: "bg-blue-500", icon: "" },
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);
  const filteredRows = tableRows.filter((row) =>
    row.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleRowClick = (row) => {
    setSelectedRow(row);
    setIsTagOpen(true);
  };

  // const handleSaveTag = (updatedTag) => {
  //   setTableRows((prevRows) =>
  //     prevRows.map((row) =>
  //       row.ID === selectedRow.ID ? { ...row, ...updatedTag } : row
  //     )
  //   );
  //   setIsTagOpen(false);
  //   setSelectedRow(null);
  // };
const handleSaveTag = (updatedTag) => {
  setTableRows((prevRows) =>
    prevRows.map((row) =>
      row.ID === selectedRow.ID ? { ...row, ...updatedTag } : row
    )
  );
  setIsTagOpen(false);
  setSelectedRow(null);
};

  
  const handleEdit = (tag) => {
    setSelectedTag(tag);
    setIsEditing(true);
  };

  const handleSave = (updatedTag) => {
    setTags((prevTags) =>
      prevTags.map((tag) => (tag.name === selectedTag.name ? updatedTag : tag))
    );
    setIsEditing(false);
  };
  return (
    <>
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
                    <Typography variant="small" className="text-black opacity-70">
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
  {filteredRows.map((row) => {
    // Check if icon exists
    const IconComponent = row.icon && ICONS[row.icon] ? ICONS[row.icon] : null;

    return (
      <tr
        key={row.ID}
        className="hover:bg-gray-100 cursor-pointer"
        onClick={() => handleRowClick(row)}
      >
        <td className="p-4">
          {IconComponent ? <IconComponent className="w-6 h-6 text-gray-700" /> : ""}
        </td>
        <td className="p-4">{row.ID}</td>
        <td className="p-4">{row.name}</td>
        <td className="p-4">
          <div className={`w-8 h-8 rounded ${row.colour}`}></div>
        </td>
        <td className="p-4">{row.owner}</td>
        <td className="p-4">
          <HiOutlineDotsHorizontal />
        </td>
      </tr>
    );
  })}
</tbody>

          </table>
        </CardBody>
      </Card>

      {isTagOpen && (
        <EditTag
          onSave={handleSaveTag}
          onClose={() => setIsTagOpen(false)}
          initialData={selectedRow} // Passing the selected row to EditTag
        />
      )}
    </>
  );
}
