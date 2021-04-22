import React from "react";
import { Card, Row, Col } from "react-bootstrap";

import NavBar from "../components/NavBar";
import CityScape from "../assets/CityScape.mp4";
import CreateMessage from "../components/CreateMessage";
import Messages from "../components/Messages";
import NewMoviesChat from "../components/NewMoviesChat";

function UpcomingChatView() {
  return (
    <>
      <NavBar />
      <div>
        <video autoPlay loop muted className="chat-videos">
          <source src={CityScape} type="video/mp4" />
        </video>
        <h1 className="home-header">Upcoming Movies Chat</h1>
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
            <NewMoviesChat />
          </Card>
        </Row>
      </div>
    </>
  );
}

export default UpcomingChatView;
