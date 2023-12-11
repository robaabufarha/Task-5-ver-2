import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./search.css";

function Search({ placeholder }) {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="search-wrapper">
      <div className="search-icon">
        <FaSearch />
      </div>
      <input
        type="search"
        id="search-input"
        placeholder={placeholder}
        value={searchValue}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Search;
