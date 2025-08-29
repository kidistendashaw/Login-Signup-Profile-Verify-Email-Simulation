import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile: React.FC = () => {
  const [user, setUser] = useState({
    name: "Test User",
    email: "test@gmail.com",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 mt-4 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
