import React from "react";
import Logo from "../swmxLogo.jpg";

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
      <a
        className="btn btn-info"
        href="http://southwestmotocrossclub.net/rider-info/"
      >
        2018 Memberships are now available
      </a>
    </p>
    <p>
      <a
        className="btn btn-info"
        href="http://southwestmotocrossclub.net/rider-info#ChampionshipDates"
      >
        View 2018 Fixtures
      </a>
    </p>
    {/* <p>
    <!--<h2 style="text-align: left;">Latest Facebook News</h2>
    [WD_FB id="1"]-->
    </p> */}
  </div>
);
