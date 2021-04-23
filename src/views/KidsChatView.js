import React from "react";
import { Card, Row, Col } from "react-bootstrap";

import NavBar from "../components/NavBar";
import Children from "../assets/Children.mp4";
import CreateMessage from "../components/CreateMessage";
import Messages from "../components/Messages";
import KidsMovies from "../components/KidsMovies";

function KidsChatView() {
  return (
    <>
      <NavBar />
      <div>
        <video autoPlay loop muted className="chat-videos">
          <source src={Children} type="video/mp4" />
        </video>

        <h1 className="home-header">Kids Movies Chat</h1>
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
            <KidsMovies />
          </Card>
        </Row>
      </div>
    </>
  );
}

export default KidsChatView;
