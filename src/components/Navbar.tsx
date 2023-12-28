import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-purple-500 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">Portfolio App</div>
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/"
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/contacts"
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/ProjectsDetails"
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                ProjectsDetails
              </Link>
            </li>
            <li>
              <Link
                to="/ProjectsShowcase"
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                ProjectShowcase
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
