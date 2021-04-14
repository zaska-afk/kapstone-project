import React from "react";

import NavBar from "../components/NavBar";
import CityScape from "../assets/CityScape.mp4";

function UpcomingChatView() {
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
          <source src={CityScape} type="video/mp4" />
        </video>
        <h1 className="home-header">Upcoming Movies Chat</h1>
      </div>
    </>
  );
}

export default UpcomingChatView;