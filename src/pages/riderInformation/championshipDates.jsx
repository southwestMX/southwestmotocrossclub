import React from "react";
import ResponsiveTable from "../../components/responsiveTable";

const headers = ["Round", "Date", "Track", ""];
//const headers = ["Round", "Date", "Track"];
const details = [
  {
    round: "1",
    date: "6th June",
    track: "MX Memorial @ Bodmin Raceway",
    speedHiveLinks: [{ eventId: 1867771 }]
  },
  {
    round: "2",
    date: "25th July",
    track: "Whiteway Barton",
    empty: ""
    //speedHiveLink: { eventId: 1534198 }
  },
  {
    round: "3 / 4",
    date: "31st July / 1st August",
    track: "Landrake",
    empty: ""
    // speedHiveLinks: [
    //   { eventId: 1489377}
    // ]
  },
  {
    round: "5 / 6",
    date: "21st / 22nd August",
    track: "Little Silver Moto Park",
    empty: ""
    // speedHiveLinks: [
    //   { eventId: 1489377}
    // ]
  },
  {
    round: "7 / 8",
    date: "11th / 12th September",
    track: "Littlehempston",
    empty: ""
    //speedHiveLink: { eventId: 1561096 }
  }
  // {
  //   round: "10",
  //   date: "4th October",
  //   track: "Brookthorpe",
  //   //empty: ""
  //   //empty: "Cancelled - lack of riders"
  // }
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
