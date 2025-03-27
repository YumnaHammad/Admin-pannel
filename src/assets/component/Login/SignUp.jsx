import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    localStorage.setItem("tempEmail", email);
    navigate("/set-password");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-6 rounded-lg shadow-md w-80  px-8 py-10">
        <h2 className="text-[22px] font-bold mb-7 text-left">Sign Up</h2>
        <input
          type="email"
          placeholder="Enter Email"
          className="w-full p-2 mb-3 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSignup} className="w-full bg-[#00667C] text-white p-2 rounded">Next</button>
        <button onClick={() => navigate("/login")} className="text-[#00667C] hover:underline mt-2 text-[14px] ">Back to Login</button>
      </div>
    </div>
  );
};

export default Signup;
