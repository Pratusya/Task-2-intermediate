import React from "react";

function LoadingSpinner({ size = "md", text = "Loading..." }) {
  const sizes = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-16 h-16",
  };

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className={`spinner ${sizes[size]}`}></div>
      {text && <p className="mt-4 text-secondary-600 animate-pulse">{text}</p>}
    </div>
  );
}

export default LoadingSpinner;
