import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsCheckCircle, BsExclamationCircle } from "react-icons/bs";
import iconn from "../../img/iconn.png";

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [popup, setPopup] = useState({ show: false, type: "", message: "" });
  const navigate = useNavigate();

  // ✅ Only redirect if a valid user exists in localStorage
  useEffect(() => {
    const auth = localStorage.getItem("auth") === "true";
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (auth && storedUser?.email && storedUser?.password) {
      setIsAuthenticated(true);
      navigate("/Adminpanel/dashboard");
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    let storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      setPopup({ show: true, type: "error", message: "No user found. Please sign up first." });
      setTimeout(() => setPopup({ show: false, type: "", message: "" }), 2000);
      return;
    }

    if (storedUser.email === email && storedUser.password === password) {
      const currentTime = new Date().toLocaleString();

      if (!storedUser.registrationDate) {
        storedUser.registrationDate = currentTime;
      }

      storedUser.lastLogin = currentTime;
      storedUser.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      storedUser.locale = navigator.language || "en-US";

      localStorage.setItem("user", JSON.stringify(storedUser));
      localStorage.setItem("auth", "true");

      setIsAuthenticated(true);
      setPopup({ show: true, type: "success", message: "You have successfully logged in." });

      setTimeout(() => navigate("/Adminpanel/dashboard"), 1000);
    } else {
      setPopup({ show: true, type: "error", message: "Invalid credentials! Please try again." });
      setTimeout(() => setPopup({ show: false, type: "", message: "" }), 2000);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {popup.show && (
        <div
          className={`absolute right-10 top-10 px-4 py-4 shadow-xl border rounded-lg transition-all duration-300 w-[350px] z-[100]
            ${popup.type === "success" ? "bg-white border-gray-300" : "bg-red-100 border-red-400"}`}
          style={{
            opacity: popup.show ? 1 : 0,
            transform: popup.show ? "translateY(0)" : "translateY(-10px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          <div className="flex items-center gap-3">
            {popup.type === "success" ? (
              <BsCheckCircle className="text-green-500 text-2xl" />
            ) : (
              <BsExclamationCircle className="text-red-500 text-2xl" />
            )}
            <span className={`text-lg font-semibold ${popup.type === "success" ? "text-gray-800" : "text-red-700"}`}>
              {popup.type === "success" ? "Success!" : "Error!"}
            </span>
          </div>
          <p className={`mt-2 text-sm leading-relaxed ${popup.type === "success" ? "text-gray-600" : "text-red-600"}`}>
            {popup.message}
          </p>
        </div>
      )}

      <div className="bg-white px-8 py-10 rounded-lg shadow-2xl w-80 transform transition-all duration-300">
        <div className="flex justify-center mb-4">
          <img src={iconn} alt="Logo" className="w-30 h-14" />
        </div>
        <h2 className="text-[22px] font-bold mb-7 text-left text-gray-800">Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#00667C]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#00667C]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
          <button type="submit" className="w-full bg-[#00667C] text-white p-3 rounded mt-3 hover:bg-[#005060]">
            Login
          </button>
        </form>

        <div className="flex justify-between mt-3 text-sm">
          <button onClick={() => navigate("/Adminpanel/signup")} className="text-[#00667C] hover:underline">
            Create New Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
