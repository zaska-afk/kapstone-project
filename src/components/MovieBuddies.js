import React, { useEffect } from "react";
import { Card, Button, CardDeck } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import Minion from "../assets/Minion.jpg";
import useStore from "../store";

function MovieBuddies(props) {
  const postMovieBuddies = useStore((state) => state.postMovieBuddies);
  const user = useStore((state) => state.user.user);
  const history = useHistory();

  function addMovieBuddie() {
    postMovieBuddies(user._id, props.user);
  }

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
              Username: {props.user.username}
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              Email: {props.user.email}
              Liked Movies: {props.user.likedMovies}
            </Card.Text>
            <Button
              onClick={() => history.push(`/profile/${props.user._id}`)}
              variant="warning"
            >
              See Buddie Profile
            </Button>
            <Button onClick={addMovieBuddie} variant="dark">
              Add Buddie
            </Button>
          </Card.Body>
        </Card>
      </CardDeck>
    </>
  );
}

export default MovieBuddies;
