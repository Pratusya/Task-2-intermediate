import React from "react";

function ErrorMessage({ message, onRetry }) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-xl p-4 sm:p-6 text-center animate-fade-in mx-2 sm:mx-0">
      <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-red-100 rounded-full flex items-center justify-center">
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>
      <h3 className="text-base sm:text-lg font-semibold text-red-800 mb-1.5 sm:mb-2">
        Oops! Something went wrong
      </h3>
      <p className="text-red-600 mb-3 sm:mb-4 text-sm sm:text-base">
        {message}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="btn-primary bg-red-600 hover:bg-red-700 focus:ring-red-500 text-sm sm:text-base"
        >
          Try Again
        </button>
      )}
    </div>
  );
}

export default ErrorMessage;
