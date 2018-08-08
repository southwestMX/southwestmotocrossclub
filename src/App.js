import React, { Component } from "react";
import "./App.css";

import Header from "./components/header";

import { Switch, Route } from "react-router-dom"; // import the react-router-dom components
import { Home, RiderInfo, Committee, Sponsors } from "./components/pages"; // import our pages

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/RiderInfo" component={RiderInfo} />
      <Route exact path="/Committee" component={Committee} />
      <Route exact path="/Sponsors" component={Sponsors} />
    </Switch>
  </main>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
