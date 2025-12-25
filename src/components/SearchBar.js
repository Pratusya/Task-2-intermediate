import React, { useState, useCallback } from "react";
import { useDebounce } from "../hooks/useCustomHooks";

function SearchBar({ onSearch, placeholder = "Search...", initialValue = "" }) {
  const [query, setQuery] = useState(initialValue);
  const [isFocused, setIsFocused] = useState(false);
  const debouncedQuery = useDebounce(query, 500);

  // Trigger search when debounced query changes
  React.useEffect(() => {
    if (debouncedQuery.trim()) {
      onSearch(debouncedQuery);
    }
  }, [debouncedQuery, onSearch]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (query.trim()) {
        onSearch(query);
      }
    },
    [query, onSearch]
  );

  const handleClear = useCallback(() => {
    setQuery("");
  }, []);

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div
        className={`relative flex items-center bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl transition-all duration-300 border border-white/50 ${
          isFocused
            ? "ring-2 ring-primary-400 shadow-2xl shadow-primary-500/20"
            : "shadow-lg"
        }`}
      >
        {/* Search Icon */}
        <div className="pl-4">
          <svg
            className={`w-5 h-5 transition-colors ${
              isFocused ? "text-primary-500" : "text-secondary-400"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Input */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="flex-1 px-4 py-4 bg-transparent outline-none text-secondary-800 placeholder-secondary-400"
        />

        {/* Clear Button */}
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="p-2 mr-2 text-secondary-400 hover:text-primary-500 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}

        {/* Search Button */}
        <button type="submit" className="btn-primary m-2 py-2">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
