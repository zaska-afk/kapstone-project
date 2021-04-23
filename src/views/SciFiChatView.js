import React from "react";
import { Card, Row, Col } from "react-bootstrap";

import NavBar from "../components/NavBar";
import SciFi from "../assets/SciFi.mp4";
import CreateMessage from "../components/CreateMessage";
import Messages from "../components/Messages";
import SciFiMovies from "../components/SciFiMovies";

function SciFiChatView() {
  return (
    <>
      <NavBar />
      <div>
        <video autoPlay loop muted className="chat-videos">
          <source src={SciFi} type="video/mp4" />
        </video>

        <h1 className="home-header">SciFi Movies Chat</h1>
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
            <SciFiMovies />
          </Card>
        </Row>
      </div>
    </>
  );
}

export default SciFiChatView;
