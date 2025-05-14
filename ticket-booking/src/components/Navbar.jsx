import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      <div className="text-xl font-bold">
        🎟️ TicketBooking
      </div>
      <div className="space-x-6 hidden md:flex">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/cart" className="hover:text-yellow-300">Cart</Link>
        <Link to="/profile" className="hover:text-yellow-300">Profile</Link>
        <Link to="/login" className="hover:text-yellow-300">Login</Link>
      </div>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
