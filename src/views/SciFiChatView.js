import React from "react";

import NavBar from "../components/NavBar";
import SciFi from "../assets/SciFi.mp4";
import MovieGenres from "../components/MovieGenres";

function SciFiChatView() {
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
          <source src={SciFi} type="video/mp4" />
        </video>

        <h1 className="home-header">SciFi Movies Chat</h1>
        {/* <MovieGenres /> */}
      </div>
    </>
  );
}

export default SciFiChatView;
