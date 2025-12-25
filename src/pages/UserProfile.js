import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getUserDetails, getUserRepos } from "../services/githubApi";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import RepoCard from "../components/RepoCard";

function UserProfile() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reposLoading, setReposLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      setError(null);

      try {
        const userData = await getUserDetails(username);
        setUser(userData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchRepos = async () => {
      setReposLoading(true);

      try {
        const reposData = await getUserRepos(username, 1, 12);
        setRepos(reposData);
      } catch (err) {
        console.error("Error fetching repos:", err);
      } finally {
        setReposLoading(false);
      }
    };

    fetchUserData();
    fetchRepos();
  }, [username]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-secondary-50 py-12">
        <LoadingSpinner text="Loading user profile..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-secondary-50 py-12">
        <div className="max-w-2xl mx-auto px-4">
          <ErrorMessage message={error} />
          <div className="text-center mt-6">
            <Link to="/search" className="btn-primary">
              Back to Search
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary-50 animate-fade-in">
      {/* Profile Header */}
      <div className="bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-accent-400 rounded-full mix-blend-screen filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-warm-400 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
          <Link
            to="/search"
            className="inline-flex items-center text-primary-200 hover:text-white mb-4 sm:mb-6 transition-colors text-sm sm:text-base"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Search
          </Link>

          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 sm:space-y-6 md:space-y-0 md:space-x-8">
            {/* Avatar */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-400 to-warm-400 rounded-full blur-xl opacity-50"></div>
              <img
                src={user.avatar_url}
                alt={`${user.login}'s avatar`}
                className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-3 sm:border-4 border-white/50 shadow-2xl"
              />
            </div>

            {/* Info */}
            <div className="text-center md:text-left flex-1 px-2">
              <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
                {user.name || user.login}
              </h1>
              <p className="text-accent-200 text-base sm:text-lg mb-2 sm:mb-4">
                @{user.login}
              </p>

              {user.bio && (
                <p className="text-primary-100 max-w-2xl mb-3 sm:mb-4 text-sm sm:text-base">
                  {user.bio}
                </p>
              )}

              <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-4 text-xs sm:text-sm">
                {user.company && (
                  <div className="flex items-center space-x-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    <span>{user.company}</span>
                  </div>
                )}
                {user.location && (
                  <div className="flex items-center space-x-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>{user.location}</span>
                  </div>
                )}
                {user.blog && (
                  <a
                    href={
                      user.blog.startsWith("http")
                        ? user.blog
                        : `https://${user.blog}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>
                    <span>Website</span>
                  </a>
                )}
                <div className="flex items-center space-x-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Joined {formatDate(user.created_at)}</span>
                </div>
              </div>
            </div>

            {/* GitHub Link */}
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white text-primary-700 hover:bg-primary-50 text-sm sm:text-base mt-4 md:mt-0"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary-800">
                {user.public_repos}
              </div>
              <div className="text-secondary-500 text-xs sm:text-sm md:text-base">
                Repositories
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary-800">
                {user.followers.toLocaleString()}
              </div>
              <div className="text-secondary-500 text-xs sm:text-sm md:text-base">
                Followers
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary-800">
                {user.following.toLocaleString()}
              </div>
              <div className="text-secondary-500 text-xs sm:text-sm md:text-base">
                Following
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary-800">
                {user.public_gists}
              </div>
              <div className="text-secondary-500 text-xs sm:text-sm md:text-base">
                Gists
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        <div className="flex space-x-2 sm:space-x-4 mb-4 sm:mb-6 md:mb-8 border-b border-secondary-200 overflow-x-auto">
          <button
            onClick={() => setActiveTab("overview")}
            className={`pb-2 sm:pb-4 px-1 sm:px-2 font-medium transition-colors text-sm sm:text-base whitespace-nowrap ${
              activeTab === "overview"
                ? "text-primary-600 border-b-2 border-primary-600"
                : "text-secondary-500 hover:text-secondary-700"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("repositories")}
            className={`pb-2 sm:pb-4 px-1 sm:px-2 font-medium transition-colors text-sm sm:text-base whitespace-nowrap ${
              activeTab === "repositories"
                ? "text-primary-600 border-b-2 border-primary-600"
                : "text-secondary-500 hover:text-secondary-700"
            }`}
          >
            Repositories ({user.public_repos})
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "overview" && (
          <div className="animate-fade-in">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-secondary-800 mb-4 sm:mb-6">
              Popular Repositories
            </h2>
            {reposLoading ? (
              <LoadingSpinner text="Loading repositories..." />
            ) : repos.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {repos.slice(0, 6).map((repo) => (
                  <RepoCard key={repo.id} repo={repo} />
                ))}
              </div>
            ) : (
              <p className="text-secondary-500">No public repositories</p>
            )}
          </div>
        )}

        {activeTab === "repositories" && (
          <div className="animate-fade-in">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-secondary-800 mb-4 sm:mb-6">
              All Repositories
            </h2>
            {reposLoading ? (
              <LoadingSpinner text="Loading repositories..." />
            ) : repos.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {repos.map((repo) => (
                  <RepoCard key={repo.id} repo={repo} />
                ))}
              </div>
            ) : (
              <p className="text-secondary-500">No public repositories</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
