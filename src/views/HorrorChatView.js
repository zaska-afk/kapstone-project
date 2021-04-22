import React from "react";
import { Card, Row, Col } from "react-bootstrap";

import NavBar from "../components/NavBar";
import Horror from "../assets/Horror.mp4";
import CreateMessage from "../components/CreateMessage";
import Messages from "../components/Messages";
import HorrorMovies from "../components/HorrorMovies";

function HorrorChatView() {
  return (
    <>
      <NavBar />
      <div>
        <video autoPlay loop muted className="chat-videos">
          <source src={Horror} type="video/mp4" />
        </video>
        <h1 className="home-header">Horror Movies Chat</h1>
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
            <HorrorMovies />
          </Card>
        </Row>
      </div>
    </>
  );
}

export default HorrorChatView;
