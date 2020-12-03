import React from "react";
import ResponsiveTable from "../../components/responsiveTable";

//const headers = ["Round", "Date", "Track", ""];
const headers = ["Round", "Date", "Track"];
const details = [
  {
    round: "1",
    date: "18th April",
    track: "Yarley Moto Parc",
    //empty: ""
    //speedHiveLinks: [{ eventId: 1639991 }]
  },
  {
    round: "2 / 3",
    date: "15th / 16th May",
    track: "MX Memorial Weekend @ Landrake Moto Parc",
    //empty: ""
    //speedHiveLink: { eventId: 1534198 }
  },
  {
    round: "4",
    date: "27th June",
    track: "Whiteway",
    //empty: ""
    // speedHiveLinks: [
    //   { eventId: 1489377}
    // ]
  },
  {
    round: "5",
    date: "25th July",
    track: "Bodmin Raceway",
    //empty: ""
    //speedHiveLink: { eventId: 1534198 }
  },
  {
    round: "6 / 7",
    date: "21st / 22nd August",
    track: "Little Silver Moto Park",
    //empty: ""
    //speedHiveLink: { eventId: 1561096 }
  },
  {
    round: "8",
    date: "12th September",
    track: "Littlehempston",
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
