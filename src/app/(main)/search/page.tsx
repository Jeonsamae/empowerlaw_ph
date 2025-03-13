import React from "react";
import { FaSearch, FaSlidersH } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 mt-12">
      {/* Heading */}
      <h1 className="text-2xl md:text-3xl font-semibold text-blue-900 font-poppins dark:text-white">
        Empower Yourself with{" "}
        <span className="text-blue-700">Legal Knowledge</span>
      </h1>
      <p className="text-gray-600 italic text-sm md:text-base mt-1 dark:text-white">
        Search for legal resources and learn your rights as a Filipino.
      </p>

      {/* Search Bar */}
      <div className="relative flex items-center w-full max-w-[800px] md:max-w-[800px] sm:max-w-[600px] mx-auto mt-6">
        {/* Search Icon */}
        <button className="bg-blue-600 text-white p-4 rounded-l-full">
          <FaSearch size={18} />
        </button>

        {/* Input Field */}
        <input
          type="text"
          placeholder="Search cases and statutes"
          className="w-full px-4 py-3 text-gray-700 border-t border-b focus:outline-none dark:text-white"
        />

        {/* Filter Icon */}
        <button className="px-4 text-purple-600 border-l border-purple-400">
          <FaSlidersH size={18} />
        </button>

        {/* Gradient Border */}
        <div
          className="absolute inset-0 rounded-full border-2 border-transparent"
          style={{
            background: "linear-gradient(to right, #4285F4, #9333EA)",
            WebkitMask:
              "linear-gradient(white, white) padding-box, linear-gradient(white, white)",
            WebkitMaskComposite: "destination-out",
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
