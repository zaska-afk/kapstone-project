import React from "react";
import { Image } from "react-bootstrap";

import NavBar from "../components/NavBar";
import PopcornContainers from "../assets/PopcornContainers.jpg";
import FavoriteMovies from "../components/FavoriteMovies";

function SurveyView() {
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
      <h1 className="home-header">Movies Survey</h1>
      <h2 className="text">To Get Started, Select Ten Movies You Enjoy</h2>
      <br />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          margin: "20px",
        }}
      >
        <FavoriteMovies />
      </div>
    </>
  );
}

export default SurveyView;
