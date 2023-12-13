import React from "react";
import "./Search.scss";
const Search = ({ query, setQuery }) => {
  return (
    <div className="search-wrapper">
      <label htmlFor="search-form">
        <input
          type="text"
          name="search-form"
          id="search-form"
          className="search-input"
          placeholder="Search here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>
    </div>
  );
};

export default Search;
