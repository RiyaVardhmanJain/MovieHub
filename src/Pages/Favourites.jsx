import React from "react";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

function Favourites() {
 const { favourites } = useMovieContext();

 if (favourites.length === 0) {
   return (
     <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
       <div className="text-center">
         <h2 className="text-3xl font-bold text-gray-800 mb-4">No favourites yet</h2>
         <p className="text-gray-600 text-lg">Start adding movies to your favourites and they will appear here</p>
       </div>
     </div>
   );
 }

 return (
   <div className="min-h-screen bg-white p-6">
     <div className="max-w-7xl mx-auto">
       <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
         My Favourite Movies ({favourites.length})
       </h1>
       
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
         {favourites.map((movie) => (
           <MovieCard movie={movie} key={movie.imdbID} />
         ))}
       </div>
     </div>
   </div>
 );
}

export default Favourites;