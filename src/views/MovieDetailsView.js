import React, { useEffect, useState } from "react";
import useStore from "../store";
import { Card, CardDeck } from "react-bootstrap";
import WW84 from "../assets/WW84.jpg";
import { LinkContainer } from "react-router-bootstrap";
import NavBar from "../components/NavBar";

function MovieDetailsView(props) {
  const [movieDetailsInfo, setmovieDetailsInfo] = useState({});

  const movieDetails = useStore((state) => {
    return state.movieDetails;
  });
  useEffect(() => {
    movieDetails(props.match.params.movieId).then((res) =>
      setmovieDetailsInfo(res)
    );
  }, []);

  return (
    <div>
      <NavBar />

      <CardDeck className="chat-deck">
        <Card className="chat-card">
          <Card.Img
            src={
              "https://image.tmdb.org/t/p/w200/" + movieDetailsInfo.poster_path
            }
            alt="Card image"
            style={{
              width: "95%",
              height: "70%",
            }}
          />
          <Card.Header bg="info" className="center">
            {movieDetailsInfo.title}
          </Card.Header>
          <Card.Body> {movieDetailsInfo.overview}</Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
}

export default MovieDetailsView;
