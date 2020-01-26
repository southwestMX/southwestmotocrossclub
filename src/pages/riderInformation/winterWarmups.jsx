import React from "react";
import ResponsiveTable from "../../components/responsiveTable";

const headers = ["", "Date", "Track", ""];
const details = [
  {
    round: "Winter Warmup 1",
    date: "19th January",
    track: "Littlehempston",
    speedHiveLink: { eventId: 1756667 }
  },
  {
    round: "Winter Warmup 2",
    date: "2nd February",
    track: "Little Silver",
    empty: ""
    //speedHiveLink: { eventId: 1756667 }
  } 
];

export const WinterWarmups = () => (
  <div>
    <ResponsiveTable headers={headers} details={details} />
  </div>
);
