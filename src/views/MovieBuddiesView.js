import React from "react";
import { Image } from "react-bootstrap";

import NavBar from "../components/NavBar";
import CoupleWatching from "../assets/CoupleWatching.jpg";

function MovieBuddiesView() {
  return (
    <>
      <NavBar />
      <div>
        <Image
          src={CoupleWatching}
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
        <h1 className="home-header">Movie Buddies</h1>
      </div>
    </>
  );
}

export default MovieBuddiesView;
