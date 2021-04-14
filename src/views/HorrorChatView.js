import React from "react";
import { Image } from "react-bootstrap";

import NavBar from "../components/NavBar";
import Horror from "../assets/Horror.mp4";

function HorrorChatView() {
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
            width: "100%",
            left: "50%",
            top: "70%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        >
          <source src={Horror} type="video/mp4" />
        </video>
        <h1 className="home-header">Horror Movies Chat</h1>
      </div>
    </>
  );
}

export default HorrorChatView;
