import React from "react";
import { Card, CardDeck, Image, Container } from "react-bootstrap";

import LoginBG from "../assets/LoginBG.mp4";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import watchAlone1 from "../assets/watchAlone1.jpg";
import watchAlone2 from "../assets/watchAlone2.jpg";
import watchAlone3 from "../assets/watchAlone3.jpg";
import watchTogether6 from "../assets/watchTogether6.jpg";
import watchTogether4 from "../assets/watchTogether4.jpg";
import watchTogether5 from "../assets/watchTogether5.jpg";

function SignInView() {
  return (
    <div>
      <video
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
      </video>
      <h1 className="signin-header">Movie Buddies</h1>
      <h3 className="text">
        "Friendship is about finding people who are your kind of crazy."
      </h3>
      <CardDeck className="card-deck">
        <Card className="login-card">
          <Card.Body>
            <SignUp />
          </Card.Body>
        </Card>
        <Card className="login-card">
          <Card.Body>
            <Login />
            <br />
          </Card.Body>
        </Card>
      </CardDeck>
      <hr />
      <h3 className="new-text">
        Why watch alone... When you can watch with friends!
      </h3>
      <Container className="container">
        <Image
          src={watchAlone1}
          className="img-thumbnail"
          alt="stock"
          style={{
            maxWidth: "250px",
            maxHeight: "200px",
          }}
        />
        <Image
          src={watchAlone2}
          className="img-thumbnail"
          alt="stock"
          style={{
            maxWidth: "250px",
            height: "200px",
          }}
        />
        <Image
          src={watchAlone3}
          className="img-thumbnail"
          alt="stock"
          style={{
            maxWidth: "250px",
            height: "200px",
            marginRight: "20px",
          }}
        />
        <Image
          src={watchTogether5}
          className="img-thumbnail"
          alt="stock"
          style={{
            maxWidth: "250px",
            maxHeight: "200px",
            justifyContent: "center",
            marginLeft: "20px",
          }}
        />
        <Image
          src={watchTogether6}
          className="img-thumbnail"
          alt="stock"
          style={{
            maxWidth: "250px",
            maxHeight: "200px",
            justifyContent: "center",
          }}
        />
        <Image
          src={watchTogether4}
          className="img-thumbnail"
          alt="stock"
          style={{
            maxWidth: "250px",
            maxHeight: "200px",
            justifyContent: "center",
          }}
        />
      </Container>
    </div>
  );
}
export default SignInView;
