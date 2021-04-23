import React, { useEffect } from "react";
import { Image, Popover, OverlayTrigger } from "react-bootstrap";

import useStore from "../store";

function NewMovies() {
  const fetchMovies = useStore((state) => state.fetchUpcomingMovies);
  const movies = useStore((state) => state.upcomingMovies);
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  if (!movies) return null;

  return (
    <>
      {movies.map((movie) => {
        const popover = (
          <Popover id="popover-basic">
            <Popover.Title as="h3">{movie.title} Synopsis</Popover.Title>
            <Popover.Content>{movie.overview}</Popover.Content>
          </Popover>
        );
        return (
          <>
            <OverlayTrigger placement="bottom" overlay={popover}>
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
export default NewMovies;
