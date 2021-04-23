import React from "react";
import { Card, Row, Col } from "react-bootstrap";

import NavBar from "../components/NavBar";
import Comedy from "../assets/Comedy.mp4";
import CreateMessage from "../components/CreateMessage";
import Messages from "../components/Messages";
import ComedyMovies from "../components/ComedyMovies";

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
            <ComedyMovies />
          </Card>
        </Row>
      </div>
    </>
  );
}

export default ComedyChatView;
