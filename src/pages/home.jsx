import React from "react";
import Logo from "../images/swmxLogo.jpg";

export const Home = () => (
  <div>
    <img
      className="img-fluid"
      src={Logo}
      alt="logo"
      //   width="329"
      //   height="345"
    />

    <p>
      Memberships are now available, for details about this and other important
      information such as fixtures and results
    </p>
    <p>
      <a className="btn btn-info" href="/RiderInfo">
        View Rider Info
      </a>
    </p>

    <p>Please take a moment to view this year's sponsors</p>
    <p>
      <a className="btn btn-info" href="/Sponsors">
        View Sponsors
      </a>
    </p>

    {/* <p>
    <!--<h2 style="text-align: left;">Latest Facebook News</h2>
    [WD_FB id="1"]-->
    </p> */}
  </div>
);
