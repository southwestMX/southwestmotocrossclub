import React from "react";
import ResponsiveTable from "../../components/responsiveTable";

const headers = ["Date", "Track"];
const details = [
  //{
  //  date: "Saturday 13th April",
  //  track: "CRB Raceway @ Smeatharpe"
  //},
  {
    date: "Saturday 14th September",
    track: "CRB Raceway @ Smeatharpe"
  }
];

export const FunDays = () => (
  <div>
    <ResponsiveTable headers={headers} details={details} />
  </div>
);
