import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import NavBar from "../components/NavBar";
import Thriller from "../assets/Thriller.jpg";
import FreeWilly from "../assets/FreeWilly.jpg";
import WW84 from "../assets/WW84.jpg";
import Action from "../assets/Action.jpg";
import Documentary from "../assets/Documentary.jpg";
import Friends from "../assets/Friends.jpg";
import Comedy from "../assets/Comedy.jpg";
import Animation from "../assets/Animation.jpg";
import horror from "../assets/horror.jpg";

function ChatRoomView() {
  return (
    <>
      <NavBar />
      <div>
        <h1 className="chat-header">Choose Your Chat Rooms</h1>
        <CardDeck className="chat-deck">
          <Card className="chat-card">
            <Card.Img
              src={WW84}
              alt="Card image"
              style={{
                width: "95%",
                height: "70%",
              }}
            />
            <Card.Header bg="info" className="center">
              <LinkContainer to="/chatrooms/scifi">
                <h3>
                  <b>Sci-Fi</b>
                </h3>
              </LinkContainer>
            </Card.Header>
            <Card.Body></Card.Body>
          </Card>
          <Card className="chat-card">
            <Card.Img
              src={Action}
              alt="Card image"
              style={{
                width: "95%",
                height: "70%",
              }}
            />
            <Card.Header className="center">
              <LinkContainer to="/chatrooms/action">
                <h3>
                  <b>Action/Adventure</b>
                </h3>
              </LinkContainer>
            </Card.Header>
            <Card.Body></Card.Body>
          </Card>
          <Card className="chat-card">
            <Card.Img
              src={Documentary}
              alt="Card image"
              style={{
                width: "95%",
                height: "70%",
              }}
            />
            <Card.Header bg="info" className="center">
              <LinkContainer to="/chatrooms/documentaries">
                <h3>
                  <b>Documentaries</b>
                </h3>
              </LinkContainer>
            </Card.Header>
            <Card.Body></Card.Body>
          </Card>
        </CardDeck>
        <CardDeck className="chat-deck">
          <Card className="chat-card">
            <Card.Img
              src={horror}
              alt="Card image"
              style={{
                width: "95%",
                height: "70%",
              }}
            />
            <Card.Header bg="info" className="center">
              <LinkContainer to="/chatrooms/horror">
                <h3>
                  <b>Horror</b>
                </h3>
              </LinkContainer>
            </Card.Header>
            <Card.Body></Card.Body>
          </Card>
          <Card className="chat-card">
            <Card.Img
              src={Comedy}
              alt="Card image"
              style={{
                width: "95%",
                height: "70%",
              }}
            />
            <Card.Header bg="info" className="center">
              <LinkContainer to="/chatrooms/comedy">
                <h3>
                  <b>Comedy</b>
                </h3>
              </LinkContainer>
            </Card.Header>
            <Card.Body></Card.Body>
          </Card>
          <Card className="chat-card">
            <Card.Img
              src={FreeWilly}
              alt="Card image"
              style={{
                width: "95%",
                height: "70%",
              }}
            />
            <Card.Header bg="info" className="center">
              <LinkContainer to="/chatrooms/kids">
                <h3>
                  <b>Kids</b>
                </h3>
              </LinkContainer>
            </Card.Header>
            <Card.Body></Card.Body>
          </Card>
        </CardDeck>
        <CardDeck className="chat-deck">
          <Card className="chat-card">
            <Card.Img
              src={Thriller}
              alt="Card image"
              style={{
                width: "95%",
                height: "70%",
              }}
            />
            <Card.Header bg="info" className="center">
              <LinkContainer to="/chatrooms/thriller">
                <h3>
                  <b>Thriller</b>
                </h3>
              </LinkContainer>
            </Card.Header>
            <Card.Body></Card.Body>
          </Card>
          <Card className="chat-card">
            <Card.Img
              src={Animation}
              alt="Card image"
              style={{
                width: "95%",
                height: "70%",
              }}
            />
            <Card.Header bg="info" className="center">
              <LinkContainer to="/chatrooms/animation">
                <h3>
                  <b>Animation</b>
                </h3>
              </LinkContainer>
            </Card.Header>
            <Card.Body></Card.Body>
          </Card>
          <Card className="chat-card">
            <Card.Img
              src={Friends}
              alt="Card image"
              style={{
                width: "95%",
                height: "70%",
              }}
            />
            <Card.Header bg="info" className="center">
              <LinkContainer to="/chatrooms/upcoming">
                <h3>
                  <b>New/Upcoming</b>
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

export default ChatRoomView;
