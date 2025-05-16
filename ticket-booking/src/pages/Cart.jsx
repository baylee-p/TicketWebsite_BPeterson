import React from "react";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../utils/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Cart = () => {
  const { cartState, dispatch, total } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleQuantityChange = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity: parseInt(quantity) } });
  };

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const handleCheckout = async () => {
    if (!user || cartState.items.length === 0) {
      console.warn("❗ Cannot checkout. No user or empty cart.");
      return;
    }

    try {
      const bookingData = {
        userId: user.uid,
        items: cartState.items,
        createdAt: serverTimestamp(),
      };

      const docRef = await addDoc(collection(db, "bookings"), bookingData);
      console.log("✅ Booking saved with ID:", docRef.id);

      dispatch({ type: "CLEAR_CART" });
      navigate("/success");
    } catch (error) {
      console.error("❌ Error saving booking:", error);
    }
  };

  if (cartState.items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold text-green-800 mb-4">Your Cart</h1>
        <p className="text-gray-600">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Your Cart</h1>

      <div className="space-y-4">
        {cartState.items.map(item => (
          <div key={item.id} className="flex items-center justify-between border-b pb-4">
            <div>
              <h3 className="text-xl font-semibold text-green-700">{item.title}</h3>
              <p className="text-gray-500 text-sm">${item.price} per ticket</p>
            </div>

            <div className="flex items-center space-x-4">
              <input
                type="number"
                value={item.quantity}
                min="1"
                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                className="w-16 border border-green-300 rounded px-2 py-1 text-center focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                onClick={() => handleRemove(item.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-emerald-600">Total: ${total}</h2>
        <button
          onClick={handleCheckout}
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded text-lg"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
