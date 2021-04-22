import React, { useEffect } from "react";
import { Image, Card, CardGroup } from "react-bootstrap";

import NavBar from "../components/NavBar";
import CoupleWatching from "../assets/CoupleWatching.jpg";
import useStore from "../store";
import MovieBuddies from "../components/MovieBuddies";
import MovieBuddiesFriendsList from "../components/MovieBuddiesFriendsList";

function MovieBuddiesView() {
  const fetchAllUsers = useStore((state) => state.fetchAllUsers);
  const allUsers = useStore((state) => state.allUsers);
  const fetchMovieBuddies = useStore((state) => state.fetchMovieBuddies);
  const user = useStore((state) => state.user.user);
  const movieBuddies = user.movieBuddies;

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
        <Image src={CoupleWatching} className="chat-videos" />
        <h1 className="home-header">Movie Buddies</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Card className="buddies-deck">
            <h3>All Buddies Available</h3>
            <div className="area2">
              {allUsers &&
                allUsers.map((user) => {
                  return <MovieBuddies user={user} key={user._id} />;
                })}
            </div>
          </Card>

          <Card className="friends-deck">
            <h3>My Buddies List</h3>
            <div className="area2">
              {movieBuddies &&
                movieBuddies.map((user) => {
                  return <MovieBuddiesFriendsList user={user.user} />;
                })}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default MovieBuddiesView;
