import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Navbar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("✅ Logged out");
      navigate("/");
    } catch (error) {
      console.error("❌ Logout error:", error);
    }
  };

  const navLinks = (
    <>
      <Link to="/" className="hover:text-emerald-600">Home</Link>
      <Link to="/profile" className="hover:text-emerald-600">Profile</Link>
      <Link to="/cart" className="hover:text-emerald-600">Cart</Link>
      {!user ? (
        <>
          <Link to="/login" className="hover:text-emerald-600">Login</Link>
          <Link to="/signup" className="hover:text-emerald-600">Sign Up</Link>
        </>
      ) : (
        <button onClick={handleLogout} className="hover:text-red-600">Logout</button>
      )}
    </>
  );

  return (
    <div>
      {/* Sidebar (desktop only) */}
      <aside className="hidden md:flex flex-col w-64 h-screen bg-green-100 shadow-lg p-6 space-y-4 fixed">
        <h1 className="text-xl font-bold text-green-800 mb-6">🎟️ Ticketeer</h1>
        {navLinks}
      </aside>

      {/* Topbar (mobile only) */}
      <nav className="md:hidden bg-green-100 shadow-md flex justify-between items-center px-4 py-3">
        <h1 className="text-xl font-bold text-green-800">🎟️ Ticketeer</h1>
        <div className="space-x-4 text-sm">
          {navLinks}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;