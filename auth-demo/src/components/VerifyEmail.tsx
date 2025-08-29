import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const VerifyEmail: React.FC = () => {
  const { token } = useParams<{ token: string }>();
  const [message, setMessage] = useState("Verifying...");
  const navigate = useNavigate();

  useEffect(() => {
    if (token === "1234") {
      setMessage("Email verified successfully!");
      setTimeout(() => navigate("/login"), 1500);
    } else {
      setMessage("Invalid or expired token.");
    }
  }, [token]);

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Verify Email</h2>
      <p>{message}</p>
    </div>
  );
};

export default VerifyEmail;
