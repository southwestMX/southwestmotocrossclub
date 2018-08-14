import React from "react";
import ResponsiveTable from "../../components/responsiveTable";

const headers = ["Round", "Date", "Track", ""];
const details = [
  {
    round: "1",
    date: "14th January",
    track: "Little Silver Moto Parc",
    speedHiveLink: { eventId: 1489377 }
  }
];

export const WinterWarmups = () => (
  <div>
    <h3 className="margin-top-25">Winter Warm Ups</h3>

    <ResponsiveTable headers={headers} details={details} />
  </div>
);
