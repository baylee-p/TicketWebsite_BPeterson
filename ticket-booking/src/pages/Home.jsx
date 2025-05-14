import React, { useState } from "react";
import events from "../data/data";
import { Link } from "react-router-dom";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  // Filter by search term
  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort events based on selected option
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    if (sortOption === "priceAsc") return a.price - b.price;
    if (sortOption === "priceDesc") return b.price - a.price;
    if (sortOption === "dateAsc") return new Date(a.date) - new Date(b.date);
    if (sortOption === "dateDesc") return new Date(b.date) - new Date(a.date);
    return 0;
  });

  return (
    <div className="container">
      <h1>Upcoming Events</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search events..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "0.5rem", marginBottom: "1rem", width: "100%" }}
      />

      {/* Sort Dropdown */}
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        style={{ padding: "0.5rem", marginBottom: "1rem", width: "100%" }}
      >
        <option value="">Sort by</option>
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDesc">Price: High to Low</option>
        <option value="dateAsc">Date: Soonest First</option>
        <option value="dateDesc">Date: Latest First</option>
      </select>

      {/* Event Cards */}
      <div className="event-grid" style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}>
        {sortedEvents.map(event => (
          <div key={event.id} className="event-card" style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "1rem" }}>
            <img src={event.thumbnail} alt={event.title} style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "4px" }} />
            <h3>{event.title}</h3>
            <p>{event.date} | {event.location}</p>
            <p>${event.price}</p>
            <Link to={`/event/${event.id}`} style={{ textDecoration: "none", color: "white", background: "#007bff", padding: "0.5rem 1rem", borderRadius: "4px" }}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
