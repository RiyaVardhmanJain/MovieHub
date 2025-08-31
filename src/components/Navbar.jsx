import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center ">
          <Link to="/" className="text-white text-2xl font-bold">MovieHub</Link>
          <div className="flex space-x-6">
            <Link
              to="/home"
              className="text-white hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              to="/favourites"
              className="text-white hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              Favourites
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
