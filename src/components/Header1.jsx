// SearchBar.js
import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

const Header1 = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownlangOpen, setDropdownlangOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const togglelangDropdown = () => {
    setDropdownlangOpen(!isDropdownlangOpen);
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-center mt-5">
      <div className="w-full md:w-5/12  mx-auto mb-4 md:mb-0">
        <div className="flex items-center border-2 border-blue-500 rounded-lg">
          {/* Search Input */}
          <input
            type="text"
            className="w-full p-2 focus:outline-none"
            placeholder="What wish genie have to fulfill ....."
          />
          {/* Dropdown */}
          <div className="relative inline-block ml-2">
            <button
              onClick={toggleDropdown}
              className="whitespace-nowrap text-gray-700 py-2 px-4 rounded inline-flex items-center"
            >
              All categories
              <svg
                className="h-5 w-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {/* Dropdown Content */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 max-h-48 overflow-y-auto bg-white border rounded-lg shadow-lg">
                {/* Dropdown items go here */}
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Option 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Option 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Option 3
                </a>
              </div>
            )}
          </div>
          {/* Search Button */}
          <button className="ml-2 bg-blue-500 text-white text-4xl py-2 px-4 rounded">
            <IoSearchSharp />
          </button>
        </div>
      </div>

      {/* Language selection Dropdown */}
      <div className="relative w-full md:w-2/12 md:ml-2 border border-blue-500 rounded-lg">
        <div className="relative inline-block">
          <button
            onClick={togglelangDropdown}
            className="whitespace-nowrap text-xl py-3 px-4 rounded inline-flex items-center"
          >
            All languages
            <svg
              className="h-7 w-5 ml-20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          {/* Dropdown Content */}
          {isDropdownlangOpen && (
            <div className="absolute right-0 mt-2 w-48 max-h-48 overflow-y-auto bg-white border rounded-lg shadow-lg">
              {/* Dropdown items go here */}
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Option 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Option 2
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Option 3
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header1;
