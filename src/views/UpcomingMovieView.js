import React from "react";

import NavBar from "../components/NavBar";
import NewMovies from "../components/NewMovies";

function UpcomingMovieView() {
  return (
    <>
      <NavBar />
      <h1 className="home-header">Upcoming Movies</h1>
      <h2 className="text">To see a synopsis, hover over a movie below</h2>
      <br />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          margin: "20px",
        }}
      >
        <NewMovies />
      </div>
    </>
  );
}
export default UpcomingMovieView;
