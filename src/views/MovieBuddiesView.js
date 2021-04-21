import React, { useEffect } from "react";
import { Image, Card, Button, CardDeck } from "react-bootstrap";

import NavBar from "../components/NavBar";
import CoupleWatching from "../assets/CoupleWatching.jpg";
import useStore from "../store";
import MovieBuddies from "../components/MovieBuddies";
import Minion from "../assets/Minion.jpg";
import MovieBuddiesFriendsList from "../components/MovieBuddiesFriendsList";

//import MovieBuddiesFriendsList from "../components/MovieBuddiesFriendsList";

function MovieBuddiesView() {
  const fetchAllUsers = useStore((state) => state.fetchAllUsers);
  const allUsers = useStore((state) => state.allUsers);
  const fetchMovieBuddies = useStore((state) => state.fetchMovieBuddies);
  const movieBuddies = useStore((state) => state.movieBuddies);
  const user = useStore((state) => state.user.user);

  useEffect(() => {
    fetchMovieBuddies(user._id);
  }, []);

  useEffect(() => {
    fetchAllUsers();
  }, [fetchAllUsers]);

  return (
    <>
      <NavBar />
      <div>
        <Image
          src={CoupleWatching}
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "70%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        />
        <h1 className="home-header">Movie Buddies</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {allUsers &&
            allUsers.map((user) => {
              return <MovieBuddies user={user} key={user._id} />;
            })}

          <Card>
            {movieBuddies &&
              movieBuddies.map((user) => {
                return <MovieBuddiesFriendsList user={user.user} />;
              })}
          </Card>
        </div>
      </div>
    </>
  );
}

export default MovieBuddiesView;
