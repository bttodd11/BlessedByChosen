import React from "react";
import ReactDOM from "react-dom";
import "./app.css";
import App from "./app";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
