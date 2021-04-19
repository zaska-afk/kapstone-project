import React from "react";
import { Image } from "react-bootstrap";

import NavBar from "../components/NavBar";
import Safe from "../assets/Safe.jpg";
import Messages from "../components/Messages";
import CreateMessage from "../components/CreateMessage"


function ActionChatView() {
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
          src={Safe}
          style={{
            position: "absolute",
            //width: "100%",
            left: "50%",
            top: "70%",
            //height: "100%",
            //objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        />
        <h1 className="home-header">Action Movies Chat</h1>

        <Messages />
        <CreateMessage />
        
      </div>
    </>
  );
}

export default ActionChatView;
