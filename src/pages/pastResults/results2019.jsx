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
    round: "2",
    date: "31st March",
    track: "Brookthorpe",
    speedHiveLink: { eventId: 1639991 }
  },
  {
    round: "3",
    date: "14th April",
    track: "Littlehempston",
    speedHiveLink: { eventId: 1645896 }
  },
  {
    round: "1 (Rescheduled)",
    date: "Monday 6th May",
    track: "Little Silver Moto Parc",
    speedHiveLink: { eventId: 1655910 }
  },
  {
    round: "4",
    date: "19th May",
    track: "Matt Jones Memorial @ Landrake Moto Parc",
    speedHiveLink: { eventId: 1664006 }
  },
  {
    round: "5",
    date: "16th June",
    track: "Whiteway Barton",
    speedHiveLink: { eventId: 1680011 }
  },
  {
    round: "6",
    date: "23th July",
    track: "Bodmin Mx",
    speedHiveLink: { eventId: 1702243 }
  },
  {
    round: "7",
    date: "15th September",
    track: "Crediton Mx",
    speedHiveLink: { eventId: 1728777 }
  },
  {
    round: "8",
    date: "13th October",
    track: "Littlehempston",
    empty: "Cancelled"
  }
];

export const Results2019 = () => (
  <div>
    <ResponsiveTable headers={headers} details={details} />
  </div>
);
