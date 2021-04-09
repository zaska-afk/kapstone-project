import React from "react";
import { Card, CardDeck, Image } from "react-bootstrap";

import NavBar from "../components/NavBar";
import PopcornContainers from "../assets/PopcornContainers.jpg";

function SurveyView() {
  return (
    <>
      <NavBar />
      <Image
        src={PopcornContainers}
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
      />
      <h1 className="home-header">Movies Survey</h1>
      <h2 className="text">To Get Started, Select Ten Movies You Enjoy</h2>
      <CardDeck>
        <Card className="home-card">
          <Card.Header bg="info" className="center">
            <h3>
              <b>Movie</b>
            </h3>
          </Card.Header>
          <Card.Body></Card.Body>
        </Card>
        <Card className="home-card">
          <Card.Header className="center">
            <h3>
              <b>Movie</b>
            </h3>
          </Card.Header>
          <Card.Body></Card.Body>
        </Card>
        <Card className="home-card">
          <Card.Header bg="info" className="center">
            <h3>
              <b>Movie</b>
            </h3>
          </Card.Header>
          <Card.Body></Card.Body>
        </Card>
      </CardDeck>
      <CardDeck>
        <Card className="home-card">
          <Card.Header bg="info" className="center">
            <h3>
              <b>Movie</b>
            </h3>
          </Card.Header>
          <Card.Body></Card.Body>
        </Card>
        <Card className="home-card">
          <Card.Header bg="info" className="center">
            <h3>
              <b>Movie</b>
            </h3>
          </Card.Header>
          <Card.Body></Card.Body>
        </Card>
        <Card className="home-card">
          <Card.Header bg="info" className="center">
            <h3>
              <b>Movie</b>
            </h3>
          </Card.Header>
          <Card.Body></Card.Body>
        </Card>
      </CardDeck>
    </>
  );
}

export default SurveyView;
