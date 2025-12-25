import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const features = [
    {
      icon: (
        <svg
          className="w-8 h-8"
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
      title: "Search Users",
      description:
        "Find GitHub users by username with real-time search and debounced queries for optimal performance.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      title: "User Profiles",
      description:
        "View detailed user profiles including bio, location, followers, and public repositories.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
      title: "Repositories",
      description:
        "Explore user repositories with stats like stars, forks, and programming languages.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Fast & Responsive",
      description:
        "Built with React and TailwindCSS for lightning-fast performance and smooth transitions.",
    },
  ];

  const stats = [
    { label: "GitHub Users", value: "100M+" },
    { label: "Repositories", value: "420M+" },
    { label: "API Requests", value: "Real-time" },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-5"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-400 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-72 h-72 bg-warm-400 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-400 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
              Explore the World of
              <span className="block bg-gradient-to-r from-accent-300 via-warm-300 to-primary-300 bg-clip-text text-transparent">
                GitHub Developers
              </span>
            </h1>
            <p
              className="text-lg md:text-xl text-primary-100 max-w-2xl mx-auto mb-8 animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              Search and discover millions of GitHub users and their
              repositories. Built with React, TailwindCSS, and powered by the
              GitHub REST API.
            </p>
            <div
              className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Link
                to="/search"
                className="btn bg-gradient-to-r from-warm-500 to-warm-600 text-white hover:from-warm-600 hover:to-warm-700 focus:ring-warm-400 shadow-lg shadow-warm-500/30"
              >
                Start Searching
              </Link>
              <Link
                to="/about"
                className="btn border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm focus:ring-white"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-16 fill-secondary-50"
            viewBox="0 0 1440 64"
            preserveAspectRatio="none"
          >
            <path d="M0,32L60,37.3C120,43,240,53,360,53.3C480,53,600,43,720,37.3C840,32,960,32,1080,37.3C1200,43,1320,53,1380,58.7L1440,64L1440,64L1380,64C1320,64,1200,64,1080,64C960,64,840,64,720,64C600,64,480,64,360,64C240,64,120,64,60,64L0,64Z"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 mesh-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 via-accent-500 to-warm-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-secondary-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-700 via-accent-600 to-primary-600 bg-clip-text text-transparent mb-4">
              Powerful Features
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Everything you need to explore GitHub's vast ecosystem of
              developers and projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="card text-center group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-100 to-accent-100 text-primary-600 rounded-2xl flex items-center justify-center group-hover:from-primary-600 group-hover:to-accent-500 group-hover:text-white transition-all duration-300 shadow-lg shadow-primary-500/10 group-hover:shadow-primary-500/30">
                  {feature.icon}
                </div>
                <h3 className="font-heading font-semibold text-lg text-secondary-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-secondary-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-900 via-primary-900 to-secondary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ready to Explore?
          </h2>
          <p className="text-secondary-300 max-w-2xl mx-auto mb-8">
            Start searching for GitHub users and discover amazing developers and
            projects.
          </p>
          <Link
            to="/search"
            className="btn bg-gradient-to-r from-warm-500 via-primary-500 to-accent-500 text-white hover:from-warm-600 hover:via-primary-600 hover:to-accent-600 shadow-lg shadow-primary-500/30"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
