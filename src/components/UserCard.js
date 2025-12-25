import React from "react";
import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <div className="card group animate-slide-up hover:border-primary-200/50 h-full">
      <div className="flex flex-col items-center text-center">
        {/* Avatar */}
        <div className="relative mb-3 sm:mb-4">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          <img
            src={user.avatar_url}
            alt={`${user.login}'s avatar`}
            className="relative w-16 h-16 sm:w-20 md:w-24 sm:h-20 md:h-24 rounded-full border-3 sm:border-4 border-primary-100 group-hover:border-accent-200 transition-all duration-300 group-hover:scale-105"
          />
          <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full shadow-lg">
            {user.type}
          </div>
        </div>

        {/* Username */}
        <h3 className="font-heading font-semibold text-base sm:text-lg text-secondary-800 mb-1 sm:mb-2 group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-accent-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 break-all px-1">
          {user.login}
        </h3>

        {/* Score Badge */}
        <div className="flex items-center space-x-1 text-xs sm:text-sm text-secondary-500 mb-3 sm:mb-4">
          <svg
            className="w-4 h-4 text-warm-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span>Score: {Math.round(user.score)}</span>
        </div>

        {/* Actions */}
        <div className="flex flex-col xs:flex-row gap-2 w-full sm:w-auto">
          <Link
            to={`/user/${user.login}`}
            className="btn-primary text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-4 text-center"
          >
            View Profile
          </Link>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-4 text-center"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
