import React from "react";
import { Card, CardDeck, Col } from "react-bootstrap";

import NavBar from "../components/NavBar";
import Action from "../assets/Action.mp4";
import Messages from "../components/Messages";
import ActionMovies from "../components/ActionMovies";
import CreateMessage from "../components/CreateMessage";

function ActionChatView() {
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
          <source src={Action} type="video/mp4" />
        </video>
        <h1 className="home-header">Action Movies Chat</h1>

        <Card className="chat-view-cards">
          <Messages />
        </Card>
        <Card className="chat-view-cards">
          <CreateMessage />
        </Card>
        <ActionMovies />
      </div>
    </>
  );
}

export default ActionChatView;
