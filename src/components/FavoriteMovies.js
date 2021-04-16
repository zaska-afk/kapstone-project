import React, { useEffect } from "react";
import { Card, CardDeck } from "react-bootstrap";

import useStore from "../store";

function FavoriteMovies() {
  const popMovies = useStore((state) => state.popularMovies);
  const popArray = useStore((state) => state.popularArray);
  useEffect(() => {
    popMovies();
  }, [popMovies]);
  console.log(popArray);
  return (
    <>
      {popArray.results.map((movie) => {
        return (
          <CardDeck>
            <Card>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Subtitle>{movie.release_date}</Card.Subtitle>
              <Card.Body>
                <Card.Img variant="top" src={movie.poster_path} />
                <Card.Img variant="bottom" src={movie.backdrop_path} />
                {/* <Card.Text>{movie.overview}</Card.Text> */}
              </Card.Body>
            </Card>
          </CardDeck>
        );
      })}
    </>
  );
}

export default FavoriteMovies;
