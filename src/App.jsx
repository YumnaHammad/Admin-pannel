import "./App.css";
import Navbar from "./assets/component/Navbar/Navbar";
import Sidebar from "./assets/component/Siderbar/Sidebar";
import Main from "./assets/component/Main/Main";

function App() {
  return (
    <div className="flex bg-[#F2F4F7] h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="my-2 me-2">
        <Navbar />
        <Main/>
     
        </div>
      </div>
    </div>
  );
}

export default App;