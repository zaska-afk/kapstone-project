import React from "react";
import { Card, CardDeck, Col } from "react-bootstrap";

import NavBar from "../components/NavBar";
import Comedy from "../assets/Comedy.mp4";
import CreateMessage from "../components/CreateMessage";
import Messages from "../components/Messages";

function ComedyChatView() {
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
            left: "50%",
            top: "60%",
            height: "800px",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        >
          <source src={Comedy} type="video/mp4" />
        </video>

        <h1 className="home-header">Comedy Movies Chat</h1>
        <CardDeck>
          <Col>
            <Card className="chat-view-cards">
              <Messages />
            </Card>
            <Card className="chat-view-cards">
              <CreateMessage />
            </Card>
          </Col>
        </CardDeck>
      </div>
    </>
  );
}

export default ComedyChatView;
