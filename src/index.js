import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
//import registerServiceWorker from "./registerServiceWorker";

import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import "./index.css";

import "bootstrap/dist/js/bootstrap";

ReactDOM.render(
  //Need process.env.PUBLIC_URL to ensure correct path local vs virtual directory in GitHub
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

//registerServiceWorker();
