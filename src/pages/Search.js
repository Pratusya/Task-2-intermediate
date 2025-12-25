import React, { useState, useCallback } from "react";
import { useAppContext } from "../context/AppContext";
import { searchUsers } from "../services/githubApi";
import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

function Search() {
  const { state, actions } = useAppContext();
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = useCallback(
    async (query) => {
      if (!query.trim()) return;

      actions.setLoading(true);
      actions.setSearchQuery(query);
      actions.addToHistory(query);
      setPage(1);
      setHasSearched(true);

      try {
        const result = await searchUsers(query, 1);
        // Ignore cancelled requests
        if (result.cancelled) return;
        actions.setSearchResults(result.users);
        setTotalCount(result.totalCount);
      } catch (error) {
        actions.setError(error.message);
      } finally {
        actions.setLoading(false);
      }
    },
    [actions]
  );

  const loadMore = useCallback(async () => {
    if (state.loading) return;

    actions.setLoading(true);
    const nextPage = page + 1;

    try {
      const { users } = await searchUsers(state.searchQuery, nextPage);
      actions.setSearchResults([...state.searchResults, ...users]);
      setPage(nextPage);
    } catch (error) {
      actions.setError(error.message);
    } finally {
      actions.setLoading(false);
    }
  }, [state.loading, state.searchQuery, state.searchResults, page, actions]);

  const handleHistoryClick = useCallback(
    (query) => {
      handleSearch(query);
    },
    [handleSearch]
  );

  const hasMoreResults = state.searchResults.length < totalCount;

  return (
    <div className="min-h-screen py-12 animate-fade-in mesh-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl font-bold bg-gradient-to-r from-primary-700 via-accent-600 to-primary-600 bg-clip-text text-transparent mb-4">
            Search GitHub Users
          </h1>
          <p className="text-secondary-600 max-w-2xl mx-auto mb-8">
            Find developers by username. Start typing to search with debounced
            queries for optimal performance.
          </p>

          {/* Search Bar */}
          <SearchBar
            onSearch={handleSearch}
            placeholder="Search for GitHub users..."
            initialValue={state.searchQuery}
          />
        </div>

        {/* Search History */}
        {state.searchHistory.length > 0 && (
          <div className="mb-8">
            <h3 className="text-sm font-medium text-secondary-500 mb-3">
              Recent Searches:
            </h3>
            <div className="flex flex-wrap gap-2">
              {state.searchHistory.map((query) => (
                <button
                  key={query}
                  onClick={() => handleHistoryClick(query)}
                  className="px-3 py-1 bg-white/80 backdrop-blur-sm border border-primary-200 rounded-full text-sm text-secondary-600 hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 hover:border-transparent hover:text-white transition-all duration-300"
                >
                  {query}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Loading State */}
        {state.loading && state.searchResults.length === 0 && (
          <LoadingSpinner text="Searching users..." />
        )}

        {/* Error State */}
        {state.error && (
          <ErrorMessage
            message={state.error}
            onRetry={() => handleSearch(state.searchQuery)}
          />
        )}

        {/* Results */}
        {!state.loading && !state.error && state.searchResults.length > 0 && (
          <>
            <div className="flex justify-between items-center mb-6">
              <p className="text-secondary-600">
                Found{" "}
                <span className="font-semibold text-secondary-800">
                  {totalCount.toLocaleString()}
                </span>{" "}
                users
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {state.searchResults.map((user, index) => (
                <div
                  key={user.id}
                  style={{ animationDelay: `${(index % 12) * 0.05}s` }}
                >
                  <UserCard user={user} />
                </div>
              ))}
            </div>

            {/* Load More */}
            {hasMoreResults && (
              <div className="text-center mt-12">
                <button
                  onClick={loadMore}
                  disabled={state.loading}
                  className="btn-outline"
                >
                  {state.loading ? (
                    <span className="flex items-center space-x-2">
                      <div className="spinner w-5 h-5"></div>
                      <span>Loading...</span>
                    </span>
                  ) : (
                    "Load More"
                  )}
                </button>
              </div>
            )}
          </>
        )}

        {/* Empty State */}
        {!state.loading &&
          !state.error &&
          hasSearched &&
          state.searchResults.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-secondary-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-secondary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-2">
                No users found
              </h3>
              <p className="text-secondary-600">
                Try searching with different keywords
              </p>
            </div>
          )}

        {/* Initial State */}
        {!hasSearched && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center shadow-lg shadow-primary-500/20">
              <svg
                className="w-12 h-12 text-primary-500"
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
            <h3 className="text-xl font-semibold text-secondary-800 mb-2">
              Start Searching
            </h3>
            <p className="text-secondary-600">
              Enter a username to find GitHub users
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
