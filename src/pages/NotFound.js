import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen bg-secondary-50 flex items-center justify-center px-4 animate-fade-in">
      <div className="text-center">
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-primary-600">
            404
          </h1>
        </div>
        <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-secondary-800 mb-2 sm:mb-4 px-2">
          Page Not Found
        </h2>
        <p className="text-secondary-600 max-w-md mx-auto mb-6 sm:mb-8 text-sm sm:text-base px-4">
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
          <Link to="/" className="btn-primary text-sm sm:text-base">
            Go Home
          </Link>
          <Link to="/search" className="btn-outline text-sm sm:text-base">
            Search Users
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
