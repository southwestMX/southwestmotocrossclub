import React, { Component } from "react";
import "./App.css";

import Header from "./components/header";
import Footer from "./components/footer";

import { Switch, Route } from "react-router-dom"; // import the react-router-dom components
// import our pages
import { Home } from "./pages/home";
import { RiderInfo } from "./pages/riderInfo/riderInfo";
import { Committee } from "./pages/committee";
import { Sponsors } from "./pages/sponsors";

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
        <div className="container">
          <Main />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
