import React from "react";
import { Image } from "react-bootstrap";

import NavBar from "../components/NavBar";
import Moon from "../assets/Moon.mp4";

function DocumentaryChatView() {
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
            //objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        >
          <source src={Moon} type="video/mp4" />
        </video>
        <h1 className="home-header">Documentary Movies Chat</h1>
      </div>
    </>
  );
}

export default DocumentaryChatView;
