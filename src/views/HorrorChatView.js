import React from "react";
import { Card, CardDeck, Col } from "react-bootstrap";

import NavBar from "../components/NavBar";
import Horror from "../assets/Horror.mp4";
import CreateMessage from "../components/CreateMessage";
import Messages from "../components/Messages";

function HorrorChatView() {
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
            top: "70%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        >
          <source src={Horror} type="video/mp4" />
        </video>
        <h1 className="home-header">Horror Movies Chat</h1>
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

export default HorrorChatView;
