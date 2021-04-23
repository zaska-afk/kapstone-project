import React from "react";

import { Image } from "react-bootstrap";


import NavBar from "../components/NavBar";
import Profile from "../components/Profile";
import PopcornContainers from "../assets/PopcornContainers.jpg";

function ProfileView() {
  return (
    <>
      <NavBar />

      <Image
        src={PopcornContainers}
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      />
      <h1 className="home-header">Profile Page</h1>
      <Profile />

    </>
  );
}
export default ProfileView;
