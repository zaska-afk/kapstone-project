import React from "react";

import NavBar from "../components/NavBar";
import Children from "../assets/Children.mp4";

function KidsChatView() {
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
          <source src={Children} type="video/mp4" />
        </video>

        <h1 className="home-header">Kids Movies Chat</h1>
      </div>
    </>
  );
}

export default KidsChatView;
