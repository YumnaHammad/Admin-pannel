import { useState, useEffect } from "react";
import { Popover } from "@headlessui/react";
import { ChartArea,ChartColumnBig ,ChartLine,Info,BatteryLow,Equal,QrCode,Cast,Webhook,House,HousePlug,HouseWifi,Bath,Paintbrush,PaintbrushVertical ,Bed,Sofa,RockingChair,Building,Hospital,Pencil,Search, Home, Star, Heart, Folder } from "lucide-react"; 

export default function EditTag({ onClose = () => {}, onSave = () => {}, initialData }) {
  const [tagName, setTagName] = useState(initialData?.name || "");
  const [setIcon, setSetIcon] = useState(initialData?.icon || "");
  const [tagColor, setTagColor] = useState(initialData?.colour || "bg-blue-500");
  const [isIconModalOpen, setIsIconModalOpen] = useState(false);
  const [error, setError] = useState(""); 
  const [selectedIcon, setSelectedIcon] = useState("Search");
const ICONS = {
  ChartArea,ChartColumnBig,ChartLine,Info,BatteryLow,Equal,QrCode,Cast,Webhook,House,HousePlug,HouseWifi,Bath,Paintbrush,PaintbrushVertical,Bed,Sofa,RockingChair,Building,Hospital,Pencil,Search,
  Home,
  Star,
  Heart,
  Folder,
};

  useEffect(() => {
    if (initialData) {
      setTagName(initialData.name || "");
      setTagColor(initialData.colour || "bg-blue-500");
      setSetIcon(initialData.icon || "");
    }
  }, [initialData]);

  const handleSave = () => {
    if (!tagName.trim()) {
      setError("Tag name can't be empty");
      return;
    }
  
    onSave({
      icon: setIcon, 
      name: tagName,
      colour: tagColor,
    });
  
    onClose();
  };
  
  const [selectedTag, setSelectedTag] = useState(null);
  const themeColors = ["bg-red-500", "bg-green-500", "bg-blue-500", "bg-orange-500", "bg-black"];
  const complementaryColors = ["bg-purple-500", "bg-yellow-500", "bg-teal-500"];
  const neutralColors = ["bg-gray-200", "bg-gray-400", "bg-gray-600"];
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[40%]">
        <h2 className="mb-2 text-2xl font-semibold">Edit Tag</h2>
        <p className="text-gray-600 mb-4">You can rename the tag and change its color.</p>
        <div className="mb-4 flex items-center space-x-4">
  <button
    className="border p-2 rounded flex items-center space-x-2"
    onClick={() => setIsIconModalOpen(true)}
    onChange={(e) => {
      setSetIcon(e.target.value);
      setError("");
    }}
  >
    <SelectedIconComponent className="w-6 h-6 text-gray-700" />
    <span>Select Icon</span>
  </button>
</div>

        {/* Tag Name Input */}
        <div className="mb-4">
          <input
            type="text"
            className={`border p-2 rounded w-full ${error ? "border-red-500" : "border-gray-300"}`}
            value={tagName}
            onChange={(e) => {
              setTagName(e.target.value);
              setError("");
            }}
            placeholder="Tag Name"
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
 <Popover className="relative">
  <Popover.Button className={`w-8 h-8 rounded ${tagColor} border`}></Popover.Button>
  <Popover.Panel className="absolute z-10 bg-white shadow-lg p-4 border rounded-md mt-2 w-[300px]">
    <div>
      <h4 className="text-sm font-medium mb-2">Theme Colors</h4>
      <div className="grid grid-cols-6 gap-2 mb-2">
        {themeColors.map((color) => (
          <button 
            key={color} 
            className={`w-8 h-8 rounded ${color}`} 
            onClick={() => setTagColor(color)} 
          />
        ))}
      </div>
      <h4 className="text-sm font-medium mb-2">Complementary</h4>
      <div className="grid grid-cols-6 gap-2 mb-2">
        {complementaryColors.map((color) => (
          <button 
            key={color} 
            className={`w-8 h-8 rounded ${color}`} 
            onClick={() => setTagColor(color)} 
          />
        ))}
      </div>
      <h4 className="text-sm font-medium mb-2">Neutrals</h4>
      <div className="grid grid-cols-6 gap-2">
        {neutralColors.map((color) => (
          <button 
            key={color} 
            className={`w-8 h-8 rounded ${color} border`} 
            onClick={() => setTagColor(color)} 
          />
        ))}
      </div>
    </div>
  </Popover.Panel>
</Popover>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-2 mt-4">
          <button className="px-4 py-2 bg-gray-200 rounded text-gray-700" onClick={onClose}>
            Cancel
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded" onClick={handleSave}>
            Done
          </button>
        </div>
      </div>
      {isIconModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[50%] max-h-[80vh] overflow-auto">
            <h2 className="text-xl font-semibold mb-4">Select an Icon</h2>
            
            <div className="grid grid-cols-5 gap-4">
              {Object.keys(ICONS).map((iconName) => {
                const IconComponent = ICONS[iconName];
                return (
                  <button
                    key={iconName}
                    className="w-12 h-12 flex items-center justify-center border rounded hover:bg-gray-100"
                    onClick={() => {
                      setSelectedIcon(iconName);
                      setIsIconModalOpen(false);
                    }}
                  >
                    <IconComponent className="w-6 h-6 text-gray-700" />
                  </button>
                );
              })}
            </div>

            <div className="flex justify-end mt-4">
              <button className="px-4 py-2 bg-gray-200 rounded text-gray-700" onClick={() => setIsIconModalOpen(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
