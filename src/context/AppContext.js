import React, { createContext, useContext, useReducer } from "react";

// Initial state
const initialState = {
  searchQuery: "",
  searchResults: [],
  selectedUser: null,
  loading: false,
  error: null,
  searchHistory: [],
};

// Action types
const actionTypes = {
  SET_SEARCH_QUERY: "SET_SEARCH_QUERY",
  SET_SEARCH_RESULTS: "SET_SEARCH_RESULTS",
  SET_SELECTED_USER: "SET_SELECTED_USER",
  SET_LOADING: "SET_LOADING",
  SET_ERROR: "SET_ERROR",
  ADD_TO_HISTORY: "ADD_TO_HISTORY",
  CLEAR_RESULTS: "CLEAR_RESULTS",
};

// Reducer function
function appReducer(state, action) {
  switch (action.type) {
    case actionTypes.SET_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload };
    case actionTypes.SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.SET_SELECTED_USER:
      return { ...state, selectedUser: action.payload };
    case actionTypes.SET_LOADING:
      return { ...state, loading: action.payload };
    case actionTypes.SET_ERROR:
      return { ...state, error: action.payload, loading: false };
    case actionTypes.ADD_TO_HISTORY:
      const newHistory = [
        action.payload,
        ...state.searchHistory.filter((q) => q !== action.payload),
      ].slice(0, 10);
      return { ...state, searchHistory: newHistory };
    case actionTypes.CLEAR_RESULTS:
      return { ...state, searchResults: [], selectedUser: null, error: null };
    default:
      return state;
  }
}

// Create context
const AppContext = createContext();

// Provider component
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Action creators
  const actions = {
    setSearchQuery: (query) =>
      dispatch({ type: actionTypes.SET_SEARCH_QUERY, payload: query }),
    setSearchResults: (results) =>
      dispatch({ type: actionTypes.SET_SEARCH_RESULTS, payload: results }),
    setSelectedUser: (user) =>
      dispatch({ type: actionTypes.SET_SELECTED_USER, payload: user }),
    setLoading: (loading) =>
      dispatch({ type: actionTypes.SET_LOADING, payload: loading }),
    setError: (error) =>
      dispatch({ type: actionTypes.SET_ERROR, payload: error }),
    addToHistory: (query) =>
      dispatch({ type: actionTypes.ADD_TO_HISTORY, payload: query }),
    clearResults: () => dispatch({ type: actionTypes.CLEAR_RESULTS }),
  };

  return (
    <AppContext.Provider value={{ state, actions }}>
      {children}
    </AppContext.Provider>
  );
}

// Custom hook to use the context
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}

export default AppContext;
