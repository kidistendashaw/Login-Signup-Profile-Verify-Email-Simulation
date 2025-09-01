import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (name && email && password) {
      const user = { name, email, password, verified: false };
      localStorage.setItem("user", JSON.stringify(user));
      navigate(`/verify-email/${email}`);
    } else {
      setMessage("Please fill all fields.");
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      {message && <p className="text-green-500">{message}</p>}
      <button
        onClick={handleSignup}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Sign Up
      </button>
    </div>
  );
};

export default Signup;
