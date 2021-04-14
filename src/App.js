import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import { getrequest } from "./fetchRequests";
import HomeView from "./views/HomeView";
import NotFoundView from "./views/NotFoundView";
import SignInView from "./views/SignInView";
import ProfileView from "./views/ProfileView";
import ChatRoomView from "./views/ChatRoomView";
import MovieBuddiesView from "./views/MovieBuddiesView";
import MovieView from "./views/MovieView";
import SurveyView from "./views/SurveyView";
import UpcomingMovieView from "./views/UpcomingMovieView";
import MoviePrefrencesView from "./views/MoviePrefrencesView";

function App() {
  const [todos, setTodos] = useState([]);

  function testGet() {
    getrequest().then((res) => console.log(res));
    // fetch("http://localhost:3000").then(
    //   ((res) => res.text()).then((data) => console.log(data))
    // );
  }
  function testGetComments() {
    return fetch("http://localhost:3000/comments")
      .then((res) => res.json())
      .then((arrayOfComments) => setTodos(arrayOfComments.comments));
  }
  function testPostTodos() {
    fetch("http://localhost:3000/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comments: "testing frontend post", id: 6 }),
    }).then(((res) => res.json()).then((data) => console.log(data)));
  }

  return (
    <div className="App">
      <button onClick={testGet}>test get request</button>
      <button onClick={testGetComments}>test get todos request</button>
      <button onClick={testPostTodos}>test post todos request</button>
      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <div>Title: {todo.title}</div>
            <div>Completed: {todo.completed.toString()}</div>
          </div>
        );
      })}

      <Switch>
        <Route exact path="/" component={SignInView} />
        <Route path="/home" component={HomeView} />
        <Route path="/profile/:username" component={ProfileView} />
        <Route path="/buddies" component={MovieBuddiesView} />
        <Route path="/movies" component={MovieView} />
        <Route path="/survey" component={SurveyView} />
        <Route path="/upcoming" component={UpcomingMovieView} />
        <Route path="/chatrooms" component={ChatRoomView} />
        <Route path="/prefrences" component={MoviePrefrencesView} />
        <Route component={NotFoundView} />
      </Switch>
    </div>
  );
}

export default App;
