import React from "react";
import { Image } from "react-bootstrap";

import NavBar from "../components/NavBar";
import FreeWilly from "../assets/FreeWilly.jpg";

function ComedyChatView() {
  return (
    <>
      <NavBar />
      <div>
        {/* <video
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
          <source src={LoginBG} type="video/mp4" />
        </video> */}
        <Image
          src={FreeWilly}
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
        />
        <h1 className="home-header">Comedy Movies Chat</h1>
      </div>
    </>
  );
}

export default ComedyChatView;
