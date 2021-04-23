import React from "react";
import { Card, CardDeck } from "react-bootstrap";

import DirectorChair from "../assets/DirectorChair.mp4";
import NavBar from "../components/NavBar";
import SearchBox from "../components/SearchBox";

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
      <h3 className="text">Movie Details</h3>
      <CardDeck className="card-deck">
        <Card className="search-card">
          <SearchBox />
        </Card>
      </CardDeck>
    </div>
  );
}
export default MovieView;
