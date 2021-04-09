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

function App() {
  const [todos, setTodo] = useState([]);

  function testGet() {
    fetch("http://localhost:3000")
      .then((res) => res.text())
      .then((data) => console.log(data));
  }
  function testGetData() {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }

  function testPostTodos() {
    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "testing frontend post", completed: true }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

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
