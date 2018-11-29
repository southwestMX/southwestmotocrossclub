import React from "react";
import ResponsiveTable from "../../components/responsiveTable";

//const headers = ["", "Date", "Track", ""];
const headers = ["", "Date", "Track"];
const details = [
  {
    round: "Race Day",
    date: "20th January",
    track: "Crediton"
    //speedHiveLink: { eventId: 1561096 }
  },
  {
    round: "Practise Day",
    date: "10th February",
    track: "CRB Raceway @ Smeatharpe"
  }
];

export const WinterWarmups = () => (
  <div>
    <ResponsiveTable headers={headers} details={details} />
  </div>
);
