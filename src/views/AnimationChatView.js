import React from "react";
import { Card, Col, Row } from "react-bootstrap";

import NavBar from "../components/NavBar";
import Hero from "../assets/Hero.mp4";
import CreateMessage from "../components/CreateMessage";
import Messages from "../components/Messages";
import AnimationMovies from "../components/AnimationMovies";

function AnimationChatView() {
  return (
    <>
      <NavBar />
      <div>
        <video autoPlay loop muted className="chat-videos">
          <source src={Hero} type="video/mp4" />
        </video>
        <h1 className="home-header">Animation Movies Chat</h1>
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
            <AnimationMovies />
          </Card>
        </Row>
      </div>
    </>
  );
}

export default AnimationChatView;
