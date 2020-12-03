import React, { Component } from "react";
import DocumentTitle from "react-document-title";
import { Link } from "react-router-dom";

import NoraLogo from "../../images/noraLogo.png";
import MylapsLogo from "../../images/mylapsLogo.svg";

import MembershipForm from "../../membershipform-2021.pdf";

//import { WinterWarmups } from "./winterWarmups";
import { ChampionshipDates } from "./championshipDates";
// import { FunDays } from "./funDays";
import { GroupsAndEntryFees } from "./groupsAndEntryFees";

const year = "2021"

class RiderInformation extends Component {
  render() {
    return (
      <DocumentTitle title={`Rider Information ${year} | SWMX`}>
        <div>
          <h1 className="my-md-4">Rider Information {year}</h1>

          <h2 className="margin-top-60">Club Membership</h2>
          <p>
            <a href="//nora92.com" target="_blank">
              <img
                className="alignnone size-full"
                src={NoraLogo}
                alt=""
                width="200"
                height="56"
              />
            </a>
          </p>
          <p>
            The South West Motocross Club is part of the Nora92 and riders are
            required to hold an Nora92 racing license to attend our events
            (full/day license).
          </p>

          <p>
            To encourage riders to take out a full Nora92 license, we offer a
            discount to join our club when South West Motocross Club is named on
            the license.
          </p>

          <p>£15 – If South West Motocross Club is named on the license</p>
          <p>£30 – If licence has been taken out with any other Nora92 Club</p>

          <p>
            <Link
              className="btn btn-info"
              to="//nora92.com/product/2021-licence/"
              rel="noopener noreferrer"
              target="_blank"
            >
              View Nora92 License Options
            </Link>
          </p>
          <p>
            {/* TODO Possibly rework to use proper file download component */}
            <Link
              className="btn btn-info"
              to={MembershipForm}
              rel="noopener noreferrer"
              target="_blank"
            >
              SWMX {year} Membership Form
            </Link>
          </p>

          <h2 className="margin-top-60">Fixtures</h2>

          <h3 className="margin-top-25">Championship</h3>
          <ChampionshipDates />

          {/* <h3 className="margin-top-25">Fun Days (Mx &amp; EnduroX)</h3>
          <FunDays />  */}

          {/* <h5>Tracks and dates are subject to change</h5>
          <h5>
            Club members must compete in at least six rounds in order to qualify
            for awards.
          </h5>
          <h5>A riders worst 3 races will be dropped.</h5> */}

          <GroupsAndEntryFees />
          <div className="margin-bottom-20">
            <h2 className="margin-top-60">Race Timing</h2>
            <p>
              <Link to="//www.mylaps.com">
                <img
                  className="mylaps-logo alignnone"
                  src={MylapsLogo}
                  alt="MyLaps logo"
                  width="300"
                  height="53"
                />
              </Link>{" "}
            </p>
            <h5>MyLaps used for all of our race timings</h5>
            <h5>
              Riders without their own transponder are able to hire them from us
              on a strictly ‘first come, first served’ basis.
            </h5>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default RiderInformation;
