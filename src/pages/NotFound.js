import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen bg-secondary-50 flex items-center justify-center px-4 animate-fade-in">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="font-heading text-9xl font-bold text-primary-600">
            404
          </h1>
        </div>
        <h2 className="font-heading text-3xl font-bold text-secondary-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-secondary-600 max-w-md mx-auto mb-8">
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/" className="btn-primary">
            Go Home
          </Link>
          <Link to="/search" className="btn-outline">
            Search Users
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
