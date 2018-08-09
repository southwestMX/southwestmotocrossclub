import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import Header from "./components/header";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

ReactDOM.render(
  <BrowserRouter>
    {/* <App /> */}
    <Header />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
