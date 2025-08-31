import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  
  useEffect(() => {
    //check if anything is there in local storage
    const storedFavs = localStorage.getItem("favourites");
    if (storedFavs) {
      //local storage can only store strings
      setFavourites(JSON.parse(storedFavs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addToFavourites = (movie) => {
    setFavourites((prev) => [...prev, movie]);
  };

  const removeFromFavourites = (movieId) => {
    setFavourites((prev) => prev.filter((movie) => movie.imdbID !== movieId)); // Fixed: imdbID
  };

  const isFavourite = (movieId) => {
    return favourites.some((movie) => movie.imdbID === movieId); // Fixed: imdbID
  };

  const value = {
    favourites,
    addToFavourites,
    removeFromFavourites,
    isFavourite,
  };

  return (  // Fixed: removed semicolon and wrapped in parentheses
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};