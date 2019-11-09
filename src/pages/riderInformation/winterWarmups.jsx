import React from "react";
import ResponsiveTable from "../../components/responsiveTable";

const headers = ["", "Date", "Track", ""];
const details = [
  {
    round: "Winter Warmup",
    date: "20th January",
    track: "Crediton",
    speedHiveLink: { eventId: 1624823 }
  } 
];

export const WinterWarmups = () => (
  <div>
    <ResponsiveTable headers={headers} details={details} />
  </div>
);
