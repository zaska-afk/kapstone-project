import React from "react";
import { Card, Row, Col } from "react-bootstrap";

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
        <video autoPlay loop muted className="chat-videos">
          <source src={Action} type="video/mp4" />
        </video>
        <h1 className="home-header">Action Movies Chat</h1>
        <Row>
          <Col>
            <Card className="chat-view-cards">
              <div className="area">
                <Messages />
              </div>
            </Card>
            <Card className="newchat-view-cards">
              <CreateMessage />
            </Card>
          </Col>
          <Card className="movies-view-cards">
            <ActionMovies />
          </Card>
        </Row>
      </div>
    </>
  );
}

export default ActionChatView;
