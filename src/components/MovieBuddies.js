import React from "react";
import { Card, Button } from "react-bootstrap";
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
      <Card className="buddies-card">
        <Card.Header className="buddies-header">
          <Card.Img
            style={{
              width: "30px",
              display: "inline-block",
            }}
            src={Minion}
            roundedCircle
          />
          Username: {props.user.username}
        </Card.Header>
        <Card.Body>
          <Button size="sm" onClick={addMovieBuddie} variant="warning">
            Add Buddie
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default MovieBuddies;
