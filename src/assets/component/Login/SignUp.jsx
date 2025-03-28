import { useState } from "react";
import { useNavigate } from "react-router-dom";
import iconn from "../../img/iconn.png";

const Signup = () => {
  const [name, setName] = useState(""); // New State for Name
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault(); // Prevent form submission

    if (!name || !email || !password) {
      alert("Please enter your name, email, and password.");
      return;
    }

    // Check if email contains '@'
    if (!email.includes("@")) {
      alert("Please enter a valid email address containing '@'.");
      return;
    }

    // Store user credentials in local storage
    const user = { name, email, password }; // Store Name
    localStorage.setItem("user", JSON.stringify(user));

    // Navigate to login page
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-6 rounded-lg shadow-md w-80 px-8 py-10">
        <div className="flex justify-center mb-4">
          <img src={iconn} alt="Logo" className="w-30 h-14" />
        </div>
        <h2 className="text-[22px] font-bold mb-7 text-left">Sign Up</h2>

        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Full Name"  // New Name Field
            className="w-full p-3 mb-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#00667C]"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#00667C]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#00667C]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="w-full bg-[#00667C] text-white p-2 rounded">
            Sign Up
          </button>
        </form>

        <button onClick={() => navigate("/login")} className="text-[#00667C] hover:underline mt-2 text-[14px]">
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default Signup;
