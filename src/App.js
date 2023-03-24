import React, { useState, useEffect } from "react";
import "./App.css";
import { MovieDetails } from "./components/MovieDetails";
import { MovieList } from "./components/MovieList";
import { Button } from "./components/Button";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  useEffect(() => {
    async function getData() {
      const response = await fetch("/api/movies");
      const payload = await response.json();
      setMovies(payload.data);
    }
    getData();
  }, []);

  if (selectedMovie) {
    return (
      <div className="App container mx-auto px-6 py-10">
        <MovieDetails movie={selectedMovie} handleBack={() => setSelectedMovie(null)} />
      </div>
    );
  }

  return (
    <div className="App container mx-auto px-6 py-10">
      <h1 className=" marker: marker: mx-auto rounded-lg text-center  text-3xl">
        Nice Movies
      </h1>
      <p className="   mx-auto mt-4 rounded-lg text-center text-xl">
        A list of movies that are nice.
      </p>
      <MovieList
        movies={movies}
        handleSelectMovie={(movie) => {
          setSelectedMovie(movie);
        }}
      />
    </div>
  );
}

export default App;
