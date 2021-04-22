import React from "react";
import { Card, Row, Col } from "react-bootstrap";

import NavBar from "../components/NavBar";
import Thriller from "../assets/Thriller.mp4";
import CreateMessage from "../components/CreateMessage";
import Messages from "../components/Messages";
import ThrillerMovies from "../components/ThrillerMovies";

function ThrillerView() {
  return (
    <>
      <NavBar />
      <div>
        <video autoPlay loop muted className="chat-videos">
          <source src={Thriller} type="video/mp4" />
        </video>
        <h1 className="home-header">Thriller Movies Chat</h1>
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
          {/* <Card>
            <h1>
              <b>Thriller</b>
            </h1>
          </Card> */}
          <Card className="movies-view-cards">
            <ThrillerMovies />
          </Card>
        </Row>
      </div>
    </>
  );
}

export default ThrillerView;
