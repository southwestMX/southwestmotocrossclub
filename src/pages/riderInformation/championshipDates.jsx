import React from "react";
import ResponsiveTable from "../../components/responsiveTable";

//const headers = ["Round", "Date", "Track", ""];
const headers = ["Round", "Date", "Track"];
const details = [
  {
    round: "1",
    date: "3rd March",
    track: "Little Silver Moto Parc"
    // speedHiveLinks: [
    //   { eventId: 1489377}
    // ]
  },
  {
    round: "2",
    date: "31st March",
    track: "Brookthorpe"
    // speedHiveLinks: [
    //   { eventId: 1489377 },
    // ]
  },
  {
    round: "3",
    date: "14th April",
    track: "CRB Raceway @ Smeatharpe"
    //speedHiveLink: { eventId: 1534198 }
  },
  {
    round: "4",
    date: "19th May",
    track: "Matt Jones Memorial @ Landrake Moto Parc"
    //speedHiveLink: { eventId: 1534198 }
  },
  {
    round: "5",
    date: "16th June",
    track: "Whiteway Barton"
    //speedHiveLink: { eventId: 1561096 }
  },
  // {
  //   round: "MCF Team Event",
  //   date: "18th / 19th August",
  //   track: "Sherwood Park MX"
  //   //speedHiveLink: { eventId: 1576375 }
  // },
  {
    round: "6",
    date: "28th July",
    track: "Xmoor Moto Parc"
    //speedHiveLink: { eventId: 1582122 }
  },
  {
    round: "7",
    date: "15th September",
    track: "CRB Raceway @ Smeatharpe"
    // speedHiveLinks: [
    //   { eventId: 1590266 }
    // ]
  },
  {
    round: "8",
    date: "13th October",
    track: "Littlehempston"
    //empty: "Cancelled - lack of riders"
  }
];

export const ChampionshipDates = () => (
  <div>
    <ResponsiveTable headers={headers} details={details} />
  </div>
);
