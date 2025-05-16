import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Navbar />

      <main className="flex-1 md:ml-64 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

