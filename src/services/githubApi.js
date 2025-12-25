import axios from "axios";

const GITHUB_API_BASE = "https://api.github.com";

// Create axios instance with default config
const githubApi = axios.create({
  baseURL: GITHUB_API_BASE,
  timeout: 15000, // 15 second timeout
  headers: {
    Accept: "application/vnd.github.v3+json",
  },
});

// Retry function with exponential backoff
const retryRequest = async (requestFn, retries = 2, delay = 1000) => {
  for (let i = 0; i <= retries; i++) {
    try {
      return await requestFn();
    } catch (error) {
      const isLastAttempt = i === retries;
      const isNetworkError = !error.response && error.request;

      if (isLastAttempt || !isNetworkError) {
        throw error;
      }

      // Wait before retrying
      await new Promise((resolve) => setTimeout(resolve, delay * (i + 1)));
    }
  }
};

// Store for cancellation tokens
let searchUsersController = null;

// Search users by username
export const searchUsers = async (query, page = 1, perPage = 12) => {
  // Cancel any previous request
  if (searchUsersController) {
    searchUsersController.abort();
  }

  // Create new controller for this request
  searchUsersController = new AbortController();

  try {
    const response = await githubApi.get("/search/users", {
      params: {
        q: query,
        page,
        per_page: perPage,
      },
      signal: searchUsersController.signal,
    });
    return {
      users: response.data.items,
      totalCount: response.data.total_count,
    };
  } catch (error) {
    if (
      axios.isCancel(error) ||
      error.name === "AbortError" ||
      error.code === "ERR_CANCELED"
    ) {
      // Request was cancelled, return empty result silently
      return { users: [], totalCount: 0, cancelled: true };
    }
    throw handleApiError(error);
  }
};

// Get detailed user information
export const getUserDetails = async (username) => {
  try {
    const response = await githubApi.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

// Get user's repositories
export const getUserRepos = async (username, page = 1, perPage = 10) => {
  try {
    const response = await githubApi.get(`/users/${username}/repos`, {
      params: {
        page,
        per_page: perPage,
        sort: "updated",
        direction: "desc",
      },
    });
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

// Search repositories
export const searchRepos = async (query, page = 1, perPage = 12) => {
  try {
    const response = await githubApi.get("/search/repositories", {
      params: {
        q: query,
        page,
        per_page: perPage,
        sort: "stars",
        order: "desc",
      },
    });
    return {
      repos: response.data.items,
      totalCount: response.data.total_count,
    };
  } catch (error) {
    throw handleApiError(error);
  }
};

// Error handler
function handleApiError(error) {
  if (error.response) {
    // Server responded with error
    const status = error.response.status;
    const message = error.response.data.message || "An error occurred";

    if (status === 403) {
      return new Error("API rate limit exceeded. Please try again later.");
    } else if (status === 404) {
      return new Error("Resource not found.");
    } else if (status === 422) {
      return new Error("Invalid search query. Please try different keywords.");
    }
    return new Error(message);
  } else if (error.request) {
    // Request made but no response (timeout, network error)
    if (error.code === "ECONNABORTED" || error.message.includes("timeout")) {
      return new Error(
        "Request timed out. Please check your connection and try again."
      );
    }
    return new Error(
      "Unable to connect to GitHub. Please check your internet connection and try again."
    );
  }
  return new Error("An unexpected error occurred. Please try again.");
}

export default githubApi;
