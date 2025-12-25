import React from "react";

function About() {
  const technologies = [
    {
      name: "React",
      description: "A JavaScript library for building user interfaces",
      icon: "⚛️",
      color: "bg-blue-100 text-blue-600",
    },
    {
      name: "React Router",
      description: "Declarative routing for React applications",
      icon: "🛣️",
      color: "bg-red-100 text-red-600",
    },
    {
      name: "TailwindCSS",
      description: "A utility-first CSS framework for rapid UI development",
      icon: "🎨",
      color: "bg-teal-100 text-teal-600",
    },
    {
      name: "Axios",
      description: "Promise based HTTP client for the browser",
      icon: "🔄",
      color: "bg-purple-100 text-purple-600",
    },
    {
      name: "GitHub API",
      description: "REST API to interact with GitHub data",
      icon: "🐙",
      color: "bg-gray-100 text-gray-600",
    },
    {
      name: "Context API",
      description: "React's built-in state management solution",
      icon: "📦",
      color: "bg-yellow-100 text-yellow-600",
    },
  ];

  const features = [
    {
      title: "Single Page Application",
      description:
        "Smooth navigation between pages without full page reloads using React Router.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: "REST API Integration",
      description:
        "Fetches real-time data from GitHub API with error handling and loading states.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Debounced Search",
      description:
        "Optimized search with debouncing to reduce unnecessary API calls.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
    },
    {
      title: "State Management",
      description:
        "Global state management using React Context API for seamless data sharing.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
          />
        </svg>
      ),
    },
    {
      title: "Responsive Design",
      description:
        "Mobile-first design that looks great on all devices and screen sizes.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Smooth Animations",
      description:
        "Beautiful transitions and animations for enhanced user experience.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 text-white py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-36 sm:w-48 md:w-72 h-36 sm:h-48 md:h-72 bg-accent-400 rounded-full mix-blend-screen filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 right-1/4 w-36 sm:w-48 md:w-72 h-36 sm:h-48 md:h-72 bg-warm-400 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2">
            About DevExplorer
          </h1>
          <p className="text-primary-100 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-2">
            A modern Single Page Application built to demonstrate the
            integration of React, REST APIs, and modern CSS frameworks. Explore
            GitHub users and repositories with ease.
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-secondary-800 mb-4 sm:mb-6">
                Project Overview
              </h2>
              <p className="text-secondary-600 mb-3 sm:mb-4 text-sm sm:text-base">
                DevExplorer is a comprehensive demonstration of modern web
                development practices. It showcases how to build a
                production-ready Single Page Application with React while
                integrating external APIs and maintaining excellent user
                experience.
              </p>
              <p className="text-secondary-600 mb-3 sm:mb-4 text-sm sm:text-base">
                The application fetches real-time data from the GitHub REST API,
                allowing users to search for developers, view their profiles,
                and explore their repositories.
              </p>
              <p className="text-secondary-600 text-sm sm:text-base">
                Key focus areas include performance optimization through
                debounced searches, graceful error handling, responsive design,
                and smooth page transitions.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
              <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                </div>
                <code className="text-xs sm:text-sm text-secondary-600 block overflow-x-auto">
                  <span className="text-purple-600">const</span> app = {"{"}
                  <br />
                  &nbsp;&nbsp;framework:{" "}
                  <span className="text-green-600">'React'</span>,
                  <br />
                  &nbsp;&nbsp;styling:{" "}
                  <span className="text-green-600">'TailwindCSS'</span>,
                  <br />
                  &nbsp;&nbsp;router:{" "}
                  <span className="text-green-600">'React Router'</span>,
                  <br />
                  &nbsp;&nbsp;api:{" "}
                  <span className="text-green-600">'GitHub REST API'</span>,
                  <br />
                  &nbsp;&nbsp;state:{" "}
                  <span className="text-green-600">'Context API'</span>
                  <br />
                  {"}"};
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-10 sm:py-12 md:py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-secondary-800 mb-2 sm:mb-4">
              Key Features
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto text-sm sm:text-base">
              This project implements all the requirements for a modern SPA with
              API integration.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="card animate-slide-up p-4 sm:p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-heading font-semibold text-base sm:text-lg text-secondary-800 mb-1 sm:mb-2">
                  {feature.title}
                </h3>
                <p className="text-secondary-600 text-xs sm:text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-secondary-800 mb-2 sm:mb-4">
              Technologies Used
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto text-sm sm:text-base">
              Built with modern tools and frameworks for optimal performance and
              developer experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl hover:bg-secondary-50 transition-colors animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center text-xl sm:text-2xl flex-shrink-0 ${tech.color}`}
                >
                  {tech.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-secondary-800 text-sm sm:text-base">
                    {tech.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-secondary-600">
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives Met */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-r from-secondary-800 to-secondary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 md:mb-12">
            Project Objectives Achieved
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-primary-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">
                SPA Requirements
              </h3>
              <ul className="text-secondary-300 text-xs sm:text-sm space-y-1">
                <li>✓ React Router Navigation</li>
                <li>✓ Multiple Pages (Home, Search, About, Contact)</li>
                <li>✓ Smooth Transitions</li>
                <li>✓ State Management</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-primary-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">
                API Integration
              </h3>
              <ul className="text-secondary-300 text-xs sm:text-sm space-y-1">
                <li>✓ GitHub REST API</li>
                <li>✓ Axios for HTTP Requests</li>
                <li>✓ Debounced Search</li>
                <li>✓ Error Handling</li>
              </ul>
            </div>

            <div className="text-center sm:col-span-2 md:col-span-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 bg-primary-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">
                CSS Framework
              </h3>
              <ul className="text-secondary-300 text-xs sm:text-sm space-y-1">
                <li>✓ TailwindCSS</li>
                <li>✓ Custom Theme</li>
                <li>✓ Responsive Design</li>
                <li>✓ Accessibility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
