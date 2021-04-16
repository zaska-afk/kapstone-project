import React from "react";
import { Card, CardDeck, Button } from "react-bootstrap";

import DirectorChair from "../assets/DirectorChair.mp4";
import NavBar from "../components/NavBar";
import MovieInfo from "../components/MovieInfo";
import SearchBox from "../components/SearchBox"

function MovieView() {
  return (
    <div>
      <NavBar />
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={DirectorChair} type="video/mp4" />
      </video>

      <h1 className="movie-header">Movie Search</h1>
      <h3 className="text">Movie Title</h3>
      {/* <MovieInfo /> */}
      <CardDeck className="card-deck">
        <Card className="login-card">
                <SearchBox />
        </Card>
        <Card className="login-card">
          <Card.Body>
            <Card.Title className="title">Search Movie</Card.Title>
            <br />
            <Button
              type="submit"
              size="lg"
              variant="warning"
              //onClick={testTitleFind}
            >
              Search
            </Button>
            <br />
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
}
export default MovieView;
