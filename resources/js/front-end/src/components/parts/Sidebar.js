import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="bg-gray-800 shadow-neutral-800 shadow-lg text-white w-2/12 fixed top-14 left-0 bottom-0 z-10 py-8 px-4">
      <ul className="flex flex-col items-center space-y-4 mt-8">
        <li className="w-44 py-2 text-center rounded-full bg-gray-900 hover:bg-gray-700 ">
          <Link
            to="/"
            className="text-white font-bold"
            activeClassName="bg-gray-900"
          >
            Home
          </Link>
        </li>
        <li className="w-44 py-2 text-center rounded-full bg-gray-900 hover:bg-gray-700">
          <Link
            to="/publications"
            className="text-white font-bold"
            activeClassName="bg-gray-900"
          >
            Publications
          </Link>
        </li>
        <li className="w-44 py-2 text-center rounded-full bg-gray-900 hover:bg-gray-700">
          <Link
            to="/publications/create"
            className="text-white font-bold"
            activeClassName="bg-gray-900"
          >
            Create
          </Link>
        </li>
        <li className="w-44 py-2 text-center rounded-full bg-gray-900 hover:bg-gray-700">
          <Link
            to="/"
            className="text-white font-bold"
            activeClassName="bg-gray-900"
          >
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
