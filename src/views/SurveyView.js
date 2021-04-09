import React from "react";
import { Card, CardDeck } from "react-bootstrap";

import NavBar from "../components/NavBar";

function SurveyView() {
  return (
    <>
      <NavBar />

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
