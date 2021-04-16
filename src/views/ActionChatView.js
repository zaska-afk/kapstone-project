import React from "react";
import { Image } from "react-bootstrap";

import NavBar from "../components/NavBar";

import Action from "../assets/Action.mp4";
import Messages from "../components/Messages";
import ActionMovies from "../components/ActionMovies";



function ActionChatView() {
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
          <source src={Action} type="video/mp4" />
        </video>
        <h1 className="home-header">Action Movies Chat</h1>

        {/* <Messages /> */}
        {/* <ActionMovies /> */}

      </div>
    </>
  );
}

export default ActionChatView;
