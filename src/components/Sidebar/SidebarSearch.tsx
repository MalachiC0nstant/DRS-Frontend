import React, { useState } from "react";
import "../../css/leftSidebar/sidebarsearch.css";

const SidebarSearch: React.FC = () => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const clearSearch = () => {
    setSearchText("");
  };

  return (
    <div className="search-box">
      <input
        type="text"
        value={searchText}
        onChange={handleInputChange}
        placeholder="Search..."
        className="search-input"
      />
      {searchText && (
        <button onClick={clearSearch} className="clear-btn">
          ✕
        </button>
      )}
    </div>
  );
};

export default SidebarSearch;
