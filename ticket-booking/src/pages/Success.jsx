import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-3xl font-bold text-green-800 mb-4">Thank you for your booking!</h1>
      <p className="text-gray-600">Your tickets have been saved to your profile.</p>
      <button
        onClick={handleBackToHome}
        className="mt-6 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded"
      >
        Back to Home
      </button>
    </div>
  );
};

export default Success;
