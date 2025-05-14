import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import events from "../data/data";
import { useCart } from "../contexts/CartContext"; // You'll build CartContext soon

const EventDetails = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useCart(); // For adding to cart

  const event = events.find(e => e.id === parseInt(eventId));

  if (!event) return <p>Event not found</p>;

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: { ...event, quantity: 1 } });
    navigate("/cart");
  };

  return (
    <div className="event-details" style={{ padding: "2rem" }}>
      <h1>{event.title}</h1>
      <img src={event.thumbnail} alt={event.title} style={{ width: "100%", maxWidth: "600px", height: "auto", borderRadius: "8px" }} />
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Price per Ticket:</strong> ${event.price}</p>
      <p>{event.description}</p>

      {/* Add to Cart Button */}
      <button onClick={handleAddToCart} style={{ padding: "0.75rem 1.5rem", background: "#28a745", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
        Add to Cart
      </button>

      {/* Optional: Google Maps iframe */}
      {/* <iframe src="GOOGLE_MAPS_URL" width="600" height="450" allowFullScreen="" loading="lazy"></iframe> */}
    </div>
  );
};

export default EventDetails;
