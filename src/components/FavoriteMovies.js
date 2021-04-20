import React, { useEffect, useState, useRef } from "react";
import { Image, Popover, OverlayTrigger, Button } from "react-bootstrap";

import useStore from "../store";

function FavoriteMovies() {
  const fetchPopular = useStore((state) => state.fetchPopularMovies);
  const movies = useStore((state) => state.popularMovies);
  //const [show, setShow] = useState(false);
  //const [favMovies, setFavMovies] = useState([]);
  //const [target, setTarget] = useState(null);
  //const ref = useRef(null);
  useEffect(() => {
    fetchPopular();
  }, [fetchPopular]);

  // const handleClick = (event) => {
  //   //setShow(!show);
  //   setFavMovies(event.target.favMovies);
  //   console.log(setFavMovies);
  // };

  return (
    <>
      {movies.length &&
        movies.map((movie) => {
          const popover = (
            <Popover id="popover-basic">
              <Popover.Title as="h3">{movie.title}</Popover.Title>
              <Popover.Content>
                <Button size="md" block>
                  Select
                </Button>
              </Popover.Content>
            </Popover>
          );
          return (
            <>
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={popover}
              >
                <Image
                  variant="top"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    maxWidth: "100px",
                    objectFit: "cover",
                    padding: "5px",
                  }}
                  src={"https://image.tmdb.org/t/p/w200/" + movie.poster_path}
                />
              </OverlayTrigger>
            </>
          );
        })}
    </>
  );
}

export default FavoriteMovies;
