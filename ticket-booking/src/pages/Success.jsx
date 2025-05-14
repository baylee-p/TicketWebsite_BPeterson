import React, { useEffect } from "react";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../utils/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const { cartState, dispatch } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const saveBooking = async () => {
      if (!user || cartState.items.length === 0) return;

      try {
        const bookingData = {
          userId: user.uid,
          items: cartState.items,
          createdAt: serverTimestamp(),
        };

        await addDoc(collection(db, "bookings"), bookingData);
        dispatch({ type: "CLEAR_CART" });
        console.log("Booking saved successfully.");
      } catch (err) {
        console.error("Error saving booking:", err);
      }
    };

    saveBooking();
  }, [user, cartState.items, dispatch]);

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-400 to-blue-500 text-white text-center px-4">
      <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4">🎉 Booking Confirmed!</h1>
        <p className="mb-6">Thank you for your booking. Your tickets have been saved to your profile.</p>
        <button
          onClick={handleBackToHome}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Success;
