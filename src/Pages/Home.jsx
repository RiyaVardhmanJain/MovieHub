import React from "react";
import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getMovies } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      const popmovies = await getMovies();
      setMovies(popmovies);
      setLoading(false);
    };
    loadMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (searchQuery.trim()) {
      const searchedResults = await searchMovies(searchQuery);
      setMovies(searchedResults);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <form onSubmit={handleSearch} className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search For Movies..."
          className="w-full max-w-md px-4 py-2 border-2 border-gray-300 rounded-l-lg focus:outline-none focus:border-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-r-lg transition-colors duration-200"
        >
          Search
        </button>
      </form>

      {loading ? (
        <div className="flex items-center justify-center h-64">
          <p className="text-xl font-semibold text-gray-300 animate-pulse">
            Loading movies...
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
