import React from "react";

function RepoCard({ repo }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const languageColors = {
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    Python: "#3572A5",
    Java: "#b07219",
    "C++": "#f34b7d",
    C: "#555555",
    Ruby: "#701516",
    Go: "#00ADD8",
    Rust: "#dea584",
    PHP: "#4F5D95",
    Swift: "#fa7343",
    Kotlin: "#A97BFF",
    default: "#6b7280",
  };

  return (
    <div className="card animate-slide-up h-full flex flex-col p-4 sm:p-6">
      {/* Header */}
      <div className="flex items-start justify-between mb-2 sm:mb-3 gap-2">
        <div className="flex items-center space-x-2 min-w-0 flex-1">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-500 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            />
          </svg>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-sm sm:text-base text-primary-600 hover:text-primary-700 hover:underline truncate"
          >
            {repo.name}
          </a>
        </div>
        {repo.private && (
          <span className="bg-secondary-200 text-secondary-700 text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full flex-shrink-0">
            Private
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-secondary-600 text-xs sm:text-sm mb-3 sm:mb-4 flex-grow line-clamp-2">
        {repo.description || "No description available"}
      </p>

      {/* Topics */}
      {repo.topics && repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
          {repo.topics.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="bg-primary-100 text-primary-700 text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full"
            >
              {topic}
            </span>
          ))}
          {repo.topics.length > 3 && (
            <span className="text-secondary-500 text-[10px] sm:text-xs py-0.5 sm:py-1">
              +{repo.topics.length - 3} more
            </span>
          )}
        </div>
      )}

      {/* Stats */}
      <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm text-secondary-500 pt-3 sm:pt-4 border-t border-secondary-100 gap-2">
        <div className="flex items-center flex-wrap gap-2 sm:gap-4">
          {/* Language */}
          {repo.language && (
            <div className="flex items-center space-x-1">
              <span
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full"
                style={{
                  backgroundColor:
                    languageColors[repo.language] || languageColors.default,
                }}
              ></span>
              <span className="text-xs sm:text-sm">{repo.language}</span>
            </div>
          )}

          {/* Stars */}
          <div className="flex items-center space-x-1">
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>{repo.stargazers_count.toLocaleString()}</span>
          </div>

          {/* Forks */}
          <div className="flex items-center space-x-1">
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
            <span>{repo.forks_count.toLocaleString()}</span>
          </div>
        </div>

        {/* Updated Date */}
        <span className="text-[10px] sm:text-xs">
          Updated {formatDate(repo.updated_at)}
        </span>
      </div>
    </div>
  );
}

export default RepoCard;
