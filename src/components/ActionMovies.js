import React, { useEffect } from "react";
import { Image, Popover, OverlayTrigger } from "react-bootstrap";

import useStore from "../store";

function ActionMovies() {
  const fetchMovies = useStore((state) => state.fetchActionMovies);
  const movies = useStore((state) => state.actionMovies);
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
          justifyContent: "center",
          maxWidth: "100px",
          //objectFit: "cover",
          padding: "5px",
        }}
        src={"https://image.tmdb.org/t/p/w200/" + movie.poster_path}
      />
    </>
  );
}

export default ActionMovies;
