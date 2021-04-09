import React from "react";
import { Card, CardDeck, Button } from "react-bootstrap";

import DirectorChair from "../assets/DirectorChair.mp4";
import NavBar from "../components/NavBar";
import { titleFind, movieSynopses } from "../fetchRequests";

function MovieView() {
  function testTitleFind() {
    titleFind()
      .then((data) => movieSynopses(data.results[0].id))
      .then((data) => console.log(data));
  }

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

      <h1 className="signin-header">Movie Search</h1>
      <h3 className="text">Movie Title</h3>

      <CardDeck className="card-deck">
        <Card className="login-card">
          <Card.Body>
            <Card.Title className="title">Director</Card.Title>
            <br />
            <Card.Text>Picture, Synopsis, Actors, Info</Card.Text>
          </Card.Body>
        </Card>
        <Card className="login-card">
          <Card.Body>
            <Card.Title className="title">Comments</Card.Title>
            <br />
            <Button
              type="submit"
              size="lg"
              variant="warning"
              onClick={testTitleFind}
            >
              Comment
            </Button>
            <br />
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
}
export default MovieView;
