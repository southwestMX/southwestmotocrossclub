import React, { Component } from "react";
import DocumentTitle from "react-document-title";
import "./App.css";

import Header from "./components/header";
import Footer from "./components/footer";

import { Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import RiderInformation from "./pages/riderInformation/riderInformation";
import PastResults from "./pages/pastResults/pastResults";
import Committee from "./pages/committee";
import Sponsors from "./pages/sponsors/sponsors";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/RiderInformation" component={RiderInformation} />
      <Route exact path="/PastResults" component={PastResults} />
      <Route exact path="/Committee" component={Committee} />
      <Route exact path="/Sponsors" component={Sponsors} />
    </Switch>
  </main>
);

class App extends Component {
  render() {
    return (
      <DocumentTitle title="South West Motocross Club">
        <div className="App">
          <Header />
          <div className="container">
            <Main />
          </div>
          <Footer />
        </div>
      </DocumentTitle>
    );
  }
}

export default App;
