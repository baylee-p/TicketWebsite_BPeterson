import React, { useState } from "react";
import events from "../data/data";
import { Link } from "react-router-dom";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedEvents = [...filteredEvents].sort((a, b) => {
    if (sortOption === "priceAsc") return a.price - b.price;
    if (sortOption === "priceDesc") return b.price - a.price;
    if (sortOption === "dateAsc") return new Date(a.date) - new Date(b.date);
    if (sortOption === "dateDesc") return new Date(b.date) - new Date(a.date);
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>

      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 w-full"
        />

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 w-full"
        >
          <option value="">Sort by</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
          <option value="dateAsc">Date: Soonest First</option>
          <option value="dateDesc">Date: Latest First</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedEvents.map(event => (
          <div key={event.id} className="bg-white rounded-lg shadow hover:shadow-lg transition">
            <img
              src={event.thumbnail}
              alt={event.title}
              className="rounded-t-lg h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-gray-500 text-sm">{event.date} | {event.location}</p>
              <p className="font-bold mt-2">${event.price}</p>
              <Link
                to={`/event/${event.id}`}
                className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
