import React from "react";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartState, dispatch, total } = useCart();
  const navigate = useNavigate();

  const handleQuantityChange = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity: parseInt(quantity) } });
  };

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const handleCheckout = () => {
    // In real app, you'd save booking to Firebase here
    dispatch({ type: "CLEAR_CART" });
    navigate("/success");
  };

  if (cartState.items.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div className="cart-page" style={{ padding: "2rem" }}>
      <h1>Your Cart</h1>

      {cartState.items.map(item => (
        <div key={item.id} style={{ borderBottom: "1px solid #ccc", padding: "1rem 0" }}>
          <h3>{item.title}</h3>
          <p>${item.price} per ticket</p>

          <label>
            Quantity:{" "}
            <input
              type="number"
              value={item.quantity}
              min="1"
              onChange={(e) => handleQuantityChange(item.id, e.target.value)}
              style={{ width: "50px" }}
            />
          </label>

          <button onClick={() => handleRemove(item.id)} style={{ marginLeft: "1rem", background: "#dc3545", color: "white", border: "none", padding: "0.5rem 1rem", borderRadius: "4px" }}>
            Remove
          </button>
        </div>
      ))}

      <h2>Total: ${total}</h2>

      <button onClick={handleCheckout} style={{ padding: "0.75rem 1.5rem", background: "#28a745", color: "white", border: "none", borderRadius: "4px" }}>
        Checkout
      </button>
    </div>
  );
};

export default Cart;
