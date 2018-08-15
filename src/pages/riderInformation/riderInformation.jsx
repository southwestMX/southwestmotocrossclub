import React, { Component } from "react";
import DocumentTitle from "react-document-title";
import { Link } from "react-router-dom";
import { WinterWarmups } from "./winterWarmups";
import { ChampionshipDates } from "./championshipDates";
import { GroupsAndEntryFees } from "./groupsAndEntryFees";

import McfLogo from "../../images/mcfLogo.png";
import MylapsLogo from "../../images/mylapsLogo.svg";

import MembershipForm from "../../membershipform-2018.doc";

class RiderInformation extends Component {
  render() {
    return (
      <DocumentTitle title="Rider Information 2018 | SWMX">
        <div>
          <h1 className="my-md-4">Rider Information 2018</h1>

          <h2 className="margin-top-60">Club Membership</h2>
          <p>
            <a href="//www.mcfederation.com/">
              <img
                className="alignnone size-full"
                src={McfLogo}
                alt=""
                width="120"
                height="50"
              />
            </a>
          </p>
          <p>
            The South West Motocross Club is part of the MCF and riders are
            required to hold an MCF racing license to attend our events
            (full/day license).
          </p>

          <p>
            To encourage riders to take out a full MCF license, we offer a
            discount to join our club when South West Motocross Club is named on
            the license.
          </p>

          <p>£15 – If South West Motocross Club is named on the license</p>
          <p>£25 – If licence has been taken out with any other MCF Club</p>

          <p>
            <Link
              className="btn btn-info"
              to="//www.mcfederation.com/licences"
              rel="noopener noreferrer"
              target="_blank"
            >
              View MCF license options
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
              Download SWMX 2018 Membership Form
            </Link>
          </p>

          <h2 className="margin-top-60">Fixtures 2018</h2>

          <h3 className="margin-top-25">Winter Warm Ups</h3>
          <WinterWarmups />

          <h3 className="margin-top-25">Championship Dates</h3>
          <ChampionshipDates />

          <GroupsAndEntryFees />

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
          <p />
        </div>
      </DocumentTitle>
    );
  }
}

export default RiderInformation;
