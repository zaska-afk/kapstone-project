import React, { useEffect, useState } from "react";
import { Card, CardDeck, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import useStore from "../store";
import NavBar from "../components/NavBar";
import DirectorChair from "../assets/DirectorChair.mp4";

function MovieDetailsView(props) {
  const [movieDetailsInfo, setmovieDetailsInfo] = useState({});
  const movieDetails = useStore((state) => state.movieDetails);

  useEffect(() => {
    movieDetails(props.match.params.movieId).then((res) =>
      setmovieDetailsInfo(res)
    );
  }, [movieDetails, props.match.params.movieId]);

  return (
    <div>
      <NavBar />

      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={DirectorChair} type="video/mp4" />
      </video>

      <h1 className="movie-header">Movie Search</h1>
      <h3 className="search-text">Movie Details</h3>
      <CardDeck className="card-deck">
        <Card className="img-card">
          <Card.Img
            src={
              "https://image.tmdb.org/t/p/w500/" + movieDetailsInfo.poster_path
            }
            alt="Card image"
            style={{
              display: "flex",
              justifyContent: "center",
              maxWidth: "500px",
              objectFit: "cover",
              padding: "5px",
            }}
          />
          <br />
        </Card>
        <Card className="details-card">
          <Card.Header variant="secondary" className="center">
            <h2>{movieDetailsInfo.title}</h2>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <b>Synopsis:</b> {movieDetailsInfo.overview}
            </Card.Text>
            <Card.Text>
              <b>Release Date: </b>
              {movieDetailsInfo.release_date}
            </Card.Text>
            {/* <Card.Text>
              <b>Movie Genres:</b> {movieDetailsInfo.genres}
            </Card.Text> */}
            <Card.Text>
              <b>Vote Average:</b> {movieDetailsInfo.vote_average} out of 10
            </Card.Text>
            <Card.Text>
              <b>Vote Count:</b> {movieDetailsInfo.vote_count}
            </Card.Text>
            <Card.Text>
              <b>Popularity:</b> {movieDetailsInfo.popularity}
            </Card.Text>
            <Card.Text>
              <b>Budget:</b> ${movieDetailsInfo.budget}
            </Card.Text>
            <Card.Text>
              <b>Revenue:</b> ${movieDetailsInfo.revenue}
            </Card.Text>
          </Card.Body>
          <LinkContainer to="/movies">
            <Button variant="danger">Search New Movie</Button>
          </LinkContainer>
        </Card>
      </CardDeck>
    </div>
  );
}

export default MovieDetailsView;
