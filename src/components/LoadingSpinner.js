import React from "react";

function LoadingSpinner({ size = "md", text = "Loading..." }) {
  const sizes = {
    sm: "w-5 h-5 sm:w-6 sm:h-6",
    md: "w-8 h-8 sm:w-10 sm:h-10",
    lg: "w-12 h-12 sm:w-16 sm:h-16",
  };

  return (
    <div className="flex flex-col items-center justify-center py-6 sm:py-8">
      <div className={`spinner ${sizes[size]}`}></div>
      {text && (
        <p className="mt-3 sm:mt-4 text-secondary-600 animate-pulse text-sm sm:text-base">
          {text}
        </p>
      )}
    </div>
  );
}

export default LoadingSpinner;
