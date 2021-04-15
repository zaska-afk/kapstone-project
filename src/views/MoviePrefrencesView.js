import React from "react";

import FavoriteMovies from "../components/FavoriteMovies";
import NavBar from "../components/NavBar";

function MoviePrefrencesView() {
  return (
    <>
      <NavBar />
      <h1 className="home-header">Choose Your Movie Prefrences</h1>
      <h2 className="text">
        To like a movie, swipe right. To dislike or skip a movie, swipe left.
      </h2>
      <div>
        <FavoriteMovies />
      </div>
    </>
  );
}
export default MoviePrefrencesView;
