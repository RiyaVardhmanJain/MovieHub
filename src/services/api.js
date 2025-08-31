// src/services/api.js

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export const getMovies = async () => {
  try {
    // Get movies from page 1
    const response1 = await fetch(
      `http://www.omdbapi.com/?s=movie&apikey=${API_KEY}&page=1`
    );
    const data1 = await response1.json();

    // Get movies from page 2
    const response2 = await fetch(
      `http://www.omdbapi.com/?s=movie&apikey=${API_KEY}&page=2`
    );
    const data2 = await response2.json();

    // Get movies from page 3
    const response3 = await fetch(
      `http://www.omdbapi.com/?s=movie&apikey=${API_KEY}&page=3`
    );
    const data3 = await response3.json();

    // Combine all movies
    let allMovies = [];

    if (data1.Search) {
      allMovies = [...allMovies, ...data1.Search];
    }
    if (data2.Search) {
      allMovies = [...allMovies, ...data2.Search];
    }
    if (data3.Search) {
      allMovies = [...allMovies, ...data3.Search];
    }

    return allMovies;
  } catch (error) {
    console.log("Error:", error);
    return [];
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
    );
    const data = await response.json();

    if (data.Search) {
      return data.Search;
    }

    return [];
  } catch (error) {
    console.log("Error:", error);
    return [];
  }
};
