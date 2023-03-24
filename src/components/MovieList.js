import React from "react";
import { MovieCard } from "./MovieCard";

export function MovieList({ movies, handleSelectMovie }) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:mt-12 xl:grid-cols-4 xl:gap-12">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          handleClick={() => handleSelectMovie(movie)}
        />
      ))}
    </div>
  );
}
