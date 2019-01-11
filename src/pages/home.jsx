import React, { Component } from "react";
import DocumentTitle from "react-document-title";
import Logo from "../images/swmx_logo.png";
import LatestPosters from "../images/latestPoster.png";
import Facebook from "../components/facebookPlugin";

class Home extends Component {
  render() {
    return (
      <DocumentTitle title="Home | SWMX">
        <div>
          <img
            id="logo"
            className="img-fluid"
            src={Logo}
            alt="South West Motocross Club"
          />

          <img
            id="latestPoster"
            className="img-fluid"
            src={LatestPosters}
            alt="Latest Poster"
          />

          <div id="home-body" className="container-fluid">
            <div className="row">
              <div className="button-column col-sm-6 d-flex flex-column">
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

              <div className="button-column col-sm-6 d-flex flex-column">
                <p>Please take a moment to view this year's sponsors</p>

                <p className="mt-auto">
                  <a className="btn btn-info" href="/Sponsors">
                    View Sponsors
                  </a>
                </p>
              </div>
            </div>

            <div id="latest-events" className="row">
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
