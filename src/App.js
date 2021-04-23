import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import HomeView from "./views/HomeView";
import NotFoundView from "./views/NotFoundView";
import SignInView from "./views/SignInView";
import ProfileView from "./views/ProfileView";
import ChatRoomView from "./views/ChatRoomView";
import MovieBuddiesView from "./views/MovieBuddiesView";
import MovieSearchView from "./views/MovieSearchView";
import SurveyView from "./views/SurveyView";
import UpcomingMovieView from "./views/UpcomingMovieView";
import MoviePrefrencesView from "./views/MoviePrefrencesView";
import ActionChatView from "./views/ActionChatView";
import AnimationChatView from "./views/AnimationChatView";
import ComedyChatView from "./views/ComedyChatView";
import DocumentaryChatView from "./views/DocumentaryChatView";
import HorrorChatView from "./views/HorrorChatView";
import KidsChatView from "./views/KidsChatView";
import SciFiChatView from "./views/SciFiChatView";
import ThrillerChatView from "./views/ThrillerChatView";
import UpcomingChatView from "./views/UpcomingChatView";
import MovieDetailsView from "./views/MovieDetailsView";
import EditProfile from "./components/EditProfile";
import Profile from "./components/Profile";
//import useStore from "./store";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SignInView} />
        <Route path="/home" component={HomeView} />


        <Route exact path="/profile/:_id" component={ProfileView} />
        <Route path="/profile/:_id/edit" component={EditProfile} />


        <Route path="/buddies" component={MovieBuddiesView} />
        <Route exact path="/movies" component={MovieSearchView} />
        <Route path="/movies/:movieId" component={MovieDetailsView} />
        <Route path="/survey" component={SurveyView} />
        <Route path="/upcoming" component={UpcomingMovieView} />
        <Route exact path="/chatrooms" component={ChatRoomView} />
        <Route path="/prefrences" component={MoviePrefrencesView} />
        <Route path="/chatrooms/action" component={ActionChatView} />
        <Route path="/chatrooms/animation" component={AnimationChatView} />
        <Route path="/chatrooms/comedy" component={ComedyChatView} />
        <Route
          path="/chatrooms/documentaries"
          component={DocumentaryChatView}
        />
        <Route path="/chatrooms/horror" component={HorrorChatView} />
        <Route path="/chatrooms/kids" component={KidsChatView} />
        <Route path="/chatrooms/scifi" component={SciFiChatView} />
        <Route path="/chatrooms/thriller" component={ThrillerChatView} />
        <Route path="/chatrooms/upcoming" component={UpcomingChatView} />
        <Route component={NotFoundView} />
      </Switch>
    </div>
  );
}

export default App;
