import React, { useEffect } from "react";
import { Card, CardDeck } from "react-bootstrap";

import useStore from "../store";

function MovieGenres() {
  const movieGenres = useStore((state) => state.movieGenres);
  const genresArray = useStore((state) => state.genresArray);
  useEffect(() => {
    movieGenres();
  }, [movieGenres]);
  console.log(movieGenres);
  return (
    <>
      {genresArray.results.map((movie) => {
        return (
          <CardDeck>
            <Card>
              <Card.Title>{movie.name}</Card.Title>
              <Card.Body>
                {/* <Card.Img variant="top" src={movie.poster_path} /> */}
                {/* <Card.Text>{movie.overview}</Card.Text> */}
              </Card.Body>
            </Card>
          </CardDeck>
        );
      })}
    </>
  );
}

export default MovieGenres;
