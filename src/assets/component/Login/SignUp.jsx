import { useState } from "react";
import { useNavigate } from "react-router-dom";
import iconn from "../../img/iconn.png";

const Signup = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    const trimmedEmail = email.trim();
    
    if (!trimmedEmail) {
      alert("Email cannot be empty.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(trimmedEmail)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Check if the email is already registered
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.email === trimmedEmail) {
      alert("This email is already registered. Please log in.");
      navigate("/login");
      return;
    }

    localStorage.setItem("tempEmail", trimmedEmail);
    navigate("/set-password");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      
      <div className="bg-white p-6 rounded-lg shadow-md w-80 px-8 py-10">
      <div className="flex justify-center mb-4">
                <img src={iconn} alt="Logo" className="w-30 h-14" />
              </div>
        <h2 className="text-[22px] font-bold mb-7 text-left text-gray-800">Sign Up</h2>
        <input
          type="email"
          placeholder="Enter Email"
          className="w-full p-2 mb-3 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button 
          onClick={handleSignup} 
          className="w-full bg-[#00667C] text-white p-2 rounded"
        >
          Next
        </button>
        <button 
          onClick={() => navigate("/login")} 
          className="text-[#00667C] hover:underline mt-2 text-[14px]"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default Signup;
