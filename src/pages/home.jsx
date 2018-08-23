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

          <div className="container-fluid margin-top-25 margin-bottom-20">
            <div className="row">
              <div className="col-sm-6 margin-top-25 d-flex flex-column">
                <p>
                  Memberships are now available! For further details about
                  membership and other club information such as fixtures and
                  results
                </p>

                <p className="mt-auto">
                  <a className="btn btn-info" href="/RiderInformation">
                    View Rider Information
                  </a>
                </p>
              </div>

              <div className="col-sm-6 margin-top-25 d-flex flex-column">
                <p>Please take a moment to view this year's sponsors</p>

                <p className="mt-auto">
                  <a className="btn btn-info" href="/Sponsors">
                    View Sponsors
                  </a>
                </p>
              </div>
            </div>
            <div className="row margin-top-60">
              <h2 className="mx-auto">Latest Event / Facebook News</h2>
              <Facebook
                tabs="events,timeline"
                title="Latest Events"
                height="750"
              />
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default Home;
