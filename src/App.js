import "./App.css";
import { useState } from "react";

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
      <button onClick={testGet}>Test get request</button>
      <button onClick={testGetData}>Test get todos request</button>
      <button onClick={testPostTodos}>Test get request</button>
      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <div>Title: {todo.title}</div>
            <div>Completed: {todo.completed.toString()}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
