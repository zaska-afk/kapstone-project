import React from "react";
import { Card, CardDeck, Image } from "react-bootstrap";

import NavBar from "../components/NavBar";
import cinema from "../assets/cinema.jpg";

function ChatRoomView() {
  return (
    <>
      <NavBar />
      <div>
        <Image
          src={cinema}
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

        <h1 className="chat-header">Chat Rooms</h1>
        <CardDeck className="chat-deck">
          <Card className="card">
            <Card.Header bg="info" className="center">
              <h3>
                <b>Sci-Fi</b>
              </h3>
            </Card.Header>
            <Card.Body></Card.Body>
          </Card>
          <Card className="card">
            <Card.Header className="center">
              <h3>
                <b>Action/Adventure</b>
              </h3>
            </Card.Header>
            <Card.Body></Card.Body>
          </Card>
          <Card className="card">
            <Card.Header bg="info" className="center">
              <h3>
                <b>Documentaries</b>
              </h3>
            </Card.Header>
            <Card.Body></Card.Body>
          </Card>
        </CardDeck>
        <CardDeck className="chat-deck">
          <Card className="card">
            <Card.Header bg="info" className="center">
              <h3>
                <b>Horror</b>
              </h3>
            </Card.Header>
            <Card.Body></Card.Body>
          </Card>
          <Card className="card">
            <Card.Header bg="info" className="center">
              <h3>
                <b>Comedy</b>
              </h3>
            </Card.Header>
            <Card.Body></Card.Body>
          </Card>
          <Card className="card">
            <Card.Header bg="info" className="center">
              <h3>
                <b>Kids</b>
              </h3>
            </Card.Header>
            <Card.Body></Card.Body>
          </Card>
        </CardDeck>
        <CardDeck className="chat-deck">
          <Card className="card">
            <Card.Header bg="info" className="center">
              <h3>
                <b>Thrillers</b>
              </h3>
            </Card.Header>
            <Card.Body></Card.Body>
          </Card>
          <Card className="card">
            <Card.Header bg="info" className="center">
              <h3>
                <b>Animation</b>
              </h3>
            </Card.Header>
            <Card.Body></Card.Body>
          </Card>
          <Card className="card">
            <Card.Header bg="info" className="center">
              <h3>
                <b>New/Upcoming</b>
              </h3>
            </Card.Header>
            <Card.Body></Card.Body>
          </Card>
        </CardDeck>
      </div>
    </>
  );
}

export default ChatRoomView;
