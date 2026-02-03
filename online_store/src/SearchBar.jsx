import React from "react";

function SearchBar({ setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search"
    />
  );
}

export default SearchBar;
