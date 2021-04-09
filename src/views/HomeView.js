import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Card, CardDeck } from "react-bootstrap";

import NavBar from "../components/NavBar";
import Popcorn from "../assets/Popcorn.mp4";

function HomeView() {
  return (
    <>
      <NavBar />
      <div>
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
          <source src={Popcorn} type="video/mp4" />
        </video>
        <h1 className="home-header">Movie Buddies Home</h1>
        <CardDeck className="home-deck">
          <Card className="card">
            <Card.Header className="center">
              <h3>
                <b>Movie Preferences</b>
              </h3>
            </Card.Header>
            <Card.Body></Card.Body>
          </Card>
          <Card className="card">
            <Card.Header className="center">
              <h3>
                <b>Profile</b>
              </h3>
            </Card.Header>
            <Card.Body></Card.Body>
          </Card>
          <Card className="card">
            <Card.Header className="center">
              <h3>
                <b>Movie Buddies</b>
              </h3>
            </Card.Header>
            <Card.Body></Card.Body>
          </Card>
        </CardDeck>
        <CardDeck className="home-deck">
          <Card className="card">
            <Card.Header className="center">
              <LinkContainer to="/movies">
                <h3>
                  <b>Search Movie Info/Chat </b>
                </h3>
              </LinkContainer>
            </Card.Header>
            <Card.Body></Card.Body>
          </Card>
          <Card className="card">
            <Card.Header className="center">
              <h3>
                <b>Upcoming Movies</b>
              </h3>
            </Card.Header>
            <Card.Body></Card.Body>
          </Card>
          <Card className="card">
            <Card.Header className="center">
              <LinkContainer to="/chatrooms">
                <h3>
                  <b>Movie Genre Chat Rooms</b>
                </h3>
              </LinkContainer>
            </Card.Header>
            <Card.Body></Card.Body>
          </Card>
        </CardDeck>
      </div>
    </>
  );
}

export default HomeView;
