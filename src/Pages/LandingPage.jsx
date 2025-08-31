import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce"></div>
        <div className="absolute top-40 right-10 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce animation-delay-200"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce animation-delay-400"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo/Title with animation */}
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 animate-pulse">
          Movie<span className="text-purple-400">Hub</span>
        </h1>

        {/* Subtitle with slide-up animation */}
        <div className="mb-12 animate-fade-in-up">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-200 mb-6">
            Want to explore movies that match your taste?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            MovieHub has something incredible stored for you! Discover movies,
            create your personal favorites collection, and dive into the world
            of cinema like never before.
          </p>
        </div>

        {/* Features with staggered animation */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300 animate-fade-in-left">
            <div className="text-4xl mb-4">🎬</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Discover Movies
            </h3>
            <p className="text-gray-300">
              Search movies from different genres and eras
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-200">
            <div className="text-4xl mb-4">❤️</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Save Favorites
            </h3>
            <p className="text-gray-300">
              Build your personal collection of must-watch movies
            </p>
          </div>
        </div>

        {/* CTA Button with glow effect */}
        <Link
          to="/home"
          className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-700 hover:to-blue-700 transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 animate-glow"
        >
          <span>Start Exploring</span>
          <svg
            className="w-6 h-6 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-ping"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.4);
          }
          50% {
            box-shadow: 0 0 30px rgba(168, 85, 247, 0.6);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.3s both;
        }

        .animate-fade-in-left {
          animation: fade-in-left 1s ease-out 0.5s both;
        }

        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out 0.9s both;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }
      `}</style>
    </div>
  );
}

export default LandingPage;
