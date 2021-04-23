import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./assets/index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/kapstone-project-zaska-afk">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
