import { useState } from "react";
import { Megaphone, X } from "lucide-react";

const newsData = [
  {
    date: "Feb 28, 2025",
    title: "📹 Watch Demo: New Dashboards in Action!",
    description: "Learn how you can now segment, aggregate, analyze, and manage data from all devices in a single place.",
    image: "https://via.placeholder.com/300x150",
    buttonText: "Watch now",
  },
  {
    date: "Feb 26, 2025",
    title: "🟢 New Device Connection Status Setting!",
    description: "You can now monitor device connectivity status with enhanced features.",
    image: "https://via.placeholder.com/300x150",
  },
  {
    date: "Feb 22, 2025",
    title: "🚀 AI-Powered Alerts for Smart Monitoring!",
    description: "New AI-based alerts provide real-time monitoring for your devices.",
    image: "https://via.placeholder.com/300x150",
    buttonText: "Learn More",
  },
  {
    date: "Feb 20, 2025",
    title: "📊 Advanced Data Analytics Now Available!",
    description: "Get deeper insights with new analytics features in your dashboard.",
    image: "https://via.placeholder.com/300x150",
  },
  {
    date: "Feb 18, 2025",
    title: "🔧 Scheduled Maintenance Update",
    description: "Upcoming maintenance for better performance and reliability.",
    image: "https://via.placeholder.com/300x150",
  },
];

const NewsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
       <div className="relative">
      {/* Button to open dropdown */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-1 hover:bg-gray-100 rounded-full mx-2 relative"
      >
        <Megaphone size={20} className="text-gray-500 cursor-pointer hover:text-gray-700" />
      </button>

      {/* Overlay to Lighten Background */}
    {/* Overlay to Lighten Background */}
{isOpen && (
  <div
    className="fixed inset-0 bg-black bg-opacity-30 z-40"
    onClick={() => setIsOpen(false)}
  ></div>
)}

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="fixed top-16 right-0 w-96 bg-white shadow-lg rounded-lg p-4 z-50">
          {/* Arrow at the top */}
          <div className="absolute -top-2 ml-[190px] w-4 h-4 bg-white border-t border-l border-gray-200 rotate-45"></div>

          {/* Header with Fixed "Latest News" and Close Button */}
          <div className="flex justify-between items-center border-b pb-2 sticky top-0 bg-white z-10">
            <h2 className="text-lg font-bold">📢 Latest News</h2>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5 text-gray-600 hover:text-gray-800" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="mt-3 max-h-[458px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 space-y-4">
            {newsData.map((news, index) => (
              <div key={index} className="bg-gray-50 p-3 rounded-lg shadow-sm">
                <span className="text-sm text-gray-500">{news.date}</span>
                <h3 className="font-semibold mt-1">{news.title}</h3>
                <img src={news.image} alt="News" className="w-full rounded-md mt-2" />
                <p className="text-sm text-gray-600 mt-2">{news.description}</p>
                {news.buttonText && (
                  <button className="mt-2 bg-green-500 text-white px-3 py-1 rounded text-sm">
                    {news.buttonText}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      </div>
    </>
  );
};

export default NewsDropdown;
