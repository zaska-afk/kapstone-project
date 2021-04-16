import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Card, CardDeck, Row, Image } from "react-bootstrap";

import NavBar from "../components/NavBar";
import Popcorn from "../assets/Popcorn.mp4";
import Minion from "../assets/Minion.jpg";
import MovieReview from "../assets/MovieReview.jpg";
import AtTheMovies from "../assets/AtTheMovies.jpg";
import UpcomingMovies from "../assets/UpcomingMovies.jpg";
import FilmReel from "../assets/FilmReel.jpg";

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
          <Card className="home-card">
            <Card.Header className="center">
              <LinkContainer to="/prefrences">
                <h3>
                  <b>Movie Preferences</b>
                </h3>
              </LinkContainer>
            </Card.Header>
            <Card.Body>
              <Image
                style={{
                  height: "80px",
                  margin: "0px",
                }}
                src={AtTheMovies}
                rounded
              />
            </Card.Body>
          </Card>
          <Card className="home-card">
            <Card.Header className="center">
              <LinkContainer to="/profile">
                <h3>
                  <b>Profile Page</b>
                </h3>
              </LinkContainer>
            </Card.Header>
            <Card.Body>
              <Image
                style={{
                  width: "80px",
                }}
                src={Minion}
                roundedCircle
              />
            </Card.Body>
          </Card>
          <Card className="home-card">
            <Card.Header className="center">
              <LinkContainer to="/buddies">
                <h3>
                  <b>Movie Buddies</b>
                </h3>
              </LinkContainer>
            </Card.Header>
            <Card.Body>
              <Row>
                <Image
                  style={{
                    width: "80px",
                  }}
                  src={Minion}
                  roundedCircle
                />
                <Image
                  style={{
                    width: "80px",
                  }}
                  src={Minion}
                  roundedCircle
                />
                <Image
                  style={{
                    width: "80px",
                  }}
                  src={Minion}
                  roundedCircle
                />
              </Row>
            </Card.Body>
          </Card>
        </CardDeck>
        <CardDeck className="home-deck">
          <Card className="home-card">
            <Card.Header className="center">
              <LinkContainer to="/movies">
                <h3>
                  <b>Search Movie Info </b>
                </h3>
              </LinkContainer>
            </Card.Header>
            <Card.Body>
              <Image
                style={{
                  height: "80px",
                  margin: "0px",
                }}
                src={FilmReel}
                rounded
              />
            </Card.Body>
          </Card>
          <Card className="home-card">
            <Card.Header className="center">
              <LinkContainer to="/upcoming">
                <h3>
                  <b>Upcoming Movies</b>
                </h3>
              </LinkContainer>
            </Card.Header>
            <Card.Body>
              <Image
                style={{
                  height: "80px",
                  margin: "0px",
                }}
                src={UpcomingMovies}
                rounded
              />
            </Card.Body>
          </Card>
          <Card className="home-card">
            <Card.Header className="center">
              <LinkContainer to="/chatrooms">
                <h3>
                  <b>Genre Chat Rooms</b>
                </h3>
              </LinkContainer>
            </Card.Header>
            <Card.Body>
              <Image
                style={{
                  height: "80px",
                  margin: "0px",
                }}
                src={MovieReview}
                rounded
              />
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    </>
  );
}

export default HomeView;
