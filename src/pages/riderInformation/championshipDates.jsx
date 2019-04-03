import React from "react";
import ResponsiveTable from "../../components/responsiveTable";

const headers = ["Round", "Date", "Track", ""];
//const headers = ["Round", "Date", "Track"];
const details = [
  {
    round: "2",
    date: "31st March",
    track: "Brookthorpe",
    speedHiveLinks: [{ eventId: 1639991 }]
  },
  {
    round: "3",
    date: "14th April",
    track: "Littlehempston",
    empty: ""
    //speedHiveLink: { eventId: 1534198 }
  },
  {
    round: "1 (Rescheduled)",
    date: "Monday 6th May",
    track: "Little Silver Moto Parc",
    empty: ""
    // speedHiveLinks: [
    //   { eventId: 1489377}
    // ]
  },
  {
    round: "4",
    date: "19th May",
    track: "Matt Jones Memorial @ Landrake Moto Parc",
    empty: ""
    //speedHiveLink: { eventId: 1534198 }
  },
  {
    round: "5",
    date: "16th June",
    track: "Whiteway Barton",
    empty: ""
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
    track: "Xmoor Moto Parc",
    empty: ""
    //speedHiveLink: { eventId: 1582122 }
  },
  {
    round: "7",
    date: "15th September",
    track: "CRB Raceway @ Smeatharpe",
    empty: ""
    // speedHiveLinks: [
    //   { eventId: 1590266 }
    // ]
  },
  {
    round: "8",
    date: "13th October",
    track: "Littlehempston",
    empty: ""
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
