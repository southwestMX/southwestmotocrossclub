import React from "react";
import ResponsiveTable from "../../components/responsiveTable";

const headers = ["Round", "Date", "Track", ""];
const details = [
  {
    round: "Winter Warmer",
    date: "14th January",
    track: "Little Silver Moto Parc",
    speedHiveLink: { eventId: 1489377 }
  },
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
    speedHiveLink: { eventId: 1576375 }
  },
  {
    round: "6",
    date: "26th August",
    track: "Whiteway Barton",
    speedHiveLink: { eventId: 1582122 }
  },
  {
    round: "7 & 8",
    date: "8th / 9th September",
    track: "Little Silver Moto Parc",
    speedHiveLinks: [
      { eventId: 1590259, displayText: "Day 1 Results" },
      { eventId: 1590266, displayText: "Day 2 Results" }
    ]
  },
  {
    round: "9",
    date: "23rd September",
    track: "Crediton",
    empty: "Cancelled - lack of riders"
  },
  {
    round: "10",
    date: "7th October",
    track: "Landrake Moto Parc",
    speedHiveLink: { eventId: 1603087 }
  }
];

export const Results2018 = () => (
  <div>
    <ResponsiveTable headers={headers} details={details} />

    <h5>Tracks and dates are subject to change</h5>
    <h5>
      Club members must compete in at least five rounds in order to qualify for
      awards.
    </h5>
    <h5>A riders worst 6 races will be dropped.</h5>
  </div>
);
