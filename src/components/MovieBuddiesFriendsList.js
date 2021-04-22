import React from "react";
import { Card } from "react-bootstrap";

import Minion from "../assets/Minion.jpg";

function MovieBuddiesFriendsList(props) {
  return (
    <>
      <Card className="friends-list-card">
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
            {props.user.username}
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <b>Email:</b> {props.user.email} <br />
            <b>Liked Movies:</b>
            <div>
              {props.user.likedMovies.map((movie) => {
                return <div>{movie.movie.title}, </div>;
              })}
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default MovieBuddiesFriendsList;
