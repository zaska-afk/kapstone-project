import React from "react";
import useStore from "../store.js";
import Spinner from "react-bootstrap/Spinner";

import NavBar from "../components/NavBar";

function MoviePrefrencesView() {
  const { useState, useEffect } = React;
  const [currentMovie, setCurrentMovie] = useState({});
  const [movies, likedMovies] = useState([]);

  const setPopularMovies = useStore((state) => state.setPopularMovies);
  const popularMovies = useStore((state) => state.popularMovies);

  //  results.title  and results.poster_path  and results.vote_average
  const [isLoading, setisLoading] = useState(true);

  const [counter, setCounter] = useState(0);

  const nextMovie = () => {
    setCounter((counter) => counter + 1);
    setisLoading(true);
    console.log(popularMovies);
    if (popularMovies.results) {
      setCurrentMovie(popularMovies.results[counter]);
      setisLoading(false);
    }
  };

  useEffect(() => {
    setPopularMovies()
      .then((data) => setCurrentMovie(data.results[counter]))
      .then(() => {
        setisLoading(false);
        setCounter((counter) => counter + 1);
      });
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", keypress);
    return () => {
      window.removeEventListener("keydown", keypress);
    };
  });

  const keypress = (e) => {
    if (e.keyCode === 39) {
      likedMovies((movies) => [...movies, currentMovie]);
      nextMovie();
    } else if (e.keyCode === 37) {
      nextMovie();
    }
  };

  return (
    <>
      <NavBar />

      <div className="movieprefrences">
        <h1>Movie Prefrences</h1>
        <h3>
          Press the arrow keys on your keyboard. Left to skip, Right to add to
          your favorite movie list.
        </h3>
        <h2>Do you like this movie?</h2>
        <div className="currentMovie">
          {isLoading == true ? (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            <>
              {currentMovie.title}

              <img
                className="currentMovie"
                src={
                  "https://image.tmdb.org/t/p/w500/" + currentMovie.poster_path
                }
              />
            </>
          )}
        </div>

        <br></br>
        <h2>Below are the movies you like!</h2>
        <div>
          {movies.map((myMovie) => {
            return (
              <img
                className="currentMovie"
                src={"https://image.tmdb.org/t/p/w500/" + myMovie.poster_path}
                key={myMovie[0]}
              />
            );
          })}
        </div>
      </div>

    </>
  );
}
export default MoviePrefrencesView;
