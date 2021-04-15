import React from "react";

import NavBar from "../components/NavBar";
import NewMovies from "../components/NewMovies";

function UpcomingMovieView() {
  return (
    <>
      <NavBar />
      <h1 className="home-header">Upcoming Movies</h1>
      <h2 className="text">To see a synopsis, select a movie below</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <NewMovies />
      </div>
    </>
  );
}
export default UpcomingMovieView;
