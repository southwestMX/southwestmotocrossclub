import React from "react";
import ResponsiveTable from "../../components/responsiveTable";

//const headers = ["Round", "Date", "Track", ""];
const headers = ["Round", "Date", "Track"];
const details = [
  {
    round: "1",
    date: "6th June",
    track: "MX Memorial @ Bodmin Raceway",
    //empty: ""
    //speedHiveLinks: [{ eventId: 1639991 }]
  },
  {
    round: "2 / 3",
    date: "24th / 25th July",
    track: "Whiteway",
    //empty: ""
    //speedHiveLink: { eventId: 1534198 }
  },
  {
    round: "4 / 5",
    date: "21st / 22nd August",
    track: "Little Silver Moto Park",
    //empty: ""
    // speedHiveLinks: [
    //   { eventId: 1489377}
    // ]
  },
  {
    round: "6 / 7",
    date: "11th / 12th September",
    track: "Littlehempston",
    //empty: ""
    //speedHiveLink: { eventId: 1561096 }
  },
  {
    round: "8",
    date: "TBC",
    track: "TBC",
    //empty: ""
    //speedHiveLink: { eventId: 1582122 }
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
