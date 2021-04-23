import React from "react";
import { Card, Row, Col } from "react-bootstrap";

import NavBar from "../components/NavBar";
import Moon from "../assets/Moon.mp4";
import CreateMessage from "../components/CreateMessage";
import Messages from "../components/Messages";
import DocumentaryMovies from "../components/DocumentaryMovies";

function DocumentaryChatView() {
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
            top: "65%",
            height: "100%",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        >
          <source src={Moon} type="video/mp4" />
        </video>
        <h1 className="home-header">Documentary Movies Chat</h1>
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
            <DocumentaryMovies />
          </Card>
        </Row>
      </div>
    </>
  );
}

export default DocumentaryChatView;
