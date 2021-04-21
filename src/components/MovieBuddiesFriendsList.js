import React, { useEffect } from "react";
import { Card, Button, CardDeck } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import useStore from "../store";
import Minion from "../assets/Minion.jpg";

function MovieBuddiesFriendsList(props) {
  const history = useHistory();
  const fetchMovieBuddies = useStore((state) => state.fetchMovieBuddies);
  const movieBuddies = useStore((state) => state.movieBuddies);
  const user = useStore((state) => state.user);

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
              {props.user.email}
              {props.user.likedMovies}
            </Card.Text>
            <Button
              //onClick={() => movieBuddies.splice(`/buddies/${user.movieBuddies}`, 1)}
              variant="dark"
            >
              Delete Buddie
            </Button>
          </Card.Body>
        </Card>
      </CardDeck>
    </>
  );
}

export default MovieBuddiesFriendsList;
