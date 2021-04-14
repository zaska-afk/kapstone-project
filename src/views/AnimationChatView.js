import React from "react";
import { Image } from "react-bootstrap";

import NavBar from "../components/NavBar";
import Hero from "../assets/Hero.mp4";

function AnimationChatView() {
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
          <source src={Hero} type="video/mp4" />
        </video>
        {/* <Image
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
        /> */}
        <h1 className="home-header">Animation Movies Chat</h1>
      </div>
    </>
  );
}

export default AnimationChatView;
