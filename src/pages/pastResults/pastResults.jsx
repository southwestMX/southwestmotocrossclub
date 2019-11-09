import React, { Component } from "react";
import DocumentTitle from "react-document-title";
//import { Link } from "react-router-dom";

import { Results2018 } from "./results2018";
import { Results2019 } from "./results2019";


class PastResults extends Component {
  render() {
    return (
      <DocumentTitle title={`Past Results | SWMX`}>
        <div>
          <h1 className="my-md-4">Past Results</h1>

          <h3 className="margin-top-25">2018</h3>
          <Results2018 />

          <h3 className="margin-top-25">2019</h3>
          <Results2019 />

        </div>
      </DocumentTitle>
    );
  }
}

export default PastResults;
