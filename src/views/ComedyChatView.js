import React from "react";
import { Image } from "react-bootstrap";

import NavBar from "../components/NavBar";
import Comedy from "../assets/Comedy.mp4";

function ComedyChatView() {
  return (
    <>
      <NavBar />
      <div>
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            //width: "100%",
            left: "50%",
            top: "60%",
            height: "800px",
            //objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        >
          <source src={Comedy} type="video/mp4" />
        </video>

        <h1 className="home-header">Comedy Movies Chat</h1>
      </div>
    </>
  );
}

export default ComedyChatView;
