import React, { Component } from "react";
import DocumentTitle from "react-document-title";
//import Logo from "../images/south-west-motocross-club-logo.jpg";
import Logo from "../images/swmx_logo.png";
import Facebook from "../components/facebookPlugin";

class Home extends Component {
  render() {
    return (
      <DocumentTitle title="Home | SWMX">
        <div>
          <img
            className="img-fluid margin-bottom-20"
            src={Logo}
            alt="South West Motocross Club"
          />

          <div className="container margin-bottom-20">
            <h5>
              Memberships are now available, for details about this and other
              important information such as fixtures and results
            </h5>
            <p>
              <a className="btn btn-info" href="/RiderInformation">
                View Rider Information
              </a>
            </p>
          </div>

          <div className="container margin-bottom-20">
            <h5>Please take a moment to view this year's sponsors</h5>
            <p>
              <a className="btn btn-info" href="/Sponsors">
                View Sponsors
              </a>
            </p>
          </div>

          <div className="container margin-top-25 margin-bottom-20">
            <h4>Latest Event / Facebook News</h4>
            <div className="container margin-bottom-20">
              <div className="row">
                <Facebook
                  tabs="events,timeline"
                  title="Latest Events"
                  height="750"
                />
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default Home;
