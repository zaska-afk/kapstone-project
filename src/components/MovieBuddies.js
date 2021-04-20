import React from "react";
import { Card, Button, CardDeck, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import Minion from "../assets/Minion.jpg";

function MovieBuddies({ user }) {
  const history = useHistory();

  return (
    <>
      <CardDeck className="card-member">
        <Card>
          <Card.Header className="buddies-header">
            <Card.Img
              style={{
                width: "60px",
                display: "inline-block",
              }}
              src={Minion}
              roundedCircle
            />
            <Card.Title className="buddies-header2">
              Username: {user.username}
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              {user.email}
              {user.likedMovies}
            </Card.Text>
            <Button
              onClick={() => history.push(`/profile/${user.username}`)}
              variant="warning"
            >
              See Buddie Profile
            </Button>
            <Button
              onClick={() => history.push(`/buddies/${user.movieBuddies}`)}
              variant="dark"
            >
              Add Buddie
            </Button>
          </Card.Body>
        </Card>
      </CardDeck>
    </>
  );
}

export default MovieBuddies;
