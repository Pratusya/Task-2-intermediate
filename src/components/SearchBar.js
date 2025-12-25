import React, { useState, useCallback, useRef } from "react";
import { useDebounce } from "../hooks/useCustomHooks";

function SearchBar({ onSearch, placeholder = "Search...", initialValue = "" }) {
  const [query, setQuery] = useState(initialValue);
  const [isFocused, setIsFocused] = useState(false);
  const debouncedQuery = useDebounce(query, 500);
  const lastSearchedQuery = useRef("");

  // Trigger search when debounced query changes
  React.useEffect(() => {
    if (debouncedQuery.trim() && debouncedQuery !== lastSearchedQuery.current) {
      lastSearchedQuery.current = debouncedQuery;
      onSearch(debouncedQuery);
    }
  }, [debouncedQuery]); // eslint-disable-line react-hooks/exhaustive-deps

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
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto px-2 sm:px-0"
    >
      <div
        className={`relative flex flex-col sm:flex-row items-stretch sm:items-center bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl transition-all duration-300 border border-white/50 ${
          isFocused
            ? "ring-2 ring-primary-400 shadow-2xl shadow-primary-500/20"
            : "shadow-lg"
        }`}
      >
        <div className="flex items-center flex-1">
          {/* Search Icon */}
          <div className="pl-3 sm:pl-4">
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
            className="flex-1 px-3 sm:px-4 py-3 sm:py-4 bg-transparent outline-none text-secondary-800 placeholder-secondary-400 text-sm sm:text-base min-w-0"
          />

          {/* Clear Button */}
          {query && (
            <button
              type="button"
              onClick={handleClear}
              className="p-2 mr-1 sm:mr-2 text-secondary-400 hover:text-primary-500 transition-colors flex-shrink-0"
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
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="btn-primary m-2 py-2 px-4 sm:px-6 text-sm sm:text-base flex-shrink-0"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
