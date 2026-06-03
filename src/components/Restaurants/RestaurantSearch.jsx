import React from "react";

export function RestaurantSearch({ searchText, onSearchTextChange, onSearch }) {
  return (
    <div className="search-container mx-auto mb-6 max-w-3xl rounded-lg bg-pink-50 p-5 shadow-sm">
      <div className="flex flex-wrap items-center gap-3">
        <input
          type="text"
          className="search-input"
          placeholder="Search restaurants"
          value={searchText}
          onChange={(e) => onSearchTextChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch()}
        />
        <button type="button" className="search-btn" onClick={onSearch}>
          Search
        </button>
      </div>
    </div>
  );
}
