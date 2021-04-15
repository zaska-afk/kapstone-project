import React, { useEffect } from "react";
import { Card, CardDeck } from "react-bootstrap";

import useStore from "../store";

function MovieInfo() {
  const movieInfo = useStore((state) => state.movieDetails);
  const infoArray = useStore((state) => state.detailsArray);
  useEffect(() => {
    movieInfo();
  }, [movieInfo]);
  console.log(infoArray);
  return (
    <>
      {infoArray.results.map((movie) => {
        return (
          <CardDeck>
            <Card>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Subtitle>{movie.release_date}</Card.Subtitle>
              <Card.Body>
                <Card.Img variant="top" src={movie.poster_path} />
                <Card.Text>Movie Genres: {movie.genres}</Card.Text>
                <Card.Text>Movie Budget: ${movie.budget}</Card.Text>
                <Card.Text>Movie Revenue: ${movie.revenue}</Card.Text>
                <Card.Text>Movie Vote Average: {movie.vote_average}</Card.Text>
                <Card.Text>Movie Vote Count: {movie.vote_count}</Card.Text>
                <Card.Text>Movie Synopsis: {movie.overview}</Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        );
      })}
    </>
  );
}

export default MovieInfo;
