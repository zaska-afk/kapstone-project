import React from "react";
import { Card, CardDeck, Button } from "react-bootstrap";

//import LoginBG from "../assets/LoginBG.mp4";

function SignInView() {
  return (
    <div>
      {/* <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={LoginBG} type="video/mp4" />
      </video> */}
      <h1 className="signin-header">Movie Buddies</h1>
      <h3 className="text">
        "Friendship is about finding people who are your kind of crazy."
      </h3>

      <CardDeck className="card-deck">
        <Card className="login-card">
          <Card.Body>
            <Card.Title className="title">Login</Card.Title>
            <br />
            <Button type="submit" size="lg" variant="warning">
              Login
            </Button>
          </Card.Body>
        </Card>
        <Card className="login-card">
          <Card.Body>
            <Card.Title className="title">Sign Up</Card.Title>
            <br />
            <Button type="submit" size="lg" variant="warning">
              Sign Up
            </Button>
            <br />
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
}
export default SignInView;
