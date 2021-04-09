import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import HomeView from "./views/HomeView";
import NotFoundView from "./views/NotFoundView";
import SignInView from "./views/SignInView";
import ProfileView from "./views/ProfileView";
import ChatRoomView from "./views/ChatRoomView";
import MovieBuddiesView from "./views/MovieBuddiesView";
import MovieView from "./views/MovieView";
import SurveyView from "./views/SurveyView";
import UpcomingMovieView from "./views/UpcomingMovieView";

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SignInView} />
        <Route path="/home" component={HomeView} />
        <Route path="/profile/:username" component={ProfileView} />
        <Route path="/buddies" component={MovieBuddiesView} />
        <Route path="/movies" component={MovieView} />
        <Route path="/survey" component={SurveyView} />
        <Route path="/upcoming" component={UpcomingMovieView} />
        <Route path="/chatrooms" component={ChatRoomView} />
        <Route component={NotFoundView} />
      </Switch>
    </div>
  );
}

export default App;
