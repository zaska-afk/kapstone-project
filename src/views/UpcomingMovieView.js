import React from "react";
import { Card, CardDeck, Button } from "react-bootstrap";

import UpcomingMovie from "../components/UpcomingMovie";
import DirectorChair from "../assets/DirectorChair.mp4";
import NavBar from "../components/NavBar";
import { titleFind, movieSynopses, comingSoon } from "../fetchRequests";

function UpcomingMovieView() {
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

      <h1 className="signin-header">Upcoming Movies</h1>
      <h3 className="text">
        movies coming soon should display here{UpcomingMovie}
      </h3>

      <CardDeck className="card-deck">
        <Card className="login-card">
          <Card.Body>
            <Card.Title className="title">Upcoming Movies</Card.Title>
            <br />
            <Card.Text>{loadComingSoon}</Card.Text>
            <UpcomingMovie />
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
}
export default UpcomingMovieView;
