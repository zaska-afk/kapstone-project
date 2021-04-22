import React, { useEffect } from "react";
import { Image } from "react-bootstrap";

import useStore from "../store";

function ComedyMovies() {
  const fetchMovies = useStore((state) => state.fetchComedyMovies);
  const movies = useStore((state) => state.comedyMovies);
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  console.log({ movies });
  if (!movies) return null;

  return (
    <div>
      {movies.map((movie, i) => (
        <Movie key={i} movie={movie} />
      ))}
    </div>
  );
}

function Movie({ movie }) {
  if (!movie) return null;
  console.log(movie);
  return (
    <>
      <div>{movie.title}</div>
      <Image
        variant="top"
        style={{
          display: "flex",
          maxWidth: "100px",
          padding: "5px",
          marginLeft: "35px",
        }}
        src={"https://image.tmdb.org/t/p/w200/" + movie.poster_path}
      />
    </>
  );
}

export default ComedyMovies;
