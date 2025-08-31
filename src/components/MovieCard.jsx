import React from "react";
import { useMovieContext } from "../context/MovieContext";

function MovieCard({ movie }) {
  const { isFavourite, addToFavourites, removeFromFavourites } = useMovieContext();
  const favourite = isFavourite(movie.imdbID); // Fixed: use imdbID
  
  function onFavoriteClick(e) {
    e.preventDefault(); // Fixed typo
    if (favourite) removeFromFavourites(movie.imdbID); // Fixed function name & ID
    else addToFavourites(movie);
  }

  const poster =
    movie.Poster && movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/300x445?text=No+Image";

  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-48 relative">
      <img
        src={poster}
        alt={movie.Title}
        className="w-full h-64 object-cover"
      />

      {/* Favorite button with conditional styling */}
      <button
        className={`absolute top-2 right-2 rounded-full p-1 shadow-md transition-colors ${
          favourite 
            ? 'bg-red-500 bg-opacity-100' // Active state
            : 'bg-gray-600 bg-opacity-70 hover:bg-red-500' // Inactive state
        }`}
        onClick={onFavoriteClick}
      >
        <svg
          className="w-5 h-5 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </button>

      <div className="p-3">
        <h3 className="text-white font-semibold text-base mb-1 truncate">
          {movie.Title}
        </h3>
        <div className="flex justify-between items-center">
          <p className="text-gray-400 text-xs">{movie.Year}</p>
          <p className="text-gray-400 text-xs">{movie.Type}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;