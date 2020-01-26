import React from "react";
import ResponsiveTable from "../../components/responsiveTable";

//const headers = ["Round", "Date", "Track", ""];
const headers = ["Round", "Date", "Track"];
const details = [
  {
    round: "1",
    date: "23rd February",
    track: "Yarley Moto Parc",
    //empty: ""
    //speedHiveLinks: [{ eventId: 1639991 }]
  },
  {
    round: "2 / 3",
    date: "18th / 19th April",
    track: "Littlehempston",
    //empty: ""
    //speedHiveLink: { eventId: 1534198 }
  },
  {
    round: "4",
    date: "10th May",
    track: "Whiteway",
    //empty: ""
    // speedHiveLinks: [
    //   { eventId: 1489377}
    // ]
  },
  {
    round: "5",
    date: "7th June",
    track: "Matt Jones Memorial @ Landrake Moto Parc",
    //empty: ""
    //speedHiveLink: { eventId: 1534198 }
  },
  {
    round: "6",
    date: "12th June",
    track: "Bodmin",
    //empty: ""
    //speedHiveLink: { eventId: 1561096 }
  },
  {
    round: "7",
    date: "2nd August",
    track: "Foxhills",
    //empty: ""
    //speedHiveLink: { eventId: 1582122 }
  },
  {
    round: "8 / 9",
    date: "12th / 13th September",
    track: "Little Silver",
    //empty: ""
    // speedHiveLinks: [
    //   { eventId: 1590266 }
    // ]
  },
  {
    round: "10",
    date: "4th October",
    track: "Brookthorpe",
    //empty: ""
    //empty: "Cancelled - lack of riders"
  }
];

export const ChampionshipDates = () => (
  <div>
    <ResponsiveTable
      id={"championshipDates"}
      headers={headers}
      details={details}
    />
  </div>
);
