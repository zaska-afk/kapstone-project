import React from "react";
import useStore from "../store.js";
import { Image, Spinner, Card } from "react-bootstrap";

import NavBar from "../components/NavBar";

function MoviePrefrencesView() {
  const { useState, useEffect } = React;
  const [currentMovie, setCurrentMovie] = useState({});
  const [movies, likedMovies] = useState([]);

  const setLikedMovies = useStore((state) => state.setLikedMovies);
  const setPopularMovies = useStore((state) => state.setPopularMovies);
  const popularMovies = useStore((state) => state.popularMovies);

  const user = useStore((state) => state.user.user);

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
      console.log(user);
      setLikedMovies(currentMovie, user._id);
      nextMovie();
    } else if (e.keyCode === 37) {
      nextMovie();
    }
  };

  return (
    <>
      <NavBar />

      <div>
        <h1 className="movie-header">Movie Preferences</h1>
        <h3 className="preference-text">
          Press Left Arrow to skip, Right to add to your favorite movie list.
        </h3>
        <h2 className="preferences-title">Do you like this movie?</h2>
        <div>
          {isLoading === true ? (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            <div>
              <h2 className="preference-text">{currentMovie.title}</h2>
              <br />
              <div>
                <Card className="current-movie">
                  <Card.Img
                    style={{ align: "center" }}
                    src={
                      "https://image.tmdb.org/t/p/w500/" +
                      currentMovie.backdrop_path
                    }
                    alt="backdrop"
                  />
                </Card>
              </div>
            </div>
          )}
        </div>

        <h2 className="preferences-title2">Below are the movies you like!</h2>
        <hr />
        <div className="added-movie">
          {movies.map((myMovie) => {
            return (
              <>
                <Image
                  src={"https://image.tmdb.org/t/p/w200/" + myMovie.poster_path}
                  key={myMovie[0]}
                  alt="backdrop"
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default MoviePrefrencesView;
