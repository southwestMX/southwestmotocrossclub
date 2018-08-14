import React from "react";
//import SpeedHiveLink from "../../components/speedHiveLink";
import ResponsiveTable from "../../components/responsiveTable";

const headers = ["Round", "Date", "Track", ""];
const details = [
  {
    round: "1 & 2",
    date: "28th / 29th April",
    track: "Littlehempston",
    speedHiveLinks: [
      { eventId: 1489377, displayText: "Day 1 Results" },
      { eventId: 1489377, displayText: "Day 2 Results" }
    ]
  },
  {
    round: "3",
    date: "27th May",
    track: "Matt Jones Memorial @ Landrake Moto Parc",
    speedHiveLink: { eventId: 1534198 }
  },
  {
    round: "4",
    date: "17th June",
    track: "Tincleton",
    speedHiveLink: { eventId: 1546457 }
  },
  {
    round: "5",
    date: "15th July",
    track: "Fraddon",
    speedHiveLink: { eventId: 1561096 }
  },
  {
    round: "MCF Team Event",
    date: "18th / 19th August",
    track: "Sherwood Park MX",
    empty: ""
  },
  {
    round: "6",
    date: "26th August",
    track: "Whiteway Barton",
    empty: ""
  },
  {
    round: "7 & 8",
    date: "9th / 10th September",
    track: "Little Silver Moto Parc",
    empty: ""
  },
  {
    round: "9",
    date: "23rd September",
    track: "Crediton",
    empty: ""
  },
  {
    round: "10",
    date: "7th October",
    track: "Yarley",
    empty: ""
  }
];

export const ChampionshipDates = () => (
  <div>
    <h3>Championship Dates</h3>

    <ResponsiveTable headers={headers} details={details} />

    <h5>Tracks and dates are subject to change</h5>
    <h5>
      Club members must compete in at least six rounds in order to qualify for
      awards.
    </h5>
    <h5>A riders worst 6 races will be dropped.</h5>
  </div>
);
