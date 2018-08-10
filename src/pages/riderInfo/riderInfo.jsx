import React from "react";
import { Link } from "react-router-dom";
import { WinterWarmups } from "./winterWarmups";
import { ChampionshipDates } from "./championshipDates";
import { GroupsAndEntryFees } from "./groupsAndEntryFees";

import McfLogo from "../../images/mcfLogo.png";
import MylapsLogo from "../../images/mylapsLogo.svg";

import MembershipForm from "../../membershipform-2018.doc";

export const RiderInfo = () => (
  <div className="container">
    <h1>2018 Rider Info</h1>

    <h2>Club Membership</h2>

    <p>
      Riders are required to hold an MCF racing license to attend our events
      (full/day license). To encourage riders to take out a full MCF license, we
      offer a discount to join our club when South West Motocross Club is named
      on the license.
    </p>
    <p>
      The South West Motocross Club is part of the{" "}
      <a href="//www.mcfederation.com/">
        <img
          className="alignnone size-full wp-image-239"
          src={McfLogo}
          alt=""
          width="74"
          height="27"
        />
      </a>
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

    <h2 className="margin-top-60">2018 Fixtures</h2>

    <WinterWarmups />

    <ChampionshipDates />

    <GroupsAndEntryFees />

    <h3 className="margin-top-25">Race Timing</h3>
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
    <p>
      Is used for all of our race timings, riders without their own transponder
      are able to hire them from us on a strictly ‘first come, first served’
      basis.
    </p>
  </div>
);
