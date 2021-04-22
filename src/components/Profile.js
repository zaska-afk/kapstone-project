
import React, { useEffect } from "react";
import useStore from "../store";
import { Card, Button, CardDeck } from "react-bootstrap";

function Profile(props) {
  const user = useStore((state) => state.user.user);
  const fetchMovieBuddies = useStore((state) => state.fetchMovieBuddies);
  const movieBuddies = user.movieBuddies;
  console.log(movieBuddies);

  useEffect(() => {
    fetchMovieBuddies(user._id);
  }, [fetchMovieBuddies, user._id]);

  return (
    <div>
      <div>
        <CardDeck className="card-deck">
          <Card className="profile-card">
            <Card.Body>
              <Card.Header>
                <Card.Title>
                  <h2>
                    <b>Profile Username: {user.username}</b>
                  </h2>
                </Card.Title>
                <Card.Subtitle>
                  <h4>
                    <b>Email:</b> {user.email}
                  </h4>
                </Card.Subtitle>
              </Card.Header>
              <CardDeck>
                <Card>
                  <Card.Body>
                    <p className="profile-text">
                      <b>Liked Movies:</b>
                    </p>
                    <hr />
                    <div className="area3">
                      {user.likedMovies &&
                        user.likedMovies.map((movie) => {
                          return <h6>{movie.movie.title}</h6>;
                        })}
                    </div>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <p className="profile-text">
                      <b>Buddies List:</b>
                    </p>
                    <hr />
                    <div className="area3">
                      {movieBuddies &&
                        movieBuddies.map((buddie) => {
                          return <h6>{buddie.user.username}</h6>;
                        })}
                    </div>
                  </Card.Body>
                </Card>
              </CardDeck>
              <br />
              <Button variant="warning">Edit Profile</Button>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    </div>
  );
}

export default Profile;
//             quote: {
//                 content: 'Beautiful things don\'t ask for attention',
//                 source: 'The Secret Life of Walter Mitty'
//     }
