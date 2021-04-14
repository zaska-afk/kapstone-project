import React, { useState } from "react";
import useStore from "../store";

function NewMovies() {
  const newMovies = useStore((state) => state.comingSoon);
  const newMovieArray = useStore((state) => state.comingSoonArray);
  newMovies();

  return <div>hello</div>;
}

export default NewMovies;
