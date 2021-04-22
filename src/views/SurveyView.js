import React from "react";

import NavBar from "../components/NavBar";
import FavoriteMovies from "../components/FavoriteMovies";

function SurveyView() {
  return (
    <>
      <NavBar />

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
