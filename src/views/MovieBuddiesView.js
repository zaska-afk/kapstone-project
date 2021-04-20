import React, { useEffect, useState } from "react";
import { Image, Card } from "react-bootstrap";

import NavBar from "../components/NavBar";
import CoupleWatching from "../assets/CoupleWatching.jpg";
import useStore from "../store";
import MovieBuddies from "../components/MovieBuddies";
import MovieBuddiesFriendsList from "../components/MovieBuddiesFriendsList";

function MovieBuddiesView() {
  const [allUsers, setAllUsers] = useState([]);
  const fetchAllUsers = useStore((state) => state.getAllUsers);

  useEffect(() => {
    fetchAllUsers().then((data) => {
      setAllUsers(data.users);
    });
  }, [allUsers]);

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
              return <MovieBuddies user={user} key={user.username} />;
            })}
          npme
          <Card>
            {allUsers &&
              allUsers.map((user) => {
                return (
                  <MovieBuddiesFriendsList
                    user={user}
                    key={user.movieBuddies}
                  />
                );
              })}
          </Card>
        </div>
      </div>
    </>
  );
}

export default MovieBuddiesView;
