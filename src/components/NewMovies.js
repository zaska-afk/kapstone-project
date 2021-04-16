import React, { useEffect } from "react";
import { Card, CardDeck } from "react-bootstrap";

import useStore from "../store";

function NewMovies() {
  const newMovies = useStore((state) => state.upcomingMovies);
  const newMoviesArray = useStore((state) => state.upcomingArray);
  const movieImage = useStore((state) => state.movieImage);
  useEffect(() => {
    newMovies();
  }, [newMovies]);
  console.log(newMovies);
  return (
    <>
      {newMoviesArray.results.map((movie) => {
        return (
          <CardDeck>
            <Card>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Subtitle>{movie.release_date}</Card.Subtitle>
              <Card.Body>
                <Card.Img variant="top" src={movieImage(movie.poster_path)} />
                {/* <Card.Text>{movie.overview}</Card.Text> */}
              </Card.Body>
            </Card>
          </CardDeck>
        );
      })}
    </>
  );
}

export default NewMovies;
